"use client";

import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useJapaneseAudio } from "./use-japanese-audio";

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "md";
  label?: string;
}

export function AudioButton({ text, className, size = "sm", label }: AudioButtonProps) {
  const { speak } = useJapaneseAudio();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      aria-label={label ?? "Play audio"}
      className={cn(
        "inline-flex items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        size === "sm" ? "h-7 w-7" : "h-9 w-9",
        className
      )}
    >
      <Volume2 className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </button>
  );
}
