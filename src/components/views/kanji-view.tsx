"use client";

import { useMemo, useState } from "react";
import {
  Languages,
  Search,
  Grid3x3,
  Flame,
  Filter,
  X,
  Layers,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { kanjiData } from "@/lib/data/kanji";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { useNav } from "@/lib/stores/nav-store";
import { SectionHeader, EmptyState } from "../nikki/shared";
import { KanjiDetail } from "./kanji-detail";
import { cleanKun } from "@/lib/data/kanji";
import type { JLPTLevel, KanjiData } from "@/lib/types";
import { cn } from "@/lib/utils";

type ColorMode = "level" | "mastery" | "frequency";
type LevelFilter = "all" | JLPTLevel;

// Per-level colors: N5 sky blue, N4 green, N3 yellow, N2 orange, N1 red
const LEVEL_COLORS: Record<string, string> = {
  N5: "#0ea5e9",
  N4: "#16a34a",
  N3: "#ca8a04",
  N2: "#ea580c",
  N1: "#dc2626",
};
function levelColor(level: string): string {
  return LEVEL_COLORS[level] ?? "var(--primary)";
}

export function KanjiView() {
  const selectedId = useNav((s) => s.selectedKanji);
  const openKanji = useNav((s) => s.openKanji);
  const back = useNav((s) => s.back);
  const globalSearch = useNav((s) => s.search);

  const mastery = useProgress((s) => s.kanji);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [colorMode, setColorMode] = useState<ColorMode>("level");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");
  const [strokeRange, setStrokeRange] = useState<[number, number]>([1, 25]);
  const [radicalFilter, setRadicalFilter] = useState<string>("all");
  const [hovered, setHovered] = useState<{ k: KanjiData; x: number; y: number } | null>(null);

  const selected = selectedId
    ? kanjiData.find((k) => k.id === selectedId)
    : null;

  const radicals = useMemo(() => {
    const set = new Set(kanjiData.map((k) => k.radical));
    return ["all", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = (query || globalSearch).trim().toLowerCase();
    return kanjiData.filter((k) => {
      if (level !== "all" && k.level !== level) return false;
      if (k.strokes < strokeRange[0] || k.strokes > strokeRange[1]) return false;
      if (radicalFilter !== "all" && k.radical !== radicalFilter) return false;
      if (q) {
        const hay = [
          k.char,
          k.meaning.join(" "),
          k.onyomi.join(" "),
          k.kunyomi.map(cleanKun).join(" "),
          k.radical,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, query, globalSearch, strokeRange, radicalFilter]);

  const freqMin = useMemo(() => Math.min(...kanjiData.map((k) => k.freq)), []);
  const freqMax = useMemo(() => Math.max(...kanjiData.map((k) => k.freq)), []);

  function cellStyle(k: (typeof kanjiData)[number]): React.CSSProperties {
    const lc = levelColor(k.level);
    if (colorMode === "frequency") {
      const t = 1 - (k.freq - freqMin) / Math.max(1, freqMax - freqMin); // 0..1, higher=more common
      const intensity = 0.18 + t * 0.82;
      return { backgroundColor: `color-mix(in srgb, ${lc} ${intensity * 100}%, var(--muted))` };
    }
    if (colorMode === "level") {
      return { backgroundColor: `color-mix(in srgb, ${lc} 20%, var(--card))` };
    }
    const st = mastery[k.id] ?? "new";
    if (st === "mastered")
      return { backgroundColor: `color-mix(in srgb, ${lc} 34%, var(--card))` };
    if (st === "learning")
      return { backgroundColor: `color-mix(in srgb, ${lc} 16%, var(--card))` };
    return { backgroundColor: "var(--muted)" };
  }

  if (selected) {
    return (
      <div>
        <Button variant="ghost" size="sm" onClick={back} className="mb-3 hidden lg:inline-flex">
          <X className="mr-1 h-4 w-4" /> Back to heatmap
        </Button>
        <KanjiDetail kanji={selected} onClose={back} />
      </div>
    );
  }

  const counts = {
    new: filtered.filter((k) => (mastery[k.id] ?? "new") === "new").length,
    learning: filtered.filter((k) => mastery[k.id] === "learning").length,
    mastered: filtered.filter((k) => mastery[k.id] === "mastered").length,
  };

  return (
    <div>
      <SectionHeader
        title="Kanji"
        jp="漢字"
        icon={Languages}
        description="Explore JLPT N5–N1 kanji in an interactive heatmap. Each level has its own color — N5 sky blue, N4 green, N3 yellow, N2 orange, N1 red. Tap any cell to dive in."
        action={
          <ToggleGroup
            type="single"
            value={colorMode}
            onValueChange={(v) => v && setColorMode(v as ColorMode)}
            variant="outline"
            size="sm"
          >
            <ToggleGroupItem value="level" aria-label="Color by level">
              <Layers className="mr-1 h-3.5 w-3.5" /> Level
            </ToggleGroupItem>
            <ToggleGroupItem value="mastery" aria-label="Color by mastery">
              <Grid3x3 className="mr-1 h-3.5 w-3.5" /> Mastery
            </ToggleGroupItem>
            <ToggleGroupItem value="frequency" aria-label="Color by frequency">
              <Flame className="mr-1 h-3.5 w-3.5" /> Frequency
            </ToggleGroupItem>
          </ToggleGroup>
        }
      />

      {/* Filters bar */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meaning, reading, radical…"
            className="h-9 pl-9"
          />
        </div>
        <ToggleGroup
          type="single"
          value={level}
          onValueChange={(v) => setLevel((v as LevelFilter) || "all")}
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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-9">
              <Filter className="mr-1 h-3.5 w-3.5" /> Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72" align="start">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Strokes: {strokeRange[0]} – {strokeRange[1]}
                </label>
                <Slider
                  value={strokeRange}
                  onValueChange={(v) => setStrokeRange([v[0], v[1]] as [number, number])}
                  min={1}
                  max={25}
                  step={1}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Radical
                </label>
                <Select value={radicalFilter} onValueChange={setRadicalFilter}>
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {radicals.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r === "all" ? "All radicals" : <span className="jp">{r}</span>}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={() => {
                  setStrokeRange([1, 25]);
                  setRadicalFilter("all");
                  setQuery("");
                  setLevel("all");
                }}
              >
                Reset filters
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <Badge variant="secondary" className="gap-1">
            <span className="h-2 w-2 rounded-full bg-muted" /> New {counts.new}
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span className="h-2 w-2 rounded-full bg-warm-yellow/70" /> Learning {counts.learning}
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <span className="h-2 w-2 rounded-full bg-primary" /> Mastered {counts.mastered}
          </Badge>
        </div>
      </div>

      {/* Heatmap grid */}
      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No kanji match your filters"
          description="Try widening the stroke range or clearing the search."
        />
      ) : (
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))",
          }}
        >
          {filtered.map((k) => {
            const st = mastery[k.id] ?? "new";
            return (
              <button
                key={k.id}
                onClick={() => openKanji(k.id)}
                onMouseEnter={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  setHovered({ k, x: r.right + 10, y: r.top });
                }}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "heatmap-cell jp flex aspect-square flex-col items-center justify-center gap-1 rounded-xl ring-1 ring-inset ring-border/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  showFurigana && st === "mastered" && "ring-primary/40"
                )}
                style={cellStyle(k)}
                title={`${k.char} — ${k.meaning.join(", ")} (${k.level})`}
                aria-label={`${k.char}, ${k.meaning.join(", ")}, ${k.level}, ${st}`}
              >
                <span className="w-full truncate px-1.5 text-center text-xs font-semibold leading-tight text-foreground/90">{k.meaning[0]}</span>
                <span className="text-5xl font-bold leading-none" style={{ color: levelColor(k.level) }}>{k.char}</span>
                <div className="flex w-full flex-col items-center gap-0.5 px-1.5">
                  <span className="w-full truncate text-center text-[11px] font-medium leading-none opacity-75 jp">{k.onyomi[0] ?? ""}</span>
                  <span className="w-full truncate text-center text-[11px] font-medium leading-none opacity-75 jp">{cleanKun(k.kunyomi[0] ?? "")}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Showing {filtered.length} of {kanjiData.length} kanji ・ Hover any cell for a quick
        flashcard, or click to see readings, vocab, examples, and practice writing.
      </p>

      {/* Floating hover flashcard — bigger, solid background */}
      {hovered && (
        <div
          className="pointer-events-none fixed z-50 w-96 rounded-2xl border-2 border-border bg-card p-5 shadow-2xl"
          style={{
            left: Math.min(hovered.x, (typeof window !== "undefined" ? window.innerWidth : 9999) - 400),
            top: Math.min(hovered.y, (typeof window !== "undefined" ? window.innerHeight : 9999) - 350),
          }}
        >
          <div className="flex items-center gap-4">
            <span className="jp text-8xl font-bold leading-none" style={{ color: levelColor(hovered.k.level), fontFamily: "var(--font-jp)" }}>
              {hovered.k.char}
            </span>
            <div className="min-w-0 flex-1">
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase text-white"
                style={{ backgroundColor: levelColor(hovered.k.level) }}
              >
                {hovered.k.level}
              </span>
              <p className="mt-1.5 text-base font-bold text-foreground">{hovered.k.meaning.join(", ")}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{hovered.k.strokes} strokes ・ radical {hovered.k.radical}</p>
            </div>
          </div>
          <div className="mt-3 space-y-1 text-sm text-muted-foreground">
            <p>on&apos;yomi: <span className="jp font-medium text-indigo-deep">{hovered.k.onyomi.join("、") || "—"}</span></p>
            <p>kun&apos;yomi: <span className="jp font-medium text-matcha">{hovered.k.kunyomi.map(cleanKun).join("、") || "—"}</span></p>
          </div>
          {hovered.k.vocab.length > 0 && (
            <div className="mt-2 space-y-0.5 border-t border-border pt-2">
              {hovered.k.vocab.slice(0, 3).map((v, i) => (
                <p key={i} className="text-xs text-muted-foreground">
                  <span className="jp font-medium text-foreground">{v.word}</span>{" "}
                  <span className="text-muted-foreground">{v.reading}</span>{" "}
                  — {v.meaning}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
