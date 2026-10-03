import Image from "next/image";
import { focusAreas, positioning, profile } from "@/lib/data";
import photoLight from "@/assets/light.jpeg";
import photoDark from "@/assets/dark.jpeg";

/* The photograph is the only dark object on a light page — and its lighter
   twin on a dark one. Both are rendered; CSS swaps them with the theme, so the
   plate always sits against the right key without any client JS. It bleeds
   past the right container edge so it reads as a printed plate rather than an
   avatar. The short index under the copy names the areas the profile crosses;
   each row carries a small node mark as a discreet network reference. */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-x-clip">
      <div className="container grid gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-12 lg:items-start lg:gap-10 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="enter section-label" style={{ animationDelay: "40ms" }}>
            {profile.location}
          </p>

          <h1
            className="enter mt-4 text-[clamp(2.75rem,7.5vw,4.25rem)] leading-[0.96] font-medium"
            style={{ animationDelay: "100ms" }}
          >
            Software
            <br />
            Developer
          </h1>

          <p
            className="enter measure mt-6 text-[1.0625rem] leading-relaxed text-ink-2"
            style={{ animationDelay: "170ms" }}
          >
            {positioning}
          </p>

          <p
            className="enter measure mt-4 text-[1.0625rem] leading-relaxed text-ink-2"
            style={{ animationDelay: "220ms" }}
          >
            Gosto de perceber o problema antes da solução e de construir com
            consciência do que acontece por baixo da abstração.
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            style={{ animationDelay: "290ms" }}
          >
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              Fale comigo
              <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
            </a>
            <a href="#projetos" className="text-link">
              Ver projetos
            </a>
          </div>

          <ul
            className="enter focus-list mt-12"
            style={{ animationDelay: "340ms" }}
          >
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="enter-plate lg:col-span-6 lg:col-start-7">
          {/* The bleed is capped at the container's own gutter so the plate can
              never reach past the viewport edge. `100vw` is deliberately
              avoided: it includes the scrollbar and is the usual cause of a
              stray horizontal scrollbar. */}
          <figure className="relative lg:-mr-[var(--gutter)]">
            <div className="plate relative aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-4/5">
              <Image
                src={photoLight}
                alt="Retrato de Flávio Garcia"
                fill
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 44vw"
                className="photo photo-light object-cover object-top"
              />
              <Image
                src={photoDark}
                alt="Retrato de Flávio Garcia"
                fill
                loading="eager"
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 52vw, 44vw"
                className="photo photo-dark object-cover object-top"
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
