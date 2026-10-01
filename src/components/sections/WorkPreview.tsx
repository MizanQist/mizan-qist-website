import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { featuredPortfolio } from "@/content/portfolio";

export function WorkPreview({ eyebrow = "Selected work", title = "A few things we have made recently." }: { eyebrow?: string; title?: string }) {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <Button href="/studio/work" variant="secondary" arrow className="self-start md:self-auto">
            View all work
          </Button>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolio.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
