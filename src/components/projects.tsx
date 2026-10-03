import { projects } from "@/lib/data";

function RepoLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-11 items-center border-b border-rule-strong pb-px text-[0.9375rem] text-ink transition-colors duration-150 hover:border-accent hover:text-accent"
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

/* One large project and two smaller ones. Not identical cards: the primary
   project carries the column width and the detail, the others are compact
   plates. Same formal object (the plate), different scale. */
export function Projects() {
  const { primary, secondary } = projects;

  return (
    <section id="projetos" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Projetos</p>
            <h2 className="section-title measure">
              Código aberto, para ler e executar.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <article className="plate p-6 sm:p-8">
              <p className="text-[0.8125rem] text-accent">Backend</p>
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
                <article key={project.name} className="plate flex flex-col p-6">
                  <h3 className="text-[1.125rem] font-medium break-words text-ink">
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
      </div>
    </section>
  );
}