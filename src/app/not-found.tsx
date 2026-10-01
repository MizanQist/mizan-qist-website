import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { divisions } from "@/content/divisions";

export default function NotFound() {
  return (
    <section className="py-section">
      <Container className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-display-lg">This page is not where ideas become reality.</h1>
        <p className="mx-auto mt-5 max-w-md text-muted">The address may have changed, or the page may never have existed. Try one of the divisions instead.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" arrow>Back to home</Button>
          {divisions.map((d) => <Button key={d.key} href={d.href} variant="secondary">{d.short}</Button>)}
        </div>
      </Container>
    </section>
  );
}
