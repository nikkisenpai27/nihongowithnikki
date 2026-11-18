"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { AppShell } from "@/components/nikki/app-shell";
import { AuthPage } from "@/components/views/auth-page";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNav } from "@/lib/stores/nav-store";

// Read user from localStorage without hydration mismatch (useSyncExternalStore)
const emptyUser = null as { id: string; email: string; name: string } | null;
function subscribeUser(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}
function getUserSnapshot() {
  try {
    const stored = localStorage.getItem("nikki-user");
    if (stored) {
      const u = JSON.parse(stored);
      if (u && u.id) return u;
    }
  } catch { /* ignore */ }
  return emptyUser;
}
function getUserServerSnapshot() { return emptyUser; }

export default function Home() {
  const storedUser = useSyncExternalStore(subscribeUser, getUserSnapshot, getUserServerSnapshot);
  const [overrideUser, setOverrideUser] = useState<typeof storedUser>(null);
  const user = overrideUser ?? storedUser;
  const authed = !!user;

  function handleAuth(u: { id: string; email: string; name: string }) {
    setOverrideUser(u);
  }

  function handleLogout() {
    fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    localStorage.removeItem("nikki-user");
    setOverrideUser(null);
  }

  if (!authed || !user) {
    return <AuthPage onAuth={handleAuth} />;
  }

  return <AuthedApp user={user} onLogout={handleLogout} />;
}

function AuthedApp({
  user,
  onLogout,
}: {
  user: { id: string; email: string; name: string };
  onLogout: () => void;
}) {
  return (
    <AuthProvider user={user}>
      <AppShell>
        <RouterView />
      </AppShell>
      {/* Floating logout button */}
      <FloatingLogout user={user} onLogout={onLogout} />
    </AuthProvider>
  );
}

import { DashboardView } from "@/components/views/dashboard-view";
import { KanjiView } from "@/components/views/kanji-view";
import { KanaView } from "@/components/views/kana-view";
import { VocabView } from "@/components/views/vocab-view";
import { GrammarView } from "@/components/views/grammar-view";
import { ReadingView } from "@/components/views/reading-view";
import { ListeningView } from "@/components/views/listening-view";
import { StoriesView } from "@/components/views/stories-view";
import { QuizView } from "@/components/views/quiz-view";
import { DriveView } from "@/components/views/drive-view";
import { SettingsView } from "@/components/views/settings-view";
import { GlobalSearchResults } from "@/components/nikki/global-search";
import { useSettings } from "@/lib/stores/settings-store";
import { createContext, useContext, ReactNode } from "react";

interface UserCtx {
  id: string;
  email: string;
  name: string;
}
const UserContext = createContext<UserCtx | null>(null);
export function useCurrentUser() {
  return useContext(UserContext);
}
function AuthProvider({ user, children }: { user: UserCtx; children: ReactNode }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
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
  const openListening = useNav((s) => s.openListening);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (KEY_TO_VIEW[e.key]) { setView(KEY_TO_VIEW[e.key]); return; }
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
          onSelectListening={(id) => { setSearch(""); setView("listening"); openListening(id); }}
          onClear={() => setSearch("")}
        />
      ) : (
        VIEWS[view]?.() ?? <DashboardView />
      )}
    </>
  );
}

function FloatingLogout({
  user,
  onLogout,
}: {
  user: { id: string; email: string; name: string };
  onLogout: () => void;
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 shadow-lg backdrop-blur">
      <span className="text-xs font-medium text-foreground">
        {user.name || user.email || "Guest"}
      </span>
      <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={onLogout}>
        <LogOut className="mr-1 h-3 w-3" /> Logout
      </Button>
    </div>
  );
}
