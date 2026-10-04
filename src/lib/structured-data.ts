import { backend, profile, school42, services, stack } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

/* Schema.org for the one page on this site.

   Metadata tags tell a crawler what the page is about; structured data is what
   lets Google build an entity for the person rather than just ranking a string.
   That matters here because the queries this page should answer are not about
   "a portfolio" — they are "who is this person and can they do backend work".
   A Person node with `sameAs` pointing at GitHub and LinkedIn is what links the
   page to those profiles; without it they are just two outbound links.

   Everything here is derived from `data.ts` rather than restated, so the
   structured data cannot drift away from the visible copy. Nothing is asserted
   that the copy does not already claim: no employer (the internship is not
   employment), no languages, no credentials, no invented dates.

   `ProfilePage` is the accurate top-level type — this is a page about one
   person, not an article or a product. Emitted as a single `@graph` so the
   page, the site and the person share ids instead of repeating themselves. */
export function structuredData() {
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const pageId = `${siteUrl}/#webpage`;

  /* knowsAbout is the honest one: the technologies the copy claims plus the
     capabilities it lists, deduplicated. `studying` is deliberately excluded —
     it is labelled on the page as contact-only, and listing it as a subject of
     expertise in machine-readable form would undo that labelling. */
  const knowsAbout = Array.from(
    new Set([
      ...stack.flatMap((group) => group.items),
      ...backend.map((item) => item.capability),
      ...services.map((service) => service.title),
    ]),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: `${siteUrl}/`,
        name: `${profile.name} | ${profile.role}`,
        description: profile.summary,
        inLanguage: "pt-PT",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: `${profile.name} — Portfólio`,
        inLanguage: "pt-PT",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: `${siteUrl}/`,
        image: `${siteUrl}/opengraph-image`,
        jobTitle: profile.role,
        description: profile.summary,
        /* The two profiles that establish this is the same person. This is the
           single most useful line in the file. */
        sameAs: [profile.github, profile.linkedin],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Luanda",
          addressCountry: "AO",
        },
        hasOccupation: {
          "@type": "Occupation",
          title: profile.role,
          occupationLocation: {
            "@type": "Country",
            name: "Angola",
          },
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: school42.eyebrow,
        },
        knowsAbout,
      },
    ],
  };
}

/* Serialised for a <script type="application/ld+json">. `</script>` inside a
   string would end the tag early, and the sequence below is the only one that
   can appear in a URL or a description; escaping it costs nothing. */
export function structuredDataTag() {
  return JSON.stringify(structuredData()).replace(/</g, "\\u003c");
}