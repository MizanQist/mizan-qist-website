/**
 * SITE CONFIG — company details used across the header, footer, contact page,
 * metadata, sitemap and the floating WhatsApp button. Edit here, not in components.
 */
export const siteConfig = {
  name: "Mizan Qist",
  legalName: "Mizan Qist Limited",
  tagline: "Where ideas become reality",
  rcNumber: "RC 9569963",
  // TODO: replace with the live domain before launch (used for canonical URLs, OG tags and sitemap).
  url: "https://mizanqist.com",
  description:
    "Mizan Qist Limited is a technology company building its own products, with a creative and technology studio and a private advisory office that serve clients in Nigeria and the United Kingdom.",
  email: "mizanqistltd@gmail.com", // TODO: switch to a company domain mailbox
  phones: [
    { label: "Nigeria", display: "+234 808 666 6206", href: "tel:+2348086666206" },
    { label: "United Kingdom", display: "+44 7931 814601", href: "tel:+447931814601" },
  ],
  whatsapp: {
    display: "+44 7931 814601",
    // Either a wa.me/<number> link or a WhatsApp Business short link.
    href: "https://wa.me/message/CL4UJVGMQEHBK1",
  },
  offices: [
    {
      city: "Abuja",
      country: "Nigeria",
      label: "Headquarters",
      // TODO: street address
      lines: ["Central Business District", "Abuja, FCT, Nigeria"],
      hours: "Mon–Fri, 9:00–18:00 WAT",
    },
    {
      city: "Birmingham",
      country: "United Kingdom",
      label: "UK presence",
      // TODO: street address
      lines: ["Colmore Row", "Birmingham, United Kingdom"],
      hours: "Mon–Fri, 9:00–17:30 GMT",
    },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/mizanqistltd", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/mizan-qist", icon: "linkedin" }, // TODO: confirm handle
    { label: "X", href: "https://x.com/mizanqist", icon: "x" }, // TODO: confirm handle
  ],
} as const;

export type SocialIconName = (typeof siteConfig.social)[number]["icon"];
