import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { IBM_Plex_Sans, Spectral } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/data";

/* Runs before first paint. Resolves the theme from storage, then from the OS,
   and writes it to <html data-theme> so there is no flash of the wrong theme. */
const themeScript = `(function(){try{var e=document.documentElement,s=localStorage.getItem("theme");if(s!=="light"&&s!=="dark"){s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}e.dataset.theme=s}catch(t){}})();`;

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

const title = "Flávio Garcia | Software Developer";

const description =
  "Portfólio de Flávio Garcia, Software Developer de Luanda, com formação em informática, desenvolvimento backend, sistemas, infraestrutura e redes.";

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
    "Desenvolvedor de software",
    "Backend",
    "NestJS",
    "Node.js",
    "Bases de dados",
    "Linux",
    "Docker",
    "Redes de computadores",
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
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f3ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1211" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${spectral.variable} ${plexSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />

        <a
          href="#conteudo"
          className="sr-only rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
        >
          Saltar para o conteúdo
        </a>

        <SiteHeader />

        {/* `overflow-x-clip` contains the assembly effect: a block-level reveal
            travels far enough sideways to leave the container gutter, and clip
            keeps that from ever becoming a horizontal scrollbar. Verified that
            the vertical axis stays `visible`. */}
        <main id="conteudo" className="flex-1 overflow-x-clip">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}