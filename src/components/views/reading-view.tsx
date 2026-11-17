"use client";

import { useMemo, useState } from "react";
import {
  BookText,
  Search,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Play,
  HelpCircle,
  Check,
  X,
  Trophy,
} from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { readingData } from "@/lib/data/reading";
import { levelColor } from "@/lib/data/kanji";
import { useSettings } from "@/lib/stores/settings-store";
import { useNav } from "@/lib/stores/nav-store";
import { useProgress } from "@/lib/stores/progress-store";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import { useJapaneseAudio } from "../nikki/use-japanese-audio";
import type { JLPTLevel, ReadingPassage } from "@/lib/types";
import { cn } from "@/lib/utils";

type LevelFilter = "all" | JLPTLevel;

export function ReadingView() {
  const selectedId = useNav((s) => s.selectedReading);
  const openReading = useNav((s) => s.openReading);
  const back = useNav((s) => s.back);
  const globalSearch = useNav((s) => s.search);
  const showFurigana = useSettings((s) => s.showFurigana);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");

  const q = (query || globalSearch).trim().toLowerCase();

  const filtered = useMemo(() => {
    return readingData.filter((p) => {
      if (level !== "all" && p.level !== level) return false;
      if (q) {
        const hay = [p.title, p.titleReading, p.summary, ...p.tags].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, q]);

  const selected = selectedId ? readingData.find((p) => p.id === selectedId) : null;

  if (selected) {
    return <ReadingReader passage={selected} onBack={back} />;
  }

  return (
    <div>
      <SectionHeader
        title="Reading Practice"
        jp="読解"
        icon={BookText}
        description={`${readingData.length} long passages with comprehension questions — ${readingData.filter(p=>p.level==="N5").length} for N5 and ${readingData.filter(p=>p.level==="N4").length} for N4. Toggle furigana, read side-by-side with English, then test your understanding.`}
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search passages…"
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
          <ToggleGroupItem value="N3">N3</ToggleGroupItem>
          <ToggleGroupItem value="N2">N2</ToggleGroupItem>
          <ToggleGroupItem value="N1">N1</ToggleGroupItem>
        </ToggleGroup>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={Search} title="No passages found" description="Try a different level or search term." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => openReading(p.id)}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="mb-3 flex items-center justify-between">
                <LevelBadge level={p.level} />
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" /> {p.estMinutes}m
                </Badge>
              </div>
              <h3 className="jp text-xl font-bold text-foreground">
                <FuriganaText text={p.title} showFurigana={showFurigana} style={{ color: levelColor(p.level) }} />
              </h3>
              <p className="mt-1 text-xs text-muted-foreground jp">{p.titleReading}</p>
              <p className="mt-2 flex-1 text-sm text-foreground/80 line-clamp-3">{p.summary}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="secondary" className="gap-1 text-[10px]">
                  <HelpCircle className="h-3 w-3" /> {p.questions.length} questions
                </Badge>
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                <Play className="h-3.5 w-3.5" /> Start reading
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length} passages ・ Read carefully, then answer the comprehension questions.
      </p>
    </div>
  );
}

function ReadingReader({ passage, onBack }: { passage: ReadingPassage; onBack: () => void }) {
  const showFurigana = useSettings((s) => s.showFurigana);
  const [localFuri, setLocalFuri] = useState(showFurigana);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const { speak } = useJapaneseAudio();
  const addXp = useProgress((s) => s.addXp);

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([i, a]) => a === passage.questions[Number(i)].answerIndex
  ).length;
  const allAnswered = answeredCount === passage.questions.length;

  function choose(qi: number, ci: number) {
    if (answers[qi] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qi]: ci }));
    const correct = ci === passage.questions[qi].answerIndex;
    if (correct) addXp(3);
    if (qi === passage.questions.length - 1 && correct) {
      // last question — small bonus handled by per-question xp
    }
  }

  return (
    <div className="space-y-5">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="mr-1 h-4 w-4" /> All passages
      </Button>

      <div className="rounded-2xl bg-gradient-to-br from-primary/12 via-card to-card p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <LevelBadge level={passage.level} />
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" /> {passage.estMinutes} min
          </Badge>
          {passage.tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
          ))}
        </div>
        <h1 className="jp text-3xl font-bold text-foreground">
          <FuriganaText text={passage.title} showFurigana={localFuri} />
        </h1>
        <p className="mt-1 text-xs text-muted-foreground jp">{passage.titleReading}</p>
        <p className="mt-2 text-sm text-foreground/80">{passage.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button size="sm" variant="outline" onClick={() => setLocalFuri((f) => !f)}>
            <BookText className="mr-1 h-3.5 w-3.5" /> Furigana: {localFuri ? "ON" : "OFF"}
          </Button>
          <Button size="sm" variant="ghost" onClick={() => speak(passage.body.map((p) => p.replace(/\[[^\]]+\]/g, "")).join(" "))}>
            <Play className="mr-1 h-3.5 w-3.5" /> Narrate
          </Button>
        </div>
      </div>

      <Tabs defaultValue="jp" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3">
          <TabsTrigger value="jp">日本語 Japanese</TabsTrigger>
          <TabsTrigger value="en">English</TabsTrigger>
          <TabsTrigger value="both" className="hidden sm:inline-flex">Both</TabsTrigger>
        </TabsList>

        <TabsContent value="jp" className="mt-4">
          <article className="space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-7">
            {passage.body.map((p, i) => (
              <p key={i} className="jp text-lg leading-loose text-foreground">
                <FuriganaText text={p} showFurigana={localFuri} />
              </p>
            ))}
          </article>
        </TabsContent>

        <TabsContent value="en" className="mt-4">
          <article className="space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-7">
            {passage.translation.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">{p}</p>
            ))}
          </article>
        </TabsContent>

        <TabsContent value="both" className="mt-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="space-y-4 rounded-2xl border border-border bg-card p-5">
              {passage.body.map((p, i) => (
                <p key={i} className="jp text-base leading-loose text-foreground">
                  <FuriganaText text={p} showFurigana={localFuri} />
                </p>
              ))}
            </article>
            <article className="space-y-4 rounded-2xl border border-border bg-muted/30 p-5">
              {passage.translation.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90">{p}</p>
              ))}
            </article>
          </div>
        </TabsContent>
      </Tabs>

      {/* Comprehension questions */}
      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
            <HelpCircle className="h-4 w-4 text-primary" /> Comprehension Questions
            <span className="text-xs font-normal text-muted-foreground">({passage.questions.length})</span>
          </h3>
          {answeredCount > 0 && (
            <Badge variant="secondary" className="gap-1">
              <Trophy className="h-3 w-3 text-warm-yellow" /> {correctCount}/{answeredCount} correct
            </Badge>
          )}
        </div>

        <div className="space-y-4">
          {passage.questions.map((question, qi) => {
            const chosen = answers[qi];
            const answered = chosen !== undefined;
            const correct = answered && chosen === question.answerIndex;
            return (
              <div key={qi} className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  <span className="mr-2 text-primary">{qi + 1}.</span>
                  {question.q}
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {question.choices.map((c, ci) => {
                    const isAnswer = ci === question.answerIndex;
                    const isChosen = ci === chosen;
                    return (
                      <button
                        key={ci}
                        onClick={() => choose(qi, ci)}
                        disabled={answered}
                        className={cn(
                          "flex items-center gap-2 rounded-lg border-2 p-2.5 text-left text-sm transition-all",
                          !answered && "border-border bg-card hover:border-primary/50 hover:bg-accent/40",
                          answered && isAnswer && "border-matcha bg-matcha/15 text-foreground",
                          answered && isChosen && !isAnswer && "border-destructive bg-destructive/10 text-foreground",
                          answered && !isAnswer && !isChosen && "border-border bg-muted/40 text-muted-foreground opacity-70"
                        )}
                      >
                        <span className={cn(
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                          answered && isAnswer ? "bg-matcha text-white" :
                          answered && isChosen && !isAnswer ? "bg-destructive text-white" :
                          "bg-muted text-muted-foreground"
                        )}>
                          {answered && isAnswer ? <Check className="h-3 w-3" /> :
                           answered && isChosen && !isAnswer ? <X className="h-3 w-3" /> :
                           String.fromCharCode(65 + ci)}
                        </span>
                        <span className={cn("font-medium", c.match(/[\u3040-\u30ff\u4e00-\u9faf]/) && "jp")}>{c}</span>
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p className={cn("mt-3 rounded-lg p-2 text-xs", correct ? "bg-matcha/10 text-foreground" : "bg-warm-yellow/10 text-foreground")}>
                    <span className="font-semibold">{correct ? "正解！ Correct. " : "Not quite. "}</span>
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {allAnswered && (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-warm-yellow/10 p-3 text-sm">
            <CheckCircle2 className="h-4 w-4 text-matcha" />
            <span className="font-semibold">
              You scored {correctCount}/{passage.questions.length} ・ +{correctCount * 3} XP earned
            </span>
          </div>
        )}
      </Card>
    </div>
  );
}
