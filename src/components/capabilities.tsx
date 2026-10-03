import { capabilities, networking } from "@/lib/data";

/* An inventory, not a card grid. Hairline-ruled rows read as a spec sheet and
   let the content carry the structure. No levels, no percentages, no bars. */
export function Capabilities() {
  return (
    <section id="capacidades" className="rule-top bg-paper-raised">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Capacidades</p>
            <h2 className="section-title measure">
              As ferramentas com que trabalho.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <dl>
              {capabilities.map((group) => (
                <div
                  key={group.title}
                  className="grid gap-x-8 gap-y-2 border-t border-rule py-4 sm:grid-cols-[10rem_1fr] sm:py-5"
                >
                  <dt className="text-[0.9375rem] font-medium text-ink">
                    {group.title}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-[0.9375rem] text-ink-2 before:mr-2 before:text-rule-strong before:content-['—']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Networking gets its own weighted block: the brief asks for a real
            presence, phrased as foundations rather than as a job title. */}
        <div className="mt-16 grid gap-8 border-t border-ink pt-8 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">{networking.title}</p>
            <p className="measure mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
              {networking.lead}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {networking.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule py-2.5 text-[0.9375rem] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}