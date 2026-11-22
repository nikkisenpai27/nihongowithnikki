"use client";

import { useRef } from "react";
import {
  FolderOpen,
  FileText,
  PenLine,
  BookOpen,
  Download,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "../nikki/shared";
import { cn } from "@/lib/utils";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1hSWxKncq3XjPSkZ3g_6ckL5xlyIwVMOj?usp=drive_link";

const NOTES = [
  {
    level: "N5",
    color: "#0ea5e9",
    title: "N5 Grammar Handwritten Notes",
    jp: "N5 文法ノート",
    desc: "Nikki's handwritten grammar notes covering all essential N5 grammar points — particles, verb conjugation (ます/て-form), copula (です), basic conditionals, and sentence structure. Each point includes example sentences written in Nikki's own hand with clear stroke-by-stroke explanations.",
    items: ["Particles (は, が, を, に, で)", "Verb forms (〜ます, 〜て, 〜た)", "Copula (です, じゃない)", "Adjectives (い/な)", "Basic conditionals (〜たら)", "Question forms (〜か, 〜の)"],
    pages: "~45 pages",
    link: "https://drive.google.com/drive/folders/1VNm7LO7YBSdtGsa89TtJfhmTXBgzHYon",
  },
  {
    level: "N4",
    color: "#16a34a",
    title: "N4 Grammar Handwritten Notes",
    jp: "N4 文法ノート",
    desc: "Building on N5, these handwritten notes cover N4 grammar patterns — giving/receiving verbs (〜てあげる/くれる/もらう), conditionals (〜ば, 〜と, 〜たら), passive/causative forms, honorific expressions, and more complex sentence structures. Nikki's notes include conjugation tables and usage comparisons drawn by hand.",
    items: ["Giving/receiving (あげる/くれる/もらう)", "Conditionals (〜ば, 〜と, 〜たら, 〜なら)", "Passive voice (〜られる/〜れる)", "Causative (〜させる)", "Honorific/humble forms", "Nominalization (〜の, 〜こと)"],
    pages: "~60 pages",
    link: "https://drive.google.com/drive/folders/1DfQkk2g1gZJg71zqpdzn3dZAn-g3jb_U",
  },
  {
    level: "N3",
    color: "#ca8a04",
    title: "N3 Grammar Handwritten Notes",
    jp: "N3 文法ノート",
    desc: "Advanced handwritten notes bridging intermediate to upper-intermediate Japanese. Covers N3 patterns like 〜うちに, 〜に対して, 〜どころか, 〜一方で, 〜に違いない, and more. Each pattern is illustrated with Nikki's hand-drawn example sentences, conjugation diagrams, and comparison charts with similar grammar points.",
    items: ["Time/sequence (〜うちに, 〜たびに, 〜際に)", "Contrast (〜一方で, 〜どころか, 〜にひきかえ)", "Certainty (〜に違いない, 〜に決まっている)", "Cause/reason (〜あまり, 〜以上)", "Assumption (〜かねない, 〜っこない)", "Modifiers (〜向き, 〜向け, 〜がち)"],
    pages: "~80 pages",
    link: "https://drive.google.com/drive/folders/1Gz3viZAgb7PMeYOBrn79Vz7Kx9xsHhTO",
  },
];

export function DriveView() {
  // Animation is always visible (CSS handles the keyframes).
  // The mounted ref is just for potential future use.
  const mountedRef = useRef(true);

  return (
    <div>
      <SectionHeader
        title="Google Drive Resources"
        jp="ドライブ"
        icon={FolderOpen}
        description="17+ types of free Japanese learning resources — Nikki's handwritten grammar notes (N5/N4/N3), PDF textbooks, reference books, 100+ JLPT mock exams, vocabulary lists, kanji worksheets, listening practice audio, reading comprehension drills, conversation scripts, writing templates, particle guides, conjugation charts, keigo reference sheets, yojijukugo lists, and more. All free to download from Google Drive."
      />

      {/* Hero card with animation */}
      <Card
        className={cn(
          "relative overflow-hidden border-0 bg-gradient-to-br from-primary/12 via-card to-card p-6 shadow-sm transition-all duration-700",
          true ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <div className="sakura-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-primary/15"
            style={{ animation: "float-soft 6s ease-in-out infinite" }}
          >
            <FolderOpen className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-rounded), var(--font-sans)" }}>
              Nikki&apos;s Japanese Learning Resources
              <span className="jp ml-2 text-lg text-muted-foreground">学習資料</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              17+ types of free Japanese learning materials — all on Google Drive.
              Includes Nikki&apos;s handwritten grammar notes (N5/N4/N3), PDF textbooks, reference books, 100+ JLPT mock exams
              with answer keys, vocabulary lists, kanji worksheets, listening practice audio, reading comprehension
              drills, conversation scripts, writing templates, particle guides, conjugation charts, keigo reference
              sheets, and yojijukugo lists. Whether you&apos;re starting from zero or aiming for N1, there&apos;s something
              here for every level.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a href={DRIVE_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Open Google Drive
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Badge variant="secondary" className="gap-1">
                <FileText className="h-3 w-3" /> PDFs & Books
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <PenLine className="h-3 w-3" /> Handwritten Notes
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <GraduationCap className="h-3 w-3" /> Mock Tests
              </Badge>
            </div>
          </div>
        </div>

        {/* Animated stats row */}
        <div
          className={cn(
            "relative mt-6 grid grid-cols-3 gap-4 transition-all delay-300 duration-700",
            true ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {[
            { label: "Resource Types", value: "17+", jp: "資料" },
            { label: "JLPT Levels", value: "N5–N1", jp: "レベル" },
            { label: "Mock Tests", value: "100+", jp: "模試" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl bg-card/80 p-3 ring-1 ring-border"
              style={{ animation: `float-soft ${4 + i}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
            >
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-[11px] font-medium text-foreground">{stat.label}</span>
              <span className="jp text-[10px] text-muted-foreground">{stat.jp}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Notes detail cards with staggered animation */}
      <div className="mt-6 space-y-5">
        {NOTES.map((note, i) => (
          <Card
            key={note.level}
            className={cn(
              "relative overflow-hidden border-l-4 p-5 transition-all duration-700",
              true ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{
              borderLeftColor: note.color,
              transitionDelay: `${400 + i * 200}ms`,
            }}
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Level badge with pulse */}
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-md"
                  style={{ backgroundColor: note.color, animation: "pulse-glow 4s ease-in-out infinite" }}
                >
                  {note.level}
                </span>
                <span className="jp text-xs text-muted-foreground">{note.pages}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <PenLine className="h-5 w-5" style={{ color: note.color }} />
                  <h3 className="text-lg font-bold text-foreground">{note.title}</h3>
                </div>
                <p className="jp mt-0.5 text-sm font-medium text-muted-foreground">{note.jp}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">{note.desc}</p>

                {/* Topics covered */}
                <div className="mt-3">
                  <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" /> Topics Covered
                  </p>
                  <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {note.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "flex items-center gap-2 rounded-lg bg-muted/40 px-3 py-1.5 transition-all",
                          true ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                        )}
                        style={{ transitionDelay: `${600 + i * 200 + idx * 80}ms` }}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0" style={{ color: note.color }} />
                        <span className="text-xs text-foreground/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Download button */}
                <a href={note.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                  <Button size="sm" variant="outline" className="gap-2" style={{ borderColor: note.color, color: note.color }}>
                    <Download className="h-3.5 w-3.5" />
                    Download {note.level} Notes
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA with animation */}
      <Card
        className={cn(
          "mt-6 overflow-hidden border-primary/30 bg-primary/5 p-6 text-center transition-all duration-700",
          true ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        style={{ transitionDelay: "1000ms" }}
      >
        <Sparkles className="mx-auto h-8 w-8 text-primary" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
        <h3 className="mt-3 text-xl font-bold text-foreground">
          All notes are free to download
          <span className="jp ml-2 text-base text-muted-foreground">無料でダウンロード</span>
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Nikki wrote these notes by hand while studying for the JLPT. They&apos;re organized by level,
          easy to read, and include everything you need to master N5–N3 grammar. Click below to open
          the Google Drive folder.
        </p>
        <a href={DRIVE_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
          <Button size="lg" className="gap-2">
            <FolderOpen className="h-4 w-4" />
            Open Nikki&apos;s Google Drive
            <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </Card>
    </div>
  );
}
