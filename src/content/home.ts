import { siteConfig } from "./site";

export const home = {
  hero: {
    eyebrow: "Technology company · Abuja, Lagos & London",
    title: "We build the products we believe in, and the brands that fund them.",
    mission:
      "Mizan Qist is a technology company. Our Labs build our own software and ventures; our Studio and Private Office serve clients whose work we are proud to put our name to.",
    primary: { label: "Explore our divisions", href: "#divisions" },
    secondary: { label: "Work with the Studio", href: "/studio" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80", // PLACEHOLDER
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "One company, three disciplines, a single standard.",
    description:
      "Every division shares the same engineers, designers and operating principles. What we learn shipping our own products goes straight into client work, and vice versa.",
    points: [
      {
        icon: "Compass",
        title: "Clarity before code",
        text: "We start by understanding the outcome you need, then design the simplest route to it.",
      },
      {
        icon: "Ruler",
        title: "Design and engineering together",
        text: "No hand-offs between a design agency and a dev shop. The people who design it build it.",
      },
      {
        icon: "ShieldCheck",
        title: "Built to be maintained",
        text: "Clean, documented, hand-over ready. We measure success by what still works in three years.",
      },
      {
        icon: "Handshake",
        title: "Long relationships",
        text: "Most of our clients come back. We would rather earn the next project than oversell this one.",
      },
    ],
  },
  // PLACEHOLDER NUMBERS — update with real figures.
  stats: [
    { value: "3", label: "Divisions under one brand" },
    { value: "20+", label: "Projects delivered" },
    { value: "8", label: "Products in development" },
    { value: "2", label: "Countries, one team" },
  ],
  closing: {
    title: "Have something in mind?",
    text: "Tell us what you are building, launching or looking for. We will reply within one working day.",
    primary: { label: "Contact us", href: "/contact" },
    secondary: { label: "Message on WhatsApp", href: siteConfig.whatsapp.href },
  },
};
