import type { testimonials } from "@/content/testimonials";

export function Testimonial({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-line bg-card p-7">
      <blockquote className="flex-1 font-display text-xl leading-snug tracking-tight md:text-2xl">“{item.quote}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <p className="font-semibold">{item.name}</p>
        <p className="text-muted">{item.role} · {item.division}</p>
      </figcaption>
    </figure>
  );
}
