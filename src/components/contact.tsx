import Image from "next/image";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import qrCode from "@/assets/whatsapp-qr.jpg";

const channels = [
  { href: profile.whatsapp, label: "WhatsApp", Icon: null },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
] as const;

export function Contact() {
  return (
    <section id="contacto" className="bg-ink text-paper">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.8125rem] font-medium tracking-[0.08em] text-accent">
              Contacto
            </p>
            <h2 className="mt-4 max-w-xl text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.08] font-medium text-paper">
              Se tem um sistema ou um site para construir, escreva-me.
            </h2>
            <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-paper/80">
              Respondo pelo WhatsApp. É o canal mais rápido.
            </p>

            <div className="mt-9">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-paper px-6 text-[0.9375rem] font-medium text-ink transition-colors duration-150 hover:bg-white"
              >
                Fale comigo no WhatsApp
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-1 border-t border-paper/15 pt-6">
              {channels.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-paper/80 transition-colors duration-150 hover:text-paper"
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
              stretches to fill the column. The written link beside it means a
              failed scan is never a dead end. */}
          <div className="lg:col-span-4 lg:col-start-9">
            <figure className="w-fit rounded-md bg-paper p-4">
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
                Aponte a câmara para abrir a conversa no WhatsApp.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}