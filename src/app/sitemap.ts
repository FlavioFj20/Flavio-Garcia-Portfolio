import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/* Single-page site, so one entry. `lastModified` is pinned to a constant
   rather than `new Date()` so the route stays byte-identical between builds and
   the response stays cacheable. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}