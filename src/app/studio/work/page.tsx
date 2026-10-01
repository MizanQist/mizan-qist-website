import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";

export const metadata = pageMetadata({
  title: "Work",
  description: "Selected projects from Mizan Qist Studio across web, brand, 3D, print, launch campaigns and personal branding.",
  path: "/studio/work",
});

export default function WorkPage() {
  return (
    <div data-division="studio">
      <section className="py-section-sm md:py-section">
        <Container>
          <SectionHeading as="h1" size="lg" eyebrow="Studio work" title="Selected projects." description="A cross-section of recent work. Filter by discipline, or browse the lot." />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </Container>
      </section>
      <CTA title="Like what you see?" text="Tell us about your project and we will show you the most relevant work in detail." primary={{ label: "Start a project", href: "/studio#enquire" }} tone="surface" />
    </div>
  );
}
