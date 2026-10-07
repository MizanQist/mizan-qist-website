import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolio, getPortfolioItem } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const item = getPortfolioItem((await params).slug);
  if (!item) return {};
  return pageMetadata({ title: `${item.title} — ${item.category}`, description: item.summary, path: `/studio/work/${item.slug}`, image: item.cover });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);
  if (!item) notFound();

  const index = portfolio.findIndex((p) => p.slug === slug);
  const next = portfolio[(index + 1) % portfolio.length];

  return (
    <div data-division="studio">
      <article>
        <Container className="pt-10 md:pt-16">
          <Link href="/studio/work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft className="size-4" aria-hidden /> All work
          </Link>
          <Reveal>
            <p className="eyebrow mt-10">{item.category} · {item.year}</p>
            <h1 className="mt-4 max-w-4xl text-display-lg">{item.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{item.summary}</p>
          </Reveal>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg hover:opacity-90">
              Visit the live site <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
          {item.video ? (
            <Reveal delay={0.1} className="mt-12 flex justify-center rounded-2xl bg-charcoal-900 p-3 md:p-6">
              <video src={item.video.src} poster={item.video.poster} controls playsInline preload="metadata" className={item.video.portrait ? "max-h-[80vh] rounded-xl" : "w-full rounded-xl"} />
            </Reveal>
          ) : (
            <Reveal delay={0.1} className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-surface">
              <Image src={item.cover} alt={`${item.title} cover image`} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
            </Reveal>
          )}
        </Container>

        <Container className="grid gap-12 py-section-sm lg:grid-cols-[1fr_2fr] lg:gap-20">
          <dl className="grid gap-6 self-start text-sm sm:grid-cols-2 lg:sticky lg:top-28 lg:grid-cols-1">
            <div><dt className="eyebrow">Client</dt><dd className="mt-1.5 font-medium">{item.client}</dd></div>
            <div><dt className="eyebrow">Year</dt><dd className="mt-1.5 font-medium">{item.year}</dd></div>
            <div><dt className="eyebrow">Services</dt><dd className="mt-1.5 font-medium">{item.services.join(", ")}</dd></div>
            <div>
              <dt className="eyebrow">Tags</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {item.tags.map((t) => <span key={t} className="rounded-full border border-line px-2.5 py-1 text-xs">{t}</span>)}
              </dd>
            </div>
          </dl>
          <div className="space-y-12">
            {[["The challenge", item.challenge], ["Our approach", item.approach], ["The outcome", item.outcome]].map(([h, t]) => (
              <Reveal key={h}>
                <h2 className="text-display-sm">{h}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{t}</p>
              </Reveal>
            ))}
          </div>
        </Container>

        {item.gallery.length > 0 && (
          <Container>
            <div className="grid gap-4 md:grid-cols-2">
              {item.gallery.map((src, i) => (
                <Reveal key={src} delay={i * 0.06} className={`relative overflow-hidden rounded-xl bg-surface ${i === 0 ? "aspect-[16/10] md:col-span-2" : "aspect-[4/3]"}`}>
                  <Image src={src} alt={`${item.title} — image ${i + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                </Reveal>
              ))}
            </div>
          </Container>
        )}

        <Container className="py-section-sm">
          <Link href={`/studio/work/${next.slug}`} className="group flex items-center justify-between gap-6 border-t border-line pt-8">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-2 text-display-sm transition-colors group-hover:text-accent">{next.title}</p>
            </div>
            <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Container>
      </article>
      <CTA title="Have a similar project?" primary={{ label: "Start a project", href: "/studio#enquire" }} tone="surface" />
    </div>
  );
}
