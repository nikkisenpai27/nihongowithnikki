import type { StoryData } from "@/lib/types";
import { storiesOriginal } from "./stories-original";
import { storiesN5A } from "./stories-n5-a";
import { storiesN5B } from "./stories-n5-b";
import { storiesN5C } from "./stories-n5-c";
import { storiesN4A } from "./stories-n4-a";
import { storiesN4B } from "./stories-n4-b";
import { storiesN4C } from "./stories-n4-c";

// 100 stories total: 10 original + 45 new N5 + 45 new N4
export const storiesData: StoryData[] = [
  ...storiesOriginal,
  ...storiesN5A,
  ...storiesN5B,
  ...storiesN5C,
  ...storiesN4A,
  ...storiesN4B,
  ...storiesN4C,
];
