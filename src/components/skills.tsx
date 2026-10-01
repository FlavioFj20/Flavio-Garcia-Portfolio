import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section
      id="competencias"
      className="border-t border-line bg-bg-soft py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Competências"
          title="Tecnologias com as quais trabalho."
          description="Os níveis abaixo são qualitativos e refletem o contexto de aprendizagem prática e de projetos pessoais — não anos de experiência."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-reveal
              style={
                { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
              }
              className="flex flex-col rounded-xl border border-line bg-surface/50 p-6 transition-colors duration-300 hover:border-line-strong"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-fg">
                  {group.title}
                </h3>
                <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/8 px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.12em] text-accent uppercase">
                  {group.level}
                </span>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-bg/60 px-2.5 py-1.5 font-mono text-[0.78rem] text-muted-strong transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {group.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}