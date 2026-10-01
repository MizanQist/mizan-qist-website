import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "md" | "sm";
  className?: string;
};

const sizes = { lg: "text-display-lg", md: "text-display-md", sm: "text-display-sm" };

export function SectionHeading({ eyebrow, title, description, align = "left", as: Tag = "h2", size = "md", className }: Props) {
  return (
    <div className={cn("max-w-prose", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={sizes[size]}>{title}</Tag>
      {description && <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </div>
  );
}
