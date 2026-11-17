"use client";

import { useEffect, useState } from "react";
import { Play, Pause, RotateCcw, ChevronRight, Loader2, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";

// Convert a kanji character to the 5-digit hex used by KanjiVG filenames.
function hex5(char: string) {
  const cp = char.codePointAt(0);
  if (!cp) return "";
  return cp.toString(16).padStart(5, "0");
}

interface Props {
  kanji: string;
  size?: number;
}

export function StrokeOrderAnimation({ kanji, size = 240 }: Props) {
  const [paths, setPaths] = useState<string[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [current, setCurrent] = useState(0); // number of strokes revealed
  const [playing, setPlaying] = useState(false);

  // Fetch the KanjiVG SVG and extract stroke paths in order.
  // State resets happen via key-based remount (parent passes key={kanji}),
  // so this effect only sets state inside async callbacks.
  useEffect(() => {
    const code = hex5(kanji);
    const controller = new AbortController();
    fetch(`https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${code}.svg`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("not ok"))))
      .then((svg) => {
        const doc = new DOMParser().parseFromString(svg, "image/svg+xml");
        const ds = Array.from(doc.querySelectorAll("path")).map((p) => p.getAttribute("d") || "");
        if (ds.length === 0) throw new Error("no paths");
        setPaths(ds);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
    return () => controller.abort();
  }, [kanji]);

  // Play loop: reveal one stroke at a time. The stop-when-done call lives
  // inside the timeout callback (async), not synchronously in the effect body.
  useEffect(() => {
    if (!playing || status !== "ready") return;
    if (current >= paths.length) return;
    const t = setTimeout(() => {
      setCurrent((c) => c + 1);
      if (current + 1 >= paths.length) setPlaying(false);
    }, 820);
    return () => clearTimeout(t);
  }, [playing, current, paths.length, status]);

  function play() {
    if (current >= paths.length) setCurrent(0);
    setPlaying(true);
  }

  if (status === "loading") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card text-sm text-muted-foreground"
        style={{ width: size, height: size }}
      >
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        Loading stroke order…
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card p-4 text-center text-sm text-muted-foreground"
        style={{ width: size, minHeight: size }}
      >
        <Brush className="h-6 w-6 text-muted-foreground" />
        <p>Stroke order diagram unavailable for this kanji.</p>
        <p className="text-xs">Use the writing practice canvas below to draw it yourself.</p>
      </div>
    );
  }

  const done = current >= paths.length;

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-2xl border-2 border-border bg-card"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} viewBox="0 0 109 109" className="absolute inset-0">
          {/* practice grid */}
          <rect x="0.5" y="0.5" width="108" height="108" fill="none" stroke="var(--border)" strokeWidth="0.6" />
          <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2 2" />
          <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2 2" />
          <line x1="0" y1="0" x2="109" y2="109" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2 2" />
          <line x1="109" y1="0" x2="0" y2="109" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2 2" />
          {/* faint guide: full kanji outline */}
          {paths.map((d, i) => (
            <path
              key={"g" + i}
              d={d}
              fill="none"
              stroke="var(--muted-foreground)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.13}
            />
          ))}
          {/* animated strokes */}
          {paths.map((d, i) => {
            const revealed = i < current;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="var(--primary)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: revealed ? 0 : 1,
                  opacity: revealed ? 1 : 0,
                  transition: "stroke-dashoffset 0.65s ease, opacity 0.15s ease",
                }}
              />
            );
          })}
        </svg>
        {/* stroke counter */}
        <span className="absolute right-2 top-2 rounded-md bg-background/85 px-2 py-0.5 text-xs font-bold text-foreground tabular-nums shadow-sm">
          {Math.min(current, paths.length)} / {paths.length}
        </span>
        {/* current stroke number bubble */}
        {playing && !done && current < paths.length && (
          <span className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
            {current + 1}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" onClick={play} disabled={playing}>
          <Play className="mr-1 h-3.5 w-3.5" /> Play
        </Button>
        <Button size="sm" variant="outline" onClick={() => setPlaying(false)} disabled={!playing}>
          <Pause className="mr-1 h-3.5 w-3.5" /> Pause
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setPlaying(false);
            setCurrent((c) => Math.min(c + 1, paths.length));
          }}
          disabled={done}
        >
          <ChevronRight className="mr-1 h-3.5 w-3.5" /> Step
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setPlaying(false);
            setCurrent(0);
          }}
        >
          <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        {done
          ? `Done! ${paths.length} strokes. Press Reset to replay, then try writing it below.`
          : `Strokes draw in the correct order — ${paths.length} total. Press Play or Step through each one.`}
      </p>
    </div>
  );
}
