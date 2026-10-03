import Image from "next/image";
import { positioning, profile } from "@/lib/data";
import photo from "@/assets/flavio-garcia.jpg";

/* The photograph is the only dark object on a light page. It sits off-grid and
   bleeds past the right container edge so it reads as a printed plate rather
   than an avatar. It is the one memorable element; everything around it stays
   flat and quiet. */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-x-clip">
      <div className="container grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="enter" style={{ animationDelay: "40ms" }}>
            <span className="section-label">Luanda, Angola</span>
          </p>

          <h1
            className="enter mt-4 text-[clamp(2.5rem,7vw,4rem)] leading-[0.98] font-medium"
            style={{ animationDelay: "100ms" }}
          >
            Software
            <br />
            Developer
          </h1>

          <p
            className="enter mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink-2"
            style={{ animationDelay: "170ms" }}
          >
            Cadete da <strong className="font-medium text-ink">42 Luanda</strong> e{" "}
            <strong className="font-medium text-ink">
              Técnico Médio de Informática
            </strong>{" "}
            pelo IPIAL Alda Lara.
          </p>

          <p
            className="enter measure mt-4 text-[1.0625rem] leading-relaxed text-ink-2"
            style={{ animationDelay: "220ms" }}
          >
            Trabalho com desenvolvimento de software,{" "}
            {positioning.join(", ").toLowerCase()}.
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "290ms" }}
          >
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors duration-150 hover:bg-ink-2"
            >
              Fale comigo
              <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center border-b border-rule-strong pb-px text-[0.9375rem] text-ink transition-colors duration-150 hover:border-accent hover:text-accent"
            >
              Ver projetos
            </a>
          </div>
        </div>

        <div className="enter-plate lg:col-span-6 lg:col-start-7">
          {/* The bleed is capped at the container's own gutter so the plate can
              never reach past the viewport edge. `100vw` is deliberately
              avoided: it includes the scrollbar and is the usual cause of a
              stray horizontal scrollbar. */}
          <figure className="relative lg:-mr-[var(--gutter)]">
            <div className="plate relative aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-4/5">
              <Image
                src={photo}
                alt="Retrato de Flávio Garcia"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 44vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-l border-ink pl-3 text-[0.8125rem] text-ink-3">
              <span>{profile.name}</span>
              <span>{profile.role}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}