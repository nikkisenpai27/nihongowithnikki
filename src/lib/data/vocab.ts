import type { VocabData } from "@/lib/types";
import { vocabN5A } from "./vocab-n5-a";
import { vocabN5B } from "./vocab-n5-b";
import { vocabN5C } from "./vocab-n5-c";
import { vocabN5D } from "./vocab-n5-d";
import { vocabN4A } from "./vocab-n4-a";
import { vocabN4B } from "./vocab-n4-b";
import { vocabN4C } from "./vocab-n4-c";
import { vocabN3A } from "./vocab-n3-a";
import { vocabN3B } from "./vocab-n3-b";
import { vocabN3C } from "./vocab-n3-c";
import { vocabN3D } from "./vocab-n3-d";
import { vocabN3E } from "./vocab-n3-e";
import { vocabN3F } from "./vocab-n3-f";
import { vocabN3G } from "./vocab-n3-g";
import { vocabN3H } from "./vocab-n3-h";
import { vocabN3I } from "./vocab-n3-i";
import { vocabN3J } from "./vocab-n3-j";
import { vocabN3K } from "./vocab-n3-k";
import { vocabN3L } from "./vocab-n3-l";
import { vocabN3M } from "./vocab-n3-m";
import { vocabN3N } from "./vocab-n3-n";
import { vocabN2A } from "./vocab-n2-a";
import { vocabN2B } from "./vocab-n2-b";
import { vocabN2C } from "./vocab-n2-c";
import { vocabN2D } from "./vocab-n2-d";
import { vocabN2E } from "./vocab-n2-e";
import { vocabN2F } from "./vocab-n2-f";
import { vocabN2G } from "./vocab-n2-g";
import { vocabN2H } from "./vocab-n2-h";
import { vocabN2I } from "./vocab-n2-i";
import { vocabN2J } from "./vocab-n2-j";
import { vocabN2K } from "./vocab-n2-k";
import { vocabN2L } from "./vocab-n2-l";
import { vocabN2M } from "./vocab-n2-m";
import { vocabN2N } from "./vocab-n2-n";
import { vocabN2O } from "./vocab-n2-o";
import { vocabN1A } from "./vocab-n1-a";
import { vocabN1B } from "./vocab-n1-b";
import { vocabN1C } from "./vocab-n1-c";
import { vocabN1D } from "./vocab-n1-d";
import { vocabN1E } from "./vocab-n1-e";
import { vocabN1F } from "./vocab-n1-f";
import { vocabN1G } from "./vocab-n1-g";
import { vocabN1H } from "./vocab-n1-h";
import { vocabN1I } from "./vocab-n1-i";
import { vocabN1J } from "./vocab-n1-j";
import { vocabN1K } from "./vocab-n1-k";
import { vocabN1L } from "./vocab-n1-l";
import { vocabN1M } from "./vocab-n1-m";
import { vocabN1N } from "./vocab-n1-n";
import { vocabN1O } from "./vocab-n1-o";
import { vocabN1P } from "./vocab-n1-p";
import { vocabN1Q } from "./vocab-n1-q";
import { vocabN1R } from "./vocab-n1-r";
import { vocabN1S } from "./vocab-n1-s";
import { vocabN1T } from "./vocab-n1-t";
import { vocabN1U } from "./vocab-n1-u";
import { vocabN1V } from "./vocab-n1-v";
import { vocabN1W } from "./vocab-n1-w";
import { vocabN1X } from "./vocab-n1-x";
import { vocabN1Y } from "./vocab-n1-y";
import { vocabN1Z } from "./vocab-n1-z";
import { vocabN1AA } from "./vocab-n1-aa";

// Vocabulary: N5/N4 (Minna no Nihongo) + N3/N2/N1 (Shinzaizen Master style, chapter-wise)
// Deduplicated by word (common particles/expressions appear across multiple levels)
const allVocab: VocabData[] = [
  ...vocabN5A,
  ...vocabN5B,
  ...vocabN5C,
  ...vocabN5D,
  ...vocabN4A,
  ...vocabN4B,
  ...vocabN4C,
  ...vocabN3A,
  ...vocabN3B,
  ...vocabN3C,
  ...vocabN3D,
  ...vocabN3E,
  ...vocabN3F,
  ...vocabN3G,
  ...vocabN3H,
  ...vocabN3I,
  ...vocabN3J,
  ...vocabN3K,
  ...vocabN3L,
  ...vocabN3M,
  ...vocabN3N,
  ...vocabN2A,
  ...vocabN2B,
  ...vocabN2C,
  ...vocabN2D,
  ...vocabN2E,
  ...vocabN2F,
  ...vocabN2G,
  ...vocabN2H,
  ...vocabN2I,
  ...vocabN2J,
  ...vocabN2K,
  ...vocabN2L,
  ...vocabN2M,
  ...vocabN2N,
  ...vocabN2O,
  ...vocabN1A,
  ...vocabN1B,
  ...vocabN1C,
  ...vocabN1D,
  ...vocabN1E,
  ...vocabN1F,
  ...vocabN1G,
  ...vocabN1H,
  ...vocabN1I,
  ...vocabN1J,
  ...vocabN1K,
  ...vocabN1L,
  ...vocabN1M,
  ...vocabN1N,
  ...vocabN1O,
  ...vocabN1P,
  ...vocabN1Q,
  ...vocabN1R,
  ...vocabN1S,
  ...vocabN1T,
  ...vocabN1U,
  ...vocabN1V,
  ...vocabN1W,
  ...vocabN1X,
  ...vocabN1Y,
  ...vocabN1Z,
  ...vocabN1AA,
];
// Deduplicate per-level (not globally) — a word can appear in
// multiple JLPT levels with different nuances, so we only remove
// exact duplicates within the same level, not across levels.
const _seenWords = new Set<string>();
export const vocabData: VocabData[] = allVocab.filter((v) => {
  const key = `${v.level}:${v.word}`;
  if (_seenWords.has(key)) return false;
  _seenWords.add(key);
  return true;
});

// Derive theme list from the data, with a best-effort icon mapping.
const THEME_ICON_MAP: Record<string, string> = {
  greeting: "hand",
  greetings: "hand",
  introduction: "hand",
  thing: "package",
  things: "package",
  demonstrative: "package",
  place: "map-pin",
  location: "map-pin",
  time: "clock",
  date: "calendar",
  transport: "bus",
  travel: "plane",
  verb: "zap",
  verbs: "zap",
  motion: "bus",
  method: "settings",
  adjective: "palette",
  adjectives: "palette",
  family: "users",
  food: "utensils",
  drink: "coffee",
  shopping: "shoppingcart",
  school: "graduationcap",
  work: "briefcase",
  emotion: "smile",
  emotions: "smile",
  body: "heart",
  health: "heart",
  nature: "trees",
  color: "palette",
  colors: "palette",
  number: "hash",
  numbers: "hash",
  counter: "hash",
  counters: "hash",
  past: "history",
  experience: "award",
  reason: "helpcircle",
  suggestion: "lightbulb",
  permission: "checkcircle",
  comparison: "gitcompare",
  condition: "split",
  conditional: "split",
  giving: "gift",
  receiving: "gift",
};

function iconForTheme(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  for (const [k, v] of Object.entries(THEME_ICON_MAP)) {
    if (key.includes(k)) return v;
  }
  return "layers";
}

export const vocabThemes: { name: string; jp: string; icon: string }[] = Array.from(
  new Set(vocabData.map((v) => v.theme))
)
  .sort()
  .map((name) => ({ name, jp: "", icon: iconForTheme(name) }));

export { minnaLessons as vocabLessons } from "./lessons";
