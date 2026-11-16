import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// In Tailwind CSS v4, theme tokens (colors, radii, fonts) are defined via
// `@theme inline` in src/app/globals.css. The legacy `hsl(var(--...))` color
// definitions are intentionally removed here to avoid conflicting with those
// tokens (which broke theme switching by wrapping hex values in hsl()).
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [tailwindcssAnimate],
};
export default config;
