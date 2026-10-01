import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";

export function PortfolioCard({ item, priority }: { item: PortfolioItem; priority?: boolean }) {
  return (
    <Link href={`/studio/work/${item.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
        <Image
          src={item.cover}
          alt={`${item.title} — ${item.summary}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{item.category} · {item.year}</p>
          <h3 className="mt-1.5 font-sans text-lg font-semibold tracking-normal transition-colors group-hover:text-accent">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.client}</p>
        </div>
      </div>
    </Link>
  );
}
