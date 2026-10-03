import { academic, projects } from "@/lib/data";

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

function Stack({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
      {items.map((item) => (
        <li key={item} className="text-[0.875rem] text-ink-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* One large project and two smaller ones. Same formal object (the plate),
   different scale. The academic block shows breadth without linking private
   repositories. */
export function Projects() {
  const { primary, secondary } = projects;

  return (
    <section id="projetos" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Projetos</p>
            <h2 className="section-title measure">
              Código aberto, para ler e executar.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <article className="plate project-card p-6 sm:p-8">
              <p className="text-[0.8125rem] text-accent">
                {primary.category}
              </p>
              <h3 className="mt-2 text-[1.625rem] font-medium text-ink">
                {primary.name}
              </h3>
              <p className="measure mt-4 text-[1.0625rem] leading-relaxed text-ink-2">
                {primary.summary}
              </p>

              <ul className="measure mt-6 space-y-2">
                {primary.detail.map((line) => (
                  <li
                    key={line}
                    className="text-[0.9375rem] leading-relaxed text-ink-2 before:mr-2.5 before:text-rule-strong before:content-['—']"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-rule pt-5">
                <Stack items={primary.stack} />
              </div>

              <div className="mt-6">
                <RepoLink href={primary.href} name={primary.name} />
              </div>
            </article>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {secondary.map((project) => (
                <article
                  key={project.name}
                  className="plate project-card flex flex-col p-6"
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
                  <div className="mt-5 border-t border-rule pt-4">
                    <Stack items={project.stack} />
                  </div>
                  <div className="mt-5">
                    <RepoLink href={project.href} name={project.name} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">{academic.title}</p>
            <p className="measure mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
              {academic.lead}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 lg:col-span-7 lg:col-start-6">
            {academic.areas.map((area) => (
              <li key={area} className="skill-tag">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
