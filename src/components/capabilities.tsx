import { capabilities, programming } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* What I can do, not just a logo wall. Each group pairs a short description
   with the tools behind it. Programming is split into two honest tiers so the
   training languages never read as the same thing as the application stack.

   This section answers from the right, against About's left. The rule lines and
   the plates stay put — only the words travel, so the page structure is legible
   before anything moves. */
export function Capabilities() {
  return (
    <section id="capacidades" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text="Capacidades"
              side="right"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text="O que consigo construir."
              side="right"
              delay={70}
            />
          </div>
          <RevealText
            as="p"
            className="measure self-end text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-7 lg:col-start-6"
            text="Organizo o trabalho por domínio, para se perceber o que está por trás de cada tecnologia."
            side="right"
            delay={140}
          />
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-2 lg:mt-16">
          {capabilities.map((group, groupIndex) => (
            <article
              key={group.title}
              className="border-t border-ink py-6 sm:py-7"
            >
              <RevealText
                as="h3"
                className="text-[1.125rem] font-medium text-ink"
                text={group.title}
                side="right"
                delay={groupIndex * 60}
              />
              <RevealText
                as="p"
                className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink-2"
                text={group.body}
                side="right"
                delay={groupIndex * 60 + 70}
              />
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {group.items.map((item, itemIndex) => (
                  <Reveal
                    key={item}
                    as="li"
                    className="skill-tag"
                    from="right"
                    distance="1.25rem"
                    delay={groupIndex * 60 + 140 + itemIndex * 40}
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-rule pt-8 lg:grid-cols-2 lg:gap-16">
          {programming.map((tier, tierIndex) => (
            <div key={tier.title}>
              <RevealText
                as="h3"
                className="text-[0.9375rem] font-medium text-ink"
                text={tier.title}
                side="right"
                delay={tierIndex * 70}
              />
              <RevealText
                as="p"
                className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-3"
                text={tier.note}
                side="right"
                delay={tierIndex * 70 + 70}
              />
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {tier.items.map((item, itemIndex) => (
                  <Reveal
                    key={item}
                    as="li"
                    className="skill-tag"
                    from="right"
                    distance="1.25rem"
                    delay={tierIndex * 70 + 140 + itemIndex * 40}
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}