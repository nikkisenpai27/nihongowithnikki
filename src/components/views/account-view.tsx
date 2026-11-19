"use client";

import { useState, useRef, useEffect } from "react";
import {
  User as UserIcon,
  Camera,
  Image as ImageIcon,
  FileText,
  Download,
  Sparkles,
  Flame,
  TrendingUp,
  BookOpen,
  Languages,
  Trophy,
  Palette,
  Type,
  Volume2,
  Check,
  Gauge,
  Target,
  BookText,
  GraduationCap,
  Clock,
  Edit3,
  Save,
  Mail,
  LogOut,
  Wallpaper,
  Upload,
  X,
  Eye,
  Sparkle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { SectionHeader } from "../nikki/shared";
import { NikkiAvatar } from "../nikki/nikki-avatar";
import { useSettings, JP_FONT_OPTIONS, BACKGROUND_PRESETS, type ColorTheme, type JpFont, type BackgroundMode, type BackgroundPreset } from "@/lib/stores/settings-store";
import { useProgress } from "@/lib/stores/progress-store";
import { useJapaneseAudio } from "../nikki/use-japanese-audio";
import { LEVEL_COLORS } from "@/lib/data/kanji";
import { kanjiData } from "@/lib/data/kanji";
import { vocabData } from "@/lib/data/vocab";
import { grammarData } from "@/lib/data/grammar";
import { storiesData } from "@/lib/data/stories";
import { listeningData } from "@/lib/data/listening";
import { readingData } from "@/lib/data/reading";
import { cn } from "@/lib/utils";

const THEMES: { id: ColorTheme; label: string; jp: string; swatch: string; gradient?: boolean }[] = [
  { id: "sakura", label: "Sakura", jp: "桜", swatch: "#ff8fab" },
  { id: "matcha", label: "Matcha", jp: "茶", swatch: "#6b9b7a" },
  { id: "ocean", label: "Ocean", jp: "海", swatch: "#4a6fa5" },
  { id: "minimal", label: "Minimal", jp: "墨", swatch: "#2e2e2e" },
  { id: "night", label: "Night", jp: "夜", swatch: "#b39ddb" },
  { id: "tokyo-night", label: "Tokyo Night", jp: "東京", swatch: "#7aa2f7" },
  { id: "lavender", label: "Lavender", jp: "薫", swatch: "#9d7bd8" },
  { id: "rainbow", label: "Rainbow", jp: "虹", swatch: "linear-gradient(135deg,#ff6b6b,#f6c453,#9ece6a,#7aa2f7,#bb9af7)", gradient: true },
];

export function AccountView() {
  const settings = useSettings();
  const progress = useProgress();
  const [pfp, setPfp] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const wallpaperRef = useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = useState<{ name: string; email: string; provider?: string } | null>(null);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [savedName, setSavedName] = useState(false);

  // Reload user info from localStorage (called after name change, etc.)
  function reloadUser() {
    try {
      const stored = localStorage.getItem("nikki-user");
      if (stored) {
        const u = JSON.parse(stored);
        setUserInfo({ name: u.name || "Learner", email: u.email || "", provider: u.provider || "credentials" });
      } else {
        setUserInfo({ name: "Guest", email: "", provider: "guest" });
      }
    } catch {
      setUserInfo({ name: "Guest", email: "", provider: "guest" });
    }
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem("nikki-pfp");
      if (stored) setPfp(stored);
    } catch { /* ignore */ }
    reloadUser();
    // Load Japanese voices
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const load = () => {
        const all = window.speechSynthesis.getVoices();
        const jp = all.filter((v) => v.lang.startsWith("ja"));
        setAvailableVoices(jp.length > 0 ? jp : all.slice(0, 5));
      };
      load();
      window.speechSynthesis.onvoiceschanged = load;
    }
  }, []);

  function handlePfpUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2_000_000) { alert("Image must be under 2MB"); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setPfp(dataUrl);
      try { localStorage.setItem("nikki-pfp", dataUrl); } catch { /* ignore */ }
    };
    reader.readAsDataURL(file);
  }

  function handleWallpaperUpload(file: File) {
    if (!file.type.startsWith("image/")) { alert("Please choose an image file"); return; }
    if (file.size > 1_500_000) {
      alert("Wallpaper is too large — please use an image under 1.5MB (try resizing or compressing).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      settings.set("backgroundMode", "custom");
      settings.set("customBackground", dataUrl);
    };
    reader.onerror = () => alert("Could not read that image — please try another file.");
    reader.readAsDataURL(file);
  }

  function saveName() {
    if (!nameInput.trim()) return;
    try {
      const stored = localStorage.getItem("nikki-user");
      if (stored) {
        const u = JSON.parse(stored);
        u.name = nameInput.trim();
        localStorage.setItem("nikki-user", JSON.stringify(u));
      }
    } catch { /* ignore */ }
    setEditingName(false);
    setSavedName(true);
    reloadUser();
    setTimeout(() => setSavedName(false), 2000);
  }

  function handleLogout() {
    fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    localStorage.removeItem("nikki-user");
    localStorage.removeItem("nikki-pfp");
    window.location.reload();
  }

  function handleGoogleReconnect() {
    fetch("/api/auth/google", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("nikki-user", JSON.stringify(data.user));
          reloadUser();
        }
      })
      .catch(() => {});
  }

  const isGoogleUser = userInfo?.provider === "google";
  const isGuest = !userInfo || userInfo.provider === "guest" || userInfo.email === "";

  function removePfp() {
    setPfp(null);
    try { localStorage.removeItem("nikki-pfp"); } catch { /* ignore */ }
  }

  // Progress stats
  const kanjiMastered = Object.values(progress.kanji).filter((v) => v === "mastered").length;
  const kanjiLearning = Object.values(progress.kanji).filter((v) => v === "learning").length;
  const vocabMastered = Object.values(progress.vocab).filter((v) => v === "mastered").length;
  const vocabLearning = Object.values(progress.vocab).filter((v) => v === "learning").length;
  const grammarMastered = Object.values(progress.grammar).filter((v) => v === "mastered").length;
  const storiesRead = progress.storiesRead.length;
  const quizzesTaken = progress.quizHistory.length;
  const avgScore = quizzesTaken > 0
    ? Math.round(progress.quizHistory.reduce((a, q) => a + (q.score / q.total) * 100, 0) / quizzesTaken)
    : 0;
  const level = Math.floor(progress.xp / 100) + 1;
  const xpToNext = 100 - (progress.xp % 100);
  const totalMastered = kanjiMastered + vocabMastered + grammarMastered + storiesRead;
  const overallPct = Math.round((totalMastered / (kanjiData.length + vocabData.length + grammarData.length + storiesData.length)) * 100);

  // Use raw counts (before dedup) for display
  const totalKanjiCount = 2200;
  const totalVocabCount = 10000;
  const totalGrammarCount = grammarData.length;
  const totalStoriesCount = storiesData.length;
  const totalListeningCount = listeningData.length;
  const totalReadingCount = readingData.length;

  function downloadImage() {
    const canvas = document.createElement("canvas");
    canvas.width = 800; canvas.height = 1100;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    ctx.fillStyle = "#fff9f0"; ctx.fillRect(0, 0, 800, 1100);
    // Header
    ctx.fillStyle = "#ff8fab"; ctx.fillRect(0, 0, 800, 130);
    ctx.fillStyle = "#fff"; ctx.font = "bold 36px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Nihongo with Nikki", 400, 55);
    ctx.font = "18px sans-serif"; ctx.fillText("Progress Report", 400, 85);
    ctx.font = "14px sans-serif"; ctx.fillText(new Date().toLocaleDateString(), 400, 110);
    // User info
    ctx.textAlign = "left"; ctx.fillStyle = "#3d2b2e";
    ctx.font = "bold 28px sans-serif"; ctx.fillText(userInfo?.name || "Learner", 50, 190);
    ctx.font = "16px sans-serif"; ctx.fillStyle = "#9a7177";
    ctx.fillText(userInfo?.email || "Guest", 50, 215);
    ctx.font = "bold 20px sans-serif"; ctx.fillStyle = "#ff8fab";
    ctx.fillText(`Level ${level} ・ ${progress.xp} XP`, 50, 245);
    // Stats
    const stats: [string, string][] = [
      ["Total XP", progress.xp.toLocaleString()],
      ["Day Streak", String(progress.streak)],
      ["Level", String(level)],
      ["Overall Progress", `${overallPct}%`],
      ["Kanji Mastered", `${kanjiMastered}/${totalKanjiCount}`],
      ["Vocab Mastered", `${vocabMastered}/${totalVocabCount}`],
      ["Grammar Mastered", `${grammarMastered}/${totalGrammarCount}`],
      ["Stories Read", `${storiesRead}/${totalStoriesCount}`],
      ["Listening Done", `${listeningData.length} available`],
      ["Reading Passages", `${readingData.length} available`],
      ["Quizzes Taken", String(quizzesTaken)],
      ["Avg Quiz Score", `${avgScore}%`],
    ];
    stats.forEach(([label, value], i) => {
      const y = 290 + i * 62;
      ctx.fillStyle = i % 2 === 0 ? "#ffe4ec" : "#f3dde6";
      ctx.fillRect(50, y - 22, 700, 45);
      ctx.fillStyle = "#9a7177"; ctx.font = "14px sans-serif"; ctx.fillText(label, 70, y);
      ctx.fillStyle = "#3d2b2e"; ctx.font = "bold 18px sans-serif";
      ctx.textAlign = "right"; ctx.fillText(value, 720, y); ctx.textAlign = "left";
    });
    ctx.fillStyle = "#9a7177"; ctx.font = "12px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Generated by Nihongo with Nikki", 400, 1070);
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a"); a.href = url;
    a.download = `nikki-progress-${new Date().toISOString().slice(0, 10)}.png`; a.click();
  }

  function downloadPDF() {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`<!DOCTYPE html><html><head><title>Nikki Progress</title><style>
    body{font-family:sans-serif;background:#fff9f0;margin:0;padding:40px;color:#3d2b2e}
    .h{background:#ff8fab;color:#fff;padding:30px;border-radius:16px;text-align:center;margin-bottom:30px}
    .h h1{margin:0;font-size:28px}.h p{margin:5px 0 0;opacity:.9}
    .u{margin-bottom:30px}.u h2{margin:0;font-size:22px}.u p{margin:4px 0 0;color:#9a7177}
    .lv{font-size:18px;color:#ff8fab;font-weight:bold;margin-top:8px}
    .s{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .st{background:#fff;border:1px solid #f3dde6;border-radius:12px;padding:16px;display:flex;justify-content:space-between}
    .sl{font-size:14px;color:#9a7177}.sv{font-size:20px;font-weight:bold;color:#ff8fab}
    .f{text-align:center;margin-top:30px;color:#9a7177;font-size:12px}
    </style></head><body>
    <div class="h"><h1>Nihongo with Nikki</h1><p>Progress Report ・ ${new Date().toLocaleDateString()}</p></div>
    <div class="u"><h2>${userInfo?.name||"Learner"}</h2><p>${userInfo?.email||"Guest"}</p><div class="lv">Level ${level} ・ ${progress.xp} XP ・ ${progress.streak} day streak</div></div>
    <div class="s">${[
      ["Total XP",progress.xp.toLocaleString()],["Streak",String(progress.streak)],["Level",String(level)],["Overall",`${overallPct}%`],
      ["Kanji",`${kanjiMastered}/${totalKanjiCount}`],["Vocab",`${vocabMastered}/${totalVocabCount}`],
      ["Grammar",`${grammarMastered}/${totalGrammarCount}`],["Stories",`${storiesRead}/${totalStoriesCount}`],
      ["Quizzes",String(quizzesTaken)],["Avg Score",`${avgScore}%`],
      ["Listening",`${listeningData.length}`],["Reading",`${readingData.length}`],
    ].map(([l,v])=>`<div class="st"><span class="sl">${l}</span><span class="sv">${v}</span></div>`).join("")}</div>
    <div class="f">Generated by Nihongo with Nikki</div></body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 300);
  }

  const isDark = settings.mode === "dark" || (settings.mode === "auto" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="space-y-5">
      <SectionHeader
        title="Account"
        jp="アカウント"
        icon={UserIcon}
        description="Your profile, progress, themes, fonts, and voice settings — all in one place."
      />

      {/* Profile + PFP */}
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/10 via-card to-card p-5">
        <div className="sakura-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative flex items-center gap-4">
          <div className="relative shrink-0">
            {pfp ? (
              <img src={pfp} alt="Profile" className="h-24 w-24 rounded-full object-cover ring-4 ring-primary/30" />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 ring-4 ring-primary/30">
                <UserIcon className="h-10 w-10 text-primary" />
              </div>
            )}
            <button onClick={() => fileRef.current?.click()} className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform" aria-label="Upload photo">
              <Camera className="h-4 w-4" />
            </button>
            <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={handlePfpUpload} className="hidden" />
          </div>
          <div className="min-w-0 flex-1">
            {/* Name with edit button */}
            {editingName ? (
              <div className="flex items-center gap-2">
                <Input
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") saveName(); if (e.key === "Escape") setEditingName(false); }}
                  placeholder="Your name"
                  className="h-9 max-w-[200px]"
                  autoFocus
                />
                <Button size="sm" onClick={saveName} className="gap-1">
                  <Save className="h-3.5 w-3.5" /> Save
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setEditingName(false)}>Cancel</Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-foreground">{userInfo?.name || "Learner"}</h2>
                {!isGuest && (
                  <button
                    onClick={() => { setNameInput(userInfo?.name || ""); setEditingName(true); }}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    aria-label="Edit name"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                  </button>
                )}
                {savedName && (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-matcha">
                    <Check className="h-3.5 w-3.5" /> Saved!
                  </span>
                )}
              </div>
            )}
            {/* Email with provider badge */}
            <div className="mt-0.5 flex items-center gap-2">
              {isGoogleUser ? (
                <Badge className="gap-1 bg-[#4285F4]/15 text-[#4285F4]">
                  <svg viewBox="0 0 24 24" className="h-3 w-3"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Google
                </Badge>
              ) : isGuest ? (
                <Badge variant="outline" className="text-[10px]">Guest</Badge>
              ) : (
                <Badge variant="outline" className="gap-1 text-[10px]"><Mail className="h-3 w-3" /> Email</Badge>
              )}
              <p className="text-sm text-muted-foreground">{userInfo?.email || "Guest user"}</p>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge className="gap-1 bg-primary/15 text-primary"><Sparkles className="h-3 w-3" /> Level {level}</Badge>
              <Badge className="gap-1 bg-warm-yellow/15 text-warm-yellow"><Flame className="h-3 w-3" /> {progress.streak}d streak</Badge>
              <Badge className="gap-1 bg-matcha/15 text-matcha"><TrendingUp className="h-3 w-3" /> {overallPct}% complete</Badge>
              <Badge variant="outline" className="text-[10px]">{xpToNext} XP to Level {level + 1}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {pfp && <button onClick={removePfp} className="text-xs text-muted-foreground hover:text-destructive underline">Remove photo</button>}
              {isGuest && (
                <button onClick={handleGoogleReconnect} className="inline-flex items-center gap-1.5 rounded-full bg-[#4285F4] px-3 py-1.5 text-xs font-semibold text-white hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Connect Google
                </button>
              )}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive underline">
                    <LogOut className="h-3 w-3" /> Logout
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Logout?</AlertDialogTitle>
                    <AlertDialogDescription>Your progress is saved locally and will be restored when you log back in.</AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout} className="bg-destructive text-white hover:bg-destructive/90">Logout</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div className="hidden text-center sm:block">
            <div className="relative h-20 w-20">
              <svg className="-rotate-90" width="80" height="80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="var(--muted)" strokeWidth="6" />
                <circle cx="40" cy="40" r="34" fill="none" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" strokeDasharray={2 * Math.PI * 34} strokeDashoffset={2 * Math.PI * 34 * (1 - overallPct / 100)} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">{overallPct}%</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">Overall</p>
          </div>
        </div>
      </Card>

      {/* Progress Stats Grid */}
      <Card className="p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
          <TrendingUp className="h-4 w-4 text-primary" /> Progress Stats
          <span className="jp font-normal text-muted-foreground">進捗</span>
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: Sparkles, label: "Total XP", value: progress.xp.toLocaleString(), tint: "var(--soft-purple)" },
            { icon: Flame, label: "Streak", value: `${progress.streak}d`, tint: "var(--warm-yellow)" },
            { icon: TrendingUp, label: "Level", value: String(level), tint: "var(--matcha)" },
            { icon: Target, label: "Overall", value: `${overallPct}%`, tint: "var(--sakura)" },
            { icon: Languages, label: "Kanji", value: `${kanjiMastered}/${totalKanjiCount}`, tint: "var(--sakura)" },
            { icon: BookOpen, label: "Vocab", value: `${vocabMastered}/${totalVocabCount}`, tint: "var(--matcha)" },
            { icon: FileText, label: "Grammar", value: `${grammarMastered}/${totalGrammarCount}`, tint: "var(--indigo-deep)" },
            { icon: BookText, label: "Stories", value: `${storiesRead}/${totalStoriesCount}`, tint: "var(--coral)" },
            { icon: Volume2, label: "Listening", value: `${totalListeningCount}`, tint: "var(--indigo-deep)" },
            { icon: BookOpen, label: "Reading", value: `${totalReadingCount}`, tint: "var(--matcha)" },
            { icon: Trophy, label: "Quizzes", value: String(quizzesTaken), tint: "var(--warm-yellow)" },
            { icon: Gauge, label: "Avg Score", value: `${avgScore}%`, tint: "var(--matcha)" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl border border-border bg-card p-3 text-center">
              <span className="mb-1 flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${s.tint} 15%, transparent)`, color: s.tint }}>
                <s.icon className="h-4 w-4" />
              </span>
              <span className="text-base font-bold text-foreground">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Level progress bar */}
        <div className="mt-4 rounded-xl bg-muted/40 p-3">
          <div className="mb-1 flex items-center justify-between text-xs">
            <span className="font-medium text-foreground">Level {level} Progress</span>
            <span className="text-muted-foreground">{100 - xpToNext}/100 XP</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${100 - xpToNext}%` }} />
          </div>
        </div>
      </Card>

      {/* Theme & Color */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Palette className="h-4 w-4 text-primary" /> Theme & Color
          <span className="jp font-normal text-muted-foreground">テーマ</span>
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Choose your color scheme — including the animated Rainbow theme</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {THEMES.map((t) => (
            <button key={t.id} onClick={() => settings.set("colorTheme", t.id)} className={cn("flex flex-col items-center gap-1.5 rounded-xl border-2 p-3 transition-all", settings.colorTheme === t.id ? "border-primary ring-2 ring-primary/20" : "border-border hover:bg-accent/40")}>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                style={t.gradient ? { backgroundImage: t.swatch } : { backgroundColor: t.swatch }}
              >
                {t.jp}
              </span>
              <span className="text-[11px] font-semibold text-foreground text-center leading-tight">{t.label}</span>
              {t.id === "rainbow" && (
                <span className="flex items-center gap-0.5 text-[9px] font-medium text-muted-foreground">
                  <Sparkle className="h-2.5 w-2.5" /> animated
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isDark ? <Flame className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            <span className="text-sm font-medium text-foreground">Dark mode</span>
          </div>
          <Switch checked={isDark} onCheckedChange={(v) => settings.set("mode", v ? "dark" : "light")} />
        </div>
      </Card>

      {/* Background & Wallpaper */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Wallpaper className="h-4 w-4 text-primary" /> Background & Wallpaper
          <span className="jp font-normal text-muted-foreground">壁紙</span>
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Pick a built-in wallpaper or upload your own — applied behind the whole app</p>

        {/* Mode toggle */}
        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Background mode</label>
          <ToggleGroup
            type="single"
            value={settings.backgroundMode}
            onValueChange={(v) => { if (v) settings.set("backgroundMode", v as BackgroundMode); }}
            className="justify-start"
          >
            <ToggleGroupItem value="none" className="text-xs">None</ToggleGroupItem>
            <ToggleGroupItem value="preset" className="text-xs">Preset gallery</ToggleGroupItem>
            <ToggleGroupItem value="custom" className="text-xs">Upload my own</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Preset gallery — scrollable carousel */}
        {settings.backgroundMode === "preset" && (
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Wallpaper Gallery ({BACKGROUND_PRESETS.length} wallpapers)</label>
              <span className="text-[10px] text-muted-foreground">← scroll →</span>
            </div>
            {/* Horizontal scrollable gallery */}
            <div className="flex gap-3 overflow-x-auto pb-3 scroll-pretty snap-x snap-mandatory">
              {BACKGROUND_PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => settings.set("backgroundPreset", p.id)}
                  className={cn(
                    "group relative h-40 w-64 shrink-0 snap-start overflow-hidden rounded-xl border-2 transition-all",
                    settings.backgroundPreset === p.id ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/40"
                  )}
                >
                  <img src={p.url} alt={p.label} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2">
                    <span className="text-xs font-bold text-white drop-shadow">{p.label}</span>
                    <span className="jp text-xs font-medium text-white/80 drop-shadow">{p.jp}</span>
                  </div>
                  {settings.backgroundPreset === p.id && (
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                  <span className="absolute left-2 top-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
                    {BACKGROUND_PRESETS.findIndex(x => x.id === p.id) + 1}/{BACKGROUND_PRESETS.length}
                  </span>
                </button>
              ))}
            </div>
            {/* Quick select grid below the carousel for easy access */}
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground">Show all as grid</summary>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
                {BACKGROUND_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => settings.set("backgroundPreset", p.id)}
                    className={cn(
                      "group relative aspect-video overflow-hidden rounded-lg border transition-all",
                      settings.backgroundPreset === p.id ? "border-primary ring-1 ring-primary/30" : "border-border hover:border-primary/40"
                    )}
                    title={p.label}
                  >
                    <img src={p.url} alt={p.label} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    {settings.backgroundPreset === p.id && (
                      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </details>
          </div>
        )}

        {/* Custom upload */}
        {settings.backgroundMode === "custom" && (
          <div className="mb-4">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upload wallpaper</label>
            <div
              onClick={() => wallpaperRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-primary", "bg-primary/5"); }}
              onDragLeave={(e) => { e.currentTarget.classList.remove("border-primary", "bg-primary/5"); }}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove("border-primary", "bg-primary/5");
                const file = e.dataTransfer.files?.[0];
                if (file) handleWallpaperUpload(file);
              }}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border p-6 text-center transition-colors hover:border-primary/50 hover:bg-accent/30"
            >
              {settings.customBackground ? (
                <div className="flex w-full flex-col items-center gap-3">
                  <img src={settings.customBackground} alt="Your wallpaper" className="max-h-40 w-full max-w-md rounded-lg object-cover shadow" />
                  <p className="text-xs font-medium text-matcha flex items-center gap-1"><Check className="h-3 w-3" /> Wallpaper uploaded — click to replace</p>
                </div>
              ) : (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Click to upload or drag & drop</p>
                  <p className="text-[11px] text-muted-foreground">PNG, JPG, or WebP — keep under 1.5MB for best performance</p>
                </>
              )}
              <input
                ref={wallpaperRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/gif,image/bmp"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleWallpaperUpload(f); }}
                className="hidden"
              />
            </div>
            {settings.customBackground && (
              <Button size="sm" variant="outline" onClick={() => settings.set("customBackground", null)} className="mt-2 gap-2">
                <X className="h-3.5 w-3.5" /> Remove wallpaper
              </Button>
            )}
          </div>
        )}

        {/* Opacity + blur sliders — shown only when there's an actual image to tune */}
        {(() => {
          const hasImage =
            settings.backgroundMode === "preset" ||
            (settings.backgroundMode === "custom" && !!settings.customBackground);
          if (!hasImage) return null;
          return (
          <div className="space-y-4 rounded-xl bg-muted/40 p-3">
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Eye className="h-3 w-3" /> Opacity
                </label>
                <span className="text-xs font-medium text-foreground tabular-nums">{settings.backgroundOpacity}%</span>
              </div>
              <Slider
                value={[settings.backgroundOpacity]}
                onValueChange={(v) => settings.set("backgroundOpacity", v[0])}
                min={5} max={100} step={5}
              />
            </div>
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Sparkle className="h-3 w-3" /> Blur
                </label>
                <span className="text-xs font-medium text-foreground tabular-nums">{settings.backgroundBlur}px</span>
              </div>
              <Slider
                value={[settings.backgroundBlur]}
                onValueChange={(v) => settings.set("backgroundBlur", v[0])}
                min={0} max={20} step={1}
              />
            </div>
            <p className="text-[10px] text-muted-foreground">Tip: lower opacity + slight blur keeps text crisp while adding atmosphere</p>
          </div>
          );
        })()}
      </Card>

      {/* Font Settings */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Type className="h-4 w-4 text-primary" /> Japanese Font
          <span className="jp font-normal text-muted-foreground">フォント</span>
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Pick the font for all Japanese text</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {JP_FONT_OPTIONS.map((f) => (
            <button key={f.id} onClick={() => settings.set("jpFont", f.id)} className={cn("flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all", settings.jpFont === f.id ? "border-primary ring-2 ring-primary/20" : "border-border hover:bg-accent/40")}>
              <span className="jp text-2xl font-bold text-foreground" style={{ fontFamily: `var(--font-${f.id})` }}>{f.sample}</span>
              <span className="text-[10px] font-semibold text-foreground">{f.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Voice Settings */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Volume2 className="h-4 w-4 text-primary" /> Voice & Audio
          <span className="jp font-normal text-muted-foreground">音声</span>
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Control how Nikki pronounces Japanese</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Audio enabled</span>
            </div>
            <Switch checked={settings.soundEnabled} onCheckedChange={(v) => settings.set("soundEnabled", v)} />
          </div>
          {availableVoices.length > 0 && (
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Voice selection</label>
              <Select value={localStorage.getItem("nikki-voice") || "default"} onValueChange={(v) => {
                try { localStorage.setItem("nikki-voice", v); } catch { /* ignore */ }
                // Test the voice
                if (typeof window !== "undefined" && "speechSynthesis" in window && settings.soundEnabled) {
                  const u = new SpeechSynthesisUtterance("こんにちは");
                  u.lang = "ja-JP";
                  if (v !== "default") {
                    const voice = availableVoices.find((vc) => vc.name === v);
                    if (voice) u.voice = voice;
                  }
                  window.speechSynthesis.cancel();
                  window.speechSynthesis.speak(u);
                }
              }}>
                <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                <SelectContent className="max-h-60">
                  <SelectItem value="default">Default Japanese voice</SelectItem>
                  {availableVoices.map((v) => (
                    <SelectItem key={v.name} value={v.name}>{v.name} ({v.lang})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Speech speed</label>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Slow</span>
              <Slider
                value={[Number(localStorage.getItem("nikki-voice-rate")) || 90]}
                onValueChange={(v) => { try { localStorage.setItem("nikki-voice-rate", String(v[0])); } catch { /* ignore */ } }}
                min={50} max={120} step={5}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">Fast</span>
              <Button size="sm" variant="outline" onClick={() => {
                if (typeof window !== "undefined" && "speechSynthesis" in window && settings.soundEnabled) {
                  const u = new SpeechSynthesisUtterance("こんにちは、ニキです。");
                  u.lang = "ja-JP";
                  u.rate = (Number(localStorage.getItem("nikki-voice-rate")) || 90) / 100;
                  const vName = localStorage.getItem("nikki-voice");
                  if (vName && vName !== "default") {
                    const voice = availableVoices.find((vc) => vc.name === vName);
                    if (voice) u.voice = voice;
                  }
                  window.speechSynthesis.cancel();
                  window.speechSynthesis.speak(u);
                }
              }}>
                <Volume2 className="mr-1 h-3 w-3" /> Test
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Reading Preferences */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <BookOpen className="h-4 w-4 text-primary" /> Reading Preferences
          <span className="jp font-normal text-muted-foreground">読み設定</span>
        </h3>
        <div className="mt-3 divide-y divide-border">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <Type className="h-4 w-4 text-muted-foreground" />
              <div><p className="text-sm font-medium text-foreground">Furigana</p><p className="text-xs text-muted-foreground">Show kanji readings</p></div>
            </div>
            <Switch checked={settings.showFurigana} onCheckedChange={(v) => settings.set("showFurigana", v)} />
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <Type className="h-4 w-4 text-muted-foreground" />
              <div><p className="text-sm font-medium text-foreground">Romaji</p><p className="text-xs text-muted-foreground">Show romanized text</p></div>
            </div>
            <Switch checked={settings.showRomaji} onCheckedChange={(v) => settings.set("showRomaji", v)} />
          </div>
        </div>
      </Card>

      {/* Export */}
      <Card className="p-5">
        <h3 className="mb-1 flex items-center gap-2 text-sm font-bold text-foreground">
          <Download className="h-4 w-4 text-primary" /> Export Progress
          <span className="jp font-normal text-muted-foreground">出力</span>
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">Download your progress in different formats</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="outline" onClick={downloadImage} className="gap-2">
            <ImageIcon className="h-3.5 w-3.5" /> Download Image
          </Button>
          <Button size="sm" variant="outline" onClick={downloadPDF} className="gap-2">
            <FileText className="h-3.5 w-3.5" /> Download PDF
          </Button>
          <Button size="sm" variant="outline" onClick={() => {
            const data = { exportedAt: new Date().toISOString(), user: userInfo, progress: { kanji: progress.kanji, vocab: progress.vocab, grammar: progress.grammar, storiesRead: progress.storiesRead, quizHistory: progress.quizHistory, xp: progress.xp, streak: progress.streak } };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a"); a.href = url;
            a.download = `nikki-progress-${new Date().toISOString().slice(0, 10)}.json`; a.click();
            URL.revokeObjectURL(url);
          }} className="gap-2">
            <Download className="h-3.5 w-3.5" /> Export JSON
          </Button>
        </div>
      </Card>

      {/* Content overview */}
      <Card className="p-5">
        <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
          <GraduationCap className="h-4 w-4 text-primary" /> Content Overview
          <span className="jp font-normal text-muted-foreground">コンテンツ</span>
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            { label: "Kanji", jp: "漢字", count: totalKanjiCount, icon: Languages, levels: "N5–N1", tint: "var(--sakura)" },
            { label: "Vocabulary", jp: "単語", count: totalVocabCount, icon: BookOpen, levels: "N5–N1", tint: "var(--matcha)" },
            { label: "Grammar", jp: "文法", count: totalGrammarCount, icon: FileText, levels: "N5–N1", tint: "var(--indigo-deep)" },
            { label: "Stories", jp: "物語", count: totalStoriesCount, icon: BookText, levels: "N5–N1", tint: "var(--coral)" },
            { label: "Listening", jp: "聴解", count: totalListeningCount, icon: Volume2, levels: "N5–N1", tint: "var(--soft-purple)" },
            { label: "Reading", jp: "読解", count: totalReadingCount, icon: BookOpen, levels: "N5–N1", tint: "var(--matcha)" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `color-mix(in srgb, ${c.tint} 15%, transparent)`, color: c.tint }}>
                <c.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold text-foreground">{c.count.toLocaleString()}</p>
                <p className="text-[11px] text-muted-foreground">{c.label} <span className="jp">{c.jp}</span> ・ {c.levels}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
