import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { about } from "@/content/about";
import { divisions } from "@/content/divisions";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/cards/TeamCard";
import { CTA } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "About",
  description: "The story, mission and values of Mizan Qist Limited, how Labs, Studio and Private Office fit together, and where to find us in Abuja and Birmingham.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-section-sm md:py-section">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal><p className="eyebrow">{about.hero.eyebrow}</p></Reveal>
            <Reveal delay={0.08}><h1 className="mt-6 text-display-lg">{about.hero.title}</h1></Reveal>
            <Reveal delay={0.16}><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{about.hero.text}</p></Reveal>
          </div>
          <Reveal delay={0.2} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
            <Image src={about.hero.image} alt="The Mizan Qist team at work" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
        </Container>
      </section>

      {/* Story + mission */}
      <section className="border-t border-line py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={about.story.eyebrow} title={about.story.title} />
            <Reveal className="mt-10 rounded-2xl bg-charcoal-900 p-8 text-white dark:bg-charcoal-800">
              <p className="eyebrow text-white/60!">{about.mission.title}</p>
              <p className="mt-4 font-display text-xl leading-snug md:text-2xl">{about.mission.text}</p>
            </Reveal>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {about.story.paragraphs.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}
            <div className="grid gap-x-8 gap-y-8 pt-6 sm:grid-cols-2">
              {about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06}>
                  <Icon name={v.icon} className="size-5 text-accent" />
                  <h3 className="mt-4 font-sans text-base font-semibold tracking-normal text-fg">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Structure */}
      <section className="border-t border-line bg-surface/50 py-section">
        <Container>
          <SectionHeading eyebrow={about.structure.eyebrow} title={about.structure.title} description={about.structure.text} align="center" />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {divisions.map((d, i) => (
              <Reveal key={d.key} delay={i * 0.08}>
                <Link href={d.href} data-division={d.key} className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-soft">
                  <p className="eyebrow text-accent!">{d.key === "labs" ? "Builds our products" : "Serves clients, funds Labs"}</p>
                  <h3 className="mt-3 text-display-sm">{d.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{d.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    Visit {d.short} <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-section">
        <Container>
          <SectionHeading eyebrow="Leadership" title="The people behind the name." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((m, i) => (
              <Reveal key={m.role} delay={i * 0.08}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Offices */}
      <section className="border-t border-line py-section">
        <Container>
          <SectionHeading eyebrow="Offices" title="Abuja and Birmingham." description="Headquartered in Nigeria's capital, with a presence in the UK's second city, we work across both time zones every day." />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {siteConfig.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <address className="flex h-full gap-5 rounded-2xl border border-line bg-card p-7 not-italic">
                  <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="eyebrow">{o.label}</p>
                    <p className="mt-2 text-display-sm">{o.city}, {o.country}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{o.lines.join(", ")}</p>
                    <p className="mt-1 text-sm text-muted">{o.hours}</p>
                  </div>
                </address>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA title="Work with us." text="Whether you are a client, a partner or a future colleague, we would like to hear from you." primary={{ label: "Get in touch", href: "/contact" }} />
    </>
  );
}
