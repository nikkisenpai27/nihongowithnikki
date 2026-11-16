"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Search,
  LayoutGrid,
  List,
  Layers,
  Volume2,
  Sparkles,
} from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { vocabData, vocabThemes } from "@/lib/data/vocab";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { useNav } from "@/lib/stores/nav-store";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { FlashcardDialog } from "../nikki/flashcard-dialog";
import { getLucideIcon } from "../nikki/icon-map";
import type { JLPTLevel, VocabData } from "@/lib/types";
import { cn } from "@/lib/utils";

type ViewMode = "cards" | "list";
type LevelFilter = "all" | JLPTLevel;

export function VocabView() {
  const globalSearch = useNav((s) => s.search);
  const setView = useNav((s) => s.setView);

  const mastery = useProgress((s) => s.vocab);
  const cycleMastery = useProgress((s) => s.cycleMastery);
  const showRomaji = useSettings((s) => s.showRomaji);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [theme, setTheme] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<ViewMode>("cards");
  const [flashOpen, setFlashOpen] = useState(false);

  const q = (query || globalSearch).trim().toLowerCase();

  const filtered = useMemo(() => {
    return vocabData.filter((v) => {
      if (level !== "all" && v.level !== level) return false;
      if (theme !== "all" && v.theme !== theme) return false;
      if (q) {
        const hay = [v.word, v.reading, v.romaji, v.meaning].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, theme, q]);

  const grouped = useMemo(() => {
    if (theme !== "all") return [{ name: theme, items: filtered }];
    const map = new Map<string, VocabData[]>();
    for (const v of filtered) {
      if (!map.has(v.theme)) map.set(v.theme, []);
      map.get(v.theme)!.push(v);
    }
    return vocabThemes
      .map((t) => ({ name: t.name, items: map.get(t.name) ?? [] }))
      .filter((g) => g.items.length > 0);
  }, [filtered, theme]);

  function masteryColor(id: string) {
    const st = mastery[id] ?? "new";
    if (st === "mastered") return "text-matcha";
    if (st === "learning") return "text-warm-yellow";
    return "text-muted-foreground/40";
  }

  return (
    <div>
      <SectionHeader
        title="Vocabulary"
        jp="単語"
        icon={BookOpen}
        description="Browse N5 & N4 vocabulary by theme. Tap the star to mark mastery, or start a flashcard session."
        action={
          <Button size="sm" onClick={() => setFlashOpen(true)} disabled={filtered.length === 0}>
            <Sparkles className="mr-1 h-4 w-4" /> Flashcards ({filtered.length})
          </Button>
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
          onValueChange={(v) => setLevel((v as LevelFilter) || "all")}
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="N5">N5</ToggleGroupItem>
          <ToggleGroupItem value="N4">N4</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup
          type="single"
          value={mode}
          onValueChange={(v) => v && setMode(v as ViewMode)}
          variant="outline"
          size="sm"
        >
          <ToggleGroupItem value="cards" aria-label="Card view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Theme chips */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        <ThemeChip active={theme === "all"} onClick={() => setTheme("all")} label="All themes" jp="全部" icon={Layers} />
        {vocabThemes.map((t) => {
          const Icon = getLucideIcon(t.icon);
          return (
            <ThemeChip
              key={t.name}
              active={theme === t.name}
              onClick={() => setTheme(t.name)}
              label={t.name}
              jp={t.jp}
              icon={Icon}
            />
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No words found"
          description="Try a different theme, level, or search term."
        />
      ) : mode === "cards" ? (
        <div className="space-y-6">
          {grouped.map((g) => (
            <div key={g.name}>
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                {(() => {
                  const t = vocabThemes.find((x) => x.name === g.name);
                  const Icon = t ? getLucideIcon(t.icon) : Layers;
                  return <Icon className="h-4 w-4 text-primary" />;
                })()}
                {g.name}
                <span className="jp text-muted-foreground">
                  {vocabThemes.find((x) => x.name === g.name)?.jp}
                </span>
                <span className="text-xs font-normal text-muted-foreground">({g.items.length})</span>
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((v) => (
                  <VocabCard
                    key={v.id}
                    v={v}
                    showRomaji={showRomaji}
                    showFurigana={showFurigana}
                    mastery={mastery[v.id] ?? "new"}
                    onCycle={() => cycleMastery("vocab", v.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="divide-y divide-border">
            {filtered.map((v) => {
              const st = mastery[v.id] ?? "new";
              return (
                <div
                  key={v.id}
                  className="flex items-center gap-3 bg-card px-4 py-2.5 transition-colors hover:bg-accent/40"
                >
                  <button
                    onClick={() => cycleMastery("vocab", v.id)}
                    className={cn("shrink-0", masteryColor(v.id))}
                    aria-label={`Mastery: ${st}`}
                  >
                    <Sparkles className="h-4 w-4" />
                  </button>
                  <div className="flex w-40 shrink-0 flex-col">
                    <FuriganaText text={v.word} showFurigana={showFurigana} className="jp text-base font-bold text-foreground" />
                    {showRomaji && <span className="text-[11px] italic text-muted-foreground">{v.romaji}</span>}
                  </div>
                  <span className="hidden w-32 shrink-0 jp text-xs text-muted-foreground sm:block">{v.reading}</span>
                  <span className="flex-1 text-sm text-foreground/90">{v.meaning}</span>
                  <LevelBadge level={v.level} className="hidden sm:inline-flex" />
                  <AudioButton text={v.word} />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length} words ・ Want a challenge?{" "}
        <button onClick={() => setView("quiz")} className="font-semibold text-primary underline-offset-2 hover:underline">
          Take a vocab quiz →
        </button>
      </p>

      <FlashcardDialog open={flashOpen} onOpenChange={setFlashOpen} cards={filtered} title="Vocabulary Flashcards" />
    </div>
  );
}

function ThemeChip({
  active,
  onClick,
  label,
  jp,
  icon: Icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  jp: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:bg-accent"
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
      <span className={cn("jp", active ? "opacity-80" : "text-muted-foreground")}>{jp}</span>
    </button>
  );
}

function VocabCard({
  v,
  showRomaji,
  showFurigana,
  mastery,
  onCycle,
}: {
  v: VocabData;
  showRomaji: boolean;
  showFurigana: boolean;
  mastery: string;
  onCycle: () => void;
}) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:shadow-md">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div>
          <FuriganaText text={v.word} showFurigana={showFurigana} className="jp text-2xl font-bold text-foreground" />
          {showRomaji && <p className="text-xs italic text-muted-foreground">{v.romaji}</p>}
        </div>
        <div className="flex items-center gap-1">
          <AudioButton text={v.word} />
          <button
            onClick={onCycle}
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-accent",
              mastery === "mastered"
                ? "text-matcha"
                : mastery === "learning"
                  ? "text-warm-yellow"
                  : "text-muted-foreground/40"
            )}
            aria-label={`Mark mastery (currently ${mastery})`}
          >
            <Sparkles className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-sm font-medium text-foreground">{v.meaning}</p>
      <div className="mt-1 flex items-center gap-1.5">
        <LevelBadge level={v.level} />
        <Badge variant="outline" className="text-[10px] font-normal">{v.partOfSpeech}</Badge>
      </div>
      <div className="mt-3 rounded-xl bg-muted/40 p-2.5">
        <div className="flex items-start gap-1">
          <FuriganaText text={v.example.jp} showFurigana={showFurigana} className="jp text-xs font-medium text-foreground" />
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground">{v.example.en}</p>
      </div>
    </div>
  );
}
