"use client";

import { useEffect } from "react";

/* The only client-side piece of the assembly effect, and deliberately dumb: it
   watches every `[data-reveal]` element and adds `is-in` the first time that
   element is genuinely on screen. The animation itself is CSS and plays on its
   own clock, so scrolling faster or slower changes nothing about how it looks —
   scroll only decides *when* it starts.

   Each element is unobserved after it fires, so the text settles and stays
   perfectly still, and a reader who scrolls back and forth never re-triggers
   anything.

   `motion-armed` on <html> is what hides anything, and it is set here rather
   than by an inline script: until this effect runs, nothing is hidden, so there
   is no window where text is painted, then covered, then animated in. */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (nodes.length === 0) return;

    const root = document.documentElement;
    root.classList.add("motion-armed");

    const pending = new Set(nodes);
    let observer: IntersectionObserver | undefined;

    const show = (node: Element) => {
      node.classList.add("is-in");
      pending.delete(node as HTMLElement);
      observer?.unobserve(node);
    };

    if (typeof IntersectionObserver === "undefined") {
      for (const node of nodes) show(node);
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) show(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
      );

      for (const node of nodes) observer.observe(node);
    }

    /* An anchor link, a restored scroll position or find-in-page can move the
       viewport past a section without it ever intersecting — those words would
       stay invisible for good. This sweep reveals whatever the reader has
       already scrolled past, and retires itself once nothing is pending. */
    const sweep = window.setInterval(() => {
      if (pending.size === 0) {
        window.clearInterval(sweep);
        return;
      }

      const line = window.innerHeight * 0.92;
      for (const node of Array.from(pending)) {
        if (node.getBoundingClientRect().top <= line) show(node);
      }
    }, 250);

    return () => {
      observer?.disconnect();
      window.clearInterval(sweep);
      root.classList.remove("motion-armed");
    };
  }, []);

  return null;
}