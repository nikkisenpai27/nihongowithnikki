"use client";

import { useSyncExternalStore, useCallback } from "react";
import { useSettings } from "@/lib/stores/settings-store";

// Module-level cache so getSnapshot returns a stable reference (avoids
// infinite re-renders with useSyncExternalStore when voices haven't changed).
let cachedVoices: SpeechSynthesisVoice[] = [];
let voicesKey = "";

function subscribe(callback: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return () => {};
  }
  const sync = () => {
    const v = window.speechSynthesis.getVoices();
    const key = v.map((x) => x.name).join("|");
    if (key !== voicesKey) {
      voicesKey = key;
      cachedVoices = v;
      callback();
    }
  };
  sync();
  window.speechSynthesis.addEventListener("voiceschanged", sync);
  return () => {
    window.speechSynthesis.removeEventListener("voiceschanged", sync);
  };
}

function getSnapshot() {
  return cachedVoices;
}
function getServerSnapshot() {
  return cachedVoices;
}

// Uses the browser Web Speech API for instant Japanese audio.
export function useJapaneseAudio() {
  const soundEnabled = useSettings((s) => s.soundEnabled);
  const voices = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = useCallback(
    (text: string, opts?: { rate?: number }) => {
      if (!soundEnabled) return;
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      const clean = text.replace(/\[[^\]]+\]/g, "");
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "ja-JP";
      u.rate = opts?.rate ?? 0.9;
      const jpVoice = voices.find((v) => v.lang.startsWith("ja"));
      if (jpVoice) u.voice = jpVoice;
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      } catch {
        /* ignore */
      }
    },
    [soundEnabled, voices]
  );

  return { speak, supported };
}
