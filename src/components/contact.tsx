import { profile } from "@/lib/data";
import { AnchorLink } from "./buttons";
import { SocialLinks } from "./social-links";
import { ArrowUpRightIcon } from "./icons";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden border-t border-line py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[46rem] max-w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),transparent_65%)] blur-2xl"
      />

      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <p
          data-reveal
          className="font-mono text-[0.7rem] tracking-[0.22em] text-accent uppercase"
        >
          Contacto
        </p>

        <h2
          data-reveal
          style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
          className="mt-5 text-3xl leading-tight font-semibold text-fg sm:text-4xl"
        >
          Tem um projeto em mente?
        </h2>

        <p
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Vamos conversar sobre como posso ajudar a transformar a ideia em uma
          solução.
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="mt-9 flex justify-center"
        >
          <AnchorLink
            href={profile.linkedin}
            size="lg"
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar em contacto
            <ArrowUpRightIcon className="h-4 w-4" />
            <span className="sr-only"> (abre em nova aba)</span>
          </AnchorLink>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
          className="mt-10 flex flex-col items-center gap-5 border-t border-line pt-8"
        >
          <p className="text-sm text-muted">
            Ou, se preferir, comece por ver o código.
          </p>
          <SocialLinks variant="labelled" />
        </div>

        <p
          data-reveal
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          className="mt-8 text-xs text-muted"
        >
          Contactos disponíveis através de LinkedIn e GitHub.
        </p>
      </div>
    </section>
  );
}