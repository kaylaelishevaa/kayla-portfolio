import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function AboutSection() {
  return (
    <section id="about" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="About" />
        <Reveal>
          <div className="text-ink-soft max-w-prose space-y-6 text-base leading-relaxed sm:text-lg">
            <p>
              I build AI systems, and I&apos;m still figuring out which part I love most. Right now
              I learn by shipping, taking real problems end to end and seeing what pulls me in.
            </p>
            <p>
              For six months in 2026 I was the sole engineer at Coldwell Banker Indonesia, turning the
              brokerage&apos;s manual WhatsApp workflow into production software, working across
              TypeScript and Python from the database to the box it runs on.
            </p>
            <p>
              I&apos;m now a second-year Computer Science student at Monash University Malaysia, after
              going deep on full-stack fundamentals at Purwadhika. Lately I&apos;ve moved toward
              perception that helps people in physical space: pose-estimation safety at Dormathon, and
              from November a research placement putting posture and expression recognition on a
              Unitree Go2.
            </p>
            <p>
              Away from the keyboard, you&apos;ll usually find me modelling, dancing, or MC-ing a
              live crowd from the stage.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
