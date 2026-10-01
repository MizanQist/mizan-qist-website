import { Container } from "@/components/ui/Container";
import type { legal } from "@/content/legal";

export function LegalArticle({ doc }: { doc: (typeof legal)[keyof typeof legal] }) {
  return (
    <article className="py-section-sm md:py-section">
      <Container className="max-w-prose">
        <p className="eyebrow">Last updated {doc.updated}</p>
        <h1 className="mt-4 text-display-lg">{doc.title}</h1>
        <div className="mt-12 space-y-10">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-display-sm">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
