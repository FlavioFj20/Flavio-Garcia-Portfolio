import { capabilities, programming } from "@/lib/data";
import { RevealText } from "./reveal-text";

/* What I can do, not just a logo wall. Each group pairs a short description
   with the tools behind it. Programming is split into two honest tiers so the
   training languages never read as the same thing as the application stack. */
export function Capabilities() {
  return (
    <section id="capacidades" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Capacidades</p>
            <RevealText
              as="h2"
              className="section-title measure"
              text="O que consigo construir."
            />
          </div>
          <p className="measure self-end text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-7 lg:col-start-6">
            Organizo o trabalho por domínio, para se perceber o que está por
            trás de cada tecnologia.
          </p>
        </div>

        <div className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-2 lg:mt-16">
          {capabilities.map((group) => (
            <article
              key={group.title}
              className="reveal border-t border-ink py-6 sm:py-7"
            >
              <h3 className="text-[1.125rem] font-medium text-ink">
                {group.title}
              </h3>
              <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
                {group.body}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="skill-tag"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-rule pt-8 lg:grid-cols-2 lg:gap-16">
          {programming.map((tier) => (
            <div key={tier.title} className="reveal">
              <h3 className="text-[0.9375rem] font-medium text-ink">
                {tier.title}
              </h3>
              <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-3">
                {tier.note}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {tier.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
