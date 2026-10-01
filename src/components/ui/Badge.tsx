import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/content/labs";

const statusStyles: Record<ProductStatus, string> = {
  Concept: "bg-surface text-muted",
  "In Development": "bg-accent-soft text-accent",
  Beta: "bg-studio-soft text-studio dark:bg-studio/20",
  Live: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export function Badge({ children, status, className }: { children: React.ReactNode; status?: ProductStatus; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em]", status ? statusStyles[status] : "bg-surface text-muted", className)}>
      {status === "Live" && <span className="size-1.5 rounded-full bg-current" aria-hidden />}
      {children}
    </span>
  );
}
