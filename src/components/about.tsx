import { about, profile } from "@/lib/data";

export function About() {
  return (
    <section id="sobre" className="rule-top">
      <div className="container grid gap-10 py-[var(--section-y)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="section-label">Sobre</p>
          <h2 className="section-title measure">
            Formação técnica e prática, lado a lado.
          </h2>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            <div>
              <dt className="text-[0.8125rem] text-ink-3">Cargo</dt>
              <dd className="mt-1 text-[0.9375rem] text-ink">{profile.role}</dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-ink-3">Formação</dt>
              <dd className="mt-1 text-[0.9375rem] text-ink">
                Técnico Médio em Informática
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-ink-3">Em formação</dt>
              <dd className="mt-1 text-[0.9375rem] text-ink">
                42 Luanda, desde maio de 2025
              </dd>
            </div>
            <div>
              <dt className="text-[0.8125rem] text-ink-3">Onde estou</dt>
              <dd className="mt-1 text-[0.9375rem] text-ink">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}