"use client";

import { ArrowLeft, Lightbulb, Link2, ListTree, BookText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { LevelBadge } from "../nikki/shared";
import { useSettings } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { useNav } from "@/lib/stores/nav-store";
import { grammarData } from "@/lib/data/grammar";
import type { GrammarData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function GrammarDetail({ point, onBack }: { point: GrammarData; onBack?: () => void }) {
  const showFurigana = useSettings((s) => s.showFurigana);
  const setView = useNav((s) => s.setView);
  const grammarMastery = useProgress((s) => s.grammar);
  const cycleMastery = useProgress((s) => s.cycleMastery);
  const st = grammarMastery[point.id] ?? "new";

  return (
    <div className="space-y-5">
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack} className="lg:hidden">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to list
        </Button>
      )}
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <LevelBadge level={point.level} />
          <Badge variant="outline">{point.category}</Badge>
          <button
            onClick={() => cycleMastery("grammar", point.id)}
            className={cn(
              "ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold",
              st === "mastered"
                ? "bg-matcha/20 text-matcha"
                : st === "learning"
                  ? "bg-warm-yellow/20 text-warm-yellow"
                  : "bg-muted text-muted-foreground"
            )}
          >
            {st === "mastered" ? "Mastered" : st === "learning" ? "Learning" : "Mark as learning"}
          </button>
        </div>
        <h2 className="jp text-3xl font-bold text-foreground">{point.point}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{point.reading}</p>
        <p className="mt-2 text-base font-medium text-foreground">{point.meaning}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <ListTree className="h-3.5 w-3.5" /> Structure
        </h3>
        <p className="jp text-sm font-medium text-foreground">{point.structure}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <BookText className="h-3.5 w-3.5" /> Explanation
        </h3>
        <p className="text-sm leading-relaxed text-foreground/90">{point.explanation}</p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Formation
        </h3>
        <pre className="whitespace-pre-wrap rounded-xl bg-muted/40 p-3 jp text-sm text-foreground">
          {point.formation}
        </pre>
      </div>

      {point.examples.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Examples
          </h3>
          <div className="space-y-3">
            {point.examples.map((ex, i) => (
              <div key={i} className="rounded-xl bg-muted/40 p-3">
                <div className="mb-1 flex items-start gap-2">
                  <FuriganaText text={ex.jp} showFurigana={showFurigana} className="jp text-base font-medium text-foreground" />
                  <AudioButton text={ex.jp} className="mt-1" />
                </div>
                <p className="text-sm text-muted-foreground">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-2xl border border-warm-yellow/30 bg-warm-yellow/8 p-4">
        <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-warm-yellow">
          <Lightbulb className="h-3.5 w-3.5" /> Usage Notes
        </h3>
        <p className="text-sm leading-relaxed text-foreground/90">{point.notes}</p>
      </div>

      {point.related.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link2 className="h-3.5 w-3.5" /> Related Grammar
          </h3>
          <div className="flex flex-wrap gap-2">
            {point.related.map((rid) => {
              const r = grammarData.find((g) => g.id === rid);
              if (!r) return null;
              return (
                <Badge key={rid} variant="secondary" className="jp">
                  {r.point}
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      <Separator />

      <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 p-4">
        <div>
          <p className="text-sm font-semibold text-foreground">Ready to test this point?</p>
          <p className="text-xs text-muted-foreground">Take a grammar quiz to lock it in.</p>
        </div>
        <Button size="sm" onClick={() => setView("quiz")}>
          <GraduationCap className="mr-1 h-4 w-4" /> Quiz me
        </Button>
      </div>
    </div>
  );
}
