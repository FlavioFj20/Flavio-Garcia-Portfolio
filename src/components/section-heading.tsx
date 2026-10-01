import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      data-reveal
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      <span className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent">
        <span
          aria-hidden="true"
          className="h-px w-6 bg-accent/60"
        />
        {eyebrow}
      </span>

      <h2 className="max-w-2xl text-2xl leading-tight font-semibold text-fg sm:text-3xl lg:text-[2.1rem]">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-[0.975rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}