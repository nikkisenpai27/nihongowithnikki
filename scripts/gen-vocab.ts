import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const VOCAB_DIR = path.join(process.cwd(), 'src/lib/data');

interface VocabEntry {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: string;
  theme: string;
  partOfSpeech: string;
  example: { jp: string; en: string };
}

const THEMES: Record<string, string[]> = {
  N3: ['Nouns', 'Verbs', 'I-Adjectives', 'Na-Adjectives', 'Adverbs', 'Conjunctions', 'Expressions', 'Idioms'],
  N2: ['Nouns', 'Verbs', 'I-Adjectives', 'Na-Adjectives', 'Adverbs', 'Conjunctions', 'Expressions', 'Idioms', 'Formal Language', 'Business'],
  N1: ['Nouns', 'Verbs', 'I-Adjectives', 'Na-Adjectives', 'Adverbs', 'Conjunctions', 'Expressions', 'Idioms', 'Yojijukugo', 'Formal Language', 'Academic', 'Literary'],
};

function buildPrompt(level: string, startId: number, count: number): string {
  const themes = THEMES[level];
  const idPrefix = `v${level.toLowerCase()}`;
  const endId = startId + count - 1;

  return `Generate exactly ${count} real JLPT ${level} Japanese vocabulary entries as a JSON array.

Each entry:
{"word":"kanji form","reading":"hiragana","romaji":"lowercase","meaning":"English","theme":"one of: ${themes.join(', ')}","partOfSpeech":"noun/verb/i-adjective/na-adjective/adverb/conjunction/expression","exampleJp":"sentence with furigana as kanji[reading]","exampleEn":"English translation"}

Rules:
- IDs: ${idPrefix}-${startId} to ${idPrefix}-${endId}
- REAL ${level} vocabulary only, unique words
- Furigana format: kanji[reading] in example sentences
- Output ONLY the JSON array, no other text.`;
}

function writeVocabFile(filename: string, exportName: string, entries: VocabEntry[]): void {
  const filepath = path.join(VOCAB_DIR, filename);
  let content = `import type { VocabData } from "@/lib/types";\n\n`;
  content += `export const ${exportName}: VocabData[] = [\n`;
  for (const e of entries) {
    // Escape quotes in strings
    const esc = (s: string) => s.replace(/"/g, '\\"').replace(/\n/g, ' ');
    content += `  {\n`;
    content += `    id: "${e.id}",\n`;
    content += `    word: "${esc(e.word)}",\n`;
    content += `    reading: "${esc(e.reading)}",\n`;
    content += `    romaji: "${esc(e.romaji)}",\n`;
    content += `    meaning: "${esc(e.meaning)}",\n`;
    content += `    level: "${e.level}",\n`;
    content += `    theme: "${esc(e.theme)}",\n`;
    content += `    partOfSpeech: "${esc(e.partOfSpeech)}",\n`;
    content += `    example: { jp: "${esc(e.example.jp)}", en: "${esc(e.example.en)}" },\n`;
    content += `  },\n`;
  }
  content += `];\n`;
  fs.writeFileSync(filepath, content);
  console.log(`  WROTE ${filename} (${entries.length} entries)`);
  console.log(`  PROGRESS: ${JSON.stringify({ file: filename, count: entries.length })}`);
}

async function generateBatch(zai: any, level: string, startId: number, count: number): Promise<VocabEntry[]> {
  const idPrefix = `v${level.toLowerCase()}`;
  const prompt = buildPrompt(level, startId, count);
  console.log(`  BATCH ${level} IDs ${idPrefix}-${startId}..${startId + count - 1}`);

  const response = await zai.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  const content = response.choices[0]?.message?.content || '';
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) { console.error(`  ERR no JSON`); return []; }

  let entries: any[];
  try { entries = JSON.parse(jsonMatch[0]); }
  catch (e) { console.error(`  ERR parse: ${e}`); return []; }

  return entries.map((e: any, i: number) => ({
    id: `${idPrefix}-${startId + i}`,
    word: e.word || '', reading: e.reading || '', romaji: e.romaji || '',
    meaning: e.meaning || '', level, theme: e.theme || 'Nouns',
    partOfSpeech: e.partOfSpeech || 'noun',
    example: { jp: e.exampleJp || '', en: e.exampleEn || '' },
  }));
}

async function generateLevel(zai: any, level: string, startId: number, endId: number, filePrefix: string) {
  const totalNeeded = endId - startId + 1;
  const BATCH_SIZE = 40;
  const ENTRIES_PER_FILE = 150;
  const numBatches = Math.ceil(totalNeeded / BATCH_SIZE);
  const letters = 'ghijklmnopqrstuvwxyz'.split('');
  let fileIdx = 0;
  let currentFileEntries: VocabEntry[] = [];

  console.log(`\n=== ${level}: ${totalNeeded} entries, ${numBatches} batches ===`);

  for (let batch = 0; batch < numBatches; batch++) {
    const remaining = totalNeeded - batch * BATCH_SIZE;
    const count = Math.min(BATCH_SIZE, remaining);
    const batchStartId = startId + batch * BATCH_SIZE;
    const entries = await generateBatch(zai, level, batchStartId, count);
    currentFileEntries.push(...entries);

    // Write file when we have enough entries
    while (currentFileEntries.length >= ENTRIES_PER_FILE || (batch === numBatches - 1 && currentFileEntries.length > 0)) {
      const fileEntries = currentFileEntries.splice(0, ENTRIES_PER_FILE);
      if (fileEntries.length === 0) break;
      const letter = letters[fileIdx];
      const filename = `${filePrefix}-${letter}.ts`;
      const exportName = `${filePrefix.replace(/-/g, '')}${letter.toUpperCase()}`;
      writeVocabFile(filename, exportName, fileEntries);
      fileIdx++;
    }
  }

  // Write any remaining entries
  if (currentFileEntries.length > 0) {
    const letter = letters[fileIdx];
    const filename = `${filePrefix}-${letter}.ts`;
    const exportName = `${filePrefix.replace(/-/g, '')}${letter.toUpperCase()}`;
    writeVocabFile(filename, exportName, currentFileEntries);
  }

  console.log(`✓ ${level} done: ${fileIdx} files written`);
}

async function main() {
  console.log('INIT ZAI');
  const zai = await ZAI.create();

  await generateLevel(zai, 'N3', 1373, 2250, 'vocab-n3');
  await generateLevel(zai, 'N2', 1081, 2250, 'vocab-n2');
  await generateLevel(zai, 'N1', 1081, 4000, 'vocab-n1');

  console.log('\n=== ALL DONE ===');
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
