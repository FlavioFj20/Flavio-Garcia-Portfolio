import { experience } from "@/lib/data";

/* One internship, given the weight of a single considered entry. The two
   deliverables are separated so it reads as real work, not a padded card. */
export function Experience() {
  const [role] = experience;
  if (!role) return null;

  return (
    <section id="experiencia" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="section-label">Experiência</p>
            <h2 className="section-title measure">
              Trabalho prático com software real.
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

              <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2">
                {role.intro}
              </p>

              <div className="mt-8 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
                {role.deliverables.map((deliverable) => (
                  <div key={deliverable.title} className="deliverable">
                    <h4 className="text-[1rem] font-medium text-ink">
                      {deliverable.title}
                    </h4>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {deliverable.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-rule pt-6">
                <h4 className="text-[0.8125rem] text-ink-3">
                  O que fiz
                </h4>
                <ul className="mt-3 grid gap-x-8 sm:grid-cols-2">
                  {role.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="border-b border-rule py-2 text-[0.9375rem] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-rule pt-6">
                {role.stack.map((tool) => (
                  <span key={tool} className="skill-tag">
                    {tool}
                  </span>
                ))}
              </div>

              {role.note ? (
                <p className="mt-8 flex items-baseline gap-3 border-t border-rule pt-6">
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
