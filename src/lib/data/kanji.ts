import type { KanjiData } from "@/lib/types";
import { kanjiN5A } from "./kanji-n5-a";
import { kanjiN5B } from "./kanji-n5-b";
import { kanjiN5C } from "./kanji-n5-c";
import { kanjiN4 } from "./kanji-n4";

export const kanjiData: KanjiData[] = [
  ...kanjiN5A,
  ...kanjiN5B,
  ...kanjiN5C,
  ...kanjiN4,
];

// Normalize kunyomi: strip traditional dot notation "わる.い" -> "わるい"
// and trim conjugation suffixes for cleaner display is NOT done here; we keep raw.
export function cleanKun(k: string): string {
  return k.replace(/\./g, "");
}

export function findKanji(id: string): KanjiData | undefined {
  return kanjiData.find((k) => k.id === id);
}

export function findKanjiByChar(char: string): KanjiData | undefined {
  return kanjiData.find((k) => k.char === char);
}
