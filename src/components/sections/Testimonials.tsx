import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Testimonial } from "@/components/cards/Testimonial";
import { testimonials } from "@/content/testimonials";

export function Testimonials({ division }: { division?: string }) {
  const items = division ? testimonials.filter((t) => t.division === division) : testimonials;
  if (!items.length) return null;
  return (
    <section className="py-section">
      <Container>
        <SectionHeading eyebrow="What clients say" title="Trusted with the work that matters." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.quote} delay={i * 0.08}>
              <Testimonial item={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
