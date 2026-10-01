"use client";

import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

/** Both icons are rendered and CSS picks one, so there is no hydration flicker. */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark mode"
      className={`inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg ${className ?? ""}`}
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden />
      <SunMedium className="hidden size-[18px] dark:block" aria-hidden />
    </button>
  );
}
