import { complementary, education } from "@/lib/data";

/* Order is deliberate: Técnico Médio first, 42 within it. The complementary
   study sits underneath as a subordinate block rather than becoming its own
   section, which keeps the page short. */
export function Education() {
  return (
    <section id="formacao" className="rule-top bg-paper-raised">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Formação</p>
            <h2 className="section-title measure">
              Onde aprendi a construir software.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol>
              {education.map((entry) => (
                <li
                  key={entry.org}
                  className="grid gap-x-8 gap-y-2 border-t border-rule py-6 sm:grid-cols-[12rem_1fr]"
                >
                  <div>
                    <p className="tabular text-[0.8125rem] text-ink-3">
                      {entry.period}
                    </p>
                    <h3 className="mt-1 text-[1.0625rem] font-medium text-ink">
                      {entry.course}
                    </h3>
                    <p className="mt-0.5 text-[0.9375rem] text-accent">
                      {entry.org}
                    </p>
                  </div>
                  <p className="measure self-start text-[0.9375rem] leading-relaxed text-ink-2">
                    {entry.body}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-ink pt-6">
              <h3 className="text-[0.9375rem] font-medium text-ink">
                Formação complementar
              </h3>
              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
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