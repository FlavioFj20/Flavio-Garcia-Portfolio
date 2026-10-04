import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* One internship, given the weight of a single considered entry. It is here as
   evidence, not as decoration: the two deliverables are separated so it reads as
   real work, and the stack lists only what was actually used. Left side,
   alternating back after the 42 section's left. The plate itself never moves:
   only the writing inside it converges. */
export function Experience() {
  const [role] = experience;
  if (!role) return null;

  return (
    <section id="experiencia" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text="Experiência"
              side="left"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text="Software em contexto real."
              side="left"
              delay={70}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <article className="plate p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <RevealText
                  as="h3"
                  className="text-[1.375rem] font-medium text-ink"
                  text={role.org}
                  side="left"
                />
                <Reveal
                  as="p"
                  className="text-[0.9375rem] text-accent"
                  from="left"
                  distance="1.5rem"
                  delay={70}
                >
                  {role.role}
                </Reveal>
              </div>

              <RevealText
                as="p"
                className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
                text={role.intro}
                side="left"
                delay={140}
              />

              <div className="mt-8 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
                {role.deliverables.map((deliverable, index) => (
                  <Reveal
                    key={deliverable.title}
                    className="deliverable"
                    from="left"
                    delay={200 + index * 90}
                  >
                    <h4 className="text-[1rem] font-medium text-ink">
                      {deliverable.title}
                    </h4>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {deliverable.body}
                    </p>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 border-t border-rule pt-6">
                <RevealText
                  as="h4"
                  className="text-[0.8125rem] text-ink-3"
                  text="O que fiz"
                  side="left"
                  delay={300}
                />
                <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                  {role.responsibilities.map((item, index) => (
                    <Reveal
                      key={item}
                      as="li"
                      className="border-b border-rule py-2 text-[0.9375rem] text-ink"
                      from="left"
                      distance="1.25rem"
                      delay={360 + index * 35}
                    >
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-rule pt-6">
                {role.stack.map((tool, index) => (
                  <Reveal
                    key={tool}
                    as="span"
                    className="skill-tag"
                    from="left"
                    distance="1rem"
                    delay={420 + index * 25}
                  >
                    {tool}
                  </Reveal>
                ))}
              </div>

              {role.note ? (
                <Reveal
                  className="mt-8 flex items-baseline gap-3 border-t border-rule pt-6"
                  from="left"
                  delay={440}
                >
                  <span className="text-[0.8125rem] text-ink-3">
                    {role.note.label}
                  </span>
                  <span className="tabular text-[1.375rem] font-medium text-ink">
                    {role.note.value}
                  </span>
                </Reveal>
              ) : null}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}