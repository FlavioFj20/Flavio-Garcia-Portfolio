/* The one place that decides what the public URL of this site is.
   `metadataBase`, the canonical link, `og:url`, the Open Graph image URL,
   `robots.txt` and `sitemap.xml` all derive from it, so a wrong value here
   silently poisons every one of them at once.

   Order of preference:
   1. `NEXT_PUBLIC_SITE_URL` — set it to the real domain as soon as there is a
      custom one; it wins over anything automatic.
   2. `NEXT_PUBLIC_VERCEL_URL` — the stable per-deployment URL Vercel injects.
   3. `VERCEL_PROJECT_PRODUCTION_URL` — the production domain Vercel injects,
      which is what makes a fresh deploy correct with zero configuration.
   4. `http://localhost:3000` — local development.

   Steps 2 and 3 are set by Vercel itself, so a deployment that forgets the env
   var still emits the right absolute URLs instead of `http://localhost:3000`.
   They are read at build time only, which is when metadata, robots and sitemap
   are generated, so the non-public one is safe to reference here.

   The trailing slash is stripped so callers can always append a path and never
   produce a doubled slash. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  "http://localhost:3000"
).replace(/\/+$/, "");