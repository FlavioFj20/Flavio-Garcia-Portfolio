import { navigation, profile } from "@/lib/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/15 bg-ink text-paper/70">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.9375rem] font-medium text-paper">
            {profile.name}
          </p>
          <p className="mt-0.5 text-[0.875rem]">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center text-[0.875rem] transition-colors duration-150 hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container border-t border-paper/15 py-5">
        <p className="text-[0.8125rem]">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}