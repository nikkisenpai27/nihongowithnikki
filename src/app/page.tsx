"use client";

import { useEffect } from "react";
import { AppShell } from "@/components/nikki/app-shell";
import { useNav, type ViewKey } from "@/lib/stores/nav-store";
import { useSettings } from "@/lib/stores/settings-store";
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

const VIEWS: Record<ViewKey, () => React.ReactNode> = {
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

const KEY_TO_VIEW: Record<string, ViewKey> = {
  "1": "dashboard",
  "2": "kanji",
  "3": "vocab",
  "4": "grammar",
  "5": "reading",
  "6": "stories",
  "7": "quiz",
  "8": "settings",
};

export default function Home() {
  const view = useNav((s) => s.view);
  const setView = useNav((s) => s.setView);
  const search = useNav((s) => s.search);
  const setSearch = useNav((s) => s.setSearch);
  const toggleFurigana = useSettings((s) => s.toggle);
  const openKanji = useNav((s) => s.openKanji);
  const openGrammar = useNav((s) => s.openGrammar);
  const openStory = useNav((s) => s.openStory);
  const openReading = useNav((s) => s.openReading);

  // Keyboard shortcuts (power users)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (KEY_TO_VIEW[e.key]) {
        setView(KEY_TO_VIEW[e.key]);
        return;
      }
      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFurigana("showFurigana");
      }
      if (e.key === "/") {
        e.preventDefault();
        const input = document.querySelector<HTMLInputElement>('input[aria-label="Global search"]');
        input?.focus();
      }
      if (e.key === "Escape") {
        setSearch("");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setView, toggleFurigana, setSearch]);

  // When global search has text, show search results overlay regardless of view
  const showingSearch = search.trim().length > 0;

  return (
    <AppShell>
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
        VIEWS[view]()
      )}

      {/* Keyboard hint footer (desktop) */}
      <div className="mt-8 hidden text-center text-[10px] text-muted-foreground lg:block">
        Keyboard: <kbd className="rounded bg-muted px-1">1–8</kbd> switch views ・{" "}
        <kbd className="rounded bg-muted px-1">/</kbd> search ・{" "}
        <kbd className="rounded bg-muted px-1">F</kbd> toggle furigana ・{" "}
        <kbd className="rounded bg-muted px-1">Esc</kbd> clear search
      </div>
    </AppShell>
  );
}
