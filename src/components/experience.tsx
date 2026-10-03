import { experience } from "@/lib/data";

/* One internship, so it is given the weight of a single considered entry
   rather than padded out into a lonely card. Presented as a left-hand index
   column and a right-hand body, the way a printed reference lists a role. */
export function Experience() {
  const [role] = experience;
  if (!role) return null;

  return (
    <section id="experiencia" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Experiência</p>
            <h2 className="section-title measure">
              Trabalho prático com sistemas reais.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <article className="plate p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[1.375rem] font-medium text-ink">
                  {role.org}
                </h3>
                <p className="text-[0.9375rem] text-accent">{role.role}</p>
              </div>

              <div className="measure mt-5 space-y-4 text-[1.0625rem] leading-relaxed text-ink-2">
                {role.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>

              <ul className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-rule pt-5">
                {role.stack.map((tool) => (
                  <li key={tool} className="text-[0.9375rem] text-ink">
                    {tool}
                  </li>
                ))}
              </ul>

              {role.note ? (
                <p className="mt-7 flex items-baseline gap-3 border-t border-rule pt-5">
                  <span className="text-[0.8125rem] text-ink-3">
                    {role.note.label}
                  </span>
                  <span className="tabular text-[1.375rem] font-medium text-ink">
                    {role.note.value}
                  </span>
                </p>
              ) : null}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}