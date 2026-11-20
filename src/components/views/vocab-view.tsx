"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  Download,
  BookMarked,
  Volume2,
  ArrowRight,
} from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { vocabData } from "@/lib/data/vocab";
import { levelColor } from "@/lib/data/kanji";
import { minnaLessons, lessonsForLevel } from "@/lib/data/lessons";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { useNav } from "@/lib/stores/nav-store";
import { useJapaneseAudio } from "../nikki/use-japanese-audio";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { FlashcardDialog } from "../nikki/flashcard-dialog";
import type { JLPTLevel, VocabData } from "@/lib/types";
import { cn } from "@/lib/utils";

type LevelFilter = "all" | JLPTLevel;

const POS_INFO: Record<string, { jp: string; en: string }> = {
  noun: { jp: "名詞", en: "A word for a thing, person, place, or concept." },
  verb: { jp: "動詞", en: "An action word (to do, to eat, to go)." },
  "i-adjective": { jp: "い形容詞", en: "An adjective ending in い; describes a quality directly." },
  "na-adjective": { jp: "な形容詞", en: "An adjective that takes な before a noun." },
  adverb: { jp: "副詞", en: "Modifies a verb or adjective (how, when, how much)." },
  particle: { jp: "助詞", en: "A grammatical marker showing the role of a word in the sentence." },
  expression: { jp: "表現", en: "A fixed phrase or greeting used as-is." },
  pronoun: { jp: "代名詞", en: "A word that replaces a noun (I, you, this, that)." },
  conjunction: { jp: "接続詞", en: "Connects sentences or clauses (and, but, so)." },
};

function firstLessonForLevel(level: LevelFilter): string {
  if (level === "N4") return "26";
  if (level === "N5") return "1";
  if (level === "N3") return "51"; // N3 has lessons 51-72
  return "all"; // N2/N1 use chapter themes, not lessons
}

export function VocabView() {
  const globalSearch = useNav((s) => s.search);
  const setView = useNav((s) => s.setView);

  const mastery = useProgress((s) => s.vocab);
  const cycleMastery = useProgress((s) => s.cycleMastery);
  const showRomaji = useSettings((s) => s.showRomaji);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [lesson, setLesson] = useState<string>("1");
  const [query, setQuery] = useState("");
  const [flashOpen, setFlashOpen] = useState(false);
  const [detailId, setDetailId] = useState<string | null>(null);

  const q = (query || globalSearch).trim().toLowerCase();
  const lessonNum = lesson === "all" ? null : Number(lesson);
  const lessonOptions = lessonsForLevel(level);
  const currentLesson = lessonNum ? minnaLessons.find((l) => l.lesson === lessonNum) : null;

  const filtered = useMemo(() => {
    return vocabData.filter((v) => {
      if (level !== "all" && v.level !== level) return false;
      if (lessonNum !== null && v.lesson !== lessonNum) return false;
      if (q) {
        const hay = [v.word, v.reading, v.romaji, v.meaning].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, lessonNum, q]);

  function masteryColor(id: string) {
    const st = mastery[id] ?? "new";
    if (st === "mastered") return "text-matcha";
    if (st === "learning") return "text-warm-yellow";
    return "text-muted-foreground/40";
  }

  function changeLevel(v: string) {
    const lv = (v as LevelFilter) || "all";
    setLevel(lv);
    setLesson(firstLessonForLevel(lv));
  }

  const detailWord = detailId ? vocabData.find((v) => v.id === detailId) : null;
  // More examples: other words from the same lesson
  const moreExamples = useMemo(() => {
    if (!detailWord) return [];
    return vocabData
      .filter((v) => v.id !== detailWord.id && v.lesson === detailWord.lesson)
      .slice(0, 6);
  }, [detailWord]);

  return (
    <div>
      <SectionHeader
        title="Vocabulary"
        jp="単語"
        icon={BookOpen}
        description={`${vocabData.length} words organized by Minna no Nihongo lessons. Each entry shows the kanji with furigana, the hiragana/katakana reading, meaning, and an example sentence — click any word for more examples.`}
        action={
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setFlashOpen(true)} disabled={filtered.length === 0}>
              <Sparkles className="mr-1 h-4 w-4" /> Flashcards ({filtered.length})
            </Button>
            <Button size="sm" variant="outline" onClick={() => downloadVocabFlashcards(filtered)} disabled={filtered.length === 0}>
              <Download className="mr-1 h-4 w-4" /> Download
            </Button>
          </div>
        }
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search word, reading, meaning…"
            className="h-9 pl-9"
          />
        </div>
        <ToggleGroup
          type="single"
          value={level}
          onValueChange={changeLevel}
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="N5">N5</ToggleGroupItem>
          <ToggleGroupItem value="N4">N4</ToggleGroupItem>
          <ToggleGroupItem value="N3">N3</ToggleGroupItem>
          <ToggleGroupItem value="N2">N2</ToggleGroupItem>
          <ToggleGroupItem value="N1">N1</ToggleGroupItem>
        </ToggleGroup>
        <Select value={lesson} onValueChange={setLesson}>
          <SelectTrigger className="h-9 w-full sm:w-[200px]">
            <BookMarked className="mr-1.5 h-3.5 w-3.5 text-primary" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            <SelectItem value="all">All lessons</SelectItem>
            {lessonOptions.map((l) => (
              <SelectItem key={l.lesson} value={String(l.lesson)}>
                <span className="jp text-xs text-muted-foreground">L{l.lesson}</span> {l.title}
                <span className="ml-1.5 inline-flex rounded px-1 text-[9px] font-bold uppercase text-muted-foreground">{l.level}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Lesson banner */}
      {currentLesson && (
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary jp">
            L{currentLesson.lesson}
          </span>
          <div className="flex-1">
            <p className="text-sm font-bold text-foreground">
              {currentLesson.title}
              <span className="jp ml-2 font-normal text-muted-foreground">{currentLesson.jp}</span>
            </p>
            <p className="text-[11px] text-muted-foreground">
              {filtered.length} words ・ Minna no Nihongo {currentLesson.level} ・ Lesson {currentLesson.lesson}
            </p>
          </div>
          <LevelBadge level={currentLesson.level} />
        </div>
      )}

      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No words found"
          description="Try a different lesson, level, or search term."
        />
      ) : (
        /* Grammar-style horizontal list */
        <div className="grid gap-2.5">
          {filtered.map((v) => {
            const st = mastery[v.id] ?? "new";
            const isKatakana = /[\u30a0-\u30ff]/.test(v.word) && !/[\u3040-\u309f]/.test(v.word.replace(/[\u30a0-\u30ff]/g, ""));
            return (
              <div
                key={v.id}
                role="button"
                tabIndex={0}
                onClick={() => setDetailId(v.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setDetailId(v.id);
                  }
                }}
                className="group flex cursor-pointer items-center gap-5 rounded-2xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex w-44 shrink-0 flex-col items-start gap-1">
                  <FuriganaText text={v.word} showFurigana={showFurigana} className="jp text-xl font-bold" style={{ color: levelColor(v.level) }} />
                  <span className="jp text-xs text-muted-foreground">
                    {v.reading}
                    {isKatakana && <span className="ml-1 text-[9px] uppercase opacity-70">katakana</span>}
                    {!isKatakana && v.reading !== v.word && <span className="ml-1 text-[9px] uppercase opacity-70">hiragana</span>}
                  </span>
                  <LevelBadge level={v.level} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {v.meaning}
                    {showRomaji && <span className="ml-2 text-xs font-normal italic text-muted-foreground">{v.romaji}</span>}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    <span className="jp"><FuriganaText text={v.example.jp} showFurigana={showFurigana} /></span>
                    <span className="ml-1">— {v.example.en}</span>
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-[10px] font-normal">{v.partOfSpeech}</Badge>
                    {v.lesson && <Badge variant="secondary" className="text-[10px] font-normal">L{v.lesson}</Badge>}
                  </div>
                </div>
                <AudioButton text={v.word} />
                <button
                  onClick={(e) => { e.stopPropagation(); cycleMastery("vocab", v.id); }}
                  className={cn(
                    "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-accent",
                    masteryColor(v.id)
                  )}
                  aria-label={`Mastery: ${st}`}
                >
                  <Sparkles className="h-5 w-5" />
                </button>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length} words
      </p>

      <FlashcardDialog open={flashOpen} onOpenChange={setFlashOpen} cards={filtered} title="Vocabulary Flashcards" />

      {/* Detail dialog with more examples */}
      <Dialog open={!!detailWord} onOpenChange={(o) => !o && setDetailId(null)}>
        <DialogContent className="max-w-lg p-0">
          <DialogTitle className="sr-only">Vocabulary detail</DialogTitle>
          {detailWord && (
            <VocabDetail
              v={detailWord}
              showRomaji={showRomaji}
              showFurigana={showFurigana}
              moreExamples={moreExamples}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function VocabDetail({
  v,
  showRomaji,
  showFurigana,
  moreExamples,
}: {
  v: VocabData;
  showRomaji: boolean;
  showFurigana: boolean;
  moreExamples: VocabData[];
}) {
  const { speak } = useJapaneseAudio();
  const pos = POS_INFO[v.partOfSpeech];
  return (
    <div>
      <div className="bg-gradient-to-br from-primary/10 via-card to-card p-5">
        <div className="mb-2 flex items-center gap-2">
          <LevelBadge level={v.level} />
          <Badge variant="outline">{v.partOfSpeech}</Badge>
          {v.lesson && <Badge variant="secondary">Minna L{v.lesson}</Badge>}
        </div>
        <div className="flex items-center gap-3">
          <FuriganaText text={v.word} showFurigana={showFurigana} className="jp text-4xl font-bold" style={{ color: levelColor(v.level) }} />
          <button
            onClick={() => speak(v.word)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary"
            aria-label="Play audio"
          >
            <Volume2 className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="jp">読み: <span className="text-foreground">{v.reading}</span></span>
          {showRomaji && <span>romaji: <span className="italic text-foreground">{v.romaji}</span></span>}
        </div>
        <p className="mt-2 text-lg font-semibold text-foreground">{v.meaning}</p>
      </div>

      <div className="space-y-4 p-5">
        {/* Download flashcard button */}
        <Button
          size="sm"
          variant="outline"
          className="w-full gap-2"
          onClick={() => downloadSingleVocabFlashcard(v)}
        >
          <Download className="h-4 w-4" /> Download Flashcard
        </Button>

        {pos && (
          <div className="rounded-xl bg-muted/40 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Part of speech <span className="jp normal-case">{pos.jp}</span>
            </p>
            <p className="mt-1 text-sm text-foreground/90">{pos.en}</p>
          </div>
        )}

        <div>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Example sentence <span className="jp normal-case">例文</span>
          </h4>
          <div className="rounded-xl bg-muted/40 p-3">
            <div className="flex items-start gap-2">
              <FuriganaText text={v.example.jp} showFurigana={showFurigana} className="jp text-base font-medium text-foreground" />
              <button
                onClick={() => speak(v.example.jp)}
                className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary"
                aria-label="Play example audio"
              >
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{v.example.en}</p>
          </div>
        </div>

        {moreExamples.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              More examples from this lesson <span className="jp normal-case">例文をもっと見る</span>
            </h4>
            <div className="space-y-2">
              {moreExamples.map((w) => (
                <button
                  key={w.id}
                  onClick={() => speak(w.example.jp)}
                  className="block w-full rounded-xl border border-border bg-card p-3 text-left transition-colors hover:bg-accent/40"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <FuriganaText text={w.word} showFurigana={showFurigana} className="jp text-base font-bold text-foreground" />
                    <span className="jp text-[11px] text-muted-foreground">{w.reading}</span>
                    <span className="ml-auto text-xs text-foreground/80">{w.meaning}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <FuriganaText text={w.example.jp} showFurigana={showFurigana} className="jp text-xs text-foreground/90" />
                  </div>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{w.example.en}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Generate a downloadable image of vocabulary flashcards */
function downloadVocabFlashcards(items: import("@/lib/types").VocabData[]) {
  if (items.length === 0) return;
  const canvas = document.createElement("canvas");
  const cols = 2;
  const rows = Math.ceil(items.length / cols);
  const cellW = 500;
  const cellH = 220;
  canvas.width = cols * cellW + 40;
  canvas.height = rows * cellH + 80;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = "#fff9f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6b9b7a";
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Vocabulary Flashcards ・ 単語", canvas.width / 2, 38);

  ctx.textAlign = "left";
  items.forEach((v, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 20 + col * cellW;
    const y = 70 + row * cellH;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, cellW - 20, cellH - 20);
    ctx.strokeStyle = "#e2e6d4";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, cellW - 20, cellH - 20);

    ctx.fillStyle = "#2c3327";
    ctx.font = "bold 28px sans-serif";
    ctx.fillText(v.word.slice(0, 20), x + 20, y + 42);

    ctx.fillStyle = "#717a63";
    ctx.font = "16px sans-serif";
    ctx.fillText(v.reading.slice(0, 25), x + 20, y + 65);

    ctx.fillStyle = "#3a4a32";
    ctx.font = "bold 16px sans-serif";
    const meaning = v.meaning.length > 45 ? v.meaning.slice(0, 45) + "…" : v.meaning;
    ctx.fillText(meaning, x + 20, y + 90);

    if (v.example) {
      ctx.fillStyle = "#5a6b4a";
      ctx.font = "13px sans-serif";
      const exJp = v.example.jp.replace(/\[[^\]]+\]/g, "").slice(0, 35);
      ctx.fillText(exJp, x + 20, y + 120);
      ctx.fillStyle = "#9a9a8a";
      ctx.font = "11px sans-serif";
      ctx.fillText(v.example.en.slice(0, 40), x + 20, y + 138);
    }

    ctx.fillStyle = "#717a63";
    ctx.fillRect(x + cellW - 75, y + 10, 35, 18);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(v.level, x + cellW - 57, y + 22);
    ctx.textAlign = "left";
  });

  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `vocab-flashcards-${new Date().toISOString().slice(0, 10)}.png`;
  a.click();
}

/** Download a single vocab flashcard as a PNG image */
function downloadSingleVocabFlashcard(v: import("@/lib/types").VocabData) {
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Background
  ctx.fillStyle = "#fff9f0";
  ctx.fillRect(0, 0, 600, 800);

  // Header with level color
  const lvlColor: Record<string, string> = {
    N5: "#ff8fab", N4: "#6b9b7a", N3: "#4a6fa5", N2: "#b39ddb", N1: "#ff8c7a",
  };
  const color = lvlColor[v.level] || "#ff8fab";
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 600, 80);

  // Level badge
  ctx.fillStyle = "#fff";
  ctx.font = "bold 20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`${v.level} Vocabulary`, 300, 50);

  // Word (large)
  ctx.fillStyle = "#3d2b2e";
  ctx.font = "bold 80px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(v.word, 300, 250);

  // Reading
  ctx.fillStyle = "#717a63";
  ctx.font = "32px sans-serif";
  ctx.fillText(v.reading, 300, 310);

  // Romaji
  ctx.fillStyle = "#9a9a8a";
  ctx.font = "italic 24px sans-serif";
  ctx.fillText(v.romaji, 300, 350);

  // Divider
  ctx.strokeStyle = "#e2e6d4";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 400);
  ctx.lineTo(500, 400);
  ctx.stroke();

  // Meaning
  ctx.fillStyle = "#3a4a32";
  ctx.font = "bold 36px sans-serif";
  const meaning = v.meaning.length > 35 ? v.meaning.slice(0, 35) + "…" : v.meaning;
  ctx.fillText(meaning, 300, 460);

  // Part of speech
  ctx.fillStyle = "#7a7a73";
  ctx.font = "20px sans-serif";
  ctx.fillText(v.partOfSpeech, 300, 500);

  // Example
  if (v.example) {
    ctx.fillStyle = "#5a6b4a";
    ctx.font = "24px sans-serif";
    const exJp = v.example.jp.replace(/\[[^\]]+\]/g, "");
    ctx.fillText(exJp.slice(0, 25), 300, 580);
    ctx.fillStyle = "#9a9a8a";
    ctx.font = "18px sans-serif";
    const exEn = v.example.en.slice(0, 40);
    ctx.fillText(exEn, 300, 620);
  }

  // Footer
  ctx.fillStyle = "#9a7177";
  ctx.font = "14px sans-serif";
  ctx.fillText("Nihongo with Nikki", 300, 750);

  // Download
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `flashcard-${v.word}-${v.level}.png`;
  a.click();
}
