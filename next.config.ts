import type { NextConfig } from "next";

// For GitHub Pages: set NEXT_PUBLIC_BASE_PATH to your repo name
// e.g. NEXT_PUBLIC_BASE_PATH=/my-repo
// For local dev or custom domain: leave empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  // Allow the Preview Panel (and any subdomain of space-z.ai) to load
  // /_next/* resources (CSS, JS chunks) during development. Without this,
  // Next.js blocks cross-origin dev requests and the site appears broken.
  allowedDevOrigins: [
    "preview-chat-*.space-z.ai",
    "*.space-z.ai",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
