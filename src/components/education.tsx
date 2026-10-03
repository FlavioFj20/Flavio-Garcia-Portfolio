import { complementary, education } from "@/lib/data";

/* A compact timeline. Técnico Médio comes first and 42 sits within the same
   sequence, so the two read as complementary steps rather than 42 as the
   headline. Complementary study follows as a quiet editorial list. */
export function Education() {
  return (
    <section id="formacao" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Formação</p>
            <h2 className="section-title measure">
              Duas bases, um mesmo percurso.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="timeline">
              {education.map((entry) => (
                <li key={entry.org} className="timeline-item">
                  <p className="tabular text-[0.8125rem] text-ink-3">
                    {entry.period}
                  </p>
                  <h3 className="mt-1 text-[1.125rem] font-medium text-ink">
                    {entry.course}
                  </h3>
                  <p className="mt-0.5 text-[0.9375rem] text-accent">
                    {entry.org}
                  </p>
                  <p className="measure mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                    {entry.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 border-t border-ink pt-6">
              <h3 className="text-[0.9375rem] font-medium text-ink">
                Formação complementar
              </h3>
              <ul className="mt-4">
                {complementary.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-2.5 text-[0.9375rem] text-ink-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
