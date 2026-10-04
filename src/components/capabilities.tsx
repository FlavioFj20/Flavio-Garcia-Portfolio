import { backend, stack, stackIntro, studying } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* Capabilities, organised by layer. Three movements, in this order:

   1. Backend first — it is where the work actually is, so it gets the opening
      position and pairs each capability with what it means in practice.
   2. The stack, grouped the way the work is layered: language, server, browser,
      data, machine, network.
   3. What I am still learning, kept visibly apart. A course is contact, not
      experience, and mixing the two would make the first two parts less
      trustworthy.

   Answers from the left, alternating back after Services' right. */
export function Capabilities() {
  return (
    <section id="capacidades" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text={stackIntro.eyebrow}
              side="left"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text={stackIntro.title}
              side="left"
              delay={70}
            />
          </div>
          <RevealText
            as="p"
            className="measure self-end text-[1.0625rem] leading-relaxed text-ink-2 lg:col-span-7 lg:col-start-6"
            text={stackIntro.lead}
            side="left"
            delay={140}
          />
        </div>

        {/* Backend: the current focus, stated as capability rather than as a
            list of framework names. */}
        <div className="mt-14 border-t border-ink pt-8">
          <RevealText
            as="h3"
            className="text-[0.8125rem] font-medium tracking-[0.08em] text-accent"
            text="Backend — experiência prática"
            side="left"
            delay={180}
          />

          <dl className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {backend.map((entry, index) => (
              <Reveal
                key={entry.capability}
                from="left"
                distance="1.75rem"
                delay={240 + index * 55}
              >
                <dt className="text-[1rem] font-medium text-ink">
                  {entry.capability}
                </dt>
                <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">
                  {entry.detail}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* The stack, by layer. A hairline grid rather than cards: the page has
            one repeated object already and this section does not need a second. */}
        <div className="mt-16 grid gap-x-16 gap-y-0 lg:grid-cols-2">
          {stack.map((group, groupIndex) => (
            <article
              key={group.title}
              className="border-t border-rule py-6 sm:py-7"
            >
              <RevealText
                as="h3"
                className="text-[1.125rem] font-medium text-ink"
                text={group.title}
                side="left"
                delay={groupIndex * 60}
              />
              <RevealText
                as="p"
                className="mt-1.5 max-w-md text-[0.9375rem] leading-relaxed text-ink-2"
                text={group.note}
                side="left"
                delay={groupIndex * 60 + 70}
              />
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
                {group.items.map((item, itemIndex) => (
                  <Reveal
                    key={item}
                    as="li"
                    className="skill-tag"
                    from="left"
                    distance="1.25rem"
                    delay={groupIndex * 60 + 140 + itemIndex * 35}
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Kept apart on purpose: this is contact with a tool, not evidence of
            delivering with it. */}
        <div className="mt-10 border-t border-rule pt-6">
          <RevealText
            as="h3"
            className="text-[0.9375rem] font-medium text-ink"
            text="Em estudo"
            side="left"
            delay={140}
          />
          <RevealText
            as="p"
            className="measure mt-1.5 text-[0.875rem] leading-relaxed text-ink-3"
            text="Ferramentas que estou a explorar em projetos e formação. Contacto com elas, ainda não prática profissional."
            side="left"
            delay={200}
          />
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
            {studying.map((item, index) => (
              <Reveal
                key={item}
                as="li"
                className="skill-tag"
                from="left"
                distance="1.25rem"
                delay={260 + index * 40}
              >
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}