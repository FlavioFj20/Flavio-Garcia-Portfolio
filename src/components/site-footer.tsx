import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: profile.whatsapp, label: "WhatsApp", Icon: null },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-band-rule bg-band text-band-ink/70">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.9375rem] font-medium text-band-ink">
            {profile.name}
          </p>
          <p className="mt-0.5 text-[0.875rem]">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-[0.875rem] transition-colors duration-150 hover:text-band-ink"
              >
                {Icon ? <Icon className="size-4" /> : null}
                {label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container border-t border-band-rule py-5">
        <p className="text-[0.8125rem]">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
