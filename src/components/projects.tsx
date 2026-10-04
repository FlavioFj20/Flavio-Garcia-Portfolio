import { projects } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

function RepoLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-link group"
    >
      Repositório no GitHub
      <span className="sr-only"> de {name} (abre em nova aba)</span>
    </a>
  );
}

function Stack({
  items,
  delay = 0,
}: {
  items: readonly string[];
  delay?: number;
}) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {items.map((item, index) => (
        <Reveal
          key={item}
          as="li"
          className="text-[0.875rem] text-ink-3"
          from="right"
          distance="1rem"
          delay={delay + index * 25}
        >
          {item}
        </Reveal>
      ))}
    </ul>
  );
}

/* Six repositories, chosen to cover the areas the page claims rather than to fill
   a grid: backend and APIs, systems and data modelling, web with PHP/MySQL, a
   Node.js foundation, and a command-line tool. Every description was read against
   the repository itself.

   Each entry keeps its provenance visible in a short note — internship work, a
   course project — because a portfolio that hides where something came from is
   worth less, not more.

   One large plate and five smaller ones: same formal object, different scale. The
   primary project assembles word by word; the smaller cards travel as one block
   each, so the hierarchy of the section is also the hierarchy of the motion.
   Right side. */
export function Projects() {
  const { primary, secondary } = projects;

  return (
    <section id="projetos" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text="Projetos"
              side="right"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text="Código aberto, para ler e executar."
              side="right"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
              text="Os repositórios que mostram melhor o que faço: backend, sistemas de gestão, web e ferramentas de linha de comandos."
              side="right"
              delay={140}
            />
          </div>

          <div className="lg:col-span-8">
            <article className="plate project-card p-6 sm:p-8">
              <Reveal
                as="p"
                className="text-[0.8125rem] text-accent"
                from="right"
                distance="1.5rem"
              >
                {primary.category}
              </Reveal>
              <RevealText
                as="h3"
                className="mt-2 text-[1.625rem] font-medium break-words text-ink"
                text={primary.name}
                side="right"
                delay={70}
              />
              <RevealText
                as="p"
                className="measure mt-4 text-[1.0625rem] leading-relaxed text-ink-2"
                text={primary.summary}
                side="right"
                delay={140}
              />

              <ul className="measure mt-6 space-y-2">
                {primary.detail.map((line, index) => (
                  <Reveal
                    key={line}
                    as="li"
                    className="text-[0.9375rem] leading-relaxed text-ink-2 before:mr-2.5 before:text-rule-strong before:content-['—']"
                    from="right"
                    distance="1.25rem"
                    delay={200 + index * 40}
                  >
                    {line}
                  </Reveal>
                ))}
              </ul>

              <div className="mt-7 border-t border-rule pt-5">
                <Stack items={primary.stack} delay={280} />
              </div>

              <Reveal className="mt-6" from="right" delay={320}>
                <RepoLink href={primary.href} name={primary.name} />
              </Reveal>
            </article>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {secondary.map((project, index) => (
                <Reveal
                  key={project.name}
                  as="article"
                  className="plate project-card flex flex-col p-6"
                  from="right"
                  delay={300 + index * 55}
                >
                  <p className="text-[0.75rem] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-[1.125rem] font-medium break-words text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">
                    {project.summary}
                  </p>

                  <ul className="measure mt-4 space-y-1.5">
                    {project.detail.map((line) => (
                      <li
                        key={line}
                        className="text-[0.875rem] leading-relaxed text-ink-2 before:mr-2 before:text-rule-strong before:content-['—']"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-rule pt-4">
                    <Stack items={project.stack} />
                  </div>

                  {project.note ? (
                    <p className="mt-4 text-[0.75rem] leading-relaxed text-ink-3 italic">
                      {project.note}
                    </p>
                  ) : null}

                  <div className="mt-5">
                    <RepoLink href={project.href} name={project.name} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}