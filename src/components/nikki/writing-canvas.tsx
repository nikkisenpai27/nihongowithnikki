"use client";

import { useRef, useState, useEffect } from "react";
import { Eraser, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  kanji: string;
  size?: number;
}

// A simple tracing canvas: shows the kanji faintly behind, lets the user draw strokes.
export function WritingCanvas({ kanji, size = 220 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [hasStrokes, setHasStrokes] = useState(false);

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
    ctx.lineWidth = 6;
  }, [size]);

  function pos(e: React.PointerEvent) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function start(e: React.PointerEvent) {
    e.preventDefault();
    drawing.current = true;
    last.current = pos(e);
    canvasRef.current?.setPointerCapture(e.pointerId);
  }
  function move(e: React.PointerEvent) {
    if (!drawing.current) return;
    e.preventDefault();
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !last.current) return;
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
    setHasStrokes(true);
  }
  function end() {
    drawing.current = false;
    last.current = null;
  }

  function clear() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasStrokes(false);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative rounded-2xl border-2 border-dashed border-border bg-card"
        style={{ width: size, height: size }}
      >
        {/* grid lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px bg-border/60" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-border/60" />
          <div className="absolute inset-[16%] rounded-md border border-border/40" />
        </div>
        {/* ghost kanji */}
        <span
          className="jp pointer-events-none absolute inset-0 flex items-center justify-center text-foreground/10"
          style={{ fontSize: size * 0.8, fontFamily: "var(--font-jp)" }}
          aria-hidden
        >
          {kanji}
        </span>
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
          aria-label={`Writing practice canvas for ${kanji}`}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={clear} disabled={!hasStrokes}>
          <Eraser className="mr-1 h-3.5 w-3.5" /> Clear
        </Button>
        {hasStrokes && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-matcha">
            <Check className="h-3.5 w-3.5" /> Great practice!
          </span>
        )}
      </div>
      <p className="text-center text-[11px] text-muted-foreground">
        Try tracing the kanji with your finger or mouse. Practice makes perfect!
      </p>
    </div>
  );
}
