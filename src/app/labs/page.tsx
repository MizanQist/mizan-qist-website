import Image from "next/image";
import { labs } from "@/content/labs";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { CTA } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Mizan Qist Labs",
  description: "The product and venture arm of Mizan Qist: SaaS, apps, marketplaces, fintech, e-commerce infrastructure, AI/ML, gaming and analytics products built in Abuja.",
  path: "/labs",
});

export default function LabsPage() {
  return (
    <div data-division="labs">
      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden bg-charcoal-950 text-white md:-mt-20">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" aria-hidden />
        <Container className="relative grid min-h-[80svh] items-center gap-12 pb-20 pt-36 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal><p className="eyebrow text-labs!">{labs.hero.eyebrow}</p></Reveal>
            <Reveal delay={0.08}><h1 className="mt-6 text-display-xl text-white">{labs.hero.title}</h1></Reveal>
            <Reveal delay={0.16}><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">{labs.hero.text}</p></Reveal>
            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#products" size="lg" variant="accent" arrow>Products in development</Button>
                <Button href="#partner" size="lg" variant="secondary" className="border-white/25 text-white hover:bg-white/10">Partner or invest</Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[4/5]">
            <Image src={labs.hero.image} alt="" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent" aria-hidden />
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              <p>Abuja · Birmingham</p>
              <p className="mt-1 text-labs">{labs.products.length} products in the portfolio</p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-section">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow={labs.vision.eyebrow} title={labs.vision.title} />
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {labs.vision.paragraphs.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
          </div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="border-t border-line bg-surface/50 py-section">
        <Container>
          <SectionHeading eyebrow="Focus areas" title="Where we build." description="Eight categories, chosen because we understand the customer and the economics of each." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {labs.focusAreas.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.06}>
                <ServiceCard icon={f.icon} title={f.title} text={f.text} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-20 py-section">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Products in development" title="The current portfolio." description="Statuses are updated as products move from concept to launch." />
            <ul className="flex flex-wrap gap-2" aria-label="Status key">
              {(["Concept", "In Development", "Beta", "Live"] as const).map((s) => <li key={s}><Badge status={s}>{s}</Badge></li>)}
            </ul>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labs.products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA id="partner" title={labs.partner.title} text={labs.partner.text} primary={labs.partner.cta} tone="dark" />
    </div>
  );
}
