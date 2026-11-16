import type { ListeningData } from "@/lib/types";
import { listeningN5A } from "./listening-n5-a";
import { listeningN5B } from "./listening-n5-b";
import { listeningN4A } from "./listening-n4-a";
import { listeningN4B } from "./listening-n4-b";

// 40 listening exercises: 20 N5 + 20 N4
export const listeningData: ListeningData[] = [
  ...listeningN5A,
  ...listeningN5B,
  ...listeningN4A,
  ...listeningN4B,
];
