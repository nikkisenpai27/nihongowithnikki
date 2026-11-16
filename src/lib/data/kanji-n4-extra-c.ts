import type { KanjiData } from "@/lib/types";

// Final N4 kanji to reach 150 total (n4-150)
export const kanjiN4ExtraC: KanjiData[] = [
  {
    id: "n4-150",
    char: "昨",
    level: "N4",
    meaning: ["yesterday", "past"],
    onyomi: ["サク", "ザク"],
    kunyomi: [],
    strokes: 9,
    radical: "日",
    radicalMeaning: "day",
    grade: 4,
    freq: 380,
    parts: ["日", "乍"],
    vocab: [
      { word: "昨日", reading: "きのう", meaning: "yesterday" },
      { word: "昨年", reading: "さくねん", meaning: "last year" },
      { word: "昨夜", reading: "ゆうべ", meaning: "last night" },
    ],
    examples: [
      { jp: "昨日[きのう]は雨[あめ]が降[ふ]りました。", en: "It rained yesterday." },
      { jp: "昨日[きのう]の晩[ばん]ご飯[はん]は何[なに]でしたか。", en: "What did you have for dinner yesterday?" },
    ],
  },
];
