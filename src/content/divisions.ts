export type DivisionKey = "labs" | "studio" | "office";

export const divisions: Array<{
  key: DivisionKey;
  name: string;
  short: string;
  href: string;
  pitch: string;
  description: string;
  image: string; // PLACEHOLDER (Unsplash)
}> = [
  {
    key: "labs",
    name: "Mizan Qist Labs",
    short: "Labs",
    href: "/labs",
    pitch: "Our own products, built for the markets we know best.",
    description:
      "The venture arm. Software, platforms and applications designed, built and operated by Mizan Qist across SaaS, fintech, marketplaces, AI and more.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  },
  {
    key: "studio",
    name: "Mizan Qist Studio",
    short: "Studio",
    href: "/studio",
    pitch: "Creative and technology services for businesses and individuals.",
    description:
      "Brand, web, software, 3D, print and launch campaigns delivered by one team, from first sketch to final build.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    key: "office",
    name: "Mizan Qist Private Office",
    short: "Private Office",
    href: "/private-office",
    pitch: "Personal advisory and sourcing for a small number of private clients.",
    description:
      "Off-market property, rare acquisitions, discreet asset sales and project oversight, handled personally and in confidence.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
  },
];
