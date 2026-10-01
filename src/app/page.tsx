import Image from "next/image";
import { home } from "@/content/home";
import { divisions } from "@/content/divisions";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DivisionCard } from "@/components/cards/DivisionCard";
import { Stats } from "@/components/sections/Stats";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-16 overflow-hidden bg-charcoal-950 text-white md:-mt-20">
        <Image src={home.hero.image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/30 via-charcoal-950/55 to-charcoal-950" aria-hidden />
        <Container className="relative flex min-h-[92svh] flex-col justify-end pb-20 pt-40 md:pb-28">
          <Reveal>
            <p className="eyebrow text-white/60!">{home.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-display-xl text-white">{home.hero.title}</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{home.hero.mission}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={home.hero.primary.href} size="lg" variant="accent" arrow>{home.hero.primary.label}</Button>
              <Button href={home.hero.secondary.href} size="lg" variant="secondary" className="border-white/25 text-white hover:bg-white/10">{home.hero.secondary.label}</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Divisions */}
      <section id="divisions" className="scroll-mt-20 py-section">
        <Container>
          <SectionHeading eyebrow="Three divisions" title="One name. Three ways to work with us." description="Each division has its own focus and its own character. All of them share the same people and the same standard." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {divisions.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.1}>
                <DivisionCard division={d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="border-t border-line py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading eyebrow={home.howWeWork.eyebrow} title={home.howWeWork.title} description={home.howWeWork.description} />
          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {home.howWeWork.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-normal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Stats items={home.stats} />
      <WorkPreview eyebrow="From the Studio" />
      <Testimonials />
      <CTA title={home.closing.title} text={home.closing.text} primary={home.closing.primary} secondary={home.closing.secondary} />
    </>
  );
}
