"use client";

import { useMemo } from "react";
import { Search, X, Languages, BookOpen, SpellCheck, BookText, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { kanjiData, cleanKun } from "@/lib/data/kanji";
import { vocabData } from "@/lib/data/vocab";
import { grammarData } from "@/lib/data/grammar";
import { storiesData } from "@/lib/data/stories";
import { readingData } from "@/lib/data/reading";
import { useSettings } from "@/lib/stores/settings-store";
import { LevelBadge } from "./shared";
import { FuriganaText } from "./furigana";
import { cn } from "@/lib/utils";

interface Props {
  query: string;
  onSelectKanji: (id: string) => void;
  onSelectVocab: () => void;
  onSelectGrammar: (id: string) => void;
  onSelectStory: (id: string) => void;
  onSelectReading: (id: string) => void;
  onClear: () => void;
}

export function GlobalSearchResults({
  query,
  onSelectKanji,
  onSelectVocab,
  onSelectGrammar,
  onSelectStory,
  onSelectReading,
  onClear,
}: Props) {
  const showFurigana = useSettings((s) => s.showFurigana);
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return { kanji: [], vocab: [], grammar: [], stories: [], reading: [] };
    return {
      kanji: kanjiData
        .filter((k) =>
          [k.char, k.meaning.join(" "), k.onyomi.join(" "), k.kunyomi.map(cleanKun).join(" "), k.radical]
            .join(" ")
            .toLowerCase()
            .includes(q)
        )
        .slice(0, 12),
      vocab: vocabData
        .filter((v) => [v.word, v.reading, v.romaji, v.meaning].join(" ").toLowerCase().includes(q))
        .slice(0, 12),
      grammar: grammarData
        .filter((g) => [g.point, g.reading, g.meaning, g.category].join(" ").toLowerCase().includes(q))
        .slice(0, 12),
      stories: storiesData
        .filter((s) => [s.title, s.titleReading, s.summary, ...s.tags].join(" ").toLowerCase().includes(q))
        .slice(0, 8),
      reading: readingData
        .filter((p) => [p.title, p.titleReading, p.summary, ...p.tags].join(" ").toLowerCase().includes(q))
        .slice(0, 8),
    };
  }, [q]);

  const total =
    results.kanji.length + results.vocab.length + results.grammar.length + results.stories.length + results.reading.length;

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Search className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">
            Search results for &ldquo;{query}&rdquo;
          </h1>
          <p className="text-xs text-muted-foreground">
            {total} match{total === 1 ? "" : "es"} across kanji, vocabulary, grammar &amp; stories
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={onClear}>
          <X className="mr-1 h-4 w-4" /> Clear
        </Button>
      </div>

      {total === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-card/40 px-6 py-12 text-center">
          <Search className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-semibold text-foreground">No results found</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Try searching for a kanji character, an English meaning, a reading, or a theme.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {results.kanji.length > 0 && (
          <Section icon={Languages} title="Kanji" jp="漢字" count={results.kanji.length}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
              {results.kanji.map((k) => (
                <button
                  key={k.id}
                  onClick={() => onSelectKanji(k.id)}
                  className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="jp text-3xl font-bold text-foreground">{k.char}</span>
                  <span className="line-clamp-1 text-[11px] text-muted-foreground">{k.meaning.join(", ")}</span>
                  <LevelBadge level={k.level} />
                </button>
              ))}
            </div>
          </Section>
        )}

        {results.vocab.length > 0 && (
          <Section icon={BookOpen} title="Vocabulary" jp="単語" count={results.vocab.length}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {results.vocab.map((v) => (
                <button
                  key={v.id}
                  onClick={onSelectVocab}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all hover:bg-accent/40"
                >
                  <FuriganaText text={v.word} showFurigana={showFurigana} className="jp text-lg font-bold text-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-foreground/90">{v.meaning}</p>
                    <p className="truncate text-[11px] text-muted-foreground">{v.theme} ・ {v.partOfSpeech}</p>
                  </div>
                  <LevelBadge level={v.level} />
                </button>
              ))}
            </div>
          </Section>
        )}

        {results.grammar.length > 0 && (
          <Section icon={SpellCheck} title="Grammar" jp="文法" count={results.grammar.length}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {results.grammar.map((g) => (
                <button
                  key={g.id}
                  onClick={() => onSelectGrammar(g.id)}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all hover:bg-accent/40"
                >
                  <span className="jp text-base font-bold text-foreground">{g.point}</span>
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground/90">{g.meaning}</span>
                  <LevelBadge level={g.level} />
                </button>
              ))}
            </div>
          </Section>
        )}

        {results.stories.length > 0 && (
          <Section icon={BookText} title="Stories" jp="物語" count={results.stories.length}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {results.stories.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectStory(s.id)}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all hover:bg-accent/40"
                >
                  <div className="min-w-0 flex-1">
                    <FuriganaText text={s.title} showFurigana={showFurigana} className="jp text-base font-bold text-foreground" />
                    <p className="truncate text-[11px] text-muted-foreground">{s.summary}</p>
                  </div>
                  <LevelBadge level={s.level} />
                </button>
              ))}
            </div>
          </Section>
        )}

        {results.reading.length > 0 && (
          <Section icon={FileText} title="Reading" jp="読解" count={results.reading.length}>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {results.reading.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onSelectReading(p.id)}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 text-left transition-all hover:bg-accent/40"
                >
                  <div className="min-w-0 flex-1">
                    <FuriganaText text={p.title} showFurigana={showFurigana} className="jp text-base font-bold text-foreground" />
                    <p className="truncate text-[11px] text-muted-foreground">{p.summary}</p>
                  </div>
                  <LevelBadge level={p.level} />
                </button>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  jp,
  count,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  jp: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {title}
        <span className="jp text-muted-foreground">{jp}</span>
        <Badge variant="secondary" className="text-[10px]">{count}</Badge>
      </h3>
      {children}
    </div>
  );
}
