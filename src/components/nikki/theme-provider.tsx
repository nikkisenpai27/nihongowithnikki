"use client";

import { useEffect } from "react";
import { useSettings } from "@/lib/stores/settings-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorTheme = useSettings((s) => s.colorTheme);
  const mode = useSettings((s) => s.mode);
  const jpFont = useSettings((s) => s.jpFont);
  const applyTheme = useSettings((s) => s.applyTheme);

  // Background-related settings — applyTheme reads these from the store
  // and calls applyBackground internally, so listing them here as deps
  // guarantees a re-apply whenever any of them changes.
  const backgroundMode = useSettings((s) => s.backgroundMode);
  const backgroundPreset = useSettings((s) => s.backgroundPreset);
  const customBackground = useSettings((s) => s.customBackground);
  const backgroundOpacity = useSettings((s) => s.backgroundOpacity);
  const backgroundBlur = useSettings((s) => s.backgroundBlur);

  // Apply theme on mount and whenever any setting changes.
  // This runs AFTER hydration so server/client render identically.
  useEffect(() => {
    applyTheme();
  }, [
    colorTheme,
    mode,
    jpFont,
    applyTheme,
    backgroundMode,
    backgroundPreset,
    customBackground,
    backgroundOpacity,
    backgroundBlur,
  ]);

  // React to system preference changes when in auto mode
  useEffect(() => {
    if (mode !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode, applyTheme]);

  return <>{children}</>;
}
