// Minna no Nihongo lesson metadata (shared by vocab & grammar)
// Book 1 (N5): Lessons 1-25, Book 2 (N4): Lessons 26-50

import type { JLPTLevel } from "@/lib/types";

export interface LessonMeta {
  lesson: number;
  level: JLPTLevel;
  title: string;
  jp: string;
}

export const minnaLessons: LessonMeta[] = [
  { lesson: 1, level: "N5", title: "Greetings", jp: "あいさつ" },
  { lesson: 2, level: "N5", title: "Things & Demonstratives", jp: "もの" },
  { lesson: 3, level: "N5", title: "Place & Location", jp: "場所" },
  { lesson: 4, level: "N5", title: "Time", jp: "時間" },
  { lesson: 5, level: "N5", title: "Going & Coming", jp: "移動" },
  { lesson: 6, level: "N5", title: "Daily Activities", jp: "日常" },
  { lesson: 7, level: "N5", title: "Methods & Transport", jp: "方法" },
  { lesson: 8, level: "N5", title: "i-Adjectives", jp: "い形容詞" },
  { lesson: 9, level: "N5", title: "na-Adjectives & Family", jp: "家族" },
  { lesson: 10, level: "N5", title: "Past Tense (Copula)", jp: "過去" },
  { lesson: 11, level: "N5", title: "Counters", jp: "助数詞" },
  { lesson: 12, level: "N5", title: "Past Events", jp: "過去の出来事" },
  { lesson: 13, level: "N5", title: "Want & Desire", jp: "希望" },
  { lesson: 14, level: "N5", title: "Te-form Requests", jp: "て形" },
  { lesson: 15, level: "N5", title: "Permission", jp: "許可" },
  { lesson: 16, level: "N5", title: "Sequence", jp: "順序" },
  { lesson: 17, level: "N5", title: "Comparison", jp: "比較" },
  { lesson: 18, level: "N5", title: "State", jp: "状態" },
  { lesson: 19, level: "N5", title: "Experience", jp: "経験" },
  { lesson: 20, level: "N5", title: "Reason", jp: "理由" },
  { lesson: 21, level: "N5", title: "Suggestion", jp: "提案" },
  { lesson: 22, level: "N5", title: "Modifiers", jp: "連体" },
  { lesson: 23, level: "N5", title: "Giving & Receiving", jp: "授受" },
  { lesson: 24, level: "N5", title: "Conditionals", jp: "条件" },
  { lesson: 25, level: "N5", title: "Review", jp: "復習" },
  { lesson: 26, level: "N4", title: "Casual & Polite", jp: "普通体" },
  { lesson: 27, level: "N4", title: "Potential", jp: "可能" },
  { lesson: 28, level: "N4", title: "While (ながら)", jp: "同時" },
  { lesson: 29, level: "N4", title: "Easy / Difficult", jp: "難易" },
  { lesson: 30, level: "N4", title: "Even If", jp: "逆接" },
  { lesson: 31, level: "N4", title: "Intention", jp: "意図" },
  { lesson: 32, level: "N4", title: "Instructions", jp: "指示" },
  { lesson: 33, level: "N4", title: "Passive", jp: "受身" },
  { lesson: 34, level: "N4", title: "Causative", jp: "使役" },
  { lesson: 35, level: "N4", title: "Respectful (Sonkeigo)", jp: "尊敬" },
  { lesson: 36, level: "N4", title: "Humble (Kenjougo)", jp: "謙譲" },
  { lesson: 37, level: "N4", title: "Polite Special", jp: "丁寧" },
  { lesson: 38, level: "N4", title: "Nominalization", jp: "名詞化" },
  { lesson: 39, level: "N4", title: "Appearance", jp: "様態" },
  { lesson: 40, level: "N4", title: "Conditions", jp: "条件" },
  { lesson: 41, level: "N4", title: "Hearsay", jp: "伝聞" },
  { lesson: 42, level: "N4", title: "Regret & Should", jp: "後悔" },
  { lesson: 43, level: "N4", title: "Unexpected", jp: "逆接" },
  { lesson: 44, level: "N4", title: "Conversation Flow", jp: "会話" },
  { lesson: 45, level: "N4", title: "Certainty", jp: "確信" },
  { lesson: 46, level: "N4", title: "Completion", jp: "完了" },
  { lesson: 47, level: "N4", title: "Should Have", jp: "当然" },
  { lesson: 48, level: "N4", title: "Only / Just", jp: "限定" },
  { lesson: 49, level: "N4", title: "Change", jp: "変化" },
  { lesson: 50, level: "N4", title: "Review", jp: "復習" },
  // N3: Separate lesson numbering 1-22 (not mixed with N5/N4)
  { lesson: 1, level: "N3", title: "Time & Sequence", jp: "時間・順序" },
  { lesson: 2, level: "N3", title: "Cause & Reason", jp: "原因・理由" },
  { lesson: 3, level: "N3", title: "Condition & Assumption", jp: "条件・仮定" },
  { lesson: 4, level: "N3", title: "Contrast & Concession", jp: "対比・譲歩" },
  { lesson: 5, level: "N3", title: "Simultaneous & Continuation", jp: "同時・継続" },
  { lesson: 6, level: "N3", title: "Change & Transition", jp: "変化・推移" },
  { lesson: 7, level: "N3", title: "Degree & Extent", jp: "程度・範囲" },
  { lesson: 8, level: "N3", title: "Judgement & Evaluation", jp: "判断・評価" },
  { lesson: 9, level: "N3", title: "Request & Command", jp: "依頼・命令" },
  { lesson: 10, level: "N3", title: "Suggestion & Advice", jp: "提案・助言" },
  { lesson: 11, level: "N3", title: "Permission & Prohibition", jp: "許可・禁止" },
  { lesson: 12, level: "N3", title: "Obligation & Necessity", jp: "義務・必要" },
  { lesson: 13, level: "N3", title: "Possibility & Ability", jp: "可能性・能力" },
  { lesson: 14, level: "N3", title: "Passive & Causative", jp: "受身・使役" },
  { lesson: 15, level: "N3", title: "Respectful & Humble", jp: "敬語" },
  { lesson: 16, level: "N3", title: "Hearsay & Citation", jp: "伝聞・引用" },
  { lesson: 17, level: "N3", title: "Focus & Emphasis", jp: "焦点・強調" },
  { lesson: 18, level: "N3", title: "Limitation & Exclusion", jp: "限定・排除" },
  { lesson: 19, level: "N3", title: "Purpose & Means", jp: "目的・手段" },
  { lesson: 20, level: "N3", title: "Contrast & Comparison", jp: "対照・比較" },
  { lesson: 21, level: "N3", title: "Idioms & Expressions", jp: "慣用表現" },
  { lesson: 22, level: "N3", title: "Review", jp: "復習" },
];

export function lessonsForLevel(level: "all" | JLPTLevel): LessonMeta[] {
  if (level === "all") return minnaLessons;
  return minnaLessons.filter((l) => l.level === level);
}
