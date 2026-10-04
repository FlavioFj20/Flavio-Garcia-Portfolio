import { focusAreas, positioning, profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* No photograph: the copy is the whole first screen and gets the full measure.
   The hero is also the one place the assembly effect spreads from all four
   corners, because here the text arriving *is* the impression. Every section
   below commits to a single side instead, so the page reads as a sequence.

   The headline is the role, not the school: "Software Developer" is what I can
   be hired for. The focus list underneath is what carries the breadth — seven
   areas, so the profile visibly crosses software, data, systems and networks
   rather than sitting in one lane. */
export function Hero() {
  return (
    <section id="topo" className="relative overflow-x-clip">
      <div className="container py-[var(--section-y)]">
        <div className="max-w-4xl">
          <RevealText
            as="p"
            className="section-label"
            text={profile.location}
            side="spread"
          />

          <RevealText
            as="h1"
            className="mt-4 text-[clamp(2.75rem,7.5vw,4.25rem)] leading-[0.96] font-medium"
            text={"Software\nDeveloper"}
            side="spread"
          />

          <RevealText
            as="p"
            className="measure mt-6 text-[1.0625rem] leading-relaxed text-ink-2"
            text={positioning}
            side="spread"
          />

          <Reveal
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            from="left"
            distance="2rem"
            delay={80}
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
            <a href="#servicos" className="text-link">
              O que posso construir
            </a>
          </Reveal>

          <Reveal
            as="ul"
            className="focus-list mt-12"
            from="right"
            distance="2rem"
            delay={170}
          >
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}