import Image from "next/image";
import { contact, profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";
import qrCode from "@/assets/whatsapp-qr.png";

const channels = [
  { href: profile.whatsapp, label: "WhatsApp", Icon: null },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
] as const;

/* Closes the page from the left, the same side About opened on, so the last
   thing the reader sees completes the circuit. */
export function Contact() {
  return (
    <section id="contacto" className="bg-band text-band-ink">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealText
              as="p"
              className="text-[0.8125rem] font-medium tracking-[0.08em] text-band-accent"
              text="Contacto"
              side="left"
            />
            <RevealText
              as="h2"
              className="mt-4 max-w-2xl text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.08] font-medium text-band-ink"
              text={contact.title}
              side="left"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-band-ink/80"
              text={contact.body}
              side="left"
              delay={140}
            />

            <Reveal className="mt-9" from="left" delay={200}>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-inverse"
              >
                {contact.cta}
                <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
              </a>
            </Reveal>

            <Reveal
              as="ul"
              className="mt-10 flex flex-wrap gap-x-8 gap-y-1 border-t border-band-rule pt-6"
              from="left"
              delay={260}
            >
              {channels.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-band-ink/80 transition-colors duration-150 hover:text-band-ink"
                  >
                    {Icon ? <Icon className="size-4" /> : null}
                    {label}
                    <span className="sr-only"> (abre em nova aba)</span>
                  </a>
                </li>
              ))}
            </Reveal>
          </div>

          {/* The QR code (600x600 PNG, generated with a pre-filled WhatsApp
              message — see src/lib/data.ts). Served unoptimized: Next's
              resampling would soften the module edges and make it harder to
              scan. Sized off the caption so it scales with the type but never
              stretches to fill the column. The white plate keeps the required
              quiet zone even in the dark theme. */}
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal
              as="figure"
              className="w-fit rounded-md bg-paper p-4"
              from="left"
              distance="2rem"
              delay={320}
            >
              <Image
                src={qrCode}
                alt="Código QR que abre a conversa de WhatsApp com uma mensagem preparada"
                width={600}
                height={600}
                unoptimized
                placeholder="empty"
                className="h-auto w-[11rem]"
              />
              <figcaption className="mt-3 max-w-[11rem] text-[0.8125rem] leading-relaxed text-ink-2">
                {contact.qrCaption}
              </figcaption>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}