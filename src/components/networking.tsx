import { networking } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* A section of its own, because networking is a real part of the profile and
   burying it in a skills list would understate it — while turning it into a
   network-engineering pitch would overstate it.

   The order is deliberate and non-negotiable: origin first, in two sentences,
   then an explicit pivot, then capability. Every group carries a qualifier that
   separates what I practised from what I only had contact with, so the page never
   has to choose between underselling and lying.

   Two small technical objects instead of decoration: a subnet map (a /24 split
   into two /25s — literally the operation the section is about) and the
   progression chain that proves the base was built in order rather than
   assembled from a list.

   Returns to the right, against Capabilities' left. */
export function Networking() {
  return (
    <section id="redes" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealText
              as="p"
              className="section-label"
              text={networking.eyebrow}
              side="right"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text={networking.title}
              side="right"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
              text={networking.lead}
              side="right"
              delay={140}
            />

            {/* The pivot, set apart: this is where the section stops talking
                about where the knowledge came from. */}
            <Reveal className="mt-8 border-t border-ink pt-5" from="right" delay={210}>
              <p className="text-[1.125rem] font-medium text-ink">
                {networking.pivot}
              </p>
            </Reveal>

            {/* Progression, not a chronology. Six short steps: the point is the
                order they were built in. */}
            <div className="mt-8">
              <RevealText
                as="h3"
                className="text-[0.8125rem] font-medium tracking-[0.04em] text-ink-3"
                text="Como esta base foi construída"
                side="right"
                delay={260}
              />
              <ol className="chain mt-3">
                {networking.progression.map((step, index) => (
                  <Reveal
                    key={step}
                    as="li"
                    className={`chain-step${index === networking.progression.length - 1 ? " chain-step-last" : ""}`}
                    from="right"
                    distance="1.25rem"
                    delay={250 + index * 45}
                  >
                    {step}
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {/* Capacity, by area. The qualifier on each heading is the honesty
                mechanism: solid border for what was practised, quiet outline
                for training contact. */}
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {networking.groups.map((group, index) => (
                <Reveal key={group.title} from="right" delay={index * 60}>
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <h3 className="text-[0.8125rem] font-medium tracking-[0.04em] text-ink">
                      {group.title}
                    </h3>
                    <span
                      className="qualifier"
                      data-level={group.qualifier}
                      title={
                        group.qualifier === "praticado"
                          ? "Praticado"
                          : "Contacto / formação"
                      }
                    >
                      {group.qualifier}
                    </span>
                  </div>
                  <ul className="mt-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-rule py-2 text-[0.9375rem] text-ink last:border-b-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            {/* One small diagram, and it is the operation itself: a /24 split
                into two /25s. Hairlines only, drawn in as it comes into view. */}
            <Reveal className="mt-12" from="right" distance="2rem" delay={430}>
              <div className="netmap">
                <span className="netmap-node" data-role="parent">
                  10.0.0.0/24
                </span>
                <span className="netmap-wire" aria-hidden="true" />
                <span className="netmap-node">10.0.0.0/25</span>
                <span className="netmap-node">10.0.0.128/25</span>
                <span className="netmap-caption">
                  Dividir uma rede em sub-redes e verificar se cada subrange
                  serve a necessidade.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}