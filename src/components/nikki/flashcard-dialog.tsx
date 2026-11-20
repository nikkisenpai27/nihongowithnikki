"use client";

import { useState, useMemo, useCallback } from "react";
import { Shuffle, RotateCcw, ChevronLeft, ChevronRight, Eye, Volume2, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FuriganaText } from "./furigana";
import { AudioButton } from "./audio-button";
import { useSettings } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { useJapaneseAudio } from "./use-japanese-audio";
import type { VocabData } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  cards: VocabData[];
  title?: string;
}

export function FlashcardDialog({ open, onOpenChange, cards, title = "Flashcards" }: Props) {
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const showRomaji = useSettings((s) => s.showRomaji);
  const setMastery = useProgress((s) => s.setMastery);
  const { speak } = useJapaneseAudio();

  const shuffle = useCallback(() => {
    const arr = [...order];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setOrder(arr);
    setPos(0);
    setFlipped(false);
  }, [order]);

  const next = useCallback(() => {
    setPos((p) => (p + 1) % order.length);
    setFlipped(false);
  }, [order.length]);
  const prev = useCallback(() => {
    setPos((p) => (p - 1 + order.length) % order.length);
    setFlipped(false);
  }, [order.length]);

  const card = useMemo(() => cards[order[pos]], [cards, order, pos]);

  if (!card) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {title} ・ {pos + 1}/{order.length}
          </span>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={shuffle} aria-label="Shuffle">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => { setPos(0); setFlipped(false); setOrder(cards.map((_, i) => i)); }} aria-label="Restart">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Progress value={((pos + 1) / order.length) * 100} className="h-1 rounded-none" />

        <div className="p-6">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setFlipped((f) => !f)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((f) => !f); } }}
            className="relative flex min-h-[420px] w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-border bg-card p-8 text-center shadow-sm transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {!flipped ? (
              <>
                <span className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Word
                </span>
                <FuriganaText
                  text={card.word}
                  className="jp text-6xl font-bold text-foreground"
                />
                {showRomaji && (
                  <span className="mt-3 text-lg italic text-muted-foreground">{card.romaji}</span>
                )}
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="h-3 w-3" /> Tap to reveal meaning
                </span>
              </>
            ) : (
              <>
                <span className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Meaning
                </span>
                <span className="text-2xl font-bold text-foreground">{card.meaning}</span>
                <span className="mt-1 text-xs text-muted-foreground">{card.partOfSpeech}</span>
                <div className="mt-4 w-full rounded-xl bg-muted/50 p-3 text-left">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <FuriganaText text={card.example.jp} className="jp text-sm font-medium text-foreground" />
                    <button
                      onClick={(e) => { e.stopPropagation(); speak(card.example.jp); }}
                      className="shrink-0 rounded-full p-1.5 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      aria-label="Play example audio"
                    >
                      <Volume2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">{card.example.en}</p>
                </div>
              </>
            )}
          </div>

          {/* Navigation buttons — separate row */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous" className="h-10 w-10">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-xs font-medium text-muted-foreground tabular-nums">
              {pos + 1} / {order.length}
            </span>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next" className="h-10 w-10">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Action buttons — separate row with clear gap */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setMastery("vocab", card.id, "learning"); next(); }}
              className="gap-1.5 border-warm-yellow/40 text-warm-yellow"
            >
              <RotateCcw className="h-4 w-4" />
              Still learning
            </Button>
            <Button
              size="sm"
              onClick={() => { setMastery("vocab", card.id, "mastered"); next(); }}
              className="gap-1.5 bg-matcha text-white hover:bg-matcha/90"
            >
              <Check className="h-4 w-4" /> Got it
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
