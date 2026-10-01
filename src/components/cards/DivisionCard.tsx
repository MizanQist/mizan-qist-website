import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { divisions } from "@/content/divisions";

export function DivisionCard({ division }: { division: (typeof divisions)[number] }) {
  return (
    <Link
      href={division.href}
      data-division={division.key}
      className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-2xl bg-charcoal-900 text-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
    >
      <Image
        src={division.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover opacity-60 transition-[opacity,transform] duration-700 group-hover:scale-105 group-hover:opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/55 to-transparent" aria-hidden />
      <div className="relative p-7 md:p-8">
        <p className="eyebrow text-white/70!">{division.short}</p>
        <h3 className="mt-3 text-display-sm text-white">{division.name}</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">{division.pitch}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Enter <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
