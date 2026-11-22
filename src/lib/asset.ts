/**
 * Asset URL helper — prefixes paths with basePath for GitHub Pages compatibility.
 * 
 * On GitHub Pages, the site is served from a subdirectory (e.g. /nihongowithnikki/).
 * Absolute paths like "/nikki-logo.png" would resolve to the domain root
 * instead of the subdirectory. This helper adds the basePath prefix so
 * assets load correctly regardless of where the site is hosted.
 * 
 * Works in both dev mode (no basePath → paths stay as-is) and
 * GitHub Pages (basePath set → paths get prefixed).
 */

export function assetUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  if (basePath && !normalizedPath.startsWith(basePath)) {
    return `${basePath}${normalizedPath}`;
  }
  
  return normalizedPath;
}
