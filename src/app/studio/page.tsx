import Image from "next/image";
import { studio } from "@/content/studio";
import { featuredPortfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = pageMetadata({
  title: "Mizan Qist Studio",
  description: "Creative and technology services: software, web and app development, brand identity, 3D visualisation, print and launch campaigns for businesses and individuals.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <div data-division="studio">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="absolute -right-32 -top-32 size-[28rem] rounded-full bg-studio/15 blur-3xl md:size-[36rem]" aria-hidden />
        <div className="absolute -left-24 top-1/2 size-72 rounded-full bg-studio-alt/20 blur-3xl" aria-hidden />
        <Container className="relative">
          <Reveal><p className="eyebrow text-accent!">{studio.hero.eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h1 className="mt-6 max-w-4xl text-display-xl">{studio.hero.title}</h1></Reveal>
          <Reveal delay={0.16}><p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{studio.hero.text}</p></Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={studio.hero.primary.href} size="lg" variant="accent" arrow>{studio.hero.primary.label}</Button>
              <Button href={studio.hero.secondary.href} size="lg" variant="secondary">{studio.hero.secondary.label}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.3} className="mt-16 grid grid-cols-3 gap-3 md:gap-5">
            {featuredPortfolio.map((p, i) => (
              <div key={p.slug} className={`relative overflow-hidden rounded-xl ${i === 1 ? "aspect-[3/4] md:-translate-y-6" : "aspect-[3/4]"}`}>
                <Image src={p.cover} alt={p.title} fill priority sizes="33vw" className="object-cover" />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 border-t border-line py-section">
        <Container>
          <SectionHeading eyebrow="Services" title="Everything a brand needs, under one roof." description="Pick one service or combine several. The same team carries a project from identity to launch." />
          <nav aria-label="Service categories" className="sticky top-16 z-20 -mx-5 mt-10 overflow-x-auto border-y border-line bg-bg/90 px-5 py-3 backdrop-blur md:top-20 sm:mx-0 sm:px-0">
            <ul className="flex gap-2">
              {studio.serviceCategories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-fg hover:text-fg">
                    <Icon name={c.icon} className="size-4" /> {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 divide-y divide-line">
            {studio.serviceCategories.map((c) => (
              <article key={c.id} id={c.id} className="scroll-mt-36 grid gap-8 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 md:scroll-mt-40">
                <Reveal>
                  <span className="inline-flex size-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 text-display-sm">{c.title}</h3>
                  <p className="mt-3 text-muted">{c.intro}</p>
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  {c.services.map((s, i) => (
                    <Reveal key={s.title} delay={i * 0.06}>
                      <ServiceCard title={s.title} text={s.text} compact className="h-full" />
                    </Reveal>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-t border-line bg-surface/50 py-section">
        <Container>
          <SectionHeading eyebrow="Industries we serve" title="Built for the businesses around us." description="We have shipped work for all of these, and we know what each one needs from a brand and a website." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studio.industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 4) * 0.06}>
                <ServiceCard icon={ind.icon} title={ind.title} text={ind.text} compact className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Personal & celebrations */}
      <section className="py-section">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow={studio.personal.eyebrow} title={studio.personal.title} description={studio.personal.text} />
          <div className="grid gap-4 sm:grid-cols-2">
            {studio.personal.items.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <ServiceCard icon={p.icon} title={p.title} text={p.text} compact className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-line">
        <WorkPreview />
      </div>

      {/* Process */}
      <section className="border-t border-line py-section">
        <Container>
          <SectionHeading eyebrow="Process" title="Four steps, no surprises." />
          <div className="mt-12">
            <ProcessSteps steps={studio.process} />
          </div>
        </Container>
      </section>

      {/* Partner programme */}
      <section id="partners" className="scroll-mt-20 border-t border-line bg-surface/50 py-section-sm">
        <Container className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={studio.partnerProgramme.eyebrow} title={studio.partnerProgramme.title} description={studio.partnerProgramme.text} size="sm" />
          </Reveal>
          <Reveal delay={0.1} className="lg:justify-self-end">
            <ul className="flex flex-wrap gap-2">
              {studio.partnerProgramme.audiences.map((a) => (
                <li key={a} className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm">{a}</li>
              ))}
            </ul>
            <Button href={studio.partnerProgramme.cta.href} variant="secondary" arrow className="mt-6">{studio.partnerProgramme.cta.label}</Button>
          </Reveal>
        </Container>
      </section>

      <Testimonials division="Studio" />

      {/* Enquiry */}
      <section id="enquire" className="scroll-mt-20 border-t border-line py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading eyebrow="Project enquiry" title="Tell us what you are making." description="A few details are enough to start. We reply within one working day with next steps and, where possible, an indicative range." />
          <Reveal>
            <EnquiryForm kind="studio" options={{ serviceTypes: studio.serviceTypes, budgets: studio.budgets, timelines: studio.timelines }} submitLabel="Send project enquiry" />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
