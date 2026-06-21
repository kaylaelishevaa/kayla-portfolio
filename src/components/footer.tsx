import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-rule mt-24 border-t sm:mt-32">
      <div className="text-ink-soft mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="text-ink">
            © {year} {site.shortName}
          </span>
        </p>
        <p className="font-mono text-xs tracking-wide">{site.locales.join(" · ")}</p>
      </div>
    </footer>
  );
}
