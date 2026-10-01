import Image from "next/image";
import type { about } from "@/content/about";

export function TeamCard({ member }: { member: (typeof about.team)[number] }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface">
        <Image src={member.image} alt={`Portrait of ${member.name}`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
      </div>
      <h3 className="mt-4 font-sans text-base font-semibold tracking-normal">{member.name}</h3>
      <p className="text-sm text-accent">{member.role}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{member.bio}</p>
    </div>
  );
}
