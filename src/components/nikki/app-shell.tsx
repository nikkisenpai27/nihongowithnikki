"use client";

import {
  Home,
  Languages,
  BookOpen,
  SpellCheck,
  BookText,
  GraduationCap,
  Settings as SettingsIcon,
  Search,
  Menu,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNav, type ViewKey } from "@/lib/stores/nav-store";
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
  { view: "vocab", label: "Vocabulary", jp: "単語", icon: BookOpen, desc: "N5 & N4 words" },
  { view: "grammar", label: "Grammar", jp: "文法", icon: SpellCheck, desc: "Grammar points" },
  { view: "stories", label: "Stories", jp: "物語", icon: BookText, desc: "Read with Nikki" },
  { view: "quiz", label: "Quiz", jp: "クイズ", icon: GraduationCap, desc: "Test yourself" },
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
    <div className="flex min-h-screen flex-col bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-sidebar lg:flex">
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
      <header className="sticky top-0 z-30 flex items-center gap-2 border-b border-border bg-card/80 px-3 py-2.5 backdrop-blur lg:hidden">
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
      <header className="sticky top-0 z-20 hidden items-center gap-3 border-b border-border bg-card/70 px-6 py-3 backdrop-blur lg:flex lg:pl-[17rem]">
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
        className="fixed bottom-0 left-0 right-0 z-30 flex items-stretch justify-around border-t border-border bg-card/95 px-1 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
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
      <footer className="mt-auto hidden border-t border-border bg-card/50 px-6 py-5 text-center text-xs text-muted-foreground lg:block lg:pl-[17rem]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 sm:flex-row sm:justify-between">
          <span className="jp">日本語 with Nikki ・ やさしい日本語を一緒に学ぼう</span>
          <span>
            JLPT N5 & N4 ・ <span className="text-primary font-semibold">Nikki</span> is your friendly tutor
          </span>
        </div>
      </footer>
    </div>
  );
}
