import type { GrammarData } from "@/lib/types";
import { grammarN5 } from "./grammar-n5";
import { grammarN4 } from "./grammar-n4";

// Minna no Nihongo grammar: 61 N5 (lessons 1-25) + 70 N4 (lessons 26-50) = 131 points
export const grammarData: GrammarData[] = [
  ...grammarN5,
  ...grammarN4,
];

export const grammarCategories: { name: string; jp: string }[] = Array.from(
  new Set(grammarData.map((g) => g.category))
)
  .sort()
  .map((name) => ({ name, jp: "" }));

export { minnaLessons as grammarLessons } from "./lessons";
