import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-fg text-bg hover:opacity-90",
  accent: "bg-accent text-accent-fg hover:brightness-110",
  secondary: "border border-line bg-transparent text-fg hover:bg-surface",
  ghost: "text-fg hover:bg-surface",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ variant = "primary", size = "md", arrow, className, children, href, ...rest }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[opacity,background-color,filter,transform] duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );
  const isExternal = href?.startsWith("http");
  const icon = arrow ? (isExternal ? <ArrowUpRight className="size-4" aria-hidden /> : <ArrowRight className="size-4" aria-hidden />) : null;

  if (href) {
    return (
      <Link href={href} className={classes} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {icon}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
