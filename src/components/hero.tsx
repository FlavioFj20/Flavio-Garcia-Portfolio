import { profile } from "@/lib/data";
import { AnchorLink } from "./buttons";
import { SocialLinks } from "./social-links";
import { ArrowRightIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[52rem] max-w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_62%)] blur-2xl"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p
          data-reveal
          style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
          className="flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-muted uppercase sm:text-xs"
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
          {profile.role}
        </p>

        <p
          data-reveal
          style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
          className="mt-7 text-base font-medium text-muted-strong sm:text-lg"
        >
          Olá, sou {profile.name}.
        </p>

        <h1
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="mt-3 max-w-3xl text-[2rem] leading-[1.1] font-semibold text-fg sm:text-[2.75rem] lg:text-[3.5rem]"
        >
          Software Developer focado em{" "}
          <span className="text-accent">construir soluções úteis</span>.
        </h1>

        <p
          data-reveal
          style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Finalista da 42 Luanda, com experiência prática em desenvolvimento de
          software, backend e aplicações web.
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <AnchorLink href="#projetos" size="lg" variant="primary">
            Ver projetos
            <ArrowRightIcon className="h-4 w-4" />
          </AnchorLink>

          <AnchorLink href="#contacto" size="lg" variant="secondary">
            Entrar em contacto
          </AnchorLink>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "390ms" } as React.CSSProperties}
          className="mt-10 flex items-center gap-5 border-t border-line pt-8"
        >
          <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted uppercase">
            noutros sítios
          </span>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}