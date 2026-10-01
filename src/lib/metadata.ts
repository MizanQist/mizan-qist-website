import type { Metadata } from "next";

/** Per-page metadata with canonical + Open Graph in one call. */
export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", ...(image ? { images: [{ url: image }] } : {}) },
  };
}
