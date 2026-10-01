import { projects, profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon, ServerIcon, TerminalIcon } from "./icons";

const FLOW = [
  { label: "CLI", detail: "Interface de linha de comandos", Icon: TerminalIcon },
  { label: "JSON", detail: "Persistência local em ficheiros", Icon: ServerIcon },
  { label: "HTTP", detail: "Servidor web", Icon: ServerIcon },
] as const;

function RepositoryLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-9 items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-strong"
    >
      Ver repositório
      <span className="sr-only"> de {name} (abre em nova aba)</span>
      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projetos" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos públicos que mostram como trabalho."
          description="Repositórios abertos no GitHub, disponíveis para leitura e execução."
        />

        {featured ? (
          <article
            data-reveal
            className="group relative mt-12 overflow-hidden rounded-2xl border border-accent/25 bg-surface/60 transition-colors duration-300 hover:border-accent/50"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),transparent_65%)]"
            />

            <div className="relative grid gap-10 p-6 sm:p-9 lg:grid-cols-12 lg:gap-14">
              <div className="flex flex-col lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-accent uppercase">
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent" />
                    Em destaque
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-fg sm:text-2xl">
                  {featured.name}
                </h3>

                <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-muted-strong">
                  {featured.description}
                </p>

                {featured.technologies ? (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-[0.78rem] text-muted-strong"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8">
                  <RepositoryLink href={featured.href} name={featured.name} />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="h-full rounded-xl border border-line bg-bg/50 p-5 sm:p-6">
                  <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    O que o projeto envolve
                  </p>

                  <ol className="mt-5 space-y-4">
                    {FLOW.map((step, index) => (
                      <li key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong bg-surface text-accent"
                          >
                            <step.Icon className="h-4 w-4" />
                          </span>
                          {index < FLOW.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="mt-1 h-6 w-px bg-line-strong"
                            />
                          ) : null}
                        </div>

                        <div className="pt-0.5">
                          <p className="font-mono text-sm text-fg">{step.label}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted">
                            {step.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <article
              key={project.name}
              data-reveal
              style={
                { "--reveal-delay": `${index * 90}ms` } as React.CSSProperties
              }
              className="flex flex-col rounded-xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong sm:p-7"
            >
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                {project.category}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-fg">
                {project.name}
              </h3>

              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-strong">
                {project.description}
              </p>

              {project.technologies ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-[0.78rem] text-muted-strong"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-7">
                <RepositoryLink href={project.href} name={project.name} />
              </div>
            </article>
          ))}
        </div>

        <p
          data-reveal
          className="mt-10 flex justify-center text-sm text-muted sm:justify-start"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-9 items-center gap-1.5 text-accent transition-colors duration-200 hover:text-accent-strong"
          >
            Ver todos os repositórios no GitHub
            <span className="sr-only"> de Flávio Garcia (abre em nova aba)</span>
            <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </p>
      </div>
    </section>
  );
}