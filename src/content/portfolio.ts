/**
 * PORTFOLIO — drives /studio/work and /studio/work/[slug].
 * All images are PLACEHOLDERS from Unsplash. Replace `cover` and `gallery`
 * with your own files in /public/work/<slug>/ and keep the shape the same.
 */
export const portfolioCategories = ["Web", "Brand", "3D & Visual", "Print", "Launch & Marketing", "Personal"] as const;
export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  tags: string[];
  year: string;
  summary: string;
  cover: string;
  gallery: string[];
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  featured?: boolean;
};

const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const portfolio: PortfolioItem[] = [
  {
    slug: "harbourline-residences",
    title: "Harbourline Residences",
    client: "Harbourline Development Co.",
    category: "Web",
    tags: ["Brochure website", "3D visuals", "Real estate"],
    year: "2026",
    featured: true,
    summary: "A page-turning digital brochure for a waterfront development, with interactive floor plans and a print edition.",
    cover: u("1512917774080-9991f1c4c750"),
    gallery: [u("1600585154340-be6161a56a0c"), u("1600607687939-ce8a6c25118c"), u("1613490493576-7fde63acd811")],
    challenge: "The developer needed to pre-sell forty units from drawings alone, to buyers in two countries who would never visit the site before committing.",
    approach: "We built a cinematic, single-URL brochure site structured like a printed book: cover, at a glance, visualisations, plans, specification. Every plan was redrawn as an interactive layer, and a twelve-page print edition was generated from the same source.",
    outcome: "The site became the primary sales tool for the launch, shared directly on WhatsApp with qualified buyers.",
    services: ["Web development", "Architectural rendering", "Brochure design"],
  },
  {
    slug: "ember-and-oak",
    title: "Ember & Oak",
    client: "Ember & Oak Café",
    category: "Brand",
    tags: ["Identity", "Menus", "Website"],
    year: "2026",
    featured: true,
    summary: "A warm identity, menu system and ordering-ready website for a neighbourhood café.",
    cover: u("1556742049-0cfed4f6a45d"),
    gallery: [u("1497215728101-856f4ea42174"), u("1555421689-491a97ff2040"), u("1542838132-92c53300491e")],
    challenge: "A new café with excellent coffee and no visual identity, opening in a street already full of competitors.",
    approach: "We designed a monogram and typographic system that felt established from day one, applied it to menus, cups and signage, and built a one-page site with WhatsApp ordering and reservations.",
    outcome: "A consistent presence across print, in-store and online, launched in under four weeks.",
    services: ["Brand identity", "Menus", "Web development"],
  },
  {
    slug: "saffron-atelier",
    title: "Saffron Atelier",
    client: "Saffron Atelier",
    category: "Web",
    tags: ["E-commerce", "Fashion", "Mobile-first"],
    year: "2026",
    featured: true,
    summary: "A mobile-first luxury fashion store with a video hero and a checkout designed for phones.",
    cover: u("1558618666-fcd25c85cd64"),
    gallery: [u("1483985988355-763728e1935b"), u("1490481651871-ab68de25d43d"), u("1445205170230-053b83016050")],
    challenge: "Ninety percent of the brand's customers shop from Instagram on a phone. The previous site was built for desktop and lost them at checkout.",
    approach: "We rebuilt the store mobile-first around a two-clip video hero and a two-step checkout, with foldable and desktop layouts layered on top.",
    outcome: "A storefront that feels like the brand's own content, with checkout completion designed around real phone behaviour.",
    services: ["E-commerce builds", "Motion design"],
  },
  {
    slug: "northgate-chambers",
    title: "Northgate Chambers",
    client: "Northgate Chambers",
    category: "Brand",
    tags: ["Identity", "Stationery", "Guidelines"],
    year: "2025",
    summary: "A restrained identity and stationery suite for a commercial law practice.",
    cover: u("1497366216548-37526070297c"),
    gallery: [u("1556761175-5973dc0f32e7"), u("1600880292203-757bb62b4baf")],
    challenge: "Partners wanted a brand that signalled seniority without looking like every other firm on the street.",
    approach: "A serif wordmark, a single deep accent colour and an unusually generous grid, documented in a short set of guidelines the firm can apply itself.",
    outcome: "A complete suite of letterheads, cards, email signatures and a presentation template, delivered with brand guidelines.",
    services: ["Brand identity", "Corporate stationery", "Brand guidelines"],
  },
  {
    slug: "crescent-tower",
    title: "Crescent Tower",
    client: "Crescent Properties",
    category: "3D & Visual",
    tags: ["3D modelling", "Rendering", "Walkthrough"],
    year: "2025",
    summary: "Photoreal exterior and interior renders of a 24-storey mixed-use tower from architectural drawings.",
    cover: u("1486406146926-c627a92ad1ab"),
    gallery: [u("1545324418-cc1a3fa10c00"), u("1600585154340-be6161a56a0c")],
    challenge: "Investors needed to see the finished building, in context, from a set of 2D plans and elevations.",
    approach: "We modelled the tower and its surroundings, lit it for dawn and dusk, and produced a short walkthrough for the investor deck.",
    outcome: "Twelve stills and a 45-second animation, now used across the development's sales materials.",
    services: ["3D modelling", "Architectural rendering", "Motion design"],
  },
  {
    slug: "verdant-dental",
    title: "Verdant Dental",
    client: "Verdant Dental Clinic",
    category: "Web",
    tags: ["Website", "Booking", "Print"],
    year: "2025",
    summary: "A calm, booking-ready website and in-clinic print for a family dental practice.",
    cover: u("1588776814546-1ffcf47267a5"),
    gallery: [u("1606811841689-23dfddce3e95"), u("1629909613654-28e377c37b09")],
    challenge: "The clinic's bookings came almost entirely by phone, and the old site made the practice feel clinical in the wrong way.",
    approach: "A soft palette, real photography and a two-click booking flow, with matching welcome cards and signage for the reception.",
    outcome: "A website patients describe as reassuring, with online booking as the default path.",
    services: ["Web development", "Graphic design", "Corporate stationery"],
  },
  {
    slug: "amina-and-yusuf",
    title: "Amina & Yusuf",
    client: "Private client",
    category: "Personal",
    tags: ["Wedding", "Monogram", "Invitation suite"],
    year: "2026",
    summary: "A wedding identity: monogram, printed invitation suite, digital invites and day-of signage.",
    cover: u("1519741497674-611481863552"),
    gallery: [u("1511285560929-80b456fea0bc"), u("1465495976277-4387d4b0b4c6")],
    challenge: "Two families, two cities, three events, and a couple who wanted everything to feel like one story.",
    approach: "A single monogram and colour story carried through every piece, from the save-the-date to the thank-you cards.",
    outcome: "A complete suite delivered in print and digital, ready for both WhatsApp and the post.",
    services: ["Wedding branding", "Graphic design"],
  },
  {
    slug: "meridian-capital-report",
    title: "Meridian Capital",
    client: "Meridian Capital Partners",
    category: "Print",
    tags: ["Annual report", "Editorial", "Data design"],
    year: "2025",
    summary: "A 64-page annual report with a clear editorial system and bespoke data graphics.",
    cover: u("1554224155-6726b3ff858f"),
    gallery: [u("1460925895917-afdab827c52f"), u("1559136555-9303baea8ebd")],
    challenge: "A dense financial document that needed to be read, not just filed.",
    approach: "A typographic grid built for long reading, charts redrawn in the firm's palette, and a print specification that holds up in the hand.",
    outcome: "Delivered as a print edition and an accessible PDF, on schedule for the shareholder meeting.",
    services: ["Magazine design", "Graphic design"],
  },
  {
    slug: "pulse-launch",
    title: "Pulse",
    client: "Pulse Fitness",
    category: "Launch & Marketing",
    tags: ["Product launch", "Campaign", "Social"],
    year: "2026",
    summary: "A launch identity and three-month content system for a fitness app's first release.",
    cover: u("1571974599782-87624638275e"),
    gallery: [u("1517836357463-d25dfeac3438"), u("1534438327276-14e5300c3a48")],
    challenge: "A new app with no audience, launching into a crowded category on a modest budget.",
    approach: "A bold launch identity, a landing page built for conversion, and a month-by-month content calendar the founders could run themselves.",
    outcome: "A coherent presence across app store, web and social from launch day.",
    services: ["Product launch design", "Social media content", "Marketing strategy"],
  },
  {
    slug: "cedar-and-stone",
    title: "Cedar & Stone",
    client: "Cedar & Stone Barbers",
    category: "Brand",
    tags: ["Identity", "Signage", "Booking page"],
    year: "2025",
    summary: "A confident identity, shopfront signage and booking page for a modern barbershop.",
    cover: u("1521590832167-7bcbfaa6381f"),
    gallery: [u("1503951914875-452162b0f3f1"), u("1585747860715-2ba37e788b70")],
    challenge: "A second location was opening and the brand needed to feel like a name, not a single shop.",
    approach: "A bold wordmark, a two-colour system and signage drawn for both storefronts, with a booking page that works from Instagram.",
    outcome: "Both shops now share one brand, one booking link and one content look.",
    services: ["Brand identity", "Logo design", "Web development"],
  },
];

export const getPortfolioItem = (slug: string) => portfolio.find((p) => p.slug === slug);
export const featuredPortfolio = portfolio.filter((p) => p.featured).slice(0, 3);
