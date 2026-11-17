"use client";

import { Fragment } from "react";

interface Segment {
  t: string;
  f?: string;
}

// Parse "私[わたし]は学生[がくせい]です" into segments.
// A [..] immediately following one or more kanji attaches as furigana to those kanji.
export function parseFurigana(input: string): Segment[] {
  const segments: Segment[] = [];
  let i = 0;
  const kanjiRange = /[\u3400-\u9faf]/;
  while (i < input.length) {
    // gather a run of kanji
    let j = i;
    while (j < input.length && kanjiRange.test(input[j])) j++;
    if (j > i) {
      const kanji = input.slice(i, j);
      // check for [reading]
      if (input[j] === "[") {
        const end = input.indexOf("]", j);
        if (end !== -1) {
          const reading = input.slice(j + 1, end);
          segments.push({ t: kanji, f: reading });
          i = end + 1;
          continue;
        }
      }
      segments.push({ t: kanji });
      i = j;
      continue;
    }
    // gather non-kanji run until next kanji or '['
    let k = i;
    while (k < input.length && !kanjiRange.test(input[k])) {
      // skip standalone [..] that aren't preceded by kanji -> treat as literal
      if (input[k] === "[") {
        const end = input.indexOf("]", k);
        if (end !== -1) {
          // include bracket content as literal text
          k = end + 1;
          continue;
        }
      }
      k++;
    }
    if (k > i) {
      segments.push({ t: input.slice(i, k) });
      i = k;
    } else {
      // safety: consume one char
      segments.push({ t: input[i] });
      i++;
    }
  }
  return segments.filter((s) => s.t.length > 0 || (s.f && s.f.length > 0));
}

interface FuriganaTextProps {
  text: string;
  showFurigana?: boolean;
  className?: string;
  lang?: string;
}

export function FuriganaText({
  text,
  showFurigana = true,
  className,
  lang = "ja",
}: FuriganaTextProps) {
  const segments = parseFurigana(text);
  return (
    <span className={className} lang={lang}>
      {segments.map((seg, idx) =>
        seg.f && showFurigana ? (
          <ruby key={idx}>
            {seg.t}
            <rt>{seg.f}</rt>
          </ruby>
        ) : (
          <Fragment key={idx}>{seg.t}</Fragment>
        )
      )}
    </span>
  );
}
