import { school42 } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* 42 gets a section of its own because it is the largest single piece of
   formation behind everything else on the page — and because the old page told
   that story chronologically, which is the wrong order for a visitor deciding
   whether to work with me.

   The status is current, not historical: still a cadet, ft_transcendence in
   development, one project and one exam after it. Nothing here claims to be
   finished.

   The phases are labelled "Fase 1..4" on purpose. They are my own thematic
   grouping of the projects I completed; 42's internal orbit/rank numbering could
   not be confirmed against an official source, so the page states none. Each
   phase answers the only question worth asking — what capability did this give me
   — and closes with the one line about how it changed how I think, which is the
   part a curriculum cannot supply.

   Answers from the left. The rail fills as it is scrolled through and the phase in
   progress carries a filled marker, so the current position is legible before a
   single word is read. */
export function School42() {
  const { status, phases, inception } = school42;
  const currentIndex = phases.length - 1;

  return (
    <section id="escola-42" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealText
              as="p"
              className="section-label"
              text={school42.eyebrow}
              side="left"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text={school42.title}
              side="left"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
              text={school42.lead}
              side="left"
              delay={140}
            />

            {/* Where the formation stands, in four plain facts. The "Depois" row
                is deliberately two items and no project names: what remains is
                not confirmed, so it is not written down. */}
            <dl className="mt-9 grid gap-x-8 gap-y-4 border-t border-rule pt-6 sm:grid-cols-2">
              {status.map((entry, index) => (
                <Reveal key={entry.label} from="left" delay={200 + index * 60}>
                  <dt className="text-[0.8125rem] text-ink-3">{entry.label}</dt>
                  <dd className="mt-1 text-[0.9375rem] text-ink">
                    {entry.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <RevealText
              as="p"
              className="measure border-l-2 border-accent pl-4 text-[1.0625rem] leading-relaxed text-ink"
              text={school42.capacityNote}
              side="left"
              delay={210}
            />

            <ol className="phase-rail mt-12">
              {phases.map((phase, index) => {
                const isCurrent = index === currentIndex;

                return (
                  <Reveal
                    key={phase.label}
                    as="li"
                    className={`phase${isCurrent ? " phase-current" : ""}`}
                    from="left"
                    distance="2rem"
                    delay={index * 70}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="tabular text-[0.8125rem] text-accent">
                        {phase.label}
                      </span>
                      {isCurrent ? (
                        <span className="flag">em desenvolvimento</span>
                      ) : null}
                    </div>

                    <h3 className="mt-1 text-[1.25rem] font-medium text-ink">
                      {phase.title}
                    </h3>

                    <ul className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1">
                      {phase.projects.map((project) => (
                        <li
                          key={project}
                          className="border-b border-rule pb-0.5 text-[0.8125rem] text-ink-3"
                        >
                          {project}
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-5 space-y-4">
                      <div>
                        <dt className="text-[0.75rem] tracking-[0.06em] text-ink-2 uppercase">
                          Competências
                        </dt>
                        <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">
                          {phase.skills.join(" · ")}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-[0.75rem] tracking-[0.06em] text-ink-2 uppercase">
                          O que me permite fazer
                        </dt>
                        <dd className="mt-1.5">
                          <ul className="space-y-1.5">
                            {phase.enables.map((item) => (
                              <li
                                key={item}
                                className="flex items-baseline gap-2.5 text-[0.9375rem] leading-relaxed text-ink-2 before:mr-0.5 before:text-rule-strong before:content-['—']"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>

                    <p className="pull mt-5">{phase.shift}</p>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Inception as the infrastructure evidence it is: a real service layout,
            built and graded. One plate, the page's existing object. */}
        <div className="mt-16 border-t border-ink pt-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <RevealText
                as="p"
                className="section-label"
                text="Projeto de infraestrutura"
                side="left"
              />
              <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <RevealText
                  as="h3"
                  className="text-[1.625rem] font-medium text-ink"
                  text={inception.title}
                  side="left"
                  delay={70}
                />
                <Reveal
                  as="p"
                  className="text-[0.9375rem] text-accent"
                  from="left"
                  distance="1.25rem"
                  delay={120}
                >
                  {inception.status}
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <RevealText
                as="p"
                className="measure text-[1.0625rem] leading-relaxed text-ink-2"
                text={inception.summary}
                side="left"
                delay={140}
              />

              <ul className="measure mt-6 space-y-2">
                {inception.detail.map((line, index) => (
                  <Reveal
                    key={line}
                    as="li"
                    className="text-[0.9375rem] leading-relaxed text-ink-2 before:mr-2.5 before:text-rule-strong before:content-['—']"
                    from="left"
                    distance="1.25rem"
                    delay={200 + index * 45}
                  >
                    {line}
                  </Reveal>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-1 border-t border-rule pt-5">
                {inception.stack.map((tool, index) => (
                  <Reveal
                    key={tool}
                    as="span"
                    className="text-[0.875rem] text-ink-3"
                    from="left"
                    distance="1rem"
                    delay={340 + index * 25}
                  >
                    {tool}
                  </Reveal>
                ))}
              </div>

              <Reveal
                className="mt-6 flex items-baseline gap-3 border-t border-rule pt-5"
                from="left"
                delay={440}
              >
                <span className="text-[0.8125rem] text-ink-3">Avaliação</span>
                <span className="tabular text-[1.375rem] font-medium text-ink">
                  {inception.grade}
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}