"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ColorTheme =
  | "sakura"
  | "matcha"
  | "ocean"
  | "minimal"
  | "night"
  | "tokyo-night"
  | "lavender"
  | "rainbow";
export type Mode = "light" | "dark" | "auto";
export type JpFont = "notojp" | "rounded" | "klee" | "mincho" | "gothic" | "yuji" | "hina" | "dot";

/** Background mode controls whether a wallpaper is shown and where it comes from. */
export type BackgroundMode = "none" | "preset" | "custom";

/** Built-in wallpaper presets. The actual image lives in /public/wallpapers/. */
export type BackgroundPreset =
  | "japan-city"
  | "sakura-garden"
  | "fuji-sunset"
  | "tokyo-night"
  | "lavender-field"
  | "wave"
  | "autumn-maple"
  | "bamboo-forest"
  | "snowy-fuji"
  | "zen-garden"
  | "starry-night"
  | "ocean-sunset"
  | "sakura-night"
  | "kyoto-street"
  | "upload-1"
  | "upload-2"
  | "upload-3-onepiece"
  | "upload-4-reze"
  | "upload-5-reze-bw"
  | "upload-6-onepiece-hd"
  | "upload-7"
  | "upload-8"
  | "upload-9"
  | "upload-10"
  | "upload-11"
  | "upload-12"
  | "upload-13"
  | "upload-14"
  | "upload-15"
  | "upload-16-fate"
  | "upload-17-fox-girl"
  | "upload-18-anime-girl"
  | "upload-19-cat-girl"
  | "upload-20-fox-vtuber"
  | "upload-21-anime-girl-4k"
  | "upload-22-in-bed"
  | "upload-23-night-room"
  | "upload-24-summer-room"
  | "upload-25-torii-gate"
  | "upload-26-wink-katana"
  | "upload-27-long-hair-ears"
  | "upload-28-hatsune-miku"
  | "upload-29-chainsaw-man"
  | "upload-30-cherry-blossom"
  | "upload-31-belmode";

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

/** Metadata for each wallpaper preset (used by the picker UI). */
export const BACKGROUND_PRESETS: {
  id: BackgroundPreset;
  label: string;
  jp: string;
  url: string;
}[] = [
  { id: "japan-city", label: "Japan City", jp: "街", url: "/japan-city-bg.jpeg" },
  { id: "sakura-garden", label: "Sakura Garden", jp: "桜", url: "/wallpapers/sakura-garden.jpg" },
  { id: "fuji-sunset", label: "Fuji Sunset", jp: "富士", url: "/wallpapers/fuji-sunset.jpg" },
  { id: "tokyo-night", label: "Tokyo Night", jp: "夜", url: "/wallpapers/tokyo-night.jpg" },
  { id: "lavender-field", label: "Lavender Field", jp: "薫衣草", url: "/wallpapers/lavender-field.jpg" },
  { id: "wave", label: "Great Wave", jp: "波", url: "/wallpapers/wave.jpg" },
  { id: "autumn-maple", label: "Autumn Maple", jp: "紅葉", url: "/wallpapers/autumn-maple.jpg" },
  { id: "bamboo-forest", label: "Bamboo Forest", jp: "竹", url: "/wallpapers/bamboo-forest.jpg" },
  { id: "snowy-fuji", label: "Snowy Fuji", jp: "雪富士", url: "/wallpapers/snowy-fuji.jpg" },
  { id: "zen-garden", label: "Zen Garden", jp: "庭園", url: "/wallpapers/zen-garden.jpg" },
  { id: "starry-night", label: "Starry Night", jp: "星空", url: "/wallpapers/starry-night.jpg" },
  { id: "ocean-sunset", label: "Ocean Sunset", jp: "海", url: "/wallpapers/ocean-sunset.jpg" },
  { id: "sakura-night", label: "Sakura Night", jp: "夜桜", url: "/wallpapers/sakura-night.jpg" },
  { id: "kyoto-street", label: "Kyoto Street", jp: "京都", url: "/wallpapers/kyoto-street.jpg" },
  // User-uploaded wallpapers
  { id: "upload-1", label: "Custom Wallpaper 1", jp: "壁紙1", url: "/wallpapers/uploaded-1.jpeg" },
  { id: "upload-2", label: "Custom Wallpaper 2", jp: "壁紙2", url: "/wallpapers/uploaded-2.jpeg" },
  { id: "upload-3-onepiece", label: "One Piece", jp: "アニメ", url: "/wallpapers/uploaded-3-onepiece.jpeg" },
  { id: "upload-4-reze", label: "Reze", jp: "リゼ", url: "/wallpapers/uploaded-4-reze.jpeg" },
  { id: "upload-5-reze-bw", label: "Reze B&W", jp: "白黒", url: "/wallpapers/uploaded-5-reze-bw.jpeg" },
  { id: "upload-6-onepiece-hd", label: "One Piece HD", jp: "HD", url: "/wallpapers/uploaded-6-onepiece-hd.jpeg" },
  { id: "upload-7", label: "Custom Wallpaper 7", jp: "壁紙7", url: "/wallpapers/uploaded-7.jpeg" },
  { id: "upload-8", label: "Custom Wallpaper 8", jp: "壁紙8", url: "/wallpapers/uploaded-8.jpeg" },
  { id: "upload-9", label: "Custom Wallpaper 9", jp: "壁紙9", url: "/wallpapers/uploaded-9.jpeg" },
  { id: "upload-10", label: "Custom Wallpaper 10", jp: "壁紙10", url: "/wallpapers/uploaded-10.jpeg" },
  { id: "upload-11", label: "Custom Wallpaper 11", jp: "壁紙11", url: "/wallpapers/uploaded-11.jpeg" },
  { id: "upload-12", label: "Custom Wallpaper 12", jp: "壁紙12", url: "/wallpapers/uploaded-12.jpeg" },
  { id: "upload-13", label: "Custom Wallpaper 13", jp: "壁紙13", url: "/wallpapers/uploaded-13.jpeg" },
  { id: "upload-14", label: "Custom Wallpaper 14", jp: "壁紙14", url: "/wallpapers/uploaded-14.jpeg" },
  { id: "upload-15", label: "Custom Wallpaper 15", jp: "壁紙15", url: "/wallpapers/uploaded-15.jpeg" },
  { id: "upload-16-fate", label: "Fate Anime", jp: "運命", url: "/wallpapers/uploaded-16-fate.jpeg" },
  { id: "upload-17-fox-girl", label: "Fox Girl", jp: "狐娘", url: "/wallpapers/uploaded-17-fox-girl.jpg" },
  { id: "upload-18-anime-girl", label: "Anime Girl", jp: "美少女", url: "/wallpapers/uploaded-18-anime-girl.jpg" },
  { id: "upload-19-cat-girl", label: "Cat Girl", jp: "猫娘", url: "/wallpapers/uploaded-19-cat-girl.jpg" },
  { id: "upload-20-fox-vtuber", label: "Fox VTuber", jp: "狐配信者", url: "/wallpapers/uploaded-20-fox-vtuber.jpg" },
  { id: "upload-21-anime-girl-4k", label: "Anime Girl 4K", jp: "美少女4K", url: "/wallpapers/uploaded-21-anime-girl-4k.jpg" },
  { id: "upload-22-in-bed", label: "Cozy Room", jp: "部屋", url: "/wallpapers/uploaded-22-in-bed.jpg" },
  { id: "upload-23-night-room", label: "Night Room", jp: "夜部屋", url: "/wallpapers/uploaded-23-night-room.jpg" },
  { id: "upload-24-summer-room", label: "Summer Room", jp: "夏部屋", url: "/wallpapers/uploaded-24-summer-room.jpg" },
  { id: "upload-25-torii-gate", label: "Torii Gate", jp: "鳥居", url: "/wallpapers/uploaded-25-torii-gate.jpg" },
  { id: "upload-26-wink-katana", label: "Wink Katana", jp: "刀", url: "/wallpapers/uploaded-26-wink-katana.jpg" },
  { id: "upload-27-long-hair-ears", label: "Animal Ears", jp: "獣耳", url: "/wallpapers/uploaded-27-long-hair-ears.jpg" },
  { id: "upload-28-hatsune-miku", label: "Hatsune Miku", jp: "初音ミク", url: "/wallpapers/uploaded-28-hatsune-miku.jpg" },
  { id: "upload-29-chainsaw-man", label: "Chainsaw Man", jp: "チェンソー", url: "/wallpapers/uploaded-29-chainsaw-man.jpg" },
  { id: "upload-30-cherry-blossom", label: "Cherry Blossom Girl", jp: "桜少女", url: "/wallpapers/uploaded-30-cherry-blossom.jpg" },
  { id: "upload-31-belmode", label: "Belmode", jp: "ベルモード", url: "/wallpapers/uploaded-31-belmode.jpeg" },
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
  // Background wallpaper
  backgroundMode: BackgroundMode;
  backgroundPreset: BackgroundPreset;
  customBackground: string | null;
  backgroundOpacity: number; // 0..100
  backgroundBlur: number; // 0..20 (px)
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

/** Applies the wallpaper to <body> via CSS variables consumed in globals.css. */
export function applyBackground(s: Pick<SettingsState, "backgroundMode" | "backgroundPreset" | "customBackground" | "backgroundOpacity" | "backgroundBlur">) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const body = document.body;
  if (!body) return;

  let imageUrl: string | null = null;
  if (s.backgroundMode === "custom" && s.customBackground) {
    imageUrl = s.customBackground;
  } else if (s.backgroundMode === "preset") {
    const preset = BACKGROUND_PRESETS.find((p) => p.id === s.backgroundPreset);
    imageUrl = preset ? preset.url : null;
  }

  root.style.setProperty("--bg-image", imageUrl ? `url("${imageUrl}")` : "none");
  root.style.setProperty("--bg-opacity", String(s.backgroundOpacity / 100));
  root.style.setProperty("--bg-blur", `${s.backgroundBlur}px`);
  // Only mount the wallpaper layer when there's an actual image to render,
  // so opacity/blur have nothing to act on when the user is in "custom"
  // mode but hasn't uploaded anything yet (or just removed their upload).
  body.classList.toggle("has-wallpaper", !!imageUrl);
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
      backgroundMode: "none",
      backgroundPreset: "japan-city",
      customBackground: null,
      backgroundOpacity: 40,
      backgroundBlur: 0,
      set: (key, value) => {
        set({ [key]: value } as Partial<SettingsState>);
        const s = get();
        applyToDocument(s.colorTheme, s.mode, s.jpFont);
        applyBackground(s);
      },
      toggle: (key) => {
        set({ [key]: !get()[key] } as Partial<SettingsState>);
      },
      applyTheme: () => {
        const s = get();
        applyToDocument(s.colorTheme, s.mode, s.jpFont);
        applyBackground(s);
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
        backgroundMode: s.backgroundMode,
        backgroundPreset: s.backgroundPreset,
        customBackground: s.customBackground,
        backgroundOpacity: s.backgroundOpacity,
        backgroundBlur: s.backgroundBlur,
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
    if (hydrated) {
      applyToDocument(state.colorTheme, state.mode, state.jpFont);
      applyBackground(state);
    }
  });
}
