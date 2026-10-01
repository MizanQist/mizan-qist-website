import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type Props = { className?: string; priority?: boolean; mark?: boolean; tone?: "auto" | "light" | "dark" };

/**
 * Brand logo. `tone="auto"` renders the charcoal version in light mode and the
 * white version in dark mode. Files live in /public/brand/.
 */
export function Logo({ className, priority, mark, tone = "auto" }: Props) {
  const base = mark ? "mark" : "logo";
  const dims = mark ? { width: 151, height: 147 } : { width: 597, height: 148 };
  const alt = siteConfig.legalName;
  if (tone !== "auto") {
    return <Image src={`/brand/${base}-${tone}.png`} alt={alt} {...dims} priority={priority} className={cn("w-auto", className)} />;
  }
  return (
    <>
      <Image src={`/brand/${base}-light.png`} alt={alt} {...dims} priority={priority} className={cn("w-auto dark:hidden", className)} />
      <Image src={`/brand/${base}-dark.png`} alt="" aria-hidden {...dims} priority={priority} className={cn("hidden w-auto dark:block", className)} />
    </>
  );
}
