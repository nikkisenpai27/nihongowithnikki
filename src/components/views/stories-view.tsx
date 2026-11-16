"use client";

import { useMemo, useState } from "react";
import { BookText, Search, Clock, CheckCircle2, Sparkles } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { storiesData } from "@/lib/data/stories";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { useNav } from "@/lib/stores/nav-store";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import type { JLPTLevel } from "@/lib/types";
import { cn } from "@/lib/utils";
import { StoryReader } from "./story-reader";

type LevelFilter = "all" | JLPTLevel;

export function StoriesView() {
  const selectedId = useNav((s) => s.selectedStory);
  const openStory = useNav((s) => s.openStory);
  const back = useNav((s) => s.back);
  const globalSearch = useNav((s) => s.search);
  const storiesRead = useProgress((s) => s.storiesRead);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");

  const q = (query || globalSearch).trim().toLowerCase();

  const filtered = useMemo(() => {
    return storiesData.filter((s) => {
      if (level !== "all" && s.level !== level) return false;
      if (q) {
        const hay = [s.title, s.titleReading, s.summary, ...s.tags].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, q]);

  const selected = selectedId ? storiesData.find((s) => s.id === selectedId) : null;

  if (selected) {
    return <StoryReader story={selected} onBack={back} />;
  }

  const readCount = storiesData.filter((s) => storiesRead.includes(s.id)).length;

  return (
    <div>
      <SectionHeader
        title="Stories"
        jp="物語"
        icon={BookText}
        description="Original short stories at N5 and N4 level, written by Nikki. Read with furigana, side-by-side translation, and built-in vocabulary."
        action={
          <Badge variant="secondary" className="gap-1 px-3 py-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-matcha" /> {readCount}/{storiesData.length} read
          </Badge>
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories…"
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
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Search} title="No stories found" description="Try a different level or search term." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => {
            const read = storiesRead.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => openStory(s.id)}
                className={cn(
                  "group flex flex-col rounded-2xl border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  read ? "border-matcha/40" : "border-border"
                )}
              >
                <div className="mb-3 flex items-center justify-between">
                  <LevelBadge level={s.level} />
                  {read ? (
                    <Badge className="gap-1 bg-matcha/20 text-matcha">
                      <CheckCircle2 className="h-3 w-3" /> Read
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" /> {s.estMinutes}m
                    </Badge>
                  )}
                </div>
                <h3 className="jp text-xl font-bold text-foreground">
                  <FuriganaText text={s.title} showFurigana={showFurigana} />
                </h3>
                <p className="mt-1 text-xs text-muted-foreground jp">{s.titleReading}</p>
                <p className="mt-2 flex-1 text-sm text-foreground/80 line-clamp-3">{s.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> Read this story
                </div>
              </button>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length} stories ・ Nikki writes gentle, everyday stories to make reading fun.
      </p>
    </div>
  );
}
