import { Fragment, type CSSProperties } from "react";

/* Splits a short string into words, each in its own inline-block span, so the
   title can assemble as the page is scrolled (see `.reveal-word` in
   globals.css). Server-rendered: no client JS. The words are laid out exactly
   like the original text — inline-block boxes separated by real spaces — so
   line wrapping is unchanged. Without scroll-driven animation support, or with
   reduced motion, the words render as plain text. */
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

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className="reveal-word" style={{ "--i": index } as CSSProperties}>
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
