import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Mizan Qist Labs, Studio or Private Office. Offices in Abuja, Lagos and London.",
  path: "/contact",
});

const divisionOptions = ["General enquiry", "Mizan Qist Labs", "Mizan Qist Studio", "Mizan Qist Private Office"] as const;
const divisionFromParam: Record<string, string> = { labs: divisionOptions[1], studio: divisionOptions[2], office: divisionOptions[3], "private-office": divisionOptions[3] };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ division?: string }> }) {
  const { division } = await searchParams;
  const defaults: Record<string, string> = division && divisionFromParam[division] ? { division: divisionFromParam[division] } : {};

  return (
    <section className="py-section-sm md:py-section">
      <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
        <div>
          <SectionHeading as="h1" size="lg" eyebrow="Contact" title="Start a conversation." description="Choose the division you would like to reach and tell us a little about what you need. We reply within one working day." />
          <Reveal className="mt-12">
            <EnquiryForm kind="contact" options={{ divisions: divisionOptions, contactMethods: ["Email", "WhatsApp"] }} defaults={defaults} submitLabel="Send message" />
          </Reveal>
        </div>

        <aside className="space-y-10 lg:pt-20">
          <div>
            <p className="eyebrow">Direct</p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">{siteConfig.email}</a>
              </li>
              {siteConfig.phones.map((p) => (
                <li key={p.href} className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <a href={p.href} className="hover:text-accent">{p.display} <span className="text-muted">· {p.label}</span></a>
                </li>
              ))}
              <li className="flex gap-3">
                <svg viewBox="0 0 24 24" className="mt-0.5 size-4 shrink-0 text-accent" fill="currentColor" aria-hidden><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24" /></svg>
                <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp {siteConfig.whatsapp.display}</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Offices</p>
            <ul className="mt-5 space-y-5 text-sm">
              {siteConfig.offices.map((o) => (
                <li key={o.city} className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                  <address className="not-italic leading-relaxed">
                    <p className="font-medium">{o.city}, {o.country} <span className="font-normal text-muted">· {o.label}</span></p>
                    {o.lines.map((l) => <p key={l} className="text-muted">{l}</p>)}
                    <p className="text-muted">{o.hours}</p>
                  </address>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Follow</p>
            <ul className="mt-5 flex gap-2">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg">
                    <SocialIcon name={s.icon} className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  );
}
