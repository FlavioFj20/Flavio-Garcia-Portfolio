import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/data";

/* Two families, clearly distinct. Spectral is a serif drawn for screen —
   technical/documentary rather than literary. IBM Plex Sans is engineered and
   humanist, and is not the Inter default. No monospace: the previous build
   loaded Geist Mono purely as costume on every label. */
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const title = "Flávio Garcia — Software Developer";

const description =
  "Flávio Garcia, Software Developer em Luanda. Cadete da 42 Luanda e Técnico Médio em Informática pelo IPIAL Alda Lara. Desenvolvimento de software, backend, Linux, Docker e bases de dados.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfólio`,
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  keywords: [
    "Flávio Garcia",
    "Software Developer",
    "Cadete da 42 Luanda",
    "Técnico Médio em Informática",
    "Desenvolvimento backend",
    "Node.js",
    "Linux",
    "Docker",
    "MySQL",
    "Luanda",
    "Angola",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/",
    siteName: `${profile.name} — Portfólio`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f5f2",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${spectral.variable} ${plexSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="sr-only rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
        >
          Saltar para o conteúdo
        </a>

        <SiteHeader />

        <main id="conteudo" className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}