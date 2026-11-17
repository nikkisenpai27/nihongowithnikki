import type { ListeningData } from "@/lib/types";
import { listeningN5A } from "./listening-n5-a";
import { listeningN5B } from "./listening-n5-b";
import { listeningN5C } from "./listening-n5-c";
import { listeningN5D } from "./listening-n5-d";
import { listeningN5E } from "./listening-n5-e";
import { listeningN5F } from "./listening-n5-f";
import { listeningN5G } from "./listening-n5-g";
import { listeningN5H } from "./listening-n5-h";
import { listeningN5I } from "./listening-n5-i";
import { listeningN5J } from "./listening-n5-j";
import { listeningN4A } from "./listening-n4-a";
import { listeningN4B } from "./listening-n4-b";
import { listeningN4C } from "./listening-n4-c";
import { listeningN4D } from "./listening-n4-d";
import { listeningN4E } from "./listening-n4-e";
import { listeningN4F } from "./listening-n4-f";
import { listeningN4G } from "./listening-n4-g";
import { listeningN4H } from "./listening-n4-h";
import { listeningN4I } from "./listening-n4-i";
import { listeningN4J } from "./listening-n4-j";
import { listeningN3A } from "./listening-n3-a";
import { listeningN3B } from "./listening-n3-b";
import { listeningN3C } from "./listening-n3-c";
import { listeningN3D } from "./listening-n3-d";
import { listeningN3E } from "./listening-n3-e";
import { listeningN2NewA } from "./listening-n2-new-a";
import { listeningN2NewB } from "./listening-n2-new-b";
import { listeningN2NewC } from "./listening-n2-new-c";
import { listeningN2NewD } from "./listening-n2-new-d";
import { listeningN2NewE } from "./listening-n2-new-e";
import { listeningN1A } from "./listening-n1-a";
import { listeningN1B } from "./listening-n1-b";
import { listeningN1C } from "./listening-n1-c";
import { listeningN1D } from "./listening-n1-d";
import { listeningN1E } from "./listening-n1-e";

// 500 listening exercises: 100 N5 + 100 N4 + 100 N3 + 100 N2 + 100 N1
export const listeningData: ListeningData[] = [
  ...listeningN5A, ...listeningN5B, ...listeningN5C, ...listeningN5D, ...listeningN5E,
  ...listeningN5F, ...listeningN5G, ...listeningN5H, ...listeningN5I, ...listeningN5J,
  ...listeningN4A, ...listeningN4B, ...listeningN4C, ...listeningN4D, ...listeningN4E,
  ...listeningN4F, ...listeningN4G, ...listeningN4H, ...listeningN4I, ...listeningN4J,
  ...listeningN3A, ...listeningN3B, ...listeningN3C, ...listeningN3D, ...listeningN3E,
  ...listeningN2NewA, ...listeningN2NewB, ...listeningN2NewC, ...listeningN2NewD, ...listeningN2NewE,
  ...listeningN1A, ...listeningN1B, ...listeningN1C, ...listeningN1D, ...listeningN1E,
];
