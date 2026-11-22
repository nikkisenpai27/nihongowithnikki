"use client";

import { useState, useEffect, useRef } from "react";
import { AppShell } from "@/components/nikki/app-shell";
import { AuthPage } from "@/components/views/auth-page";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNav } from "@/lib/stores/nav-store";
import type { ViewKey } from "@/lib/types";
import {
  DashboardView, KanjiView, KanaView, VocabView, GrammarView,
  ReadingView, ListeningView, StoriesView, QuizView, DriveView, AccountView, SettingsView,
} from "@/components/views/loader";
import { GlobalSearchResults } from "@/components/nikki/global-search";
import { useSettings } from "@/lib/stores/settings-store";
import { createContext, useContext, type ReactNode } from "react";

interface UserCtx { id: string; email: string; name: string; }
const UserContext = createContext<UserCtx | null>(null);
export function useCurrentUser() { return useContext(UserContext); }

export default function Home() {
  // Use a ref + state pattern to read localStorage after hydration.
  // Server renders with user=null (auth page). After mount on client,
  // we check localStorage and update — this is the standard React
  // pattern for browser-only data, and the eslint-disable is warranted.
  const [user, setUser] = useState<UserCtx | null>(null);
  useEffect(() => {
    try {
      const stored = localStorage.getItem("nikki-user");
      if (stored) {
        const u = JSON.parse(stored);
        if (u && u.id) setUser(u);
      }
    } catch { /* ignore */ }
  }, []);

  function handleAuth(u: UserCtx) {
    setUser(u);
  }

  function handleLogout() {
    localStorage.removeItem("nikki-user");
    setUser(null);
  }

  if (!user) {
    return <AuthPage onAuth={handleAuth} />;
  }

  return (
    <UserContext.Provider value={user}>
      <AppShell>
        <RouterView />
      </AppShell>
    </UserContext.Provider>
  );
}

const VIEWS: Record<string, () => React.ReactNode> = {
  dashboard: () => <DashboardView />,
  kanji: () => <KanjiView />,
  kana: () => <KanaView />,
  vocab: () => <VocabView />,
  grammar: () => <GrammarView />,
  reading: () => <ReadingView />,
  listening: () => <ListeningView />,
  stories: () => <StoriesView />,
  quiz: () => <QuizView />,
  drive: () => <DriveView />,
  account: () => <AccountView />,
  settings: () => <SettingsView />,
};

const KEY_TO_VIEW: Record<string, string> = {
  "1": "dashboard", "2": "kanji", "3": "kana", "4": "vocab", "5": "grammar",
  "6": "reading", "7": "listening", "8": "stories", "9": "quiz", "0": "settings",
};

function RouterView() {
  const view = useNav((s) => s.view);
  const search = useNav((s) => s.search);
  const setView = useNav((s) => s.setView);
  const setSearch = useNav((s) => s.setSearch);
  const toggleFurigana = useSettings((s) => s.toggle);
  const openKanji = useNav((s) => s.openKanji);
  const openGrammar = useNav((s) => s.openGrammar);
  const openStory = useNav((s) => s.openStory);
  const openReading = useNav((s) => s.openReading);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (KEY_TO_VIEW[e.key]) { setView(KEY_TO_VIEW[e.key] as ViewKey); return; }
      if (e.key.toLowerCase() === "f") { e.preventDefault(); toggleFurigana("showFurigana"); }
      if (e.key === "/") { e.preventDefault(); document.querySelector<HTMLInputElement>('input[aria-label="Global search"]')?.focus(); }
      if (e.key === "Escape") setSearch("");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setView, toggleFurigana, setSearch]);

  const showingSearch = search.trim().length > 0;

  return (
    <>
      {showingSearch ? (
        <GlobalSearchResults
          query={search}
          onSelectKanji={(id) => { setSearch(""); setView("kanji"); openKanji(id); }}
          onSelectVocab={() => { setSearch(""); setView("vocab"); }}
          onSelectGrammar={(id) => { setSearch(""); setView("grammar"); openGrammar(id); }}
          onSelectStory={(id) => { setSearch(""); setView("stories"); openStory(id); }}
          onSelectReading={(id) => { setSearch(""); setView("reading"); openReading(id); }}
          onClear={() => setSearch("")}
        />
      ) : (
        VIEWS[view]?.() ?? <DashboardView />
      )}
    </>
  );
}

