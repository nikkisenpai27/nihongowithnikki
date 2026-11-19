"use client";

import {
  Languages,
  Type,
  BookOpen,
  SpellCheck,
  BookText,
  FileText,
  Headphones,
  GraduationCap,
  Flame,
  Target,
  ArrowRight,
  Sparkles,
  Quote,
  Instagram,
  Github,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useNav } from "@/lib/stores/nav-store";
import type { ViewKey } from "@/lib/types";
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
  { h: 0, jp: "おやすみ！", en: "Good night!", sub: "Burning the midnight oil? Nikki's impressed — but don't forget to rest too. 深夜[しんや]ですね。" },
  { h: 4, jp: "おはよう！", en: "Good morning!", sub: "Up before the sun! Let's make today count. 早[はや]いですね！" },
  { h: 10, jp: "おはようございます！", en: "Good morning!", sub: "A fresh morning to learn something new. 今日[きょう]もがんばろう！" },
  { h: 12, jp: "こんにちは！", en: "Good afternoon!", sub: "How's your study going today? 元気[げんき]ですか？" },
  { h: 17, jp: "こんにちは！", en: "Good afternoon!", sub: "A great time for a quick review. 復習[ふくしゅう]しましょう！" },
  { h: 19, jp: "こんばんは！", en: "Good evening!", sub: "Evening sessions are perfect for reading a story. 夜[よる]の勉強[べんきょう]ですね。" },
  { h: 22, jp: "おやすみ！", en: "Good night!", sub: "Winding down? Try a short story before bed. ゆっくり休[やす]んでね。" },
];

function getGreeting() {
  const h = new Date().getHours();
  let result = GREETINGS[0];
  for (const g of GREETINGS) {
    if (h >= g.h) result = g;
  }
  return result;
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
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
  { view: "grammar", label: "Grammar", jp: "文法", desc: "N5–N1 points", icon: SpellCheck, tint: "var(--indigo-deep)" },
  { view: "reading", label: "Reading", jp: "読解", desc: "Passages & quizzes", icon: FileText, tint: "var(--matcha)" },
  { view: "listening", label: "Listening", jp: "聴解", desc: "Audio & questions", icon: Headphones, tint: "var(--indigo-deep)" },
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

/** JLPT level metadata for the progress cards. */
const LEVEL_META: {
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  subtitle: string;
  ringTint: string;
}[] = [
  { level: "N5", subtitle: "Foundation level", ringTint: "var(--sakura)" },
  { level: "N4", subtitle: "Next step up", ringTint: "var(--matcha)" },
  { level: "N3", subtitle: "Bridge to intermediate", ringTint: "var(--indigo-deep)" },
  { level: "N2", subtitle: "Pre-advanced", ringTint: "var(--soft-purple)" },
  { level: "N1", subtitle: "Advanced", ringTint: "var(--coral)" },
];

/**
 * Per-level target counts for display.
 * Kanji total: 2200, Vocab total: 10000, Grammar total: 720
 */
const TARGET_COUNTS: Record<string, Record<string, number>> = {
  kanji:   { N5: 100,  N4: 200,  N3: 350,  N2: 350,  N1: 1200 },
  vocab:   { N5: 800,  N4: 700,  N3: 2250, N2: 2250, N1: 4000 },
  grammar: { N5: 80,   N4: 130,  N3: 140,  N2: 200,  N1: 170  },
};

function LevelProgressCard({
  level,
  subtitle,
  ringTint,
  kanji,
  vocab,
  grammar,
  stories,
  kanjiMastery,
  vocabMastery,
  grammarMastery,
  storiesRead,
  storiesData,
}: {
  level: "N5" | "N4" | "N3" | "N2" | "N1";
  subtitle: string;
  ringTint: string;
  kanji: { id: string }[];
  vocab: { id: string }[];
  grammar: { id: string }[];
  stories: { id: string; level: string }[];
  kanjiMastery: Record<string, string>;
  vocabMastery: Record<string, string>;
  grammarMastery: Record<string, string>;
  storiesRead: string[];
  storiesData: { id: string; level: string }[];
}) {
  const masteredIn = (arr: { id: string }[], map: Record<string, string>) =>
    arr.filter((a) => map[a.id] === "mastered").length;

  const kM = masteredIn(kanji, kanjiMastery);
  const vM = masteredIn(vocab, vocabMastery);
  const gM = masteredIn(grammar, grammarMastery);
  const sM = storiesRead.filter((id) => storiesData.find((s) => s.id === id)?.level === level).length;

  // Use target counts (not data lengths) so progress bars show the
  // intended JLPT totals: kanji=2200, vocab=10000, grammar=720
  const kTarget = TARGET_COUNTS.kanji[level];
  const vTarget = TARGET_COUNTS.vocab[level];
  const gTarget = TARGET_COUNTS.grammar[level];
  const sTarget = stories.length;

  const total = kTarget + vTarget + gTarget + sTarget;
  const mastered = kM + vM + gM + sM;
  const pct = total > 0 ? (mastered / total) * 100 : 0;

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-foreground">JLPT {level} Progress</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <ProgressRing value={pct} size={56} stroke={6} label={`${Math.round(pct)}%`} />
      </div>
      <div className="space-y-3">
        <StatBar label="Kanji mastered" mastered={kM} total={kTarget} tint="var(--sakura)" />
        <StatBar label="Vocabulary mastered" mastered={vM} total={vTarget} tint="var(--matcha)" />
        <StatBar label="Grammar mastered" mastered={gM} total={gTarget} tint="var(--indigo-deep)" />
        <StatBar label="Stories read" mastered={sM} total={sTarget} tint="var(--coral)" />
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        {kanji.length + vocab.length + grammar.length} items available
      </p>
    </Card>
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

  // Pre-filter data by JLPT level so we don't re-filter on every render.
  const levelData = (["N5", "N4", "N3", "N2", "N1"] as const).map((lvl) => ({
    level: lvl,
    kanji: kanjiData.filter((k) => k.level === lvl),
    vocab: vocabData.filter((v) => v.level === lvl),
    grammar: grammarData.filter((g) => g.level === lvl),
    stories: storiesData.filter((s) => s.level === lvl),
  }));

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
                {greeting.sub}
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
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Nikki&apos;s tip for today
            </p>
            <p className="mt-1 text-sm text-foreground jp-[span]:inline">{tip}</p>
          </div>
        </div>

        {/* Social links */}
        <div className="relative mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Join Nikki:
          </span>
          <a
            href="https://discord.gg/S8ghkzPErv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#5865F2" }}
          >
            <DiscordIcon className="h-4 w-4" /> Discord Server
          </a>
          <a
            href="https://www.instagram.com/nikkisenpai27/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a
            href="https://github.com/nikkisenpai27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#24292f] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
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

      {/* Level progress — all JLPT levels N5 through N1 */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          JLPT Progress by Level
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEVEL_META.map((meta) => {
            const ld = levelData.find((d) => d.level === meta.level)!;
            return (
              <LevelProgressCard
                key={meta.level}
                level={meta.level}
                subtitle={meta.subtitle}
                ringTint={meta.ringTint}
                kanji={ld.kanji}
                vocab={ld.vocab}
                grammar={ld.grammar}
                stories={ld.stories}
                kanjiMastery={kanjiMastery}
                vocabMastery={vocabMastery}
                grammarMastery={grammarMastery}
                storiesRead={storiesRead}
                storiesData={storiesData}
              />
            );
          })}
        </div>
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
