import { complementary, education } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* A compact timeline, now holding only what 42's own section does not: the
   technical course that is the broad base, and the corporate-networks training
   that the networking section leans on. Complementary study follows as a quiet
   editorial list. Right side, alternating back. */
export function Education() {
  return (
    <section id="formacao" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text="Formação"
              side="right"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text="A base técnica por trás disto."
              side="right"
              delay={70}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="timeline">
              {education.map((entry, index) => (
                <Reveal
                  key={entry.org}
                  as="li"
                  className="timeline-item"
                  from="right"
                  delay={index * 90}
                >
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
                </Reveal>
              ))}
            </ol>

            <div className="mt-12 border-t border-ink pt-6">
              <RevealText
                as="h3"
                className="text-[0.9375rem] font-medium text-ink"
                text="Formação complementar"
                side="right"
                delay={200}
              />
              <ul className="mt-4">
                {complementary.map((item, index) => (
                  <Reveal
                    key={item}
                    as="li"
                    className="border-b border-rule py-2.5 text-[0.9375rem] text-ink-2"
                    from="right"
                    distance="1.5rem"
                    delay={260 + index * 40}
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}