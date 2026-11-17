import type { ReadingPassage } from "@/lib/types";
import { readingN5A } from "./reading-n5-a";
import { readingN5B } from "./reading-n5-b";
import { readingN4A } from "./reading-n4-a";
import { readingN4B } from "./reading-n4-b";

// 40 reading passages: 20 N5 + 20 N4
export const readingData: ReadingPassage[] = [
  ...readingN5A,
  ...readingN5B,
  ...readingN4A,
  ...readingN4B,
];
