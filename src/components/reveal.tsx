import type { CSSProperties, ElementType, ReactNode } from "react";

/* The block-level half of the assembly effect: for elements that should travel
   as one piece rather than word by word — a definition-list row, a card, a row
   of tags. `from` is the section's committed side, `delay` staggers siblings
   within the same block. Same CSS hook as RevealText, so both play identically. */
export function Reveal({
  as: Tag = "div",
  className,
  from = "left",
  distance = "2.75rem",
  delay = 0,
  children,
}: {
  as?: ElementType;
  className?: string;
  from?: "left" | "right";
  distance?: string;
  delay?: number;
  children: ReactNode;
}) {
  const style = {
    "--rx": from === "left" ? `-${distance}` : distance,
    "--ry": "0px",
    "--rd": `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag className={className} data-reveal="" style={style}>
      {children}
    </Tag>
  );
}