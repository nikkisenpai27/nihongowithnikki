"use client";

import { useState } from "react";
import { Type, Volume2 } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SectionHeader } from "../nikki/shared";
import { useJapaneseAudio } from "../nikki/use-japanese-audio";
import { hiragana, katakana } from "@/lib/data/kana-data";
import type { KanaSet } from "@/lib/data/kana-data";
import { cn } from "@/lib/utils";

type KanaChoice = "hiragana" | "katakana";

export function KanaView() {
  const [choice, setChoice] = useState<KanaChoice>("hiragana");
  const { speak } = useJapaneseAudio();
  const set: KanaSet = choice === "hiragana" ? hiragana : katakana;

  return (
    <div>
      <SectionHeader
        title="Kana"
        jp="ひらがな・カタカナ"
        icon={Type}
        description="Learn the Japanese syllabaries. Hiragana for native words and grammar, Katakana for loanwords and names. Click any character to hear it pronounced."
        action={
          <ToggleGroup
            type="single"
            value={choice}
            onValueChange={(v) => v && setChoice(v as KanaChoice)}
            variant="outline"
            size="sm"
          >
            <ToggleGroupItem value="hiragana">ひらがな Hiragana</ToggleGroupItem>
            <ToggleGroupItem value="katakana">カタカナ Katakana</ToggleGroupItem>
          </ToggleGroup>
        }
      />

      <div className="mb-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-foreground/90">
        <p>
          <span className="jp font-semibold">{set.jp}</span> — the {set.name} syllabary. Each character
          represents a syllable (a consonant + vowel, or a vowel alone). Tap any tile to hear Nikki
          pronounce it.
        </p>
      </div>

      <div className="space-y-8">
        {set.groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-foreground">
              {g.title}
              <span className="jp text-sm font-normal text-muted-foreground">{g.jp}</span>
              <span className="text-xs font-normal text-muted-foreground">({g.items.length})</span>
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
              {g.items.map((item) => (
                <button
                  key={item.kana + item.romaji}
                  onClick={() => speak(item.kana)}
                  className="group flex aspect-square flex-col items-center justify-center gap-0.5 rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`${item.kana} ${item.romaji}`}
                >
                  <span className="jp text-3xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                    {item.kana}
                  </span>
                  <span className="text-[10px] font-medium lowercase text-muted-foreground">{item.romaji}</span>
                  <Volume2 className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-4 text-sm text-foreground/80">
        <h4 className="mb-1 font-semibold text-foreground">Tips from Nikki</h4>
        <ul className="ml-4 list-disc space-y-1 text-xs">
          <li><span className="jp">ひらがな</span> (Hiragana) is used for native Japanese words, verb endings, and grammatical particles.</li>
          <li><span className="jp">カタカナ</span> (Katakana) is used for foreign loanwords, foreign names, and emphasis — like italics in English.</li>
          <li>The <strong>gojūon</strong> (五十音) order is the traditional kana ordering — learn it, as dictionaries and vocabulary lists follow it.</li>
          <li><strong>Dakuten</strong> (゛) voices a consonant (か→が, ka→ga); <strong>handakuten</strong> (゜) makes it a &ldquo;p&rdquo; sound (は→ぱ, ha→pa).</li>
        </ul>
      </div>
    </div>
  );
}
