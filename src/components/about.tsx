import { facts } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="sobre" className="border-t border-line py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sobre"
          title="Aprender a construir software com base em problemas reais."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            data-reveal
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            className="flex flex-col gap-5 lg:col-span-7"
          >
            <p className="text-base leading-relaxed text-muted-strong">
              Sou finalista da{" "}
              <strong className="font-medium text-fg">42 Luanda</strong>, uma
              escola internacional de programação baseada em aprendizagem prática
              e peer-to-peer. A formação trabalha primeiro o problema e só depois
              o código, sem instruções passo a passo e com avaliação por pares.
            </p>

            <p className="text-base leading-relaxed text-muted-strong">
              Ao longo do percurso, desenvolvi projetos de software com foco em
              resolução de problemas, linguagens de baixo nível, algoritmos,
              estruturas de dados, redes e desenvolvimento de sistemas.
            </p>

            <p className="text-base leading-relaxed text-muted-strong">
              Fora da academia, desenvolvi projetos pessoais de software com foco
              em <strong className="font-medium text-fg">backend</strong> e{" "}
              <strong className="font-medium text-fg">aplicações web</strong> —
              interfaces web e aplicações Node.js com persistência local.
            </p>

            <p className="text-base leading-relaxed text-muted">
              Procuro oportunidades para transformar conhecimento técnico em
              soluções reais.
            </p>
          </div>

          <dl
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            className="lg:col-span-5 lg:pt-1"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t border-line py-4 first:border-t-0 first:pt-0"
              >
                <dt className="font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[0.975rem] leading-snug text-fg">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}