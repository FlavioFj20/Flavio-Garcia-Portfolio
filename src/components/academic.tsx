import { academicTopics } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Academic() {
  return (
    <section
      id="academia"
      className="border-t border-line bg-bg-soft py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Formação"
              title="Academic & 42 Luanda"
              description="A 42 Luanda segue um modelo de aprendizagem prática e peer-to-peer: projetos individuais e em grupo, sem instruções passo a passo, com avaliação por pares."
            />
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="lg:col-span-7"
          >
            <h3 className="font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              Áreas de formação
            </h3>

            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {academicTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-3 border-b border-line pb-3 text-[0.95rem] text-muted-strong"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {topic}
                </li>
              ))}
            </ul>

            <p className="mt-8 rounded-lg border border-line bg-surface/50 p-4 text-sm leading-relaxed text-muted">
              Os projetos desenvolvidos no contexto da 42 não são apresentados
              aqui por conterem material de avaliação com restrição de
              divulgação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}