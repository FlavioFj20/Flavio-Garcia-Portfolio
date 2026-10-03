"use client";

import { useEffect, useState } from "react";
import { navigation, profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

/* The mobile disclosure and the section highlight are the only JavaScript on
   the page. The bar is solid paper with a hairline, so there is no scroll
   state to track and no backdrop blur. */
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
      <div className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#topo"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-11 items-center font-display text-[1.0625rem] font-medium tracking-tight text-ink"
        >
          {profile.name}
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className="nav-link px-1 text-[0.9375rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="cta hidden sm:inline-flex"
          >
            Fale comigo
            <span className="sr-only"> no WhatsApp (abre em nova aba)</span>
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm text-ink transition-colors duration-150 hover:bg-surface-2 lg:hidden"
          >
            {open ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="mobile-menu border-t border-rule bg-paper lg:hidden"
        >
          <nav aria-label="Navegação principal (mobile)">
            <ul className="container flex flex-col py-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-rule text-[1.0625rem] text-ink transition-colors duration-150 hover:text-accent"
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
                  className="cta w-full"
                >
                  Fale comigo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
