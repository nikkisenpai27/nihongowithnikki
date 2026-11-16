"use client";

import { create } from "zustand";
import type { ViewKey, JLPTLevel } from "@/lib/types";

interface NavState {
  view: ViewKey;
  // detail selections
  selectedKanji: string | null;
  selectedVocabTheme: string | null;
  selectedGrammar: string | null;
  selectedStory: string | null;
  // global filters
  levelFilter: JLPTLevel | "all";
  search: string;
  setView: (v: ViewKey) => void;
  openKanji: (id: string) => void;
  openGrammar: (id: string) => void;
  openStory: (id: string) => void;
  setVocabTheme: (t: string | null) => void;
  setLevelFilter: (l: JLPTLevel | "all") => void;
  setSearch: (s: string) => void;
  back: () => void;
}

export const useNav = create<NavState>((set) => ({
  view: "dashboard",
  selectedKanji: null,
  selectedVocabTheme: null,
  selectedGrammar: null,
  selectedStory: null,
  levelFilter: "all",
  search: "",
  setView: (v) =>
    set({
      view: v,
      selectedKanji: null,
      selectedGrammar: null,
      selectedStory: null,
      selectedVocabTheme: null,
    }),
  openKanji: (id) => set({ selectedKanji: id }),
  openGrammar: (id) => set({ selectedGrammar: id }),
  openStory: (id) => set({ selectedStory: id }),
  setVocabTheme: (t) => set({ selectedVocabTheme: t }),
  setLevelFilter: (l) => set({ levelFilter: l }),
  setSearch: (s) => set({ search: s }),
  back: () =>
    set({
      selectedKanji: null,
      selectedGrammar: null,
      selectedStory: null,
    }),
}));
