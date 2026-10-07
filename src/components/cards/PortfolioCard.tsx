import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/content/portfolio";
import { PreviewVideo } from "@/components/ui/PreviewVideo";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

/**
 * Card media, in order of preference: a desktop walkthrough of the site in a
 * browser frame, the project's film, or its cover image.
 */
function Media({ item, priority }: { item: PortfolioItem; priority?: boolean }) {
  const label = `${item.title} — ${item.summary}`;
  if (item.preview) {
    return (
      <BrowserFrame url={item.link} className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <PreviewVideo src={item.preview.video} poster={item.preview.poster} label={label} />
      </BrowserFrame>
    );
  }
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-charcoal-900">
      {item.video ? (
        <PreviewVideo src={item.video.src} poster={item.video.poster} label={label} fit={item.video.portrait ? "contain" : "cover"} className="transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      ) : (
        <div className="relative h-full w-full">
          <Image src={item.cover} alt={label} fill priority={priority} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        </div>
      )}
    </div>
  );
}

export function PortfolioCard({ item, priority }: { item: PortfolioItem; priority?: boolean }) {
  return (
    <Link href={`/studio/work/${item.slug}`} className="group block">
      <Media item={item} priority={priority} />
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
