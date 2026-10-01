import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { labs } from "@/content/labs";

export function ProductCard({ product }: { product: (typeof labs.products)[number] }) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3 className="mt-1.5 font-sans text-xl font-semibold tracking-normal">{product.name}</h3>
        </div>
        <Badge status={product.status}>{product.status}</Badge>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>
      {product.link && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more <ArrowUpRight className="size-4" aria-hidden />
        </span>
      )}
    </>
  );
  const classes = "flex h-full flex-col rounded-xl border border-line bg-card p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-soft";
  return product.link ? <Link href={product.link} className={classes}>{body}</Link> : <div className={classes}>{body}</div>;
}
