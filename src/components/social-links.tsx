import { GitHubIcon, LinkedInIcon } from "./icons";
import { profile } from "@/lib/data";

const ITEMS = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
] as const;

export function SocialLinks({
  variant = "icons",
  className = "",
}: {
  variant?: "icons" | "labelled";
  className?: string;
}) {
  if (variant === "labelled") {
    return (
      <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
        {ITEMS.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2.5 rounded-full border border-line bg-surface/60 px-4 text-sm text-muted-strong transition-colors duration-200 hover:border-accent/60 hover:text-fg"
            >
              <Icon className="h-4 w-4 text-accent" />
              {label}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {ITEMS.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} de Flávio Garcia (abre em nova aba)`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}