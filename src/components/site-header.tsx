"use client";

import { useEffect, useState } from "react";
import { navigation, profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";

/* The only client component on the page. It exists for the mobile disclosure
   and the section highlight; nothing else ships JavaScript.
   Deliberately no scroll listener and no backdrop blur — the bar is solid
   paper with a hairline, so there is no state to track while scrolling. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Close on Escape, and lock background scroll only while the panel is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="container flex h-16 items-center justify-between gap-6">
        <a
          href="#topo"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-11 items-center font-display text-[1.0625rem] font-medium tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`inline-flex min-h-11 items-center text-[0.9375rem] transition-colors duration-150 hover:text-ink ${
                    active === item.href ? "text-accent" : "text-ink-2"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center rounded-sm bg-ink px-4 text-[0.9375rem] font-medium text-paper transition-colors duration-150 hover:bg-ink-2 sm:inline-flex"
          >
            Fale comigo
            <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm text-ink transition-colors duration-150 hover:bg-paper-raised md:hidden"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-rule bg-paper md:hidden"
      >
        <nav aria-label="Navegação principal (mobile)">
          <ul className="container flex flex-col py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-rule text-[1.0625rem] text-ink transition-colors duration-150 last:border-b-0 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-4 font-medium text-paper"
              >
                Fale comigo no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}