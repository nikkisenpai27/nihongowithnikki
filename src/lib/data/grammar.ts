import type { GrammarData } from "@/lib/types";
import { grammarN5 } from "./grammar-n5";
import { grammarN4 } from "./grammar-n4";
import { grammarN3A } from "./grammar-n3-a";
import { grammarN3B } from "./grammar-n3-b";
import { grammarN3C } from "./grammar-n3-c";
import { grammarN2A } from "./grammar-n2-a";
import { grammarN2B } from "./grammar-n2-b";
import { grammarN2C } from "./grammar-n2-c";
import { grammarN2D } from "./grammar-n2-d";
import { grammarN1A } from "./grammar-n1-a";
import { grammarN1B } from "./grammar-n1-b";
import { grammarN1C } from "./grammar-n1-c";
import { grammarN1D } from "./grammar-n1-d";

// Grammar: N5/N4 (Minna no Nihongo) + N3/N2/N1 (Shinzaizen Master / try! series)
// Target counts aligned with official JLPT grammar point expectations:
//   N5: 80, N4: 130, N3: 140, N2: 200, N1: 200  (total 750)
// Deduplicated by point, then capped per level so the exported
// grammarData respects the target counts above.
const allGrammar: GrammarData[] = [
  ...grammarN5,
  ...grammarN4,
  ...grammarN3A,
  ...grammarN3B,
  ...grammarN3C,
  ...grammarN2A,
  ...grammarN2B,
  ...grammarN2C,
  ...grammarN2D,
  ...grammarN1A,
  ...grammarN1B,
  ...grammarN1C,
  ...grammarN1D,
];

/** Per-level caps — first N unique points per level are kept. */
const LEVEL_LIMITS: Record<string, number> = {
  N5: 80,
  N4: 130,
  N3: 140,
  N2: 200,
  N1: 200,
};

const _seenPoints = new Set<string>();
const _levelCounts: Record<string, number> = {};
export const grammarData: GrammarData[] = allGrammar.filter((g) => {
  // Skip duplicate grammar points across levels (keep first occurrence)
  if (_seenPoints.has(g.point)) return false;
  _seenPoints.add(g.point);
  // Enforce per-level cap
  const lvl = g.level;
  _levelCounts[lvl] = (_levelCounts[lvl] || 0) + 1;
  if (_levelCounts[lvl] > LEVEL_LIMITS[lvl]) return false;
  return true;
});

export const grammarCategories: { name: string; jp: string }[] = Array.from(
  new Set(grammarData.map((g) => g.category))
)
  .sort()
  .map((name) => ({ name, jp: "" }));

export { minnaLessons as grammarLessons } from "./lessons";
