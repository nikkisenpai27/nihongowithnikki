import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, M_PLUS_Rounded_1c, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/nikki/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notojp = Noto_Sans_JP({
  variable: "--font-notojp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
        {/* Apply theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem('nikki-settings')||'{}');var state=s.state||{};var ct=state.colorTheme||'sakura';var m=state.mode||'auto';var d=m==='dark'||(m==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',ct);document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.setAttribute('data-theme','sakura');}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${notojp.variable} ${rounded.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
