import type { StoryData } from "@/lib/types";
import { storiesOriginal } from "./stories-original";
import { storiesN5A } from "./stories-n5-a";
import { storiesN5B } from "./stories-n5-b";
import { storiesN5C } from "./stories-n5-c";
import { storiesN4A } from "./stories-n4-a";
import { storiesN4B } from "./stories-n4-b";
import { storiesN4C } from "./stories-n4-c";
import { storiesN3A } from "./stories-n3-a";
import { storiesN3B } from "./stories-n3-b";
import { storiesN3C } from "./stories-n3-c";
import { storiesN3D } from "./stories-n3-d";
import { storiesN3E } from "./stories-n3-e";
import { storiesN3F } from "./stories-n3-f";
import { storiesN3G } from "./stories-n3-g";
import { storiesN3H } from "./stories-n3-h";
import { storiesN3I } from "./stories-n3-i";
import { storiesN3J } from "./stories-n3-j";
import { storiesN2NewA } from "./stories-n2-new-a";
import { storiesN2NewB } from "./stories-n2-new-b";
import { storiesN2NewC } from "./stories-n2-new-c";
import { storiesN2NewD } from "./stories-n2-new-d";
import { storiesN2NewE } from "./stories-n2-new-e";
import { storiesN2NewF } from "./stories-n2-new-f";
import { storiesN2NewG } from "./stories-n2-new-g";
import { storiesN2NewH } from "./stories-n2-new-h";
import { storiesN2NewI } from "./stories-n2-new-i";
import { storiesN2NewJ } from "./stories-n2-new-j";
import { storiesN1A } from "./stories-n1-a";
import { storiesN1B } from "./stories-n1-b";
import { storiesN1C } from "./stories-n1-c";
import { storiesN1D } from "./stories-n1-d";
import { storiesN1E } from "./stories-n1-e";
import { storiesN1F } from "./stories-n1-f";
import { storiesN1G } from "./stories-n1-g";
import { storiesN1H } from "./stories-n1-h";
import { storiesN1I } from "./stories-n1-i";
import { storiesN1J } from "./stories-n1-j";

// 400 stories: 100 N5/N4 (original+added) + 100 N3 + 100 N2 + 100 N1
export const storiesData: StoryData[] = [
  ...storiesOriginal,
  ...storiesN5A, ...storiesN5B, ...storiesN5C,
  ...storiesN4A, ...storiesN4B, ...storiesN4C,
  ...storiesN3A, ...storiesN3B, ...storiesN3C, ...storiesN3D, ...storiesN3E,
  ...storiesN3F, ...storiesN3G, ...storiesN3H, ...storiesN3I, ...storiesN3J,
  ...storiesN2NewA, ...storiesN2NewB, ...storiesN2NewC, ...storiesN2NewD, ...storiesN2NewE,
  ...storiesN2NewF, ...storiesN2NewG, ...storiesN2NewH, ...storiesN2NewI, ...storiesN2NewJ,
  ...storiesN1A, ...storiesN1B, ...storiesN1C, ...storiesN1D, ...storiesN1E,
  ...storiesN1F, ...storiesN1G, ...storiesN1H, ...storiesN1I, ...storiesN1J,
];
