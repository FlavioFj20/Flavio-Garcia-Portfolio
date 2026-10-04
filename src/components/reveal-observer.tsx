"use client";

import { useEffect } from "react";

/* The only client-side piece of the text assembly, and deliberately dumb: it
   toggles one class per element according to whether that element is on screen.

   `.is-in` means assembled. The observer adds it on the way down and removes it
   on the way up, so text gathers as it enters and lets go as it leaves, and
   gathers again on the next pass in either direction. The movement itself is CSS
   and runs on its own clock — scroll decides only when it starts, so a flick and
   a crawl produce the same motion.

   Two details that matter:

   - The first screen is assembled synchronously, in the same frame that arms the
     effect, so there is no flash of hidden text before the entrance begins.
   - Entry and exit use different thresholds (15% and 2% visible). A single
     threshold makes text at the boundary flicker between the two states while
     scrolling slowly; the gap makes the switch decisive.

   `motion-armed` on <html> is what hides anything, and it is set here rather than
   by an inline script: with no JavaScript at all, nothing is ever hidden. */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (nodes.length === 0) return;

    const root = document.documentElement;

    const show = (node: Element) => node.classList.add("is-in");
    const hide = (node: Element) => node.classList.remove("is-in");

    for (const node of nodes) {
      if (node.getBoundingClientRect().top <= window.innerHeight * 0.88) {
        show(node);
      }
    }

    root.classList.add("motion-armed");

    if (typeof IntersectionObserver === "undefined") {
      for (const node of nodes) show(node);
      return () => root.classList.remove("motion-armed");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { intersectionRatio: ratio, boundingClientRect } = entry;

          /* A block taller than most of the viewport can never reach 15%
             visibility — judging it by ratio alone would leave it hidden for
             good. Big blocks therefore only have to be on screen at all; the
             ratio thresholds stay for words, where they give the hysteresis that
             stops text flickering while it sits on a boundary. */
          const tall = boundingClientRect.height > window.innerHeight * 0.6;

          if (!entry.isIntersecting || (ratio < 0.02 && !tall)) {
            hide(entry.target);
          } else if (tall || ratio >= 0.15) {
            show(entry.target);
          }
        }
      },
      { threshold: [0, 0.02, 0.15], rootMargin: "0px 0px -8% 0px" },
    );

    for (const node of nodes) observer.observe(node);

    return () => {
      observer.disconnect();
      root.classList.remove("motion-armed");
    };
  }, []);

  return null;
}