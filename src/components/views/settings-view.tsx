"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  Palette,
  Moon,
  Sun,
  Type,
  Volume2,
  Target,
  Sparkles,
  Download,
  Trash2,
  Heart,
  Check,
  PartyPopper,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useSettings, type ColorTheme } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { SectionHeader } from "../nikki/shared";
import { NikkiAvatar } from "../nikki/nikki-avatar";
import { cn } from "@/lib/utils";
import { kanjiData } from "@/lib/data/kanji";
import { vocabData } from "@/lib/data/vocab";
import { grammarData } from "@/lib/data/grammar";
import { storiesData } from "@/lib/data/stories";

const THEMES: { id: ColorTheme; label: string; jp: string; swatch: string; bg: string }[] = [
  { id: "sakura", label: "Sakura", jp: "桜", swatch: "#ff8fab", bg: "#fff9f0" },
  { id: "matcha", label: "Matcha", jp: "茶", swatch: "#6b9b7a", bg: "#fdf6e3" },
  { id: "ocean", label: "Ocean", jp: "海", swatch: "#4a6fa5", bg: "#f3f7fb" },
  { id: "minimal", label: "Minimal", jp: "墨", swatch: "#2e2e2e", bg: "#fafaf7" },
  { id: "night", label: "Night Mode", jp: "夜", swatch: "#b39ddb", bg: "#14132a" },
];

function Row({
  icon: Icon,
  title,
  desc,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {desc && <p className="text-xs text-muted-foreground">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const set = useSettings((s) => s.set);
  const colorTheme = useSettings((s) => s.colorTheme);
  const [goal, setGoal] = useState(15);

  const steps = ["Welcome", "Theme", "Goal", "Ready"];

  return (
    <Card className="overflow-hidden border-primary/30">
      <div className="flex items-center gap-1 bg-primary/8 px-4 py-2">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <span
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold",
                i < step ? "bg-primary text-primary-foreground" :
                i === step ? "bg-primary text-primary-foreground ring-4 ring-primary/20" :
                "bg-muted text-muted-foreground"
              )}
            >
              {i < step ? <Check className="h-3 w-3" /> : i + 1}
            </span>
            <span className={cn("text-[11px]", i === step ? "font-semibold text-foreground" : "text-muted-foreground")}>{s}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px w-4 bg-border" />}
          </div>
        ))}
      </div>

      <div className="p-6">
        {step === 0 && (
          <div className="text-center">
            <NikkiAvatar size={88} withHalo className="mx-auto" />
            <h2 className="mt-4 text-2xl font-bold text-foreground">こんにちは！ I&apos;m Nikki.</h2>
            <p className="jp mt-1 text-lg text-primary">ニキです。よろしくお願いします！</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              I&apos;ll be your friendly guide through JLPT N5 and N4 Japanese. Let&apos;s take 30 seconds
              to set up your perfect study space. Ready?
            </p>
            <Button className="mt-5" onClick={() => setStep(1)}>
              Let&apos;s go! <Sparkles className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="mb-1 text-lg font-bold text-foreground">Pick your vibe</h3>
            <p className="mb-4 text-sm text-muted-foreground">Choose a color theme. You can change it anytime.</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => set("colorTheme", t.id)}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-2xl border-2 p-4 transition-all",
                    colorTheme === t.id ? "border-primary ring-2 ring-primary/20" : "border-border hover:bg-accent/40"
                  )}
                  style={{ backgroundColor: t.bg }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: t.swatch }}>
                    {t.jp}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{t.label}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(0)}>Back</Button>
              <Button onClick={() => setStep(2)}>Next</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="mb-1 text-lg font-bold text-foreground">Set your daily goal</h3>
            <p className="mb-4 text-sm text-muted-foreground">How many minutes a day do you want to study?</p>
            <div className="rounded-2xl bg-muted/40 p-5 text-center">
              <p className="text-4xl font-bold text-primary">{goal}</p>
              <p className="text-xs text-muted-foreground">minutes per day</p>
              <Slider value={[goal]} onValueChange={(v) => setGoal(v[0])} min={5} max={60} step={5} className="mt-4" />
              <p className="mt-2 text-xs text-muted-foreground">
                {goal <= 10 ? "A gentle pace — perfect for building a habit." :
                 goal <= 25 ? "A balanced pace — great steady progress." :
                 "A dedicated pace — you'll move fast!"}
              </p>
            </div>
            <div className="mt-5 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => { setStep(3); }}>Next</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-matcha/15">
              <PartyPopper className="h-8 w-8 text-matcha" />
            </div>
            <h2 className="mt-3 text-2xl font-bold text-foreground">You&apos;re all set!</h2>
            <p className="jp mt-1 text-base text-primary">準備完了！一緒に頑張りましょう！</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Nikki has saved your preferences. Your daily goal is {goal} minutes. Let&apos;s start learning!
            </p>
            <Button
              className="mt-5"
              onClick={() => {
                // commit goal
                useProgress.getState().setDailyGoal(goal);
                useProgress.getState().touchStreak();
                onDone();
              }}
            >
              Start learning <Sparkles className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export function SettingsView() {
  const settings = useSettings();
  const progress = useProgress();
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);

  const isDark =
    settings.mode === "dark" ||
    (settings.mode === "auto" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  function exportProgress() {
    const data = {
      exportedAt: new Date().toISOString(),
      settings: {
        colorTheme: settings.colorTheme,
        mode: settings.mode,
        showFurigana: settings.showFurigana,
        showRomaji: settings.showRomaji,
      },
      progress: {
        kanji: progress.kanji,
        vocab: progress.vocab,
        grammar: progress.grammar,
        storiesRead: progress.storiesRead,
        quizHistory: progress.quizHistory,
        xp: progress.xp,
        streak: progress.streak,
        dailyGoalMinutes: progress.dailyGoalMinutes,
      },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nikki-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-5">
      <SectionHeader
        title="Settings"
        jp="設定"
        icon={SettingsIcon}
        description="Make Nihongo with Nikki truly yours. Pick a theme, tune your reading preferences, and manage your progress."
      />

      {!settings.onboarded && (
        <Onboarding onDone={() => settings.set("onboarded", true)} />
      )}

      {/* Appearance */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Palette className="h-4 w-4 text-primary" /> Appearance
        </h3>
        <p className="mb-2 text-xs text-muted-foreground">Theme & color scheme</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => settings.set("colorTheme", t.id)}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 transition-all",
                settings.colorTheme === t.id ? "border-primary ring-2 ring-primary/20" : "border-border hover:bg-accent/40"
              )}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: t.swatch }}>
                {t.jp}
              </span>
              <span className="text-[11px] font-semibold text-foreground">{t.label}</span>
            </button>
          ))}
        </div>
        <div className="mt-4 divide-y divide-border">
          <Row icon={isDark ? Moon : Sun} title="Dark mode" desc={isDark ? "Easy on the eyes at night" : "Bright and clear"}>
            <Switch checked={isDark} onCheckedChange={(v) => settings.set("mode", v ? "dark" : "light")} />
          </Row>
          <Row icon={Sun} title="Auto (follow system)" desc="Match your device's light/dark setting">
            <Switch checked={settings.mode === "auto"} onCheckedChange={(v) => settings.set("mode", v ? "auto" : (isDark ? "dark" : "light"))} />
          </Row>
        </div>
      </Card>

      {/* Reading preferences */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Type className="h-4 w-4 text-primary" /> Reading Preferences
        </h3>
        <p className="mb-2 text-xs text-muted-foreground">Control how Japanese text is displayed</p>
        <div className="divide-y divide-border">
          <Row icon={Type} title="Furigana" desc="Show reading guides above kanji">
            <Switch checked={settings.showFurigana} onCheckedChange={(v) => settings.set("showFurigana", v)} />
          </Row>
          <Row icon={Type} title="Romaji" desc="Show romanized readings for vocabulary">
            <Switch checked={settings.showRomaji} onCheckedChange={(v) => settings.set("showRomaji", v)} />
          </Row>
          <Row icon={Volume2} title="Sound" desc="Enable Japanese audio (text-to-speech)">
            <Switch checked={settings.soundEnabled} onCheckedChange={(v) => settings.set("soundEnabled", v)} />
          </Row>
          <Row icon={SettingsIcon} title="Study Mode" desc="Distraction-free, hides decorative elements">
            <Switch checked={settings.studyMode} onCheckedChange={(v) => settings.toggle("studyMode")} />
          </Row>
        </div>
      </Card>

      {/* Study */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Target className="h-4 w-4 text-primary" /> Study Goal
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Daily study minutes target</p>
        <div className="rounded-xl bg-muted/40 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Daily goal</span>
            <span className="text-lg font-bold text-primary">{progress.dailyGoalMinutes} min</span>
          </div>
          <Slider
            value={[progress.dailyGoalMinutes]}
            onValueChange={(v) => progress.setDailyGoal(v[0])}
            min={5}
            max={60}
            step={5}
          />
        </div>
      </Card>

      {/* Progress & data */}
      <Card className="p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
          <Sparkles className="h-4 w-4 text-primary" /> Your Progress
        </h3>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-muted/40 p-3 text-center">
            <p className="text-xl font-bold text-primary">{xp.toLocaleString()}</p>
            <p className="text-[10px] text-muted-foreground">Total XP</p>
          </div>
          <div className="rounded-xl bg-muted/40 p-3 text-center">
            <p className="text-xl font-bold text-warm-yellow">{streak}</p>
            <p className="text-[10px] text-muted-foreground">Day streak</p>
          </div>
          <div className="rounded-xl bg-muted/40 p-3 text-center">
            <p className="text-xl font-bold text-matcha">{progress.quizHistory.length}</p>
            <p className="text-[10px] text-muted-foreground">Quizzes taken</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={exportProgress}>
            <Download className="mr-1 h-3.5 w-3.5" /> Export progress
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="mr-1 h-3.5 w-3.5" /> Reset all progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Reset all progress?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will erase your mastery, XP, streak, and quiz history. This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => progress.resetProgress()} className="bg-destructive text-white hover:bg-destructive/90">
                  Yes, reset everything
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>

      {/* About */}
      <Card className="p-5">
        <div className="flex items-start gap-4">
          <NikkiAvatar size={56} withHalo />
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold text-foreground">
              <Heart className="h-4 w-4 fill-primary text-primary" /> About Nikki
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Nihongo with Nikki is a warm, friendly Japanese learning platform focused on JLPT N5 & N4.
              Nikki believes learning should feel kind, visual, and a little playful. いっしょにがんばろう！
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Badge variant="secondary">{kanjiData.length} kanji</Badge>
              <Badge variant="secondary">{vocabData.length} words</Badge>
              <Badge variant="secondary">{grammarData.length} grammar points</Badge>
              <Badge variant="secondary">{storiesData.length} stories</Badge>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
