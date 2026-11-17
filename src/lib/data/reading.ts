import type { ReadingPassage } from "@/lib/types";
import { readingN5A } from "./reading-n5-a";
import { readingN5B } from "./reading-n5-b";
import { readingN5C } from "./reading-n5-c";
import { readingN5D } from "./reading-n5-d";
import { readingN5E } from "./reading-n5-e";
import { readingN4A } from "./reading-n4-a";
import { readingN4B } from "./reading-n4-b";
import { readingN4C } from "./reading-n4-c";
import { readingN4D } from "./reading-n4-d";
import { readingN4E } from "./reading-n4-e";
import { readingN3A } from "./reading-n3-a";
import { readingN3B } from "./reading-n3-b";
import { readingN3C } from "./reading-n3-c";
import { readingN3D } from "./reading-n3-d";
import { readingN3E } from "./reading-n3-e";
import { readingN2A } from "./reading-n2-a";

// Reading passages: 50 N5 + 50 N4 + 50 N3 + 10 N2 (more coming)
export const readingData: ReadingPassage[] = [
  ...readingN5A, ...readingN5B, ...readingN5C, ...readingN5D, ...readingN5E,
  ...readingN4A, ...readingN4B, ...readingN4C, ...readingN4D, ...readingN4E,
  ...readingN3A, ...readingN3B, ...readingN3C, ...readingN3D, ...readingN3E,
  ...readingN2A,
];
