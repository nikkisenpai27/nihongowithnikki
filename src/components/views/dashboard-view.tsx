"use client";

import {
  Languages,
  Type,
  BookOpen,
  SpellCheck,
  BookText,
  FileText,
  GraduationCap,
  Flame,
  Target,
  ArrowRight,
  Sparkles,
  Quote,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNav, type ViewKey } from "@/lib/stores/nav-store";
import { useProgress, masteryCount } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";
import { kanjiData } from "@/lib/data/kanji";
import { vocabData } from "@/lib/data/vocab";
import { grammarData } from "@/lib/data/grammar";
import { storiesData } from "@/lib/data/stories";
import { NikkiAvatar } from "../nikki/nikki-avatar";
import { ProgressRing } from "../nikki/shared";
import { cn } from "@/lib/utils";

const GREETINGS = [
  { h: 5, jp: "おはよう！", en: "Good morning!" },
  { h: 10, jp: "おはようございます！", en: "Good morning!" },
  { h: 12, jp: "こんにちは！", en: "Good afternoon!" },
  { h: 18, jp: "こんにちは！", en: "Good afternoon!" },
  { h: 22, jp: "こんばんは！", en: "Good evening!" },
  { h: 24, jp: "こんばんは！", en: "Good evening!" },
];

function getGreeting() {
  const h = new Date().getHours();
  return GREETINGS.find((g) => h >= g.h) ?? GREETINGS[0];
}

const NIKKI_TIPS = [
  "Today, try learning 5 new kanji. Little steps every day lead to big progress! いっしょにがんばろう！",
  "Reading out loud helps your brain remember. Try saying each word 3 times, like Nikki does!",
  "Don't worry about mistakes — they're proof you're trying. 間違いは学びのあかしですよ！",
  "Streaks build habits. Even 5 minutes today keeps your streak alive. Let's keep it going!",
  "Kanji are like pictures. Close your eyes and imagine the shape. It really helps memory!",
  "Grammar becomes natural with repetition. Read a short story today — Nikki wrote it for you!",
  "Mix it up! A little kanji, a little vocab, a little grammar. Variety keeps learning fresh.",
];

const QUICK_CARDS: {
  view: ViewKey;
  label: string;
  jp: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tint: string;
}[] = [
  { view: "kanji", label: "Kanji", jp: "漢字", desc: "Heatmap & mastery", icon: Languages, tint: "var(--sakura)" },
  { view: "kana", label: "Kana", jp: "仮名", desc: "Hiragana & Katakana", icon: Type, tint: "var(--coral)" },
  { view: "vocab", label: "Vocabulary", jp: "単語", desc: "Words by theme", icon: BookOpen, tint: "var(--matcha)" },
  { view: "grammar", label: "Grammar", jp: "文法", desc: "N5 & N4 points", icon: SpellCheck, tint: "var(--indigo-deep)" },
  { view: "reading", label: "Reading", jp: "読解", desc: "Passages & quizzes", icon: FileText, tint: "var(--matcha)" },
  { view: "stories", label: "Stories", jp: "物語", desc: "Read with Nikki", icon: BookText, tint: "var(--coral)" },
  { view: "quiz", label: "Quiz", jp: "クイズ", desc: "Test yourself", icon: GraduationCap, tint: "var(--soft-purple)" },
];

function StatBar({
  label,
  mastered,
  total,
  tint,
}: {
  label: string;
  mastered: number;
  total: number;
  tint: string;
}) {
  const pct = total > 0 ? (mastered / total) * 100 : 0;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-medium text-foreground">{label}</span>
        <span className="tabular-nums text-muted-foreground">
          {mastered}/{total}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: tint }}
        />
      </div>
    </div>
  );
}

export function DashboardView() {
  const setView = useNav((s) => s.setView);
  const kanjiMastery = useProgress((s) => s.kanji);
  const vocabMastery = useProgress((s) => s.vocab);
  const grammarMastery = useProgress((s) => s.grammar);
  const storiesRead = useProgress((s) => s.storiesRead);
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const studiedToday = useProgress((s) => s.studiedTodayMinutes);
  const dailyGoal = useProgress((s) => s.dailyGoalMinutes);
  const onboarded = useSettings((s) => s.onboarded);

  const greeting = getGreeting();
  const tip = NIKKI_TIPS[new Date().getDate() % NIKKI_TIPS.length];

  const n5Kanji = kanjiData.filter((k) => k.level === "N5");
  const n4Kanji = kanjiData.filter((k) => k.level === "N4");
  const n5Vocab = vocabData.filter((v) => v.level === "N5");
  const n4Vocab = vocabData.filter((v) => v.level === "N4");
  const n5Grammar = grammarData.filter((g) => g.level === "N5");
  const n4Grammar = grammarData.filter((g) => g.level === "N4");

  const masteredIn = (arr: { id: string }[], map: Record<string, string>) =>
    arr.filter((a) => map[a.id] === "mastered").length;

  const n5KanjiPct =
    (masteredIn(n5Kanji, kanjiMastery) / Math.max(1, n5Kanji.length)) * 100;
  const n4KanjiPct =
    (masteredIn(n4Kanji, kanjiMastery) / Math.max(1, n4Kanji.length)) * 100;

  const totalItems =
    kanjiData.length + vocabData.length + grammarData.length + storiesData.length;
  const totalMastered =
    masteryCount(kanjiMastery, "mastered") +
    masteryCount(vocabMastery, "mastered") +
    masteryCount(grammarMastery, "mastered") +
    storiesRead.length;
  const overallPct = (totalMastered / totalItems) * 100;

  const dailyPct = (studiedToday / Math.max(1, dailyGoal)) * 100;

  return (
    <div className="space-y-6">
      {/* Hero greeting */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/12 via-card to-card p-5 shadow-sm sm:p-7">
        <div className="sakura-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <NikkiAvatar size={72} withHalo />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {greeting.en}
              </p>
              <h2
                className="jp mt-0.5 text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-jp), var(--font-rounded)" }}
              >
                {greeting.jp}
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Welcome back to your Japanese journey. Nikki is here to guide you
                through JLPT N5 & N4 — one kind step at a time.
              </p>
            </div>
          </div>
          <div className="sm:ml-auto">
            <ProgressRing value={overallPct} size={96} stroke={9} label={`${Math.round(overallPct)}%`} />
            <p className="mt-1 text-center text-[11px] text-muted-foreground">Overall progress</p>
          </div>
        </div>

        {/* Nikki tip */}
        <div className="relative mt-5 flex items-start gap-3 rounded-2xl bg-card/70 p-4 ring-1 ring-border">
          <Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Nikki&apos;s tip for today
            </p>
            <p className="mt-1 text-sm text-foreground jp-[span]:inline">{tip}</p>
          </div>
        </div>
      </Card>

      {/* Onboarding nudge */}
      {!onboarded && (
        <Card className="flex flex-col items-start gap-3 border-primary/30 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                New here? Let Nikki set you up!
              </p>
              <p className="text-xs text-muted-foreground">
                A quick 30-second onboarding to pick your level, theme, and goals.
              </p>
            </div>
          </div>
          <Button size="sm" onClick={() => setView("settings")}>
            Start onboarding <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Card>
      )}

      {/* Streak + daily goal + XP */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-warm-yellow/15 text-warm-yellow">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-bold tabular-nums text-foreground">{streak}</p>
              <p className="text-xs text-muted-foreground">day streak</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            {streak === 0
              ? "Study today to start your streak!"
              : streak === 1
                ? "Great start — keep it going tomorrow!"
                : `${streak} days of consistency. 素晴らしい！`}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-matcha/15 text-matcha">
              <Target className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">Daily goal</span>
                <span className="tabular-nums text-muted-foreground">
                  {studiedToday}/{dailyGoal}m
                </span>
              </div>
              <Progress value={dailyPct} className="h-2" />
            </div>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            {dailyPct >= 100
              ? "Goal reached today! よくできました！"
              : `${Math.max(0, dailyGoal - studiedToday)} min to reach today's goal.`}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-purple/15 text-soft-purple">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-bold tabular-nums text-foreground">
                {xp.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">total XP earned</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Level {Math.floor(xp / 100) + 1} ・ {100 - (xp % 100)} XP to next level
          </p>
        </Card>
      </div>

      {/* Quick access */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Jump back in
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {QUICK_CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.view}
                onClick={() => setView(c.view)}
                className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `color-mix(in srgb, ${c.tint} 15%, transparent)`, color: c.tint }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{c.label}</span>
                  <span className="jp block text-xs text-muted-foreground">{c.jp}</span>
                </span>
                <span className="text-[11px] text-muted-foreground">{c.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level progress */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground">JLPT N5 Progress</h3>
              <p className="text-xs text-muted-foreground">Foundation level</p>
            </div>
            <ProgressRing value={n5KanjiPct} size={56} stroke={6} label={`${Math.round(n5KanjiPct)}%`} />
          </div>
          <div className="space-y-3">
            <StatBar label="Kanji mastered" mastered={masteredIn(n5Kanji, kanjiMastery)} total={n5Kanji.length} tint="var(--sakura)" />
            <StatBar label="Vocabulary mastered" mastered={masteredIn(n5Vocab, vocabMastery)} total={n5Vocab.length} tint="var(--matcha)" />
            <StatBar label="Grammar mastered" mastered={masteredIn(n5Grammar, grammarMastery)} total={n5Grammar.length} tint="var(--indigo-deep)" />
            <StatBar label="Stories read" mastered={storiesRead.filter((id) => storiesData.find((s) => s.id === id)?.level === "N5").length} total={storiesData.filter((s) => s.level === "N5").length} tint="var(--coral)" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground">JLPT N4 Progress</h3>
              <p className="text-xs text-muted-foreground">Next step up</p>
            </div>
            <ProgressRing value={n4KanjiPct} size={56} stroke={6} label={`${Math.round(n4KanjiPct)}%`} />
          </div>
          <div className="space-y-3">
            <StatBar label="Kanji mastered" mastered={masteredIn(n4Kanji, kanjiMastery)} total={n4Kanji.length} tint="var(--sakura)" />
            <StatBar label="Vocabulary mastered" mastered={masteredIn(n4Vocab, vocabMastery)} total={n4Vocab.length} tint="var(--matcha)" />
            <StatBar label="Grammar mastered" mastered={masteredIn(n4Grammar, grammarMastery)} total={n4Grammar.length} tint="var(--indigo-deep)" />
            <StatBar label="Stories read" mastered={storiesRead.filter((id) => storiesData.find((s) => s.id === id)?.level === "N4").length} total={storiesData.filter((s) => s.level === "N4").length} tint="var(--coral)" />
          </div>
        </Card>
      </div>

      {/* Continue reading */}
      <Card className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">Continue with a story</h3>
          <Button variant="ghost" size="sm" onClick={() => setView("stories")}>
            All stories <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scroll-pretty">
          {storiesData.slice(0, 6).map((s) => {
            const read = storiesRead.includes(s.id);
            return (
              <button
                key={s.id}
                onClick={() => setView("stories")}
                className={cn(
                  "flex w-56 shrink-0 flex-col gap-2 rounded-xl border bg-card p-3 text-left transition-all hover:shadow-md",
                  read ? "border-matcha/40" : "border-border"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="jp text-sm font-bold text-foreground">{s.title.replace(/\[[^\]]+\]/g, "")}</span>
                  {read && <span className="text-[10px] font-bold text-matcha">READ</span>}
                </div>
                <span className="text-[11px] text-muted-foreground line-clamp-2">{s.summary}</span>
                <div className="flex items-center gap-1.5">
                  <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-bold", s.level === "N5" ? "bg-sakura/15 text-sakura" : "bg-matcha/15 text-matcha")}>
                    {s.level}
                  </span>
                  <span className="text-[10px] text-muted-foreground">~{s.estMinutes} min</span>
                </div>
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
