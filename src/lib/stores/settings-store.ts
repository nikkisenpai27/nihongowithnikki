"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ColorTheme = "sakura" | "matcha" | "ocean" | "minimal" | "night";
export type Mode = "light" | "dark" | "auto";
export type JpFont = "notojp" | "rounded" | "klee" | "mincho" | "gothic" | "yuji" | "hina" | "dot";

export const JP_FONT_STACKS: Record<JpFont, string> = {
  notojp: "var(--font-notojp)",
  rounded: "var(--font-rounded)",
  klee: "var(--font-klee)",
  mincho: "var(--font-mincho)",
  gothic: "var(--font-gothic)",
  yuji: "var(--font-yuji)",
  hina: "var(--font-hina)",
  dot: "var(--font-dot)",
};

export const JP_FONT_OPTIONS: { id: JpFont; label: string; jp: string; sample: string }[] = [
  { id: "notojp", label: "Noto Sans JP", jp: "のと", sample: "日本語" },
  { id: "rounded", label: "M PLUS Rounded", jp: "まる", sample: "日本語" },
  { id: "klee", label: "Klee One", jp: "くりー", sample: "日本語" },
  { id: "gothic", label: "Zen Kaku Gothic", jp: "ごしっく", sample: "日本語" },
  { id: "mincho", label: "Shippori Mincho", jp: "みんちょう", sample: "日本語" },
  { id: "hina", label: "Hina Mincho", jp: "ひな", sample: "日本語" },
  { id: "yuji", label: "Yuji Syuku", jp: "ゆうじ", sample: "日本語" },
  { id: "dot", label: "DotGothic16", jp: "どっと", sample: "日本語" },
];

interface SettingsState {
  colorTheme: ColorTheme;
  mode: Mode;
  jpFont: JpFont;
  showFurigana: boolean;
  showRomaji: boolean;
  studyMode: boolean;
  soundEnabled: boolean;
  onboarded: boolean;
  set: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => void;
  toggle: (key: "showFurigana" | "showRomaji" | "studyMode" | "soundEnabled") => void;
  applyTheme: () => void;
}

function resolveJpFont(jpFont: JpFont): string {
  if (typeof document === "undefined" || !document.body) return JP_FONT_STACKS[jpFont];
  const varName = JP_FONT_STACKS[jpFont].match(/var\((--[^)]+)\)/)?.[1] ?? "--font-notojp";
  const fam = getComputedStyle(document.body).getPropertyValue(varName).trim();
  return fam || JP_FONT_STACKS.notojp;
}

function applyToDocument(colorTheme: ColorTheme, mode: Mode, jpFont: JpFont) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("data-theme", colorTheme);
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "auto" && prefersDark);
  root.classList.toggle("dark", isDark);
  // Resolve the actual font-family name (the next/font vars live on <body>,
  // so we read the resolved value and set a concrete family on :root).
  root.style.setProperty("--font-jp", resolveJpFont(jpFont));
}

export const useSettings = create<SettingsState>()(
  persist(
    (set, get) => ({
      colorTheme: "sakura",
      mode: "auto",
      jpFont: "notojp",
      showFurigana: true,
      showRomaji: true,
      studyMode: false,
      soundEnabled: true,
      onboarded: false,
      set: (key, value) => {
        set({ [key]: value } as Partial<SettingsState>);
        const s = get();
        applyToDocument(s.colorTheme, s.mode, s.jpFont);
      },
      toggle: (key) => {
        set({ [key]: !get()[key] } as Partial<SettingsState>);
      },
      applyTheme: () => {
        const s = get();
        applyToDocument(s.colorTheme, s.mode, s.jpFont);
      },
    }),
    {
      name: "nikki-settings",
      partialize: (s) => ({
        colorTheme: s.colorTheme,
        mode: s.mode,
        jpFont: s.jpFont,
        showFurigana: s.showFurigana,
        showRomaji: s.showRomaji,
        studyMode: s.studyMode,
        soundEnabled: s.soundEnabled,
        onboarded: s.onboarded,
      }),
    }
  )
);

// Global subscription: keep the DOM theme + font in sync with the store.
// Delay until after hydration to avoid SSR mismatch — React hydrates
// the <html> element first, and modifying its attributes during hydration
// causes a mismatch error. Using requestAnimationFrame ensures the
// subscription fires AFTER React has finished hydrating.
if (typeof window !== "undefined") {
  let hydrated = false;
  // Mark as hydrated after the first paint (React hydration complete)
  requestAnimationFrame(() => { hydrated = true; });
  useSettings.subscribe((state) => {
    if (hydrated) applyToDocument(state.colorTheme, state.mode, state.jpFont);
  });
}
