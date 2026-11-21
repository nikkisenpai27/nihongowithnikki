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
  | "upload-31-belmode"
  | "upload-32-gxplas"
  | "upload-33-anime-bed"
  | "anime-girl-1" | "anime-girl-2" | "anime-girl-3" | "anime-girl-4" | "anime-girl-5"
  | "anime-girl-6" | "anime-girl-7" | "anime-girl-8" | "anime-girl-9" | "anime-girl-10"
  | "anime-girl-11" | "anime-girl-12" | "anime-girl-13" | "anime-girl-14" | "anime-girl-15"
  | "anime-girl-16" | "anime-girl-17" | "anime-girl-18" | "anime-girl-19" | "anime-girl-20"
  | "anime-girl-21" | "anime-girl-22" | "anime-girl-23" | "anime-girl-24" | "anime-girl-25"
  | "anime-girl-26" | "anime-girl-27" | "anime-girl-28" | "anime-girl-29" | "anime-girl-30"
  | "anime-girl-31" | "anime-girl-32" | "anime-girl-33" | "anime-girl-34" | "anime-girl-35"
  | "anime-girl-36" | "anime-girl-37" | "anime-girl-38" | "anime-girl-39" | "anime-girl-40"
  | "upload-34-frieren" | "upload-35-pc-girl" | "upload-36-violet-evergarden"
  | "upload-37-yoru" | "upload-38-discord-gg" | "upload-39-dubstepgutter"
  | "upload-40-fubuki-opm" | "upload-41-gojo-jjk" | "upload-42-wallpaperflare"
  | "upload-43-wp-girl1" | "upload-44-wp-girl2" | "upload-45-ykjsd" | "upload-46-yuki-jjk";

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
  { id: "upload-32-gxplas", label: "GX Plas", jp: "壁紙", url: "/wallpapers/uploaded-32-gxplas.jpg" },
  { id: "upload-33-anime-bed", label: "Cozy Bed", jp: "ベッド", url: "/wallpapers/uploaded-33-anime-bed.jpg" },
  // AI-generated anime girl wallpapers
  { id: "anime-girl-1", label: "Anime Girl 1", jp: "美少女1", url: "/wallpapers/anime-girl-1.jpg" },
  { id: "anime-girl-2", label: "Anime Girl 2", jp: "美少女2", url: "/wallpapers/anime-girl-2.jpg" },
  { id: "anime-girl-3", label: "Anime Girl 3", jp: "美少女3", url: "/wallpapers/anime-girl-3.jpg" },
  { id: "anime-girl-4", label: "Anime Girl 4", jp: "美少女4", url: "/wallpapers/anime-girl-4.jpg" },
  { id: "anime-girl-5", label: "Anime Girl 5", jp: "美少女5", url: "/wallpapers/anime-girl-5.jpg" },
  { id: "anime-girl-6", label: "Anime Girl 6", jp: "美少女6", url: "/wallpapers/anime-girl-6.jpg" },
  { id: "anime-girl-7", label: "Anime Girl 7", jp: "美少女7", url: "/wallpapers/anime-girl-7.jpg" },
  { id: "anime-girl-8", label: "Anime Girl 8", jp: "美少女8", url: "/wallpapers/anime-girl-8.jpg" },
  { id: "anime-girl-9", label: "Anime Girl 9", jp: "美少女9", url: "/wallpapers/anime-girl-9.jpg" },
  { id: "anime-girl-10", label: "Anime Girl 10", jp: "美少女10", url: "/wallpapers/anime-girl-10.jpg" },
  { id: "anime-girl-11", label: "Anime Girl 11", jp: "美少女11", url: "/wallpapers/anime-girl-11.jpg" },
  { id: "anime-girl-12", label: "Anime Girl 12", jp: "美少女12", url: "/wallpapers/anime-girl-12.jpg" },
  { id: "anime-girl-13", label: "Anime Girl 13", jp: "美少女13", url: "/wallpapers/anime-girl-13.jpg" },
  { id: "anime-girl-14", label: "Anime Girl 14", jp: "美少女14", url: "/wallpapers/anime-girl-14.jpg" },
  { id: "anime-girl-15", label: "Anime Girl 15", jp: "美少女15", url: "/wallpapers/anime-girl-15.jpg" },
  { id: "anime-girl-16", label: "Anime Girl 16", jp: "美少女16", url: "/wallpapers/anime-girl-16.jpg" },
  { id: "anime-girl-17", label: "Anime Girl 17", jp: "美少女17", url: "/wallpapers/anime-girl-17.jpg" },
  { id: "anime-girl-18", label: "Anime Girl 18", jp: "美少女18", url: "/wallpapers/anime-girl-18.jpg" },
  { id: "anime-girl-19", label: "Anime Girl 19", jp: "美少女19", url: "/wallpapers/anime-girl-19.jpg" },
  { id: "anime-girl-20", label: "Anime Girl 20", jp: "美少女20", url: "/wallpapers/anime-girl-20.jpg" },
  { id: "anime-girl-21", label: "Anime Girl 21", jp: "美少女21", url: "/wallpapers/anime-girl-21.jpg" },
  { id: "anime-girl-22", label: "Anime Girl 22", jp: "美少女22", url: "/wallpapers/anime-girl-22.jpg" },
  { id: "anime-girl-23", label: "Anime Girl 23", jp: "美少女23", url: "/wallpapers/anime-girl-23.jpg" },
  { id: "anime-girl-24", label: "Anime Girl 24", jp: "美少女24", url: "/wallpapers/anime-girl-24.jpg" },
  { id: "anime-girl-25", label: "Anime Girl 25", jp: "美少女25", url: "/wallpapers/anime-girl-25.jpg" },
  { id: "anime-girl-26", label: "Anime Girl 26", jp: "美少女26", url: "/wallpapers/anime-girl-26.jpg" },
  { id: "anime-girl-27", label: "Anime Girl 27", jp: "美少女27", url: "/wallpapers/anime-girl-27.jpg" },
  { id: "anime-girl-28", label: "Anime Girl 28", jp: "美少女28", url: "/wallpapers/anime-girl-28.jpg" },
  { id: "anime-girl-29", label: "Anime Girl 29", jp: "美少女29", url: "/wallpapers/anime-girl-29.jpg" },
  { id: "anime-girl-30", label: "Anime Girl 30", jp: "美少女30", url: "/wallpapers/anime-girl-30.jpg" },
  { id: "anime-girl-31", label: "Anime Girl 31", jp: "美少女31", url: "/wallpapers/anime-girl-31.jpg" },
  { id: "anime-girl-32", label: "Anime Girl 32", jp: "美少女32", url: "/wallpapers/anime-girl-32.jpg" },
  { id: "anime-girl-33", label: "Anime Girl 33", jp: "美少女33", url: "/wallpapers/anime-girl-33.jpg" },
  { id: "anime-girl-34", label: "Anime Girl 34", jp: "美少女34", url: "/wallpapers/anime-girl-34.jpg" },
  { id: "anime-girl-35", label: "Anime Girl 35", jp: "美少女35", url: "/wallpapers/anime-girl-35.jpg" },
  { id: "anime-girl-36", label: "Anime Girl 36", jp: "美少女36", url: "/wallpapers/anime-girl-36.jpg" },
  { id: "anime-girl-37", label: "Anime Girl 37", jp: "美少女37", url: "/wallpapers/anime-girl-37.jpg" },
  { id: "anime-girl-38", label: "Anime Girl 38", jp: "美少女38", url: "/wallpapers/anime-girl-38.jpg" },
  { id: "anime-girl-39", label: "Anime Girl 39", jp: "美少女39", url: "/wallpapers/anime-girl-39.jpg" },
  { id: "anime-girl-40", label: "Anime Girl 40", jp: "美少女40", url: "/wallpapers/anime-girl-40.jpg" },
  // Additional user-uploaded wallpapers
  { id: "upload-34-frieren", label: "Frieren", jp: "フリーレン", url: "/wallpapers/uploaded-34-frieren.jpg" },
  { id: "upload-35-pc-girl", label: "PC Girl 4K", jp: "美少女", url: "/wallpapers/uploaded-35-pc-girl.jpg" },
  { id: "upload-36-violet-evergarden", label: "Violet Evergarden", jp: "ヴァイオレット", url: "/wallpapers/uploaded-36-violet-evergarden.jpg" },
  { id: "upload-37-yoru", label: "Yoru", jp: "夜", url: "/wallpapers/uploaded-37-yoru.jpg" },
  { id: "upload-38-discord-gg", label: "Discord Girl", jp: "美少女", url: "/wallpapers/uploaded-38-discord-gg.jpg" },
  { id: "upload-39-dubstepgutter", label: "Dubstepgutter", jp: "美少女", url: "/wallpapers/uploaded-39-dubstepgutter.jpg" },
  { id: "upload-40-fubuki-opm", label: "Fubuki OPM", jp: "吹雪", url: "/wallpapers/uploaded-40-fubuki-opm.jpg" },
  { id: "upload-41-gojo-jjk", label: "Gojo JJK", jp: "五条", url: "/wallpapers/uploaded-41-gojo-jjk.jpg" },
  { id: "upload-42-wallpaperflare", label: "Wallpaperflare", jp: "壁紙", url: "/wallpapers/uploaded-42-wallpaperflare.jpg" },
  { id: "upload-43-wp-girl1", label: "Anime Girl WP1", jp: "美少女1", url: "/wallpapers/uploaded-43-wp-girl1.jpg" },
  { id: "upload-44-wp-girl2", label: "Anime Girl WP2", jp: "美少女2", url: "/wallpapers/uploaded-44-wp-girl2.jpg" },
  { id: "upload-45-ykjsd", label: "Anime Art", jp: "アニメ", url: "/wallpapers/uploaded-45-ykjsd.jpg" },
  { id: "upload-46-yuki-jjk", label: "Yuki JJK", jp: "雪", url: "/wallpapers/uploaded-46-yuki-jjk.jpg" },
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
