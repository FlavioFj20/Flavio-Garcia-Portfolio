import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

/* Everything on this site is meant to be indexed, so every crawler is allowed
   everywhere and nothing is disallowed. The two absolute URLs below are the part
   that actually matters to a crawler: `Sitemap` is how the site is discovered,
   and `Host` pins the host Yandex crawls (other engines ignore it). Both come
   from the shared resolver, so they can never drift from the canonical URL in
   the page metadata. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}