"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MasteryState, JLPTLevel, QuizType } from "@/lib/types";

export interface QuizResult {
  id: string;
  type: QuizType;
  level: JLPTLevel;
  score: number;
  total: number;
  date: string; // ISO
}

interface ProgressState {
  // mastery maps keyed by item id
  kanji: Record<string, MasteryState>;
  vocab: Record<string, MasteryState>;
  grammar: Record<string, MasteryState>;
  storiesRead: string[];
  quizHistory: QuizResult[];
  xp: number;
  streak: number;
  lastStudyDate: string | null; // YYYY-MM-DD
  dailyGoalMinutes: number;
  studiedTodayMinutes: number;
  // actions
  setMastery: (
    kind: "kanji" | "vocab" | "grammar",
    id: string,
    state: MasteryState
  ) => void;
  cycleMastery: (kind: "kanji" | "vocab" | "grammar", id: string) => void;
  markStoryRead: (id: string) => void;
  addQuizResult: (r: QuizResult) => void;
  addXp: (n: number) => void;
  touchStreak: () => void;
  addStudyMinutes: (n: number) => void;
  setDailyGoal: (n: number) => void;
  resetProgress: () => void;
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}
function daysBetween(a: string, b: string) {
  const da = new Date(a + "T00:00:00").getTime();
  const db = new Date(b + "T00:00:00").getTime();
  return Math.round((db - da) / 86400000);
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      kanji: {},
      vocab: {},
      grammar: {},
      storiesRead: [],
      quizHistory: [],
      xp: 0,
      streak: 0,
      lastStudyDate: null,
      dailyGoalMinutes: 15,
      studiedTodayMinutes: 0,
      setMastery: (kind, id, state) =>
        set((s) => ({
          [kind]: { ...s[kind], [id]: state },
          xp: s.xp + (s[kind][id] !== state ? 2 : 0),
        })),
      cycleMastery: (kind, id) => {
        const cur = get()[kind][id] ?? "new";
        const next: MasteryState =
          cur === "new" ? "learning" : cur === "learning" ? "mastered" : "new";
        set((s) => ({
          [kind]: { ...s[kind], [id]: next },
          xp: s.xp + 2,
        }));
        get().touchStreak();
      },
      markStoryRead: (id) =>
        set((s) => ({
          storiesRead: s.storiesRead.includes(id) ? s.storiesRead : [...s.storiesRead, id],
          xp: s.storiesRead.includes(id) ? s.xp : s.xp + 10,
        })),
      addQuizResult: (r) =>
        set((s) => ({
          quizHistory: [r, ...s.quizHistory].slice(0, 50),
          xp: s.xp + r.score * 3,
        })),
      addXp: (n) => set((s) => ({ xp: s.xp + n })),
      touchStreak: () => {
        const today = todayStr();
        const last = get().lastStudyDate;
        if (last === today) return;
        let nextStreak = 1;
        if (last) {
          const diff = daysBetween(last, today);
          if (diff === 1) nextStreak = get().streak + 1;
          else if (diff <= 0) nextStreak = get().streak;
          else nextStreak = 1;
        }
        set({ streak: nextStreak, lastStudyDate: today, studiedTodayMinutes: 0 });
      },
      addStudyMinutes: (n) =>
        set((s) => {
          const today = todayStr();
          const reset = s.lastStudyDate !== today ? 0 : s.studiedTodayMinutes;
          return {
            studiedTodayMinutes: reset + n,
            lastStudyDate: today,
          };
        }),
      setDailyGoal: (n) => set({ dailyGoalMinutes: n }),
      resetProgress: () =>
        set({
          kanji: {},
          vocab: {},
          grammar: {},
          storiesRead: [],
          quizHistory: [],
          xp: 0,
          streak: 0,
          lastStudyDate: null,
          studiedTodayMinutes: 0,
        }),
    }),
    { name: "nikki-progress" }
  )
);

// helpers
export function masteryCount(
  map: Record<string, MasteryState>,
  state: MasteryState
) {
  return Object.values(map).filter((v) => v === state).length;
}
