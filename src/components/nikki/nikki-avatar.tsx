"use client";

import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/asset";

interface NikkiAvatarProps {
  size?: number;
  className?: string;
  withHalo?: boolean;
}

export function NikkiAvatar({ size = 48, className, withHalo = false }: NikkiAvatarProps) {
  return (
    <span
      className={cn("relative inline-block shrink-0", className)}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
    >
      {withHalo && (
        <span
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--sakura) 55%, transparent) 0%, transparent 70%)",
            transform: "scale(1.35)",
          }}
          aria-hidden
        />
      )}
      <span
        className="relative block overflow-hidden rounded-full ring-2 ring-primary/30"
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        <img
          src={assetUrl("/nikki-logo.png")}
          alt="Nikki, your Japanese tutor"
          width={size}
          height={size}
          style={{ width: size, height: size, objectFit: "cover", display: "block" }}
        />
      </span>
    </span>
  );
}
