import { Fragment, type CSSProperties } from "react";
import { stagger, wordOffsets, type Side } from "@/lib/motion";

/* Renders a string as individual words, each in its own inline-block span that
   converges on its resting position when it scrolls into view (see
   `[data-reveal]` in globals.css). Server component: the trigger is a single
   observer elsewhere, so this costs no client JS of its own.

   `side` is the design decision for the block the text belongs to: every section
   commits to one side, so the page reads as a planned sequence rather than
   random motion. The hero uses "spread" — all four corners at once — because it
   is the one place where the effect can be the whole point.

   `\n` in the text becomes a line break, so an <h1> can keep its two lines while
   still animating word by word. */
export function RevealText({
  text,
  as: Tag = "h2",
  className,
  side = "left",
  delay = 0,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  className?: string;
  side?: Side;
  delay?: number;
}) {
  const lines = text.split("\n");
  const total = lines.reduce(
    (count, line) => count + line.split(" ").filter(Boolean).length,
    0,
  );
  let index = 0;

  return (
    <Tag className={className}>
      {lines.map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {lineIndex > 0 ? <br /> : null}
          {line
            .split(" ")
            .filter(Boolean)
            .map((word) => {
              const position = index++;
              const { rx, ry } = wordOffsets(position, total, side);
              const style = {
                "--i": position,
                "--rx": `${rx}em`,
                "--ry": `${ry}em`,
                "--rd": `${delay + stagger(position, total)}ms`,
              } as CSSProperties;

              return (
                <Fragment key={`${word}-${position}`}>
                  <span className="reveal-word" data-reveal="" style={style}>
                    {word}
                  </span>{" "}
                </Fragment>
              );
            })}
        </Fragment>
      ))}
    </Tag>
  );
}