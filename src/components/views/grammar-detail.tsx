"use client";

import { ArrowLeft, Lightbulb, Link2, ListTree, BookText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { LevelBadge } from "../nikki/shared";
import { useSettings } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { grammarData } from "@/lib/data/grammar";
import { levelColor } from "@/lib/data/kanji";
import type { GrammarData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function GrammarDetail({ point, onBack }: { point: GrammarData; onBack?: () => void }) {
  const showFurigana = useSettings((s) => s.showFurigana);
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
          {point.lesson && <Badge variant="secondary">Minna L{point.lesson}</Badge>}
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

      {/* Download flashcard button */}
      <Button
        size="sm"
        variant="outline"
        className="w-full gap-2"
        onClick={() => downloadSingleGrammarFlashcard(point)}
      >
        <Download className="h-4 w-4" /> Download Flashcard
      </Button>
    </div>
  );
}

/** Download a single grammar flashcard as a PNG image */
function downloadSingleGrammarFlashcard(g: GrammarData) {
  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 800;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const lvlColor: Record<string, string> = {
    N5: "#ff8fab", N4: "#6b9b7a", N3: "#4a6fa5", N2: "#b39ddb", N1: "#ff8c7a",
  };
  const color = lvlColor[g.level] || "#ff8fab";

  // Background
  ctx.fillStyle = "#fff9f0";
  ctx.fillRect(0, 0, 600, 800);

  // Header
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 600, 80);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`${g.level} Grammar`, 300, 50);

  // Grammar point (large)
  ctx.fillStyle = color;
  ctx.font = "bold 64px sans-serif";
  ctx.fillText(g.point, 300, 220);

  // Reading
  ctx.fillStyle = "#717a63";
  ctx.font = "28px sans-serif";
  ctx.fillText(g.reading, 300, 270);

  // Divider
  ctx.strokeStyle = "#e2e6d4";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 320);
  ctx.lineTo(500, 320);
  ctx.stroke();

  // Meaning
  ctx.fillStyle = "#3a4a32";
  ctx.font = "bold 32px sans-serif";
  const meaning = g.meaning.length > 40 ? g.meaning.slice(0, 40) + "…" : g.meaning;
  ctx.fillText(meaning, 300, 380);

  // Category
  ctx.fillStyle = "#7a7a73";
  ctx.font = "18px sans-serif";
  ctx.fillText(g.category, 300, 420);

  // Structure
  ctx.fillStyle = "#5a6b4a";
  ctx.font = "20px sans-serif";
  const structure = g.structure.slice(0, 45);
  ctx.fillText(structure, 300, 470);

  // Example
  if (g.examples[0]) {
    ctx.fillStyle = "#3d2b2e";
    ctx.font = "22px sans-serif";
    const exJp = g.examples[0].jp.replace(/\[[^\]]+\]/g, "").slice(0, 30);
    ctx.fillText(exJp, 300, 540);
    ctx.fillStyle = "#9a9a8a";
    ctx.font = "16px sans-serif";
    const exEn = g.examples[0].en.slice(0, 45);
    ctx.fillText(exEn, 300, 575);
  }

  // Footer
  ctx.fillStyle = "#9a7177";
  ctx.font = "14px sans-serif";
  ctx.fillText("Nihongo with Nikki", 300, 750);

  // Download
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `flashcard-${g.point}-${g.level}.png`;
  a.click();
}
