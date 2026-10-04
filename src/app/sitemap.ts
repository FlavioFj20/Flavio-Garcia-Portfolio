import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

/* Single-page site, so one entry. `lastModified` is pinned to a constant
   rather than `new Date()` so the route stays byte-identical between builds and
   the response stays cacheable. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-04"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}