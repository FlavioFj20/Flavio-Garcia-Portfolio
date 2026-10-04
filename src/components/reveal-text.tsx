import { Fragment, type CSSProperties } from "react";

/* Splits a short string into words, each in its own inline-block span, so the
   title can assemble as the page is scrolled (see `.reveal-word` in
   globals.css). Server-rendered: no client JS. The words are laid out exactly
   like the original text — inline-block boxes separated by real spaces — so
   line wrapping is unchanged.

   Each word starts pushed out towards a corner (`--rx`/`--ry`, derived from its
   position in the line: left half swings in from the left, right half from the
   right; even indices from above, odd from below) and converges to its resting
   spot as the section scrolls into view. Without scroll-driven animation
   support, or with reduced motion, the words render as plain text. */
export function RevealText({
  text,
  as: Tag = "h2",
  className,
}: {
  text: string;
  as?: "h2" | "h3" | "p";
  className?: string;
}) {
  const words = text.split(" ");
  const count = words.length;
  const center = (count - 1) / 2;

  return (
    <Tag className={className}>
      {words.map((word, index) => {
        const edge = center === 0 ? 0 : Math.abs(index - center) / center;
        const leftSide = index < count / 2;
        const rx = (leftSide ? -1 : 1) * (0.25 + 0.35 * edge);
        const ry = (index % 2 === 0 ? -1 : 1) * (0.4 + 0.5 * edge);
        const style = {
          "--i": index,
          "--rx": `${rx.toFixed(2)}em`,
          "--ry": `${ry.toFixed(2)}em`,
        } as CSSProperties;

        return (
          <Fragment key={`${word}-${index}`}>
            <span className="reveal-word" style={style}>
              {word}
            </span>
            {index < count - 1 ? " " : null}
          </Fragment>
        );
      })}
    </Tag>
  );
}
