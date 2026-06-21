import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="border-rule/70 bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:gap-6 sm:px-8"
      >
        <Link
          href="/"
          className="text-ink hover:text-ink/80 mr-auto shrink-0 font-medium tracking-tight"
        >
          Kayla Siwi
        </Link>
        <ul className="no-scrollbar flex min-w-0 items-center gap-4 overflow-x-auto text-[13px] whitespace-nowrap sm:gap-7 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink-soft hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
