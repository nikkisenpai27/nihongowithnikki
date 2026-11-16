"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X, RotateCcw, Loader2, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WritingCanvas } from "./writing-canvas";

function hex5(char: string) {
  const cp = char.codePointAt(0);
  if (!cp) return "";
  return cp.toString(16).padStart(5, "0");
}

interface BBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Props {
  kanji: string;
  size?: number;
}

type Status = "loading" | "ready" | "error";
type Feedback = { type: "correct" | "wrong" | "done"; msg: string } | null;

export function GuidedWritingPractice({ kanji, size = 260 }: Props) {
  const [paths, setPaths] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [completed, setCompleted] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lastPt = useRef<{ x: number; y: number } | null>(null);
  const strokePts = useRef<{ x: number; y: number }[]>([]);

  // Fetch KanjiVG stroke paths.
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

  // Set up the drawing canvas (device pixel ratio aware).
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "var(--primary)";
    ctx.lineWidth = 5;
  }, [size, status]);

  function pos(e: React.PointerEvent) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function start(e: React.PointerEvent) {
    e.preventDefault();
    drawing.current = true;
    const p = pos(e);
    lastPt.current = p;
    strokePts.current = [p];
    try {
      canvasRef.current?.setPointerCapture(e.pointerId);
    } catch {
      /* pointer capture not available — events still work without it */
    }
  }

  function move(e: React.PointerEvent) {
    if (!drawing.current) return;
    e.preventDefault();
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !lastPt.current) return;
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(lastPt.current.x, lastPt.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastPt.current = p;
    strokePts.current.push(p);
  }

  function end() {
    if (!drawing.current) return;
    drawing.current = false;
    lastPt.current = null;
    validateStroke();
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokePts.current = [];
  }

  function pointInBBox(px: number, py: number, bb: BBox, margin: number) {
    return (
      px >= bb.x - margin &&
      px <= bb.x + bb.w + margin &&
      py >= bb.y - margin &&
      py <= bb.y + bb.h + margin
    );
  }

  function validateStroke() {
    const pts = strokePts.current;
    if (pts.length < 2) {
      clearCanvas();
      return;
    }
    const scale = size / 109;
    // user stroke center in 109-space
    const cx = (Math.min(...pts.map((p) => p.x)) + Math.max(...pts.map((p) => p.x))) / 2 / scale;
    const cy = (Math.min(...pts.map((p) => p.y)) + Math.max(...pts.map((p) => p.y))) / 2 / scale;

    // Compute stroke bounding boxes on the fly from the rendered SVG paths.
    const bboxes = pathRefs.current.map((el) => {
      if (!el) return null;
      try {
        const bb = el.getBBox();
        return { x: bb.x, y: bb.y, w: bb.width, h: bb.height };
      } catch {
        return null;
      }
    });
    const cur = bboxes[completed];
    if (!cur) {
      clearCanvas();
      return;
    }
    const margin = Math.max(cur.w, cur.h) * 0.5 + 10;

    if (pointInBBox(cx, cy, cur, margin)) {
      // Correct stroke in correct order
      const next = completed + 1;
      setCompleted(next);
      if (next >= paths.length) {
        setFeedback({ type: "done", msg: `Perfect! All ${paths.length} strokes drawn in the correct order!` });
      } else {
        setFeedback({ type: "correct", msg: `Stroke ${completed + 1} correct! Next: stroke ${next + 1}.` });
      }
    } else {
      // Wrong — find which stroke the user drew instead
      const matchIdx = bboxes.findIndex((bb) => bb && pointInBBox(cx, cy, bb, margin));
      if (matchIdx !== -1 && matchIdx !== completed) {
        setFeedback({
          type: "wrong",
          msg: `Wrong order — that looks like stroke ${matchIdx + 1}. Draw stroke ${completed + 1} next (highlighted).`,
        });
      } else {
        setFeedback({
          type: "wrong",
          msg: `Try again — draw stroke ${completed + 1} in the highlighted area.`,
        });
      }
    }
    clearCanvas();
  }

  function reset() {
    setCompleted(0);
    setFeedback(null);
    clearCanvas();
  }

  if (status === "loading") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-card text-sm text-muted-foreground"
        style={{ width: size, height: size }}
      >
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        Loading stroke data…
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-muted-foreground">
          Guided stroke checking unavailable for this kanji. Use the freehand canvas below:
        </p>
        <WritingCanvas kanji={kanji} />
      </div>
    );
  }

  const done = completed >= paths.length;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative rounded-2xl border-2 border-border bg-card" style={{ width: size, height: size }}>
        {/* SVG: guide + completed + current highlight */}
        <svg width={size} height={size} viewBox="0 0 109 109" className="absolute inset-0">
          {/* grid */}
          <rect x="0.5" y="0.5" width="108" height="108" fill="none" stroke="var(--border)" strokeWidth="0.6" />
          <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2 2" />
          <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="2 2" />

          {/* faint full guide */}
          {paths.map((d, i) => (
            <path key={"g" + i} d={d} fill="none" stroke="var(--muted-foreground)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={0.12} />
          ))}

          {/* completed strokes (drawn correctly) */}
          {paths.map((d, i) => {
            const isDone = i < completed;
            const isCurrent = i === completed && !done;
            return (
              <path
                key={i}
                ref={(el) => { pathRefs.current[i] = el; }}
                d={d}
                fill="none"
                stroke={isDone ? "var(--matcha)" : isCurrent ? "var(--primary)" : "var(--muted-foreground)"}
                strokeWidth={isDone || isCurrent ? 3 : 3}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isDone ? 1 : isCurrent ? 0.45 : 0}
              />
            );
          })}

        </svg>

        {/* drawing canvas overlay */}
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="absolute inset-0 touch-none"
          style={{ width: size, height: size }}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
          aria-label={`Guided writing practice for ${kanji}`}
        />

        {/* progress badge */}
        <span className="absolute right-2 top-2 rounded-md bg-background/85 px-2 py-0.5 text-xs font-bold text-foreground tabular-nums shadow-sm">
          {Math.min(completed, paths.length)} / {paths.length}
        </span>
        {done && (
          <span className="absolute bottom-2 left-2 flex h-7 w-7 items-center justify-center rounded-full bg-matcha text-white shadow-sm">
            <Check className="h-4 w-4" />
          </span>
        )}
      </div>

      {/* feedback */}
      {feedback && (
        <div
          className={
            "flex w-full max-w-md items-center gap-2 rounded-xl p-2.5 text-sm " +
            (feedback.type === "wrong"
              ? "bg-warm-yellow/15 text-foreground"
              : feedback.type === "done"
                ? "bg-matcha/15 text-foreground"
                : "bg-matcha/10 text-foreground")
          }
        >
          {feedback.type === "wrong" ? (
            <X className="h-4 w-4 shrink-0 text-warm-yellow" />
          ) : (
            <Check className="h-4 w-4 shrink-0 text-matcha" />
          )}
          <span className="jp-[span]:inline">{feedback.msg}</span>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button size="sm" variant="ghost" onClick={reset}>
          <RotateCcw className="mr-1 h-3.5 w-3.5" /> Reset
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Draw each stroke in order. The highlighted box shows where stroke{" "}
        <span className="font-bold text-primary">{Math.min(completed + 1, paths.length)}</span> goes.
        {done ? " All done — try resetting to practice again!" : ""}
      </p>
    </div>
  );
}
