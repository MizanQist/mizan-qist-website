export type ProductStatus = "Concept" | "In Development" | "Beta" | "Live";

export const labs = {
  hero: {
    eyebrow: "Mizan Qist Labs",
    title: "Products built in Abuja, designed for everywhere.",
    text: "Labs is where Mizan Qist invests its own time and capital: software and platforms we design, build and operate ourselves. Every product starts with a problem we have seen first-hand across our client work.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80", // PLACEHOLDER
  },
  vision: {
    eyebrow: "The vision",
    title: "A portfolio of focused products, each one earning its place.",
    paragraphs: [
      "We are not chasing a single moonshot. Labs runs a portfolio: small, sharp products that solve a real problem for a defined market, shipped early and improved in the open with the people who use them.",
      "The Studio and Private Office fund this work. That independence lets us build for the long term, choose the markets we understand, and kill ideas that do not deserve to live.",
    ],
  },
  focusAreas: [
    { icon: "Layers", title: "SaaS", text: "Subscription software for operators who need reliable tools, not another dashboard." },
    { icon: "Smartphone", title: "Apps", text: "Mobile products designed for low-bandwidth, high-expectation users." },
    { icon: "Store", title: "Marketplaces", text: "Trust-first platforms that connect verified supply with real demand." },
    { icon: "Landmark", title: "Fintech", text: "Payments, invoicing and credit tooling built around how money actually moves here." },
    { icon: "ShoppingCart", title: "E-commerce Infrastructure", text: "Storefront, checkout and logistics plumbing for brands that want to own their channel." },
    { icon: "Brain", title: "AI / ML", text: "Applied machine learning for documents, forecasting and decision support." },
    { icon: "Gamepad2", title: "Gaming", text: "Mobile-first games with light footprints and competitive depth." },
    { icon: "BarChart3", title: "Analytics", text: "Dashboards and data pipelines that turn operations into decisions." },
  ],
  // PRODUCTS IN DEVELOPMENT — placeholder entries; edit freely. `link` is optional.
  products: [
    { name: "Ledgerline", category: "Fintech", status: "In Development" as ProductStatus, description: "Invoicing, receivables and cash-flow visibility for small firms in West Africa." },
    { name: "Lumen", category: "Analytics", status: "Beta" as ProductStatus, description: "Real-time performance dashboards for retail and hospitality operators." },
    { name: "Qist Market", category: "Marketplaces", status: "Concept" as ProductStatus, description: "A verified-listing property marketplace with escrow-backed transactions." },
    { name: "Atlas Commerce", category: "E-commerce Infrastructure", status: "Concept" as ProductStatus, description: "Headless storefront and checkout infrastructure for African consumer brands." },
    { name: "Signal", category: "AI / ML", status: "In Development" as ProductStatus, description: "Document intelligence for legal, property and professional-services teams." },
    { name: "Perch", category: "Apps", status: "Beta" as ProductStatus, description: "A private concierge and services app for residents of managed estates." },
    { name: "Hollow Point", category: "Gaming", status: "Concept" as ProductStatus, description: "A studio label for lightweight competitive mobile games." },
    { name: "Portfolio", category: "SaaS", status: "Live" as ProductStatus, description: "Private, invitation-only portfolio sites for owners of high-value assets.", link: "/private-office" },
  ],
  partner: {
    eyebrow: "Partner or invest",
    title: "Build the next one with us.",
    text: "We work with operating partners who bring distribution, and with investors who understand that good products take patience. If that is you, we would like to talk.",
    cta: { label: "Start the conversation", href: "/contact?division=labs" },
  },
};
