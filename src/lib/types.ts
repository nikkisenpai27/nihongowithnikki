// Central type definitions for Nihongo with Nikki
// Furigana notation: kanji readings are written inline as 漢字[かんじ].
// e.g. "私[わたし]は学生[がくせい]です" -> renders ruby over 漢字 segments.

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type MasteryState = "new" | "learning" | "mastered";

export interface KanjiData {
  id: string;
  char: string;
  level: JLPTLevel;
  meaning: string[];
  onyomi: string[];
  kunyomi: string[];
  strokes: number;
  radical: string;
  radicalMeaning: string;
  grade: number;
  freq: number;
  parts: string[];
  vocab: { word: string; reading: string; meaning: string }[];
  examples: { jp: string; en: string }[];
}

export interface VocabData {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  level: JLPTLevel;
  theme: string;
  lesson?: number; // Minna no Nihongo lesson number
  partOfSpeech: string;
  example: { jp: string; en: string };
}

export interface GrammarData {
  id: string;
  point: string;
  reading: string;
  level: JLPTLevel;
  category: string;
  lesson?: number; // Minna no Nihongo lesson number
  meaning: string;
  structure: string;
  explanation: string;
  formation: string;
  examples: { jp: string; en: string }[];
  notes: string;
  related: string[];
}

export interface StoryData {
  id: string;
  title: string;
  titleReading: string;
  level: JLPTLevel;
  summary: string;
  estMinutes: number;
  tags: string[];
  body: string[];
  translation: string[];
  vocab: { word: string; reading: string; meaning: string }[];
}

export interface ReadingQuestion {
  q: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  titleReading: string;
  level: JLPTLevel;
  summary: string;
  estMinutes: number;
  tags: string[];
  body: string[];
  translation: string[];
  questions: ReadingQuestion[];
}

export interface ListeningData {
  id: string;
  title: string;
  level: JLPTLevel;
  context: string; // setting, e.g. "At a convenience store"
  text: string; // Japanese dialogue/passage with furigana brackets 漢字[かんじ] — spoken by TTS + shown as transcript
  translation: string; // English translation
  questions: ReadingQuestion[];
  estMinutes: number;
  tags: string[];
}

export type ViewKey =
  | "dashboard"
  | "kanji"
  | "kana"
  | "vocab"
  | "grammar"
  | "reading"
  | "listening"
  | "stories"
  | "quiz"
  | "settings";

export type QuizType =
  | "kanji-meaning"
  | "kanji-reading"
  | "vocab"
  | "grammar"
  | "mixed";
