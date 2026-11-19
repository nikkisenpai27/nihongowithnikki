"use client";

import {
  Home,
  Languages,
  Type,
  BookOpen,
  SpellCheck,
  BookText,
  FileText,
  Headphones,
  FolderOpen,
  User as UserIcon,
  GraduationCap,
  Settings as SettingsIcon,
  Search,
  Menu,
  Heart,
  Instagram,
  Github,
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNav } from "@/lib/stores/nav-store";
import type { ViewKey } from "@/lib/types";
import { ThemeSwitcher } from "./theme-switcher";
import { NikkiAvatar } from "./nikki-avatar";
import { useProgress } from "@/lib/stores/progress-store";
import { useSettings } from "@/lib/stores/settings-store";

interface NavItem {
  view: ViewKey;
  label: string;
  jp: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
}

const NAV: NavItem[] = [
  { view: "dashboard", label: "Home", jp: "ホーム", icon: Home, desc: "Your daily dashboard" },
  { view: "kanji", label: "Kanji", jp: "漢字", icon: Languages, desc: "Heatmap & mastery" },
  { view: "kana", label: "Kana", jp: "仮名", icon: Type, desc: "Hiragana & Katakana" },
  { view: "vocab", label: "Vocabulary", jp: "単語", icon: BookOpen, desc: "N5 & N4 words" },
  { view: "grammar", label: "Grammar", jp: "文法", icon: SpellCheck, desc: "Grammar points" },
  { view: "reading", label: "Reading", jp: "読解", icon: FileText, desc: "Passages & questions" },
  { view: "listening", label: "Listening", jp: "聴解", icon: Headphones, desc: "Audio & questions" },
  { view: "stories", label: "Stories", jp: "物語", icon: BookText, desc: "Read with Nikki" },
  { view: "quiz", label: "Quiz", jp: "クイズ", icon: GraduationCap, desc: "Test yourself" },
  { view: "drive", label: "Drive", jp: "ドライブ", icon: FolderOpen, desc: "Free study notes" },
  { view: "account", label: "Account", jp: "アカウント", icon: UserIcon, desc: "Profile & settings" },
  { view: "settings", label: "Settings", jp: "設定", icon: SettingsIcon, desc: "Preferences" },
];

function BrandHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex items-center gap-3", compact && "gap-2.5")}>
      <NikkiAvatar size={compact ? 36 : 44} />
      <div className="leading-tight">
        <div
          className={cn(
            "font-bold tracking-tight text-foreground",
            compact ? "text-base" : "text-lg"
          )}
          style={{ fontFamily: "var(--font-rounded), var(--font-sans)" }}
        >
          Nihongo with Nikki
        </div>
        <div className="text-[11px] text-muted-foreground jp">
          日本語 with Nikki ・ JLPT N5 & N4
        </div>
      </div>
    </div>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const view = useNav((s) => s.view);
  const setView = useNav((s) => s.setView);
  const xp = useProgress((s) => s.xp);

  return (
    <nav className="flex flex-col gap-1 px-3 py-2" aria-label="Main navigation">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active = view === item.view;
        return (
          <button
            key={item.view}
            onClick={() => {
              setView(item.view);
              onNavigate?.();
            }}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Icon
              className={cn(
                "h-5 w-5 shrink-0",
                active ? "text-primary-foreground" : "text-muted-foreground group-hover:text-accent-foreground"
              )}
            />
            <span className="flex-1">
              <span className="block text-sm font-semibold leading-tight">{item.label}</span>
              <span
                className={cn(
                  "block text-[10px] leading-tight",
                  active ? "text-primary-foreground/70" : "text-muted-foreground"
                )}
              >
                {item.desc}
              </span>
            </span>
            <span className={cn("jp text-xs opacity-60", active && "opacity-80")}>{item.jp}</span>
          </button>
        );
      })}
      <div className="mt-3 rounded-xl border border-dashed border-border bg-card/50 px-3 py-2.5 text-center">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total XP</div>
        <div className="text-xl font-bold text-primary jp">{xp.toLocaleString()}</div>
      </div>
    </nav>
  );
}

function GlobalSearch() {
  const search = useNav((s) => s.search);
  const setSearch = useNav((s) => s.setSearch);
  const setView = useNav((s) => s.setView);
  return (
    <div className="relative w-full max-w-xs">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setView("dashboard")}
        placeholder="Search kanji, vocab, grammar…"
        className="h-9 pl-9 pr-3"
        aria-label="Global search"
      />
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const setView = useNav((s) => s.setView);
  const view = useNav((s) => s.view);
  const onboarded = useSettings((s) => s.onboarded);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar/75 backdrop-blur-md lg:flex">
        <div className="px-4 pt-5 pb-2">
          <button onClick={() => setView("dashboard")} className="w-full text-left">
            <BrandHeader />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto scroll-pretty">
          <NavList />
        </div>
        <div className="border-t border-border px-4 py-3 text-center text-[10px] text-muted-foreground">
          Made with <Heart className="inline h-3 w-3 fill-primary text-primary" /> for Japanese learners
        </div>
      </aside>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center gap-2 border-b border-border bg-card/70 px-3 py-2.5 backdrop-blur-md lg:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="px-4 pt-5 pb-2">
              <BrandHeader compact />
            </div>
            <NavList onNavigate={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
        <button onClick={() => setView("dashboard")} className="flex-1 text-left">
          <div className="flex items-center gap-2">
            <NikkiAvatar size={28} />
            <span
              className="text-sm font-bold"
              style={{ fontFamily: "var(--font-rounded), var(--font-sans)" }}
            >
              Nihongo with Nikki
            </span>
          </div>
        </button>
        <ThemeSwitcher />
      </header>

      {/* Desktop header */}
      <header className="sticky top-0 z-20 hidden items-center gap-3 border-b border-border bg-card/60 px-6 py-3 backdrop-blur-md lg:flex lg:pl-[17rem]">
        <GlobalSearch />
        <div className="ml-auto flex items-center gap-2">
          {!onboarded && (
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setView("settings")}
              className="hidden xl:inline-flex"
            >
              Start onboarding
            </Button>
          )}
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-3 py-4 pb-24 sm:px-5 lg:pl-[17rem] lg:py-6 lg:pb-10">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-30 flex items-stretch justify-around border-t border-border bg-card/80 px-1 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
        aria-label="Mobile navigation"
      >
        {NAV.filter((n) =>
          ["dashboard", "kanji", "vocab", "grammar", "quiz"].includes(n.view)
        ).map((item) => {
          const Icon = item.icon;
          const isActive = view === item.view;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="mt-auto hidden border-t border-border bg-card/40 px-6 py-5 text-center text-xs text-muted-foreground backdrop-blur-sm lg:block lg:pl-[17rem]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <span className="jp">日本語 with Nikki ・ やさしい日本語を一緒に学ぼう</span>
          <div className="flex items-center gap-3">
            <span>
              JLPT N5 & N4 ・ <span className="text-primary font-semibold">Nikki</span> is your friendly tutor
            </span>
            <a
              href="https://discord.gg/S8ghkzPErv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord server"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nikkisenpai27/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/nikkisenpai27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
