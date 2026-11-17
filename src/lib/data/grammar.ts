import type { GrammarData } from "@/lib/types";
import { grammarN5 } from "./grammar-n5";
import { grammarN4 } from "./grammar-n4";
import { grammarN3A } from "./grammar-n3-a";
import { grammarN3B } from "./grammar-n3-b";
import { grammarN2A } from "./grammar-n2-a";
import { grammarN2B } from "./grammar-n2-b";
import { grammarN1A } from "./grammar-n1-a";
import { grammarN1B } from "./grammar-n1-b";

// Grammar: N5/N4 (Minna) + N3/N2/N1 (Shinzaizen Master style, chapter-wise)
// Deduplicated by point (some patterns appear across levels)
const allGrammar: GrammarData[] = [
  ...grammarN5,
  ...grammarN4,
  ...grammarN3A,
  ...grammarN3B,
  ...grammarN2A,
  ...grammarN2B,
  ...grammarN1A,
  ...grammarN1B,
];
const _seenPoints = new Set<string>();
export const grammarData: GrammarData[] = allGrammar.filter((g) => {
  if (_seenPoints.has(g.point)) return false;
  _seenPoints.add(g.point);
  return true;
});

export const grammarCategories: { name: string; jp: string }[] = Array.from(
  new Set(grammarData.map((g) => g.category))
)
  .sort()
  .map((name) => ({ name, jp: "" }));

export { minnaLessons as grammarLessons } from "./lessons";
