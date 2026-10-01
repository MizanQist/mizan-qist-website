"use client";

import { useState } from "react";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { portfolio, portfolioCategories, type PortfolioCategory } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const ALL = "All";

export function PortfolioGrid() {
  const [active, setActive] = useState<PortfolioCategory | typeof ALL>(ALL);
  const filters = [ALL, ...portfolioCategories.filter((c) => portfolio.some((p) => p.category === c))];
  const items = active === ALL ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter work by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f as PortfolioCategory | typeof ALL)}
            aria-pressed={active === f}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg hover:text-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{items.length} projects shown</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <PortfolioCard key={item.slug} item={item} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
