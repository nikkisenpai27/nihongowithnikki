"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useSettings,
  JP_FONT_OPTIONS,
  JP_FONT_STACKS,
  type JpFont,
} from "@/lib/stores/settings-store";
import { levelColor, cleanKun } from "@/lib/data/kanji";
import type { KanjiData } from "@/lib/types";

export function KanjiFlashcardDownload({ kanji }: { kanji: KanjiData }) {
  const jpFont = useSettings((s) => s.jpFont);
  const set = useSettings((s) => s.set);
  const [busy, setBusy] = useState(false);

  async function download() {
    setBusy(true);
    try {
      // Extract the actual font-family name from the CSS variable
      const varName =
        JP_FONT_STACKS[jpFont].match(/var\((--[^)]+)\)/)?.[1] ?? "--font-notojp";
      const fontFamily =
        getComputedStyle(document.documentElement).getPropertyValue(varName).trim() ||
        "sans-serif";
      // Make sure the font is loaded for canvas rendering
      if (typeof document !== "undefined" && (document as Document & { fonts?: FontFaceSet }).fonts) {
        try {
          await (document as Document & { fonts: FontFaceSet }).fonts.load(
            `320px ${fontFamily}`
          );
          await (document as Document & { fonts: FontFaceSet }).fonts.ready;
        } catch {
          /* ignore */
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = 600;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const lc = levelColor(kanji.level);
      // background
      ctx.fillStyle = "#fff9f0";
      ctx.fillRect(0, 0, 600, 800);
      // colored border by level
      ctx.strokeStyle = lc;
      ctx.lineWidth = 10;
      ctx.strokeRect(18, 18, 564, 764);

      // level badge
      ctx.fillStyle = lc;
      ctx.font = "bold 30px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(kanji.level, 50, 80);

      // big kanji in the chosen font
      ctx.fillStyle = lc;
      ctx.textAlign = "center";
      ctx.font = `bold 300px ${fontFamily}`;
      ctx.fillText(kanji.char, 300, 360);

      // meaning
      ctx.fillStyle = "#3d2b2e";
      ctx.font = "bold 38px sans-serif";
      ctx.fillText(kanji.meaning.join(", "), 300, 450);

      // readings
      ctx.textAlign = "left";
      ctx.font = "26px sans-serif";
      ctx.fillStyle = "#4a6fa5";
      ctx.fillText("on'yomi:  " + (kanji.onyomi.join("、") || "—"), 50, 540);
      ctx.fillStyle = "#6b9b7a";
      ctx.fillText("kun'yomi: " + (kanji.kunyomi.map(cleanKun).join("、") || "—"), 50, 585);

      // strokes / radical
      ctx.fillStyle = "#6b6b6b";
      ctx.font = "22px sans-serif";
      ctx.fillText(
        `${kanji.strokes} strokes  ・  radical ${kanji.radical} (${kanji.radicalMeaning})`,
        50,
        625
      );

      // footer
      ctx.fillStyle = "#9a7177";
      ctx.font = "18px sans-serif";
      ctx.fillText("Nihongo with Nikki", 50, 750);

      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `kanji-${kanji.char}-${kanji.level}.png`;
      a.click();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Font:
      </span>
      <Select value={jpFont} onValueChange={(v) => set("jpFont", v as JpFont)}>
        <SelectTrigger className="h-9 w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {JP_FONT_OPTIONS.map((f) => (
            <SelectItem key={f.id} value={f.id}>
              {f.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button size="sm" onClick={download} disabled={busy}>
        <Download className="mr-1 h-3.5 w-3.5" /> {busy ? "Generating…" : "Download PNG"}
      </Button>
    </div>
  );
}
