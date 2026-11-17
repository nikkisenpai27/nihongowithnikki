"use client";

import { useMemo, useState } from "react";
import {
  Headphones,
  Search,
  Clock,
  Play,
  Pause,
  ArrowLeft,
  HelpCircle,
  Check,
  X,
  Trophy,
  Eye,
  EyeOff,
  Gauge,
} from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { listeningData } from "@/lib/data/listening";
import { useNav } from "@/lib/stores/nav-store";
import { useProgress } from "@/lib/stores/progress-store";
import { useJapaneseAudio } from "../nikki/use-japanese-audio";
import { SectionHeader, EmptyState, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import type { JLPTLevel, ListeningData } from "@/lib/types";
import { cn } from "@/lib/utils";

type LevelFilter = "all" | JLPTLevel;

// N3/N2/N1 use Japanese UI labels; N5/N4 use English
function isJpLevel(level: string): boolean {
  return level === "N3" || level === "N2" || level === "N1";
}

export function ListeningView() {
  const selectedId = useNav((s) => s.selectedListening);
  const openListening = useNav((s) => s.openListening);
  const back = useNav((s) => s.back);
  const globalSearch = useNav((s) => s.search);

  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");

  const q = (query || globalSearch).trim().toLowerCase();

  const filtered = useMemo(() => {
    return listeningData.filter((p) => {
      if (level !== "all" && p.level !== level) return false;
      if (q) {
        const hay = [p.title, p.context, p.translation, ...p.tags].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [level, q]);

  const selected = selectedId ? listeningData.find((p) => p.id === selectedId) : null;

  if (selected) {
    return <ListeningPlayer item={selected} onBack={back} />;
  }

  return (
    <div>
      <SectionHeader
        title="Listening"
        jp="聴解"
        icon={Headphones}
        description={`${listeningData.length} listening exercises — ${listeningData.filter(p=>p.level==="N5").length} for N5 and ${listeningData.filter(p=>p.level==="N4").length} for N4. Listen to the Japanese audio (spoken by Nikki), answer the questions, then reveal the transcript to check your understanding.`}
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by topic or context…"
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
        <EmptyState icon={Search} title="No exercises found" description="Try a different level or search." />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => openListening(p.id)}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="mb-3 flex items-center justify-between">
                <LevelBadge level={p.level} />
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" /> {p.estMinutes}m
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.context}</p>
              <p className="mt-2 flex-1 text-sm text-foreground/80 line-clamp-2">{p.translation}</p>
              <div className="mt-3 flex items-center gap-2">
                <Badge variant="secondary" className="gap-1 text-[10px]">
                  <HelpCircle className="h-3 w-3" /> {p.questions.length}{isJpLevel(p.level) ? "問" : " questions"}
                </Badge>
                <div className="flex flex-wrap gap-1">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary">
                <Headphones className="h-3.5 w-3.5" /> {isJpLevel(p.level) ? "聞いてみる" : "Start listening"}
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {filtered.length}{" "}{level === "all" || level === "N5" || level === "N4" ? "exercises" : "問"}・{level === "all" || level === "N5" || level === "N4" ? "Listen carefully — the transcript is hidden until you answer." : "よく聞いてください。文字起こしは答えるまで非表示です。"}
      </p>
    </div>
  );
}

function ListeningPlayer({ item, onBack }: { item: ListeningData; onBack: () => void }) {
  const { speak, supported } = useJapaneseAudio();
  const jp = isJpLevel(item.level);
  const [rate, setRate] = useState<"normal" | "slow">("normal");
  const [playing, setPlaying] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showTranscript, setShowTranscript] = useState(false);
  const addXp = useProgress((s) => s.addXp);

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(
    ([i, a]) => a === item.questions[Number(i)].answerIndex
  ).length;
  const allAnswered = answeredCount === item.questions.length;

  function play() {
    setPlaying(true);
    const u = new SpeechSynthesisUtterance(item.text.replace(/\[[^\]]+\]/g, ""));
    u.lang = "ja-JP";
    u.rate = rate === "slow" ? 0.6 : 0.9;
    u.onend = () => setPlaying(false);
    u.onerror = () => setPlaying(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  }

  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
  }

  function choose(qi: number, ci: number) {
    if (answers[qi] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qi]: ci }));
    if (ci === item.questions[qi].answerIndex) addXp(3);
  }

  return (
    <div className="space-y-5">
      <Button variant="ghost" size="sm" onClick={onBack}>
        <ArrowLeft className="mr-1 h-4 w-4" /> {jp ? "すべての練習" : "All exercises"}
      </Button>

      <div className="rounded-2xl bg-gradient-to-br from-primary/12 via-card to-card p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <LevelBadge level={item.level} />
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" /> {item.estMinutes}{jp ? "分" : " min"}
          </Badge>
          {item.tags.map((t) => (
            <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-foreground">{item.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground/80">{jp ? "場面：" : "Setting:"}</span> {item.context}
        </p>
      </div>

      {/* Audio player */}
      <Card className="p-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <button
            onClick={playing ? stop : play}
            disabled={!supported}
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              playing ? "bg-destructive" : "bg-primary"
            )}
            aria-label={playing ? "Stop" : "Play audio"}
          >
            {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 translate-x-0.5" />}
          </button>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">
              {playing ? (jp ? "再生中…よく聞いてください" : "Playing… listen carefully") : (jp ? "再生して聞いてください" : "Press play to listen")}
            </p>
            <p className="text-xs text-muted-foreground">
              {jp ? "ニキが日本語の対話を読みます。まず聞いて、それから質問に答えてください。" : "Nikki reads the dialogue in Japanese. Listen first, then answer the questions."}
            </p>
            {!supported && (
              <p className="mt-1 text-xs text-warm-yellow">Audio not supported in this browser.</p>
            )}
          </div>
          <ToggleGroup
            type="single"
            value={rate}
            onValueChange={(v) => v && setRate(v as "normal" | "slow")}
            variant="outline"
            size="sm"
          >
            <ToggleGroupItem value="normal" aria-label="Normal speed">
              <Gauge className="mr-1 h-3.5 w-3.5" /> {jp ? "普通" : "Normal"}
            </ToggleGroupItem>
            <ToggleGroupItem value="slow" aria-label="Slow speed">
              <Gauge className="mr-1 h-3.5 w-3.5" /> {jp ? "ゆっくり" : "Slow"}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Card>

      {/* Comprehension questions */}
      <Card className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
            <HelpCircle className="h-4 w-4 text-primary" /> {jp ? "理解問題" : "Comprehension Questions"}
            <span className="text-xs font-normal text-muted-foreground">({item.questions.length})</span>
          </h3>
          {answeredCount > 0 && (
            <Badge variant="secondary" className="gap-1">
              <Trophy className="h-3 w-3 text-warm-yellow" /> {correctCount}/{answeredCount}{jp ? "正解" : " correct"}
            </Badge>
          )}
        </div>

        <div className="space-y-4">
          {item.questions.map((question, qi) => {
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
                    <span className="font-semibold">{correct ? (jp ? "正解！" : "正解！ Correct. ") : (jp ? "もう一度。" : "Not quite. ")}</span>
                    {question.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {allAnswered && (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-warm-yellow/10 p-3 text-sm">
            <Check className="h-4 w-4 text-matcha" />
            <span className="font-semibold">
              {jp ? `得点：${correctCount}/${item.questions.length}・+${correctCount * 3} XP` : `You scored ${correctCount}/${item.questions.length} ・ +${correctCount * 3} XP earned`}
            </span>
          </div>
        )}
      </Card>

      {/* Transcript */}
      <Card className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
            {jp ? <span className="jp">文字起こし</span> : <>Transcript <span className="jp font-normal text-muted-foreground">文字起こし</span></>}
          </h3>
          <Button size="sm" variant="outline" onClick={() => setShowTranscript((s) => !s)}>
            {showTranscript ? <><EyeOff className="mr-1 h-3.5 w-3.5" /> {jp ? "非表示" : "Hide"}</> : <><Eye className="mr-1 h-3.5 w-3.5" /> {jp ? "表示" : "Reveal"}</>}
          </Button>
        </div>
        {showTranscript ? (
          <div className="space-y-4">
            <div className="rounded-xl bg-muted/40 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{jp ? "日本語" : "日本語 Japanese"}</p>
              <p className="jp text-base leading-loose text-foreground">
                <FuriganaText text={item.text} />
              </p>
            </div>
            <div className="rounded-xl bg-muted/20 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{jp ? "英語" : "English"}</p>
              <p className="text-base leading-relaxed text-foreground/90">{item.translation}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {allAnswered
              ? (jp ? "すべての質問に答えました。文字起こしを表示して確認してください。" : "You've answered all questions — reveal the transcript to read along and check the details.")
              : (jp ? "まず聞いて質問に答えてください。準備ができたら文字起こしを表示できます。" : "Listen and answer the questions first. Reveal the transcript when you're ready to check your understanding.")}
          </p>
        )}
      </Card>
    </div>
  );
}
