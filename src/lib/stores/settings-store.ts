"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ColorTheme = "sakura" | "matcha" | "ocean" | "minimal" | "night";
export type Mode = "light" | "dark" | "auto";

interface SettingsState {
  colorTheme: ColorTheme;
  mode: Mode;
  showFurigana: boolean;
  showRomaji: boolean;
  studyMode: boolean;
  soundEnabled: boolean;
  onboarded: boolean;
  set: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => void;
  toggle: (key: "showFurigana" | "showRomaji" | "studyMode" | "soundEnabled") => void;
  applyTheme: () => void;
}

function applyToDocument(colorTheme: ColorTheme, mode: Mode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", colorTheme);
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "auto" && prefersDark);
  root.classList.toggle("dark", isDark);
}

export const useSettings = create<SettingsState>()(
  persist(
    (set, get) => ({
      colorTheme: "sakura",
      mode: "auto",
      showFurigana: true,
      showRomaji: true,
      studyMode: false,
      soundEnabled: true,
      onboarded: false,
      set: (key, value) => {
        set({ [key]: value } as Partial<SettingsState>);
        const s = get();
        applyToDocument(s.colorTheme, s.mode);
      },
      toggle: (key) => {
        set({ [key]: !get()[key] } as Partial<SettingsState>);
      },
      applyTheme: () => {
        const s = get();
        applyToDocument(s.colorTheme, s.mode);
      },
    }),
    {
      name: "nikki-settings",
      partialize: (s) => ({
        colorTheme: s.colorTheme,
        mode: s.mode,
        showFurigana: s.showFurigana,
        showRomaji: s.showRomaji,
        studyMode: s.studyMode,
        soundEnabled: s.soundEnabled,
        onboarded: s.onboarded,
      }),
    }
  )
);
