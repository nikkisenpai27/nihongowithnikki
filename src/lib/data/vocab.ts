import type { VocabData } from "@/lib/types";
import { vocabN5A } from "./vocab-n5-a";
import { vocabN5B } from "./vocab-n5-b";
import { vocabN5C } from "./vocab-n5-c";
import { vocabN4A } from "./vocab-n4-a";
import { vocabN4B } from "./vocab-n4-b";
import { vocabN4C } from "./vocab-n4-c";

// Minna no Nihongo vocabulary: ~809 N5 (lessons 1-25) + ~812 N4 (lessons 26-50)
// Deduplicated by word (common particles/expressions appear across multiple lessons)
const allVocab: VocabData[] = [
  ...vocabN5A,
  ...vocabN5B,
  ...vocabN5C,
  ...vocabN4A,
  ...vocabN4B,
  ...vocabN4C,
];
const _seenWords = new Set<string>();
export const vocabData: VocabData[] = allVocab.filter((v) => {
  if (_seenWords.has(v.word)) return false;
  _seenWords.add(v.word);
  return true;
});

// Derive theme list from the data, with a best-effort icon mapping.
const THEME_ICON_MAP: Record<string, string> = {
  greeting: "hand",
  greetings: "hand",
  introduction: "hand",
  thing: "package",
  things: "package",
  demonstrative: "package",
  place: "map-pin",
  location: "map-pin",
  time: "clock",
  date: "calendar",
  transport: "bus",
  travel: "plane",
  verb: "zap",
  verbs: "zap",
  motion: "bus",
  method: "settings",
  adjective: "palette",
  adjectives: "palette",
  family: "users",
  food: "utensils",
  drink: "coffee",
  shopping: "shoppingcart",
  school: "graduationcap",
  work: "briefcase",
  emotion: "smile",
  emotions: "smile",
  body: "heart",
  health: "heart",
  nature: "trees",
  color: "palette",
  colors: "palette",
  number: "hash",
  numbers: "hash",
  counter: "hash",
  counters: "hash",
  past: "history",
  experience: "award",
  reason: "helpcircle",
  suggestion: "lightbulb",
  permission: "checkcircle",
  comparison: "gitcompare",
  condition: "split",
  conditional: "split",
  giving: "gift",
  receiving: "gift",
};

function iconForTheme(name: string): string {
  const key = name.toLowerCase().replace(/[^a-z]/g, "");
  for (const [k, v] of Object.entries(THEME_ICON_MAP)) {
    if (key.includes(k)) return v;
  }
  return "layers";
}

export const vocabThemes: { name: string; jp: string; icon: string }[] = Array.from(
  new Set(vocabData.map((v) => v.theme))
)
  .sort()
  .map((name) => ({ name, jp: "", icon: iconForTheme(name) }));

export { minnaLessons as vocabLessons } from "./lessons";
