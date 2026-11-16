"use client";

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  CheckCircle2,
  Volume2,
  ListChecks,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { LevelBadge } from "../nikki/shared";
import { useSettings } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import type { StoryData } from "@/lib/types";
import { cn } from "@/lib/utils";

export function StoryReader({ story, onBack }: { story: StoryData; onBack: () => void }) {
  const showFurigana = useSettings((s) => s.showFurigana);
  const [localFuri, setLocalFuri] = useState(showFurigana);
  const storiesRead = useProgress((s) => s.storiesRead);
  const markRead = useProgress((s) => s.markStoryRead);
  const read = storiesRead.includes(story.id);
  const [narrating, setNarrating] = useState(false);

  function narrate() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const full = story.body.map((p) => p.replace(/\[[^\]]+\]/g, "")).join("。");
    setNarrating(true);
    const u = new SpeechSynthesisUtterance(full);
    u.lang = "ja-JP";
    u.rate = 0.85;
    u.onend = () => setNarrating(false);
    u.onerror = () => setNarrating(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    if (!read) markRead(story.id);
  }

  return (
    <div className="space-y-5">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="mr-1 h-4 w-4" /> All stories
      </Button>

      <div className="rounded-2xl bg-gradient-to-br from-primary/12 via-card to-card p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <LevelBadge level={story.level} />
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" /> {story.estMinutes} min
          </Badge>
          {read && (
            <Badge className="gap-1 bg-matcha/20 text-matcha">
              <CheckCircle2 className="h-3 w-3" /> Completed
            </Badge>
          )}
          {story.tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
          ))}
        </div>
        <h1 className="jp text-3xl font-bold text-foreground">
          <FuriganaText text={story.title} showFurigana={localFuri} />
        </h1>
        <p className="mt-1 text-xs text-muted-foreground jp">{story.titleReading}</p>
        <p className="mt-2 text-sm text-foreground/80">{story.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={narrate} disabled={narrating}>
            <Play className="mr-1 h-3.5 w-3.5" />
            {narrating ? "Narrating…" : "Play narration"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setLocalFuri((f) => !f)}
          >
            <BookOpen className="mr-1 h-3.5 w-3.5" />
            Furigana: {localFuri ? "ON" : "OFF"}
          </Button>
          {!read && (
            <Button size="sm" variant="ghost" onClick={() => markRead(story.id)}>
              <CheckCircle2 className="mr-1 h-3.5 w-3.5" /> Mark as read
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="jp" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3">
          <TabsTrigger value="jp">日本語 Japanese</TabsTrigger>
          <TabsTrigger value="en">English</TabsTrigger>
          <TabsTrigger value="both" className="hidden sm:inline-flex">
            Both
          </TabsTrigger>
        </TabsList>

        <TabsContent value="jp" className="mt-4">
          <article className="space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-7">
            {story.body.map((p, i) => (
              <p key={i} className="jp text-lg leading-loose text-foreground">
                <FuriganaText text={p} showFurigana={localFuri} />
              </p>
            ))}
          </article>
        </TabsContent>

        <TabsContent value="en" className="mt-4">
          <article className="space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-7">
            {story.translation.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </article>
        </TabsContent>

        <TabsContent value="both" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="space-y-4 rounded-2xl border border-border bg-card p-5">
              {story.body.map((p, i) => (
                <p key={i} className="jp text-base leading-loose text-foreground">
                  <FuriganaText text={p} showFurigana={localFuri} />
                </p>
              ))}
            </article>
            <article className="space-y-4 rounded-2xl border border-border bg-muted/30 p-5">
              {story.translation.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}
            </article>
          </div>
        </TabsContent>
      </Tabs>

      <Separator />

      {/* Vocabulary */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold text-foreground">
          <ListChecks className="h-4 w-4 text-primary" /> Story Vocabulary
          <span className="text-xs font-normal text-muted-foreground">({story.vocab.length})</span>
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {story.vocab.map((v) => (
            <div
              key={v.word + v.reading}
              className="flex items-center gap-2 rounded-xl bg-muted/40 px-3 py-2"
            >
              <span className="jp text-base font-bold text-foreground">{v.word}</span>
              <span className="jp text-xs text-muted-foreground">{v.reading}</span>
              <span className="ml-auto text-xs text-foreground/80">{v.meaning}</span>
              <AudioButton text={v.word} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
