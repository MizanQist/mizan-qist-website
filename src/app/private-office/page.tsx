import { privateOffice } from "@/content/private-office";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = pageMetadata({
  title: "Mizan Qist Private Office",
  description: "Personal advisory and sourcing for private clients: off-market real estate, rare acquisitions, discreet asset sales, property projects and business intelligence.",
  path: "/private-office",
});

export default function PrivateOfficePage() {
  return (
    // The Private Office is always rendered in the dark palette, whatever the site theme.
    <div className="dark bg-bg text-fg" data-division="office">
      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden md:-mt-20">
        <Container className="flex min-h-[85svh] flex-col justify-center pb-24 pt-40">
          <Reveal><p className="eyebrow text-office!">{privateOffice.hero.eyebrow}</p></Reveal>
          <Reveal delay={0.1}><h1 className="mt-8 max-w-3xl font-light text-display-xl">{privateOffice.hero.title}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{privateOffice.hero.text}</p></Reveal>
          <Reveal delay={0.3}>
            <Button href={privateOffice.hero.cta.href} size="lg" variant="secondary" className="mt-12 border-office/50 text-fg hover:bg-office/10" arrow>
              {privateOffice.hero.cta.label}
            </Button>
          </Reveal>
        </Container>
        <div className="mx-auto h-px w-24 bg-office/60" aria-hidden />
      </section>

      {/* Services */}
      <section className="py-section">
        <Container>
          <SectionHeading eyebrow="Services" title="What we arrange." description="Each engagement is personal. These are the areas in which we are most often asked to help." />
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {privateOffice.services.map((s, i) => (
              <li key={s.title} className="bg-bg md:last:col-span-2 lg:last:col-span-3">
                <Reveal delay={(i % 3) * 0.08} className="h-full p-8 md:p-10">
                  <Icon name={s.icon} className="size-5 text-office" />
                  <h3 className="mt-7 text-display-sm font-light">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-t border-line py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <SectionHeading eyebrow={privateOffice.approach.eyebrow} title={privateOffice.approach.title} />
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {privateOffice.approach.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Icon name={p.icon} className="size-5 text-office" />
                <h3 className="mt-5 font-sans text-base font-semibold tracking-normal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation */}
      <section id="consultation" className="scroll-mt-20 border-t border-line py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <SectionHeading eyebrow={privateOffice.consultation.eyebrow} title={privateOffice.consultation.title} description={privateOffice.consultation.text} />
          <Reveal>
            <EnquiryForm
              kind="private-office"
              options={{ areasOfInterest: privateOffice.areasOfInterest, contactMethods: privateOffice.contactMethods }}
              note={privateOffice.consultation.note}
              submitLabel="Request a consultation"
            />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
