/* One place for the timings of the text-assembly effect, so the hero and every
   section below cannot drift apart.

   The scroll position only *triggers* the animation — once a word is in view it
   plays on its own clock. A fast flick and a slow read therefore produce the
   exact same motion, which is what makes the effect readable instead of a
   scrubbed transition that only shows itself while the text sits on an edge. */

export const ASSEMBLE_MS = 780;
export const CASCADE_MS = 70;
export const WAVE_LENGTH = 5;
export const WAVE_MS = 58;

/* Short strings get a clean left-to-right cascade. Anything longer switches to a
   wave that repeats every few words, so a long paragraph still finishes in
   about a second instead of trailing off for four. */
export function stagger(index: number, units: number): number {
  if (units <= 8) return Math.min(index, 7) * CASCADE_MS;
  return (index % WAVE_LENGTH) * WAVE_MS;
}

export type Side = "left" | "right" | "spread";

const X_MIN = 0.25;
const X_MAX = 0.6;
const Y_MIN = 0.4;
const Y_MAX = 0.9;

/* Where each word starts, in em. Words further from the middle of the string
   travel further, which reads as the edges of the block being pulled in last.
   Horizontal travel stays under 0.6em so a word can never reach outside the
   container gutter and add a horizontal scrollbar. */
export function wordOffsets(index: number, units: number, side: Side) {
  const middle = (units - 1) / 2;
  const edge = middle === 0 ? 0 : Math.abs(index - middle) / middle;
  const x = X_MIN + (X_MAX - X_MIN) * edge;
  const y = Y_MIN + (Y_MAX - Y_MIN) * edge;

  if (side === "spread") {
    const quadrant = index % 4;
    return {
      rx: quadrant === 0 || quadrant === 3 ? -x : x,
      ry: quadrant < 2 ? -y : y,
    };
  }

  return {
    rx: (side === "left" ? -1 : 1) * x,
    ry: (index % 2 === 0 ? -1 : 1) * y,
  };
}