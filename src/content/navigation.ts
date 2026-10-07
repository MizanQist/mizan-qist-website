export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Labs", href: "/labs" },
  { label: "Studio", href: "/studio" },
  { label: "Private Office", href: "/private-office" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const headerCta = { label: "Start a conversation", href: "/contact" } as const;

export const footerNav = [
  {
    heading: "Divisions",
    links: [
      { label: "Mizan Qist Labs", href: "/labs" },
      { label: "Mizan Qist Studio", href: "/studio" },
      { label: "Studio work", href: "/studio/work" },
      { label: "Mizan Qist Private Office", href: "/private-office" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Partner with Labs", href: "/labs#partner" },
      { label: "Partner programme", href: "/studio#partners" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
] as const;
