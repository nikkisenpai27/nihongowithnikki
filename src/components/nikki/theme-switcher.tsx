"use client";

import { Moon, Sun, Palette, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSettings, type ColorTheme } from "@/lib/stores/settings-store";
import { cn } from "@/lib/utils";

const THEMES: { id: ColorTheme; label: string; jp: string; swatch: string }[] = [
  { id: "sakura", label: "Sakura", jp: "桜", swatch: "#ff8fab" },
  { id: "matcha", label: "Matcha", jp: "茶", swatch: "#6b9b7a" },
  { id: "ocean", label: "Ocean", jp: "海", swatch: "#4a6fa5" },
  { id: "minimal", label: "Minimal", jp: "墨", swatch: "#2e2e2e" },
  { id: "night", label: "Night Mode", jp: "夜", swatch: "#b39ddb" },
];

export function ThemeSwitcher() {
  const colorTheme = useSettings((s) => s.colorTheme);
  const mode = useSettings((s) => s.mode);
  const set = useSettings((s) => s.set);

  const isDark =
    mode === "dark" ||
    (mode === "auto" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle dark mode"
        onClick={() => set("mode", isDark ? "light" : "dark")}
        className="h-9 w-9"
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Choose color theme" className="h-9 w-9">
            <Palette className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Palette className="h-4 w-4" /> Color Theme
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {THEMES.map((t) => (
            <DropdownMenuItem
              key={t.id}
              onClick={() => set("colorTheme", t.id)}
              className="gap-3"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-md text-xs font-bold text-white"
                style={{ backgroundColor: t.swatch }}
              >
                {t.jp}
              </span>
              <span className="flex-1">{t.label}</span>
              {colorTheme === t.id && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => set("mode", "auto")}
            className={cn(mode === "auto" && "bg-accent")}
          >
            <Sun className="h-4 w-4" /> Auto (system)
            {mode === "auto" && <Check className="ml-auto h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
