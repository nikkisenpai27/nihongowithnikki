import type { KanjiData } from "@/lib/types";
import { kanjiN5A } from "./kanji-n5-a";
import { kanjiN5B } from "./kanji-n5-b";
import { kanjiN5C } from "./kanji-n5-c";
import { kanjiN5D } from "./kanji-n5-d";
import { kanjiN4 } from "./kanji-n4";
import { kanjiN4ExtraA } from "./kanji-n4-extra-a";
import { kanjiN4ExtraB } from "./kanji-n4-extra-b";
import { kanjiN4ExtraC } from "./kanji-n4-extra-c";
import { kanjiN4ExtraD } from "./kanji-n4-extra-d";
import { kanjiN3A } from "./kanji-n3-a";
import { kanjiN3B } from "./kanji-n3-b";
import { kanjiN3C } from "./kanji-n3-c";
import { kanjiN2A } from "./kanji-n2-a";
import { kanjiN2B } from "./kanji-n2-b";
import { kanjiN2C } from "./kanji-n2-c";
import { kanjiN1A } from "./kanji-n1-a";
import { kanjiN1B } from "./kanji-n1-b";
import { kanjiN1C } from "./kanji-n1-c";
import { kanjiN1D } from "./kanji-n1-d";
import { kanjiN1E } from "./kanji-n1-e";
import { kanjiN1F } from "./kanji-n1-f";
import { kanjiN1G } from "./kanji-n1-g";
import { kanjiN1H } from "./kanji-n1-h";
import { kanjiN1I } from "./kanji-n1-i";
import { kanjiN1J } from "./kanji-n1-j";

// Total: 100 N5 + 200 N4 + 350 N3 + 400 N2 + 1160 N1 = 2210 kanji (deduped by char)
const allKanji: KanjiData[] = [
  ...kanjiN5A, ...kanjiN5B, ...kanjiN5C, ...kanjiN5D,
  ...kanjiN4, ...kanjiN4ExtraA, ...kanjiN4ExtraB, ...kanjiN4ExtraC, ...kanjiN4ExtraD,
  ...kanjiN3A, ...kanjiN3B, ...kanjiN3C,
  ...kanjiN2A, ...kanjiN2B, ...kanjiN2C,
  ...kanjiN1A, ...kanjiN1B, ...kanjiN1C, ...kanjiN1D, ...kanjiN1E,
  ...kanjiN1F, ...kanjiN1G, ...kanjiN1H, ...kanjiN1I, ...kanjiN1J,
];

// Deduplicate by char (keep first occurrence — lower levels take priority)
const _seenChars = new Set<string>();
export const kanjiData: KanjiData[] = allKanji.filter((k) => {
  if (_seenChars.has(k.char)) return false;
  _seenChars.add(k.char);
  return true;
});

export function cleanKun(k: string): string {
  return k.replace(/\./g, "");
}

export function findKanji(id: string): KanjiData | undefined {
  return kanjiData.find((k) => k.id === id);
}

export function findKanjiByChar(char: string): KanjiData | undefined {
  return kanjiData.find((k) => k.char === char);
}

export const LEVEL_COLORS: Record<string, string> = {
  N5: "#0ea5e9",
  N4: "#16a34a",
  N3: "#ca8a04",
  N2: "#ea580c",
  N1: "#dc2626",
};
export function levelColor(level: string): string {
  return LEVEL_COLORS[level] ?? "var(--primary)";
}
