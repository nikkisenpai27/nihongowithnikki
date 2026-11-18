"use client";

import { useState, useMemo, useCallback } from "react";
import {
  GraduationCap,
  Languages,
  BookOpen,
  SpellCheck,
  Shuffle,
  RotateCcw,
  Check,
  X,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { kanjiData } from "@/lib/data/kanji";
import { vocabData } from "@/lib/data/vocab";
import { grammarData } from "@/lib/data/grammar";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { SectionHeader, LevelBadge } from "../nikki/shared";
import { FuriganaText } from "../nikki/furigana";
import { AudioButton } from "../nikki/audio-button";
import { cleanKun } from "@/lib/data/kanji";
import type { JLPTLevel, QuizType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Question {
  prompt: string;          // main prompt text (may be a kanji or sentence)
  promptIsJapanese?: boolean;
  sub?: string;            // small label
  choices: string[];
  answerIndex: number;
  explanation: string;     // shown after answering
  audioText?: string;      // for audio button
  itemId?: string;         // to update mastery
  kind: "kanji" | "vocab" | "grammar";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickDistractors<T>(pool: T[], correct: T, n: number): T[] {
  const others = shuffle(pool.filter((x) => x !== correct)).slice(0, n);
  return others;
}

type LevelFilter = JLPTLevel;

function buildQuestions(type: QuizType, level: LevelFilter, count: number): Question[] {
  const lvlFilter = (l: JLPTLevel) => l === level;
  const questions: Question[] = [];

  const mkKanjiMeaning = (): Question | null => {
    const pool = kanjiData.filter((k) => lvlFilter(k.level));
    if (pool.length < 4) return null;
    const k = pool[Math.floor(Math.random() * pool.length)];
    const correct = k.meaning[0];
    const distractors = pickDistractors(
      kanjiData.flatMap((x) => x.meaning),
      correct,
      3
    );
    const choices = shuffle([correct, ...distractors]);
    return {
      prompt: k.char,
      promptIsJapanese: true,
      sub: "What does this kanji mean?",
      choices,
      answerIndex: choices.indexOf(correct),
      explanation: `${k.char} (${k.level}): ${k.meaning.join(", ")} ・ on: ${k.onyomi.join(", ") || "—"} ・ kun: ${k.kunyomi.map(cleanKun).join(", ") || "—"}`,
      audioText: k.char,
      itemId: k.id,
      kind: "kanji",
    };
  };

  const mkKanjiReading = (): Question | null => {
    const pool = kanjiData.filter((k) => lvlFilter(k.level) && k.vocab.length > 0);
    if (pool.length < 4) return null;
    const k = pool[Math.floor(Math.random() * pool.length)];
    const v = k.vocab[0];
    const correct = v.reading;
    const distractors = pickDistractors(
      kanjiData.flatMap((x) => x.vocab.map((w) => w.reading)),
      correct,
      3
    );
    const choices = shuffle([correct, ...distractors]);
    return {
      prompt: v.word,
      promptIsJapanese: true,
      sub: `Choose the reading for this word (uses ${k.char})`,
      choices,
      answerIndex: choices.indexOf(correct),
      explanation: `${v.word} = ${v.reading} (${v.meaning})`,
      audioText: v.word,
      itemId: k.id,
      kind: "kanji",
    };
  };

  const mkVocab = (): Question | null => {
    const pool = vocabData.filter((v) => lvlFilter(v.level));
    if (pool.length < 4) return null;
    const v = pool[Math.floor(Math.random() * pool.length)];
    const correct = v.meaning;
    const distractors = pickDistractors(
      vocabData.map((x) => x.meaning),
      correct,
      3
    );
    const choices = shuffle([correct, ...distractors]);
    return {
      prompt: v.word,
      promptIsJapanese: true,
      sub: `${v.partOfSpeech} ・ ${v.theme}`,
      choices,
      answerIndex: choices.indexOf(correct),
      explanation: `${v.word} (${v.reading}) — ${v.meaning} ・ ${v.example.en}`,
      audioText: v.word,
      itemId: v.id,
      kind: "vocab",
    };
  };

  const mkGrammar = (): Question | null => {
    const pool = grammarData.filter((g) => lvlFilter(g.level) && g.examples.length > 0);
    if (pool.length < 4) return null;
    const g = pool[Math.floor(Math.random() * pool.length)];
    const correct = g.point;
    const distractors = pickDistractors(
      grammarData.map((x) => x.point),
      correct,
      3
    );
    const choices = shuffle([correct, ...distractors]);
    const ex = g.examples[0];
    return {
      prompt: ex.en,
      sub: `Which grammar point fits? (${g.category})`,
      choices,
      answerIndex: choices.indexOf(correct),
      explanation: `「${g.point}」 — ${g.meaning} ・ ${ex.jp.replace(/\[[^\]]+\]/g, "")}`,
      audioText: ex.jp,
      itemId: g.id,
      kind: "grammar",
    };
  };

  const generators: Record<Exclude<QuizType, "mixed">, () => Question | null> = {
    "kanji-meaning": mkKanjiMeaning,
    "kanji-reading": mkKanjiReading,
    vocab: mkVocab,
    grammar: mkGrammar,
  };

  const types: Exclude<QuizType, "mixed">[] =
    type === "mixed" ? ["kanji-meaning", "vocab", "grammar", "kanji-reading"] : [type];

  let attempts = 0;
  while (questions.length < count && attempts < count * 8) {
    attempts++;
    const t = types[Math.floor(Math.random() * types.length)];
    const q = generators[t]();
    if (q && !questions.some((x) => x.prompt === q.prompt && x.sub === q.sub)) {
      questions.push(q);
    }
  }
  return questions;
}

const QUIZ_TYPES: { id: QuizType; label: string; jp: string; icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  { id: "kanji-meaning", label: "Kanji → Meaning", jp: "漢字→意味", icon: Languages, desc: "Identify the meaning of a kanji" },
  { id: "kanji-reading", label: "Kanji → Reading", jp: "漢字→読み", icon: Languages, desc: "Choose the correct reading" },
  { id: "vocab", label: "Vocabulary", jp: "単語", icon: BookOpen, desc: "Word to meaning recognition" },
  { id: "grammar", label: "Grammar", jp: "文法", icon: SpellCheck, desc: "Pick the right grammar point" },
  { id: "mixed", label: "Mixed Daily", jp: "総合", icon: Shuffle, desc: "A bit of everything" },
];

type Phase = "setup" | "playing" | "results";

export function QuizView() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [type, setType] = useState<QuizType>("mixed");
  const [level, setLevel] = useState<LevelFilter>("N5");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const addQuizResult = useProgress((s) => s.addQuizResult);
  const setMastery = useProgress((s) => s.setMastery);
  const quizHistory = useProgress((s) => s.quizHistory);
  const showFurigana = useSettings((s) => s.showFurigana);

  const start = useCallback(() => {
    const qs = buildQuestions(type, level, count);
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setSelected(null);
    setPhase("playing");
  }, [type, level, count]);

  const q = questions[current];

  function choose(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = idx;
      return next;
    });
    // update mastery based on correctness
    if (q?.itemId) {
      const correct = idx === q.answerIndex;
      setMastery(q.kind, q.itemId, correct ? "mastered" : "learning");
    }
  }

  function nextQ() {
    if (current + 1 >= questions.length) {
      // finish
      const score = answers.reduce(
        (acc, a, i) => acc + (a === questions[i].answerIndex ? 1 : 0),
        0
      );
      addQuizResult({
        id: `quiz-${Date.now()}`,
        type,
        level,
        score,
        total: questions.length,
        date: new Date().toISOString(),
      });
      setPhase("results");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  const score = answers.reduce(
    (acc, a, i) => acc + (a === questions[i]?.answerIndex ? 1 : 0),
    0
  );

  // ---- SETUP ----
  if (phase === "setup") {
    return (
      <div>
        <SectionHeader
          title="Quiz"
          jp="クイズ"
          icon={GraduationCap}
          description="Test your knowledge across kanji, vocabulary, and grammar. Nikki adapts questions to your chosen level and updates your mastery as you go."
        />
        <Card className="p-5">
          <h3 className="mb-3 text-sm font-bold text-foreground">Choose a quiz type</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {QUIZ_TYPES.map((qt) => {
              const Icon = qt.icon;
              const active = type === qt.id;
              return (
                <button
                  key={qt.id}
                  onClick={() => setType(qt.id)}
                  className={cn(
                    "flex flex-col gap-1 rounded-2xl border p-4 text-left transition-all",
                    active ? "border-primary bg-primary/8 ring-2 ring-primary/30" : "border-border bg-card hover:bg-accent/40"
                  )}
                >
                  <Icon className={cn("h-5 w-5", active ? "text-primary" : "text-muted-foreground")} />
                  <span className="text-sm font-bold text-foreground">{qt.label}</span>
                  <span className="jp text-xs text-muted-foreground">{qt.jp}</span>
                  <span className="text-[11px] text-muted-foreground">{qt.desc}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Level
              </label>
              <ToggleGroup
                type="single"
                value={level}
                onValueChange={(v) => v && setLevel(v as LevelFilter)}
                variant="outline"
                size="sm"
              >
                <ToggleGroupItem value="N5">N5</ToggleGroupItem>
                <ToggleGroupItem value="N4">N4</ToggleGroupItem>
                <ToggleGroupItem value="N3">N3</ToggleGroupItem>
                <ToggleGroupItem value="N2">N2</ToggleGroupItem>
                <ToggleGroupItem value="N1">N1</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Questions
              </label>
              <Select value={String(count)} onValueChange={(v) => setCount(Number(v))}>
                <SelectTrigger className="h-9 w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 15, 20].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} questions</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button className="ml-auto" onClick={start} size="lg">
              <Sparkles className="mr-2 h-4 w-4" /> Start quiz
            </Button>
          </div>
        </Card>

        {quizHistory.length > 0 && (
          <Card className="mt-4 p-5">
            <h3 className="mb-3 text-sm font-bold text-foreground">Recent results</h3>
            <div className="space-y-2">
              {quizHistory.slice(0, 5).map((r) => (
                <div key={r.id} className="flex items-center gap-3 rounded-xl bg-muted/40 px-3 py-2 text-sm">
                  <Trophy className="h-4 w-4 text-warm-yellow" />
                  <span className="font-medium capitalize">{r.type.replace("-", " ")}</span>
                  <LevelBadge level={r.level} />
                  <span className="ml-auto font-bold tabular-nums">
                    {r.score}/{r.total}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(r.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    );
  }

  // ---- RESULTS ----
  if (phase === "results") {
    const pct = Math.round((score / questions.length) * 100);
    const msg =
      pct >= 80 ? "素晴らしい！ Excellent work!" : pct >= 50 ? "よくできました！ Good job!" : "がんばろう！ Keep practicing!";
    return (
      <div>
        <SectionHeader title="Quiz Results" jp="結果" icon={Trophy} />
        <Card className="p-6 text-center">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-warm-yellow/15">
            <Trophy className="h-9 w-9 text-warm-yellow" />
          </div>
          <p className="jp text-2xl font-bold text-foreground">{msg}</p>
          <p className="mt-1 text-4xl font-bold text-primary">
            {score}<span className="text-lg text-muted-foreground">/{questions.length}</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{pct}% correct ・ +{score * 3} XP earned</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button onClick={() => setPhase("setup")}>
              <RotateCcw className="mr-1 h-4 w-4" /> New quiz
            </Button>
            <Button variant="outline" onClick={start}>
              <Shuffle className="mr-1 h-4 w-4" /> Retry same setup
            </Button>
          </div>
        </Card>

        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-bold text-foreground">Review</h3>
          {questions.map((qq, i) => {
            const a = answers[i];
            const correct = a === qq.answerIndex;
            return (
              <div key={i} className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-start gap-2">
                  <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", correct ? "bg-matcha/20 text-matcha" : "bg-destructive/15 text-destructive")}>
                    {correct ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={cn("jp text-base font-medium", qq.promptIsJapanese && "jp")}>
                      {qq.promptIsJapanese ? <FuriganaText text={qq.prompt} showFurigana={showFurigana} /> : qq.prompt}
                    </p>
                    <p className="text-xs text-muted-foreground">{qq.sub}</p>
                    {!correct && (
                      <p className="mt-1 text-xs">
                        <span className="text-destructive">Your answer: {a !== null ? qq.choices[a] : "—"}</span>
                        {" ・ "}
                        <span className="font-semibold text-matcha">Correct: {qq.choices[qq.answerIndex]}</span>
                      </p>
                    )}
                    <p className="mt-1 text-xs text-foreground/70">{qq.explanation}</p>
                  </div>
                  {qq.audioText && <AudioButton text={qq.audioText} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- PLAYING ----
  if (!q) {
    return (
      <div>
        <SectionHeader title="Quiz" jp="クイズ" icon={GraduationCap} />
        <Card className="p-6 text-center">
          <p className="text-sm text-muted-foreground">Not enough data for this quiz setup. Try another level or type.</p>
          <Button className="mt-3" onClick={() => setPhase("setup")}>Back to setup</Button>
        </Card>
      </div>
    );
  }

  const answered = selected !== null;
  const correct = answered && selected === q.answerIndex;

  return (
    <div>
      <SectionHeader
        title="Quiz"
        jp="クイズ"
        icon={GraduationCap}
        action={<Badge variant="secondary">Q{current + 1}/{questions.length}</Badge>}
      />
      <Progress value={((current + (answered ? 1 : 0)) / questions.length) * 100} className="mb-4 h-2" />

      <Card className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{q.sub}</p>
        <div className="mb-5 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary/8 via-card to-card py-8">
          {q.promptIsJapanese ? (
            <FuriganaText text={q.prompt} showFurigana={false} className="jp text-5xl font-bold text-foreground" />
          ) : (
            <p className="px-4 text-center text-lg font-medium text-foreground">{q.prompt}</p>
          )}
          {q.audioText && <AudioButton text={q.audioText} size="md" />}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {q.choices.map((c, i) => {
            const isAnswer = i === q.answerIndex;
            const isChosen = i === selected;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={answered}
                className={cn(
                  "flex items-center gap-2 rounded-xl border-2 p-3 text-left transition-all",
                  !answered && "border-border bg-card hover:border-primary/50 hover:bg-accent/40",
                  answered && isAnswer && "border-matcha bg-matcha/15 text-foreground",
                  answered && isChosen && !isAnswer && "border-destructive bg-destructive/10 text-foreground",
                  answered && !isAnswer && !isChosen && "border-border bg-muted/40 text-muted-foreground opacity-70"
                )}
              >
                <span className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                  answered && isAnswer ? "bg-matcha text-white" :
                  answered && isChosen && !isAnswer ? "bg-destructive text-white" :
                  "bg-muted text-muted-foreground"
                )}>
                  {answered && isAnswer ? <Check className="h-3.5 w-3.5" /> :
                   answered && isChosen && !isAnswer ? <X className="h-3.5 w-3.5" /> :
                   String.fromCharCode(65 + i)}
                </span>
                <span className={cn("text-sm font-medium", q.promptIsJapanese && "jp")}>{c}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={cn("mt-4 rounded-xl p-3 text-sm", correct ? "bg-matcha/10 text-foreground" : "bg-warm-yellow/10 text-foreground")}>
            <p className="font-semibold">{correct ? "正解！ Correct!" : "もう一度！ Not quite."}</p>
            <p className="mt-0.5 text-muted-foreground">{q.explanation}</p>
          </div>
        )}

        <div className="mt-5 flex justify-end">
          <Button onClick={nextQ} disabled={!answered}>
            {current + 1 >= questions.length ? "See results" : "Next question"}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
