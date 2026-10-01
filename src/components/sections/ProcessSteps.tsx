import { Reveal } from "@/components/ui/Reveal";

export function ProcessSteps({ steps }: { steps: ReadonlyArray<{ step: string; title: string; text: string }> }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.step} className="bg-card">
          <Reveal delay={i * 0.08} className="h-full p-7">
            <span className="font-display text-4xl text-accent">{s.step}</span>
            <h3 className="mt-6 font-sans text-lg font-semibold tracking-normal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
