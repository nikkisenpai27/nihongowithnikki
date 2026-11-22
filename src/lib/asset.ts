/**
 * Asset URL helper — prefixes paths with basePath for GitHub Pages compatibility.
 * 
 * On GitHub Pages, the site is served from a subdirectory (e.g. /my-repo/).
 * Absolute paths like "/nikki-logo.png" would resolve to the domain root
 * instead of the subdirectory. This helper adds the basePath prefix so
 * assets load correctly regardless of where the site is hosted.
 * 
 * Usage:
 *   import { assetUrl } from "@/lib/asset";
 *   <img src={assetUrl("/nikki-logo.png")} />
 *   // On GitHub Pages with basePath=/my-repo → "/my-repo/nikki-logo.png"
 *   // On local dev → "/nikki-logo.png"
 */

export function assetUrl(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Get basePath from environment (set by next.config.ts)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  if (basePath) {
    return `${basePath}${normalizedPath}`;
  }
  
  return normalizedPath;
}
