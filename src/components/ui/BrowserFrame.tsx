import { cn } from "@/lib/utils";

/** A light browser window around a desktop-width site preview. */
export function BrowserFrame({ children, className, url }: { children: React.ReactNode; className?: string; url?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-line bg-card shadow-soft", className)}>
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-surface px-3">
        <span className="size-2 rounded-full bg-charcoal-300" aria-hidden />
        <span className="size-2 rounded-full bg-charcoal-300" aria-hidden />
        <span className="size-2 rounded-full bg-charcoal-300" aria-hidden />
        {url && <span className="ml-3 truncate rounded-md bg-card px-2 py-0.5 text-[0.62rem] text-muted">{url.replace(/^https?:\/\//, "")}</span>}
      </div>
      <div className="aspect-[16/10] bg-charcoal-900">{children}</div>
    </div>
  );
}
