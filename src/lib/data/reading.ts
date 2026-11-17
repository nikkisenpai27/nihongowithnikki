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
import { readingN2B } from "./reading-n2-b";
import { readingN2C } from "./reading-n2-c";
import { readingN2D } from "./reading-n2-d";
import { readingN2E } from "./reading-n2-e";
import { readingN1A } from "./reading-n1-a";
import { readingN1B } from "./reading-n1-b";
import { readingN1C } from "./reading-n1-c";
import { readingN1D } from "./reading-n1-d";
import { readingN1E } from "./reading-n1-e";

// 250 reading passages: 50 N5 + 50 N4 + 50 N3 + 50 N2 + 50 N1
export const readingData: ReadingPassage[] = [
  ...readingN5A, ...readingN5B, ...readingN5C, ...readingN5D, ...readingN5E,
  ...readingN4A, ...readingN4B, ...readingN4C, ...readingN4D, ...readingN4E,
  ...readingN3A, ...readingN3B, ...readingN3C, ...readingN3D, ...readingN3E,
  ...readingN2A, ...readingN2B, ...readingN2C, ...readingN2D, ...readingN2E,
  ...readingN1A, ...readingN1B, ...readingN1C, ...readingN1D, ...readingN1E,
];
