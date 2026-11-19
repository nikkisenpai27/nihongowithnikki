import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
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
