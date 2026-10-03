"use client";

import { MoonIcon, SunIcon } from "./icons";

/* No state and no effect: the resolved theme already lives on
   <html data-theme>, so the button just flips it and CSS decides which icon
   shows. This avoids a hydration mismatch and a setState-in-effect. */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage disabled — the toggle still works for the session */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className="inline-flex size-11 items-center justify-center rounded-sm text-ink-2 transition-colors duration-150 hover:bg-surface-2 hover:text-ink"
    >
      <MoonIcon className="theme-icon theme-icon-moon size-5" />
      <SunIcon className="theme-icon theme-icon-sun size-5" />
    </button>
  );
}
