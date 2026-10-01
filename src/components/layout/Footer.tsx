import Link from "next/link";
import { siteConfig } from "@/content/site";
import { footerNav } from "@/content/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Logo className="h-9" />
            <p className="mt-5 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <ul className="mt-6 flex gap-2">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
                  >
                    <SocialIcon name={s.icon} className="size-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="eyebrow">{group.heading}</p>
              <ul className="mt-5 space-y-3">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-fg/80 transition-colors hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
          {siteConfig.offices.map((o) => (
            <address key={o.city} className="text-sm not-italic leading-relaxed text-muted">
              <p className="font-medium text-fg">{o.city}, {o.country}</p>
              {o.lines.map((line) => <p key={line}>{line}</p>)}
            </address>
          ))}
          <div className="text-sm leading-relaxed text-muted">
            <p className="font-medium text-fg">Contact</p>
            <p><a href={`mailto:${siteConfig.email}`} className="hover:text-fg">{siteConfig.email}</a></p>
            {siteConfig.phones.map((p) => (
              <p key={p.href}><a href={p.href} className="hover:text-fg">{p.display}</a></p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.rcNumber}. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em]">{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
