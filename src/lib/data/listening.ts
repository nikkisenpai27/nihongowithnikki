import type { ListeningData } from "@/lib/types";
import { listeningN5A } from "./listening-n5-a";
import { listeningN5B } from "./listening-n5-b";
import { listeningN5C } from "./listening-n5-c";
import { listeningN5D } from "./listening-n5-d";
import { listeningN4A } from "./listening-n4-a";
import { listeningN4B } from "./listening-n4-b";
import { listeningN4C } from "./listening-n4-c";
import { listeningN4D } from "./listening-n4-d";

// 80 listening exercises: 40 N5 + 40 N4
export const listeningData: ListeningData[] = [
  ...listeningN5A,
  ...listeningN5B,
  ...listeningN5C,
  ...listeningN5D,
  ...listeningN4A,
  ...listeningN4B,
  ...listeningN4C,
  ...listeningN4D,
];
