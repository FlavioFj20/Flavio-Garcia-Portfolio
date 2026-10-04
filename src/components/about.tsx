import { about, profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

const facts = [
  { label: "Cargo", value: profile.role },
  { label: "Formação", value: "Técnico Médio em Informática" },
  { label: "Em formação", value: "42 Luanda, desde maio de 2025" },
  { label: "Onde estou", value: "Luanda, Angola" },
] as const;

/* Section 2. Everything here enters from the left; Services answers from the
   right. The rhythm alternates down the page so the effect reads as a decision
   rather than a default.

   The copy answers "what can this person do" before "where did they learn it" —
   the last paragraph is the one line of personality the page allows itself. */
export function About() {
  return (
    <section id="sobre" className="rule-top">
      <div className="container grid gap-10 py-[var(--section-y)] lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <RevealText as="p" className="section-label" text="Sobre" side="left" />
          <RevealText
            as="h2"
            className="section-title measure"
            text="Construo a partir dos fundamentos."
            side="left"
            delay={70}
          />
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <div className="measure space-y-5 text-[1.0625rem] leading-relaxed text-ink-2">
            {about.map((paragraph, index) => (
              <RevealText
                key={paragraph.slice(0, 24)}
                as="p"
                text={paragraph}
                side="left"
                delay={index * 90}
              />
            ))}
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-5 border-t border-rule pt-6 sm:grid-cols-2">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} from="left" delay={index * 70}>
                <dt className="text-[0.8125rem] text-ink-3">{fact.label}</dt>
                <dd className="mt-1 text-[0.9375rem] text-ink">{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}