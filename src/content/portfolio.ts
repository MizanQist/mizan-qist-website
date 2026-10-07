/**
 * PORTFOLIO — drives /studio/work and /studio/work/[slug].
 * Images and videos live in /public/work/<slug>/. Add an item here and it appears everywhere.
 */
export const portfolioCategories = ["Web", "Video", "Brand", "3D & Visual", "Print", "Launch & Marketing", "Personal"] as const;
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
  /** Live site, shown as a "Visit the site" button on the case study. */
  link?: string;
  /** A film instead of a still: the card plays it muted, the case study shows a player. */
  video?: { src: string; poster: string; portrait?: boolean };
};

export const portfolio: PortfolioItem[] = [
  {
    slug: "the-atlantic-view",
    title: "The Atlantic View",
    client: "A365 Designs",
    category: "Web",
    tags: ["Brochure website", "Plan explorer", "Waterfront residences"],
    year: "2026",
    featured: true,
    summary: "A dark, marine-toned digital brochure for a waterfront development in Park View, Lagos, with an interactive plan explorer and a master-plan map.",
    cover: "/work/the-atlantic-view/cover.jpg",
    gallery: ["/work/the-atlantic-view/shot-1.jpg"],
    challenge: "Sell waterfront apartments from drawings to buyers who would mostly see the project on a phone, and make the plans legible without a site visit.",
    approach: "We built a single-URL brochure site in a deep marine palette, redrew every floor plan as an interactive explorer, and placed hotspots on the master plan so each block opens its own story. A print edition was generated from the same source.",
    outcome: "A sales tool the developer can send on WhatsApp, with plans, specification and location in one place.",
    services: ["Web development", "Brochure design", "Graphic design"],
  },
  {
    slug: "villa-71",
    title: "Villa 71",
    client: "A365 Designs",
    category: "Web",
    tags: ["Brochure website", "Private residence", "Compare slider"],
    year: "2026",
    featured: true,
    summary: "A brochure site for a private residence in Guzape, Abuja: four exterior schemes compared with a slider, fifty-one interior renders and a 360° tour.",
    cover: "/work/villa-71/cover.jpg",
    gallery: ["/work/villa-71/shot-1.jpg", "/work/villa-71/shot-2.jpg", "/work/villa-71/shot-3.jpg"],
    challenge: "The architects needed the client to choose between four exterior directions and understand seven suites, a guest chalet and a pool from renders alone.",
    approach: "A page-based brochure with a compare slider for the exterior options, an interiors gallery organised by room, and an embedded 360° tour, all served from one lightweight static site.",
    outcome: "A decision-making tool for the client and a presentation piece for the practice.",
    services: ["Web development", "Brochure design", "Architectural rendering"],
    link: "https://mizanqist.github.io/villa-71/",
  },
  {
    slug: "cova-manor",
    title: "Cova Manor",
    client: "Cova Manor, Victoria Island",
    category: "Web",
    tags: ["Brochure website", "Print edition", "Victoria Island"],
    year: "2026",
    featured: true,
    summary: "Eight residences on eight levels in Victoria Island, Lagos, presented as a page-turning brochure site with a thirteen-sheet print edition.",
    cover: "/work/cova-manor/cover.jpg",
    gallery: ["/work/cova-manor/shot-1.jpg", "/work/cova-manor/shot-2.jpg", "/work/cova-manor/shot-3.jpg"],
    challenge: "Present six duplexes and two apartments, their plans and their specification to buyers in Lagos and abroad, before completion.",
    approach: "Cover, at-a-glance figures, visualisations, plans and specification laid out like a printed book, with a location map and a print edition produced from the same content.",
    outcome: "A brochure that lives at one address, prints to thirteen sheets, and is shared directly with qualified buyers.",
    services: ["Web development", "Brochure design", "Print"],
    link: "https://mizanqist.github.io/cova-manor/",
  },
  {
    slug: "lantees-cafe",
    title: "Lantees Café & Bistro",
    client: "Lantees, Maitama",
    category: "Web",
    tags: ["Restaurant website", "WhatsApp ordering", "Reservations"],
    year: "2026",
    summary: "A garden café inside Sarius Palmetum, Abuja: menu, WhatsApp ordering, reservations and a map, on one page that loads fast on a phone.",
    cover: "/work/lantees-cafe/cover.jpg",
    gallery: ["/work/lantees-cafe/shot-1.jpg", "/work/lantees-cafe/shot-2.jpg", "/work/lantees-cafe/shot-3.jpg"],
    challenge: "A café with a beautiful setting and no way for guests to see the menu, book a table or order without calling.",
    approach: "A mobile-first site that opens on the garden, puts the menu one tap away, and routes orders and reservations through WhatsApp so the team needs no new software.",
    outcome: "Ordering and reservations that work from the first day, with content the owners can update themselves.",
    services: ["Web development", "Menus", "Graphic design"],
    link: "https://mizanqist.github.io/lantees-cafe/",
  },
  {
    slug: "lantees-drinks",
    title: "Lantees drinks film",
    client: "Lantees, Maitama",
    category: "Video",
    tags: ["Social content", "Short film", "Vertical"],
    year: "2026",
    summary: "A short vertical film for Lantees' social channels: two fresh juices carried through the garden terrace.",
    cover: "/work/lantees-drinks/poster.jpg",
    gallery: [],
    challenge: "Give the café's social feed a piece of motion that feels as considered as the setting.",
    approach: "A single slow tracking shot, colour-graded to the café's palette, cut for vertical feeds.",
    outcome: "A reusable clip for stories, reels and the website.",
    services: ["Social media content", "Motion design"],
    video: { src: "/work/lantees-drinks/video.mp4", poster: "/work/lantees-drinks/poster.jpg", portrait: true },
  },
  {
    slug: "jet-hangar",
    title: "Private jet hangar",
    client: "DOPRES",
    category: "Video",
    tags: ["3D animation", "Architectural film", "Aviation"],
    year: "2026",
    featured: false,
    summary: "A rendered flyover of a private aviation hangar at golden hour: two jets on the apron and the perforated façade opening behind them.",
    cover: "/work/jet-hangar/poster.jpg",
    gallery: [],
    challenge: "Show a hangar that does not exist yet with the atmosphere of a finished building.",
    approach: "The building and aircraft were modelled and lit for a low sun, then animated as a slow camera move for use as a website hero and in presentations.",
    outcome: "A ten-second film that carries the whole pitch.",
    services: ["3D modelling", "Architectural rendering", "Motion design"],
    video: { src: "/work/jet-hangar/video.mp4", poster: "/work/jet-hangar/poster.jpg" },
  },
  {
    slug: "teapot",
    title: "Tea Pot",
    client: "Tea Pot, a good brew",
    category: "Video",
    tags: ["Product film", "Social content", "Vertical"],
    year: "2026",
    summary: "A close product film for Tea Pot: tea poured from the jug into branded cups.",
    cover: "/work/teapot/poster.jpg",
    gallery: [],
    challenge: "Make a simple cup of tea look worth stopping for in a social feed.",
    approach: "Macro framing, natural light and the pour as the only action, with the brand's cups doing the rest.",
    outcome: "A clip the brand runs across stories, reels and in-store screens.",
    services: ["Social media content", "Motion design"],
    video: { src: "/work/teapot/video.mp4", poster: "/work/teapot/poster.jpg", portrait: true },
  },
];

export const getPortfolioItem = (slug: string) => portfolio.find((p) => p.slug === slug);
export const featuredPortfolio = portfolio.filter((p) => p.featured).slice(0, 3);
