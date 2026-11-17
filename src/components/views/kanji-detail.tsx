"use client";

import { Sparkles, BookOpen, Layers, PenLine, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { GuidedWritingPractice } from "../nikki/guided-writing-practice";
import { StrokeOrderAnimation } from "../nikki/stroke-order";
import { LevelBadge } from "../nikki/shared";
import { useProgress } from "@/lib/stores/progress-store";
import { cleanKun } from "@/lib/data/kanji";
import type { KanjiData } from "@/lib/types";
import { cn } from "@/lib/utils";

const MASTERY_LABELS = {
  new: { label: "Not started", jp: "未", color: "bg-muted text-muted-foreground" },
  learning: { label: "Learning", jp: "学", color: "bg-warm-yellow/20 text-warm-yellow" },
  mastered: { label: "Mastered", jp: "熟", color: "bg-matcha/20 text-matcha" },
} as const;

export function KanjiDetail({ kanji, onClose }: { kanji: KanjiData; onClose?: () => void }) {
  const mastery = useProgress((s) => s.kanji[kanji.id] ?? "new");
  const cycleMastery = useProgress((s) => s.cycleMastery);

  const m = MASTERY_LABELS[mastery];

  return (
    <div className="space-y-5">
      {onClose && (
        <Button variant="ghost" size="sm" onClick={onClose} className="mb-1 lg:hidden">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to grid
        </Button>
      )}

      {/* Hero */}
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:flex-row sm:items-center">
        <div className="relative">
          <span
            className="absolute inset-0 rounded-2xl opacity-30 blur-xl"
            style={{ background: "var(--primary)" }}
            aria-hidden
          />
          <span
            className="jp relative flex h-32 w-32 items-center justify-center rounded-2xl bg-card text-foreground shadow-inner ring-1 ring-border"
            style={{ fontSize: "6rem", fontFamily: "var(--font-jp)", lineHeight: 1 }}
            aria-label={`Kanji ${kanji.char}`}
          >
            {kanji.char}
          </span>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
            <LevelBadge level={kanji.level} />
            <button
              onClick={() => cycleMastery("kanji", kanji.id)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-colors",
                m.color
              )}
              aria-label={`Mastery: ${m.label}. Click to change.`}
            >
              <span className="jp">{m.jp}</span> {m.label}
            </button>
          </div>
          <h2 className="text-2xl font-bold text-foreground">{kanji.meaning.join(", ")}</h2>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:justify-start">
            <span className="inline-flex items-center gap-1 rounded-lg bg-muted px-2 py-1">
              <PenLine className="h-3 w-3" /> {kanji.strokes} strokes
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-muted px-2 py-1">
              <Layers className="h-3 w-3" /> Grade {kanji.grade}
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-muted px-2 py-1">
              <Sparkles className="h-3 w-3" /> Freq #{kanji.freq}
            </span>
          </div>
        </div>
      </div>

      {/* Readings */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              On&apos;yomi <span className="jp normal-case">音読み</span>
            </h3>
            <AudioButton text={kanji.onyomi.join("、")} size="md" label="Read on'yomi" />
          </div>
          <div className="flex flex-wrap gap-2">
            {kanji.onyomi.length ? (
              kanji.onyomi.map((o) => (
                <span key={o} className="jp rounded-lg bg-indigo-deep/10 px-2.5 py-1 text-sm font-medium text-indigo-deep">
                  {o}
                </span>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">—</span>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Kun&apos;yomi <span className="jp normal-case">訓読み</span>
            </h3>
            <AudioButton text={kanji.kunyomi.map(cleanKun).join("、")} size="md" label="Read kun'yomi" />
          </div>
          <div className="flex flex-wrap gap-2">
            {kanji.kunyomi.length ? (
              kanji.kunyomi.map((k) => (
                <span key={k} className="jp rounded-lg bg-matcha/10 px-2.5 py-1 text-sm font-medium text-matcha">
                  {cleanKun(k)}
                </span>
              ))
            ) : (
              <span className="text-xs text-muted-foreground">—</span>
            )}
          </div>
        </div>
      </div>

      {/* Radical + parts */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Radical &amp; Components
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-sakura/10 px-3 py-2">
            <span className="jp text-2xl font-bold text-sakura">{kanji.radical}</span>
            <span className="text-xs text-muted-foreground">{kanji.radicalMeaning}</span>
          </div>
          {kanji.parts.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Parts:</span>
              {kanji.parts.map((p) => (
                <span key={p} className="jp rounded-md bg-muted px-2 py-0.5 text-sm text-foreground">
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vocab */}
      {kanji.vocab.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" /> Common Vocabulary
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {kanji.vocab.map((v) => (
              <div
                key={v.word}
                className="flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2"
              >
                <span className="jp text-base font-bold text-foreground">{v.word}</span>
                <span className="jp text-xs text-muted-foreground">{v.reading}</span>
                <span className="ml-auto text-xs text-foreground/80">{v.meaning}</span>
                <AudioButton text={v.word} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Example sentences */}
      {kanji.examples.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Example Sentences
          </h3>
          <div className="space-y-3">
            {kanji.examples.map((ex, i) => (
              <div key={i} className="rounded-xl bg-muted/40 p-3">
                <div className="mb-1 flex items-start gap-2">
                  <FuriganaText text={ex.jp} className="jp text-lg font-medium text-foreground" />
                  <AudioButton text={ex.jp} className="mt-1" />
                </div>
                <p className="text-sm text-muted-foreground">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Separator />

      {/* Stroke order */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <PenLine className="h-3.5 w-3.5" /> Stroke Order <span className="jp normal-case font-normal">筆順</span>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Watch how <span className="jp text-base font-bold text-foreground">{kanji.char}</span> is
          drawn — each stroke appears in the correct order ({kanji.strokes} strokes total). A faint
          guide shows the finished shape.
        </p>
        <StrokeOrderAnimation key={kanji.char} kanji={kanji.char} />
      </div>

      {/* Writing practice — guided with correct/wrong stroke order checking */}
      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <PenLine className="h-3.5 w-3.5" /> Writing Practice <span className="jp normal-case font-normal">書き取り</span>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Draw each stroke in the correct order. Nikki checks your stroke position and order —
          correct strokes turn green, wrong ones get a hint to try again.
        </p>
        <GuidedWritingPractice key={kanji.char} kanji={kanji.char} />
      </div>
    </div>
  );
}
