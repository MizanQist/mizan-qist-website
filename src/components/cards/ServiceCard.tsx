import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Props = { icon?: string; title: string; text: string; className?: string; compact?: boolean };

export function ServiceCard({ icon, title, text, className, compact }: Props) {
  return (
    <div className={cn("rounded-xl border border-line bg-card transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft", compact ? "p-5" : "p-6 md:p-7", className)}>
      {icon && (
        <span className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
          <Icon name={icon} className="size-5" />
        </span>
      )}
      <h3 className={cn("font-sans font-semibold tracking-normal", compact ? "text-base" : "text-lg")}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
