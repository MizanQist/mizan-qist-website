import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { portfolio } from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/labs", "/studio", "/studio/work", "/private-office", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...portfolio.map((p) => ({ url: `${siteConfig.url}/studio/work/${p.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
