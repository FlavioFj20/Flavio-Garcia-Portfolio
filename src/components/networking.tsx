import { networking } from "@/lib/data";
import { Reveal } from "./reveal";
import { RevealText } from "./reveal-text";

/* Networking gets its own weighted section: foundations and practice, framed
   as something that supports development — never as a network-engineer claim.
   The small diagram is a discreet technical detail, not decoration for its own
   sake. Returns to the left, where About started. */
export function Networking() {
  return (
    <section id="redes" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealText
              as="p"
              className="section-label"
              text={networking.eyebrow}
              side="left"
            />
            <RevealText
              as="h2"
              className="section-title measure"
              text={networking.title}
              side="left"
              delay={70}
            />
            <RevealText
              as="p"
              className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2"
              text={networking.lead}
              side="left"
              delay={140}
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {networking.groups.map((group, index) => (
                <Reveal key={group.title} from="left" delay={index * 80}>
                  <h3 className="text-[0.8125rem] font-medium tracking-[0.04em] text-ink-3">
                    {group.title}
                  </h3>
                  <ul className="mt-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-rule py-2 text-[0.9375rem] text-ink last:border-b-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}