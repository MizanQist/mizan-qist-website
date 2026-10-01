"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, headerCta } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

/**
 * Routes whose hero sits under the transparent header and is dark, so the header
 * must render in its dark palette until the user scrolls ("hero"), or always ("always").
 */
const darkHeaderRoutes: Record<string, "hero" | "always"> = {
  "/": "hero",
  "/labs": "hero",
  "/private-office": "always",
};

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const darkMode = darkHeaderRoutes[pathname];
  const onDark = darkMode === "always" || (darkMode === "hero" && !scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,border-color] duration-300",
        onDark && "dark",
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label={`${siteConfig.legalName} home`} className="shrink-0">
          <Logo className="h-8 md:h-9" priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn("text-sm font-medium transition-colors hover:text-fg", isActive(item.href) ? "text-fg" : "text-muted")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href={headerCta.href}>{headerCta.label}</Button>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            aria-label="Open menu"
            className="inline-flex size-10 items-center justify-center rounded-full text-fg hover:bg-surface md:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </Container>

      {/* Mobile menu: native <dialog> gives focus trapping and Escape-to-close for free. */}
      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-bg p-0 text-fg backdrop:bg-charcoal-950/50 md:hidden"
      >
        <div className="flex h-full flex-col">
          <Container className="flex h-16 items-center justify-between">
            <Link href="/" aria-label={`${siteConfig.legalName} home`} onClick={() => dialogRef.current?.close()}>
              <Logo className="h-8" priority />
            </Link>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center rounded-full text-fg hover:bg-surface"
            >
              <X className="size-5" aria-hidden />
            </button>
          </Container>
          <nav aria-label="Mobile" className="flex flex-1 flex-col px-5 pt-6">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => dialogRef.current?.close()}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn("border-b border-line py-5 font-display text-3xl tracking-tight", isActive(item.href) ? "text-fg" : "text-muted")}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-auto space-y-4 pb-10 pt-8">
              <Button href={headerCta.href} size="lg" className="w-full" arrow onClick={() => dialogRef.current?.close()}>
                {headerCta.label}
              </Button>
              <p className="text-center text-sm text-muted">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-fg">{siteConfig.email}</a>
              </p>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
