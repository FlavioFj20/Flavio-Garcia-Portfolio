import Image from "next/image";
import { contact, profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import qrCode from "@/assets/whatsapp-qr.jpg";

const channels = [
  { href: profile.whatsapp, label: "WhatsApp", Icon: null },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
] as const;

export function Contact() {
  return (
    <section id="contacto" className="bg-band text-band-ink">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.8125rem] font-medium tracking-[0.08em] text-band-accent">
              Contacto
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.08] font-medium text-band-ink">
              {contact.title}
            </h2>
            <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-band-ink/80">
              {contact.body}
            </p>

            <div className="mt-9">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-inverse"
              >
                {contact.cta}
                <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-1 border-t border-band-rule pt-6">
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
            </ul>
          </div>

          {/* The QR code. Served unoptimized at its original 300x300: Next's
              resampling would soften the module edges and make it harder to
              scan, so the browser gets the untouched original instead. Sized
              in `em` off the caption so it scales with the type but never
              stretches to fill the column. */}
          <div className="lg:col-span-4 lg:col-start-9">
            <figure className="reveal w-fit rounded-md bg-paper p-4">
              <Image
                src={qrCode}
                alt="Código QR que abre a conversa de WhatsApp"
                width={300}
                height={300}
                unoptimized
                placeholder="empty"
                className="h-auto w-[10.5rem]"
              />
              <figcaption className="mt-3 max-w-[10.5rem] text-[0.8125rem] leading-relaxed text-ink-2">
                {contact.qrCaption}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
