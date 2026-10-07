"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = { src: string; poster: string; className?: string; label?: string; fit?: "cover" | "contain" };

/** Muted looping video that only loads and plays while it is on screen. */
export function PreviewVideo({ src, poster, className, label, fit = "cover" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain", className)}
    />
  );
}
