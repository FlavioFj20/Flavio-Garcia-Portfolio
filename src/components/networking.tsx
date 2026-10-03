import { networking } from "@/lib/data";

/* Networking gets its own weighted section: foundations and practice, framed
   as something that supports development — never as a network-engineer claim.
   The small diagram is a discreet technical detail, not decoration for its own
   sake. */
export function Networking() {
  return (
    <section id="redes" className="rule-top">
      <div className="container py-[var(--section-y)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label">{networking.eyebrow}</p>
            <h2 className="section-title measure">{networking.title}</h2>
            <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-ink-2">
              {networking.lead}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="reveal grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {networking.groups.map((group) => (
                <div key={group.title}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
