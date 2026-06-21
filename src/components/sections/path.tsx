import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const entries = [
  {
    id: "purwadhika",
    dates: "2024",
    institution: "Purwadhika School",
    role: "Full-Stack Bootcamp",
    note: "Certified",
  },
  {
    id: "monash-college",
    dates: "2025 – 2026",
    institution: "Monash College",
    role: "Diploma · CS",
    note: "Top of cohort · Academic Merit Award",
  },
  {
    id: "coldwell-banker",
    dates: "Jan 2026 – Jul 2026",
    institution: "Coldwell Banker Indonesia",
    role: "Software Engineer Intern",
    note: null,
  },
  {
    id: "monash-university",
    dates: "Starting Jul 2026",
    institution: "Monash University Malaysia",
    role: "Bachelor of Computer Science",
    note: null,
  },
] as const;

export function PathSection() {
  return (
    <section id="path" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Path" />
        <ol className="space-y-8 sm:space-y-10">
          {entries.map((entry, i) => (
            <li key={entry.id}>
              <Reveal
                delay={i * 60}
                className="grid grid-cols-1 gap-2 sm:grid-cols-[200px_1fr] sm:gap-12"
              >
                <p className="text-ink-faint pt-1 font-mono text-[11px] tracking-[0.18em] uppercase">
                  {entry.dates}
                </p>
                <div>
                  <h3 className="font-display text-ink text-xl tracking-tight sm:text-2xl">
                    {entry.institution}
                  </h3>
                  <p className="text-ink-soft mt-1">{entry.role}</p>
                  {entry.note ? (
                    <p className="text-accent mt-2 font-mono text-[11px] tracking-[0.18em] uppercase">
                      {entry.note}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
