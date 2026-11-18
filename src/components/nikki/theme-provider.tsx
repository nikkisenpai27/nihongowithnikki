"use client";

import { useEffect } from "react";
import { useSettings } from "@/lib/stores/settings-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorTheme = useSettings((s) => s.colorTheme);
  const mode = useSettings((s) => s.mode);
  const jpFont = useSettings((s) => s.jpFont);
  const applyTheme = useSettings((s) => s.applyTheme);

  // Apply theme on mount and whenever any setting changes.
  // This runs AFTER hydration so server/client render identically.
  useEffect(() => {
    applyTheme();
  }, [colorTheme, mode, jpFont, applyTheme]);

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
