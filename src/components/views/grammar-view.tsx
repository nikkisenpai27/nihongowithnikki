"use client";

import { useMemo, useState } from "react";
import { SpellCheck, Search, Filter, BookMarked, Sparkles, Download } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { grammarData, grammarCategories } from "@/lib/data/grammar";
import { levelColor } from "@/lib/data/kanji";
import { lessonsForLevel } from "@/lib/data/lessons";
import { useSettings } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { useNav } from "@/lib/stores/nav-store";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import { FlashcardDialog } from "../nikki/flashcard-dialog";
import type { JLPTLevel, VocabData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { GrammarDetail } from "./grammar-detail";

type LevelFilter = "all" | JLPTLevel;

export function GrammarView() {
  const selectedId = useNav((s) => s.selectedGrammar);
  const openGrammar = useNav((s) => s.openGrammar);
  const back = useNav((s) => s.back);
  const globalSearch = useNav((s) => s.search);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [lesson, setLesson] = useState<string>("1");
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [flashOpen, setFlashOpen] = useState(false);

  const q = (query || globalSearch).trim().toLowerCase();
  const lessonNum = lesson === "all" ? null : Number(lesson);
  const lessonOptions = lessonsForLevel(level);

  const filtered = useMemo(() => {
    return grammarData.filter((g) => {
      if (level !== "all" && g.level !== level) return false;
      if (lessonNum !== null && g.lesson !== lessonNum) return false;
      if (category !== "all" && g.category !== category) return false;
      if (q) {
        const hay = [g.point, g.reading, g.meaning, g.category].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, lessonNum, category, q]);

  function changeLevel(v: string) {
    const lv = (v as LevelFilter) || "all";
    setLevel(lv);
    setLesson(lv === "N4" ? "26" : lv === "N5" ? "1" : "all");
    setCategory("all");
  }

  const selected = selectedId ? grammarData.find((g) => g.id === selectedId) : null;

  if (selected) {
    return (
      <div>
        <Button variant="ghost" size="sm" onClick={back} className="mb-3 hidden lg:inline-flex">
          <Filter className="mr-1 h-4 w-4" /> Back to list
        </Button>
        <GrammarDetail point={selected} onBack={back} />
      </div>
    );
  }

  return (
    <div>
      <SectionHeader
        title="Grammar"
        jp="文法"
        icon={SpellCheck}
        description={`${grammarData.length} grammar points across all 50 Minna no Nihongo lessons. Clear explanations, formation rules, examples, and notes.`}
      />

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search grammar…"
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

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => setFlashOpen(true)} disabled={filtered.length === 0}>
          <Sparkles className="mr-1 h-4 w-4" /> Flashcards ({filtered.length})
        </Button>
        <Button size="sm" variant="outline" onClick={() => downloadGrammarFlashcards(filtered)} disabled={filtered.length === 0}>
          <Download className="mr-1 h-4 w-4" /> Download
        </Button>
      </div>

      <div className="mb-5 flex flex-wrap gap-1.5">
        <button
          onClick={() => setCategory("all")}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
            category === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card hover:bg-accent"
          )}
        >
          All categories
        </button>
        {grammarCategories.map((c) => (
          <button
            key={c.name}
            onClick={() => setCategory(c.name)}
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
              category === c.name
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-accent"
            )}
          >
            {c.name}
            <span className={cn("jp", category === c.name ? "opacity-80" : "text-muted-foreground")}>
              {c.jp}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Search} title="No grammar points found" description="Try another category or level." />
      ) : (
        <div className="grid gap-2.5">
          {filtered.map((g) => (
            <button
              key={g.id}
              onClick={() => openGrammar(g.id)}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex w-28 shrink-0 flex-col items-start gap-1">
                <FuriganaText text={g.point} showFurigana={false} className="jp text-lg font-bold" style={{ color: levelColor(g.level) }} />
                <LevelBadge level={g.level} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{g.meaning}</p>
                <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{g.explanation}</p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-[10px] font-normal">{g.category}</Badge>
                  {g.lesson && <Badge variant="secondary" className="text-[10px] font-normal">L{g.lesson}</Badge>}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length} grammar points ・ Click any point to see formation, examples, and notes.
      </p>

      {/* Grammar Flashcards */}
      <FlashcardDialog
        open={flashOpen}
        onOpenChange={setFlashOpen}
        cards={filtered.map((g) => ({
          id: g.id,
          word: g.point,
          reading: g.reading,
          romaji: g.reading,
          meaning: g.meaning,
          level: g.level,
          theme: g.category,
          partOfSpeech: g.category,
          example: g.examples[0] || { jp: g.structure, en: g.formation },
        }))}
        title="Grammar Flashcards"
      />
    </div>
  );
}

/** Generate a downloadable image of grammar flashcards */
function downloadGrammarFlashcards(items: typeof grammarData) {
  if (items.length === 0) return;
  const canvas = document.createElement("canvas");
  const cols = 2;
  const rows = Math.ceil(items.length / cols);
  const cellW = 500;
  const cellH = 280;
  canvas.width = cols * cellW + 40;
  canvas.height = rows * cellH + 80;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Background
  ctx.fillStyle = "#fff9f0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Header
  ctx.fillStyle = "#ff8fab";
  ctx.fillRect(0, 0, canvas.width, 60);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 24px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Grammar Flashcards ・ 文法", canvas.width / 2, 38);

  // Cards
  ctx.textAlign = "left";
  items.forEach((g, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 20 + col * cellW;
    const y = 70 + row * cellH;

    // Card background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, cellW - 20, cellH - 20);
    ctx.strokeStyle = "#f3dde6";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, cellW - 20, cellH - 20);

    // Grammar point
    ctx.fillStyle = levelColor(g.level);
    ctx.font = "bold 28px sans-serif";
    ctx.fillText(g.point, x + 20, y + 45);

    // Reading
    ctx.fillStyle = "#9a7177";
    ctx.font = "16px sans-serif";
    ctx.fillText(g.reading, x + 20, y + 70);

    // Meaning
    ctx.fillStyle = "#3d2b2e";
    ctx.font = "bold 18px sans-serif";
    const meaning = g.meaning.length > 50 ? g.meaning.slice(0, 50) + "…" : g.meaning;
    ctx.fillText(meaning, x + 20, y + 100);

    // Example (first one)
    if (g.examples[0]) {
      ctx.fillStyle = "#7a3f4a";
      ctx.font = "14px sans-serif";
      const exJp = g.examples[0].jp.replace(/\[[^\]]+\]/g, "");
      const exEn = g.examples[0].en;
      ctx.fillText(exJp.slice(0, 35), x + 20, y + 135);
      ctx.fillStyle = "#9a7177";
      ctx.font = "12px sans-serif";
      ctx.fillText(exEn.slice(0, 40), x + 20, y + 155);
    }

    // Level badge
    ctx.fillStyle = levelColor(g.level);
    ctx.fillRect(x + cellW - 70, y + 10, 40, 20);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(g.level, x + cellW - 50, y + 24);
    ctx.textAlign = "left";
  });

  // Download
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `grammar-flashcards-${new Date().toISOString().slice(0, 10)}.png`;
  a.click();
}
