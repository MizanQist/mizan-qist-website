import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  text?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "dark" | "accent" | "surface";
  id?: string;
};

export function CTA({ title, text, primary, secondary, tone = "dark", id }: Props) {
  const dark = tone === "dark" || tone === "accent";
  return (
    <section id={id} className="py-section-sm">
      <Container>
        <Reveal>
          <div className={cn("rounded-3xl px-7 py-14 text-center md:px-16 md:py-20", tone === "dark" && "bg-charcoal-900 text-white dark:bg-charcoal-800", tone === "accent" && "bg-accent text-accent-fg", tone === "surface" && "border border-line bg-surface")}>
            <h2 className="mx-auto max-w-2xl text-display-md">{title}</h2>
            {text && <p className={cn("mx-auto mt-5 max-w-xl text-base md:text-lg", dark ? "text-white/75" : "text-muted")}>{text}</p>}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} size="lg" variant={tone === "accent" ? "primary" : "accent"} arrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} size="lg" variant="secondary" className={cn(dark && "border-white/25 text-white hover:bg-white/10")}>
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
