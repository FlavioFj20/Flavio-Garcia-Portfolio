import { availability, cta, profile, services, servicesIntro } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* The commercial answer, placed early — right after the introduction, because
   that is the question a visitor actually arrived with.

   Deliberately not a card grid and not a technology list. Each service is an
   editorial row: index, what it is in one line, and what concretely gets
   delivered. The formal language is the page's own — a hairline and an index in
   the margin — so a sales section does not arrive wearing a different design.

   The availability block is stated as plainly as the services, including the
   limit: no promise is made beyond the scope above it. Answers from the right,
   against About's left. */
export function Services() {
  return (
    <section id="servicos" className="rule-top bg-surface">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="p"
              className="section-label"
              text={servicesIntro.eyebrow}
              side="right"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text={servicesIntro.title}
              side="right"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
              text={servicesIntro.lead}
              side="right"
              delay={140}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-x-6 gap-y-2 border-t border-ink py-6 sm:grid-cols-[2.5rem_1fr]"
              >
                <Reveal
                  as="p"
                  className="row-index pt-1"
                  from="right"
                  distance="1rem"
                  delay={index * 50}
                >
                  {String(index + 1).padStart(2, "0")}
                </Reveal>

                <div>
                  <RevealText
                    as="h3"
                    className="text-[1.125rem] font-medium text-ink"
                    text={service.title}
                    side="right"
                    delay={index * 50 + 40}
                  />
                  <RevealText
                    as="p"
                    className="mt-1.5 max-w-md text-[0.9375rem] leading-relaxed text-ink-2"
                    text={service.body}
                    side="right"
                    delay={index * 50 + 100}
                  />
                  <ul className="mt-3.5 flex flex-wrap gap-x-3 gap-y-1.5">
                    {service.items.map((item, itemIndex) => (
                      <Reveal
                        key={item}
                        as="li"
                        className="skill-tag"
                        from="right"
                        distance="1.25rem"
                        delay={index * 50 + 120 + itemIndex * 30}
                      >
                        {item}
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Availability: the commercial promise, and its limit, side by side. */}
        <div className="mt-16 grid gap-10 border-t border-ink pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealText
              as="h3"
              className="text-[1.25rem] font-medium text-ink"
              text={availability.title}
              side="right"
            />
            <RevealText
              as="p"
              className="measure mt-3 text-[0.9375rem] leading-relaxed text-ink-2"
              text={availability.lead}
              side="right"
              delay={70}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {availability.items.map((item, index) => (
                <Reveal
                  key={item}
                  as="li"
                  className="flex items-baseline gap-2.5 border-b border-rule py-2.5 text-[0.9375rem] text-ink"
                  from="right"
                  distance="1.5rem"
                  delay={140 + index * 40}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 translate-y-[-0.15em] rotate-45 border border-accent"
                  />
                  {item}
                </Reveal>
              ))}
            </ul>

            <Reveal className="mt-6" from="right" delay={420}>
              <p className="scope-note measure">{availability.scope}</p>
            </Reveal>
          </div>
        </div>

        {/* First of the two mid-page entry points. Same copy as the closing
            contact band, so the offer reads identically wherever it is met. */}
        <Reveal
          className="mt-14 flex flex-col gap-6 border-t border-rule pt-8 sm:flex-row sm:items-end sm:justify-between"
          from="right"
          distance="2rem"
          delay={60}
        >
          <div className="measure">
            <RevealText
              as="p"
              className="text-[1.375rem] leading-tight font-medium text-ink"
              text={cta.title}
              side="right"
            />
            <RevealText
              as="p"
              className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2"
              text={cta.body}
              side="right"
              delay={70}
            />
          </div>

          <Reveal from="right" distance="1.5rem" delay={140}>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta shrink-0"
            >
              {cta.action}
              <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
            </a>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}