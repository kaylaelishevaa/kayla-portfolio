import { ArrowIcon } from "@/components/arrow-icon";
import { EmailRow } from "@/components/email-row";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { site } from "@/lib/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "GitHub", value: "github.com/kaylaelishevaa", href: site.github, external: true },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kayla-elisheva-siwi",
    href: site.linkedin,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Contact" />
        <Reveal>
          <p className="font-display text-ink max-w-3xl text-2xl leading-tight tracking-tight sm:text-3xl">
            Always glad to connect! About AI systems, schema design, or whatever you&apos;re
            building :)
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-12">
            {links.map((link, i) => (
              <li
                key={link.label}
                className={
                  i < 2
                    ? "border-rule border-t sm:border-t"
                    : "border-rule border-t sm:border-t-0 sm:[&:nth-child(3)]:border-t"
                }
              >
                {link.label === "Email" ? (
                  <EmailRow label={link.label} email={site.email} />
                ) : (
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-baseline gap-4 py-5 transition-colors"
                  >
                    <span className="text-ink-faint w-20 shrink-0 font-mono text-[11px] tracking-[0.18em] uppercase">
                      {link.label}
                    </span>
                    <span className="text-ink decoration-ink/20 group-hover:decoration-ink flex-1 truncate underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 group-hover:decoration-2">
                      {link.value}
                    </span>
                    <ArrowIcon className="text-ink-soft group-hover:text-ink transition-all group-hover:translate-x-0.5" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
