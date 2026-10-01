import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Stats({ items }: { items: ReadonlyArray<{ value: string; label: string }> }) {
  return (
    <section className="border-y border-line bg-surface/60">
      <Container>
        <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="px-2 py-10 md:px-8 md:py-14 md:first:pl-0">
              <dd className="font-display text-5xl tracking-tight md:text-6xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
