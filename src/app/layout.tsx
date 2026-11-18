import type { Metadata, Viewport } from "next";
import {
  Inter,
  Noto_Sans_JP,
  M_PLUS_Rounded_1c,
  Geist_Mono,
  Klee_One,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
  Yuji_Syuku,
  Hina_Mincho,
  DotGothic16,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/nikki/theme-provider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const notojp = Noto_Sans_JP({ variable: "--font-notojp", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const rounded = M_PLUS_Rounded_1c({ variable: "--font-rounded", subsets: ["latin"], weight: ["400", "500", "700", "800"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const klee = Klee_One({ variable: "--font-klee", subsets: ["latin"], weight: ["400", "600"], display: "swap" });
const mincho = Shippori_Mincho({ variable: "--font-mincho", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const gothic = Zen_Kaku_Gothic_New({ variable: "--font-gothic", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });
const yuji = Yuji_Syuku({ variable: "--font-yuji", subsets: ["latin"], weight: ["400"], display: "swap" });
const hina = Hina_Mincho({ variable: "--font-hina", subsets: ["latin"], weight: ["400"], display: "swap" });
const dot = DotGothic16({ variable: "--font-dot", subsets: ["latin"], weight: ["400"], display: "swap" });

export const metadata: Metadata = {
  title: "Nihongo with Nikki — Learn JLPT N5 & N4 with Nikki",
  description:
    "A warm, friendly Japanese learning platform for JLPT N5 and N4. Study kanji, vocabulary, grammar, reading, and stories with Nikki, your personal tutor.",
  keywords: [
    "Japanese",
    "JLPT",
    "N5",
    "N4",
    "kanji",
    "vocabulary",
    "grammar",
    "Nikki",
    "learn Japanese",
  ],
  authors: [{ name: "Nikki" }],
  icons: {
    icon: "/nikki-logo.png",
    apple: "/nikki-logo.png",
  },
  openGraph: {
    title: "Nihongo with Nikki",
    description: "Learn JLPT N5 & N4 Japanese with Nikki — your friendly tutor.",
    type: "website",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ff8fab",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${inter.variable} ${notojp.variable} ${rounded.variable} ${geistMono.variable} ${klee.variable} ${mincho.variable} ${gothic.variable} ${yuji.variable} ${hina.variable} ${dot.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
