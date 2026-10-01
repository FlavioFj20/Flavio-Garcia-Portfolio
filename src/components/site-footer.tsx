import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-medium text-fg">{profile.name}</p>
          <p className="text-sm text-muted">{profile.role}</p>
        </div>

        <ul className="flex items-center gap-2">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm text-muted transition-colors duration-200 hover:border-accent/60 hover:text-fg"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
          <p className="font-mono">
            Construído com Next.js, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}