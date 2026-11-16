import type { KanjiData } from "@/lib/types";
import { kanjiN5A } from "./kanji-n5-a";
import { kanjiN5B } from "./kanji-n5-b";
import { kanjiN5C } from "./kanji-n5-c";
import { kanjiN5D } from "./kanji-n5-d";
import { kanjiN4 } from "./kanji-n4";
import { kanjiN4ExtraA } from "./kanji-n4-extra-a";
import { kanjiN4ExtraB } from "./kanji-n4-extra-b";
import { kanjiN4ExtraC } from "./kanji-n4-extra-c";

// Total: 100 N5 + 150 N4 = 250 kanji
export const kanjiData: KanjiData[] = [
  ...kanjiN5A,
  ...kanjiN5B,
  ...kanjiN5C,
  ...kanjiN5D,
  ...kanjiN4,
  ...kanjiN4ExtraA,
  ...kanjiN4ExtraB,
  ...kanjiN4ExtraC,
];

// Strip traditional dot notation "わる.い" -> "わるい" for display
export function cleanKun(k: string): string {
  return k.replace(/\./g, "");
}

export function findKanji(id: string): KanjiData | undefined {
  return kanjiData.find((k) => k.id === id);
}

export function findKanjiByChar(char: string): KanjiData | undefined {
  return kanjiData.find((k) => k.char === char);
}
