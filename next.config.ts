import type { NextConfig } from "next";

// For GitHub Pages: set NEXT_PUBLIC_BASE_PATH to your repo name
// e.g. NEXT_PUBLIC_BASE_PATH=/nihongowithnikki
// For local dev or custom domain: leave empty
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "preview-chat-*.space-z.ai",
    "*.space-z.ai",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
