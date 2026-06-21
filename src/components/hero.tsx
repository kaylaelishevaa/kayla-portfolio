import { existsSync } from "node:fs";
import { join } from "node:path";
import { HeroPhoto } from "@/components/hero-photo";
import { Reveal } from "@/components/reveal";
import { ArrowIcon } from "@/components/arrow-icon";

const avatarPath = join(process.cwd(), "public", "avatar.jpg");
const hasAvatar = existsSync(avatarPath);

export function Hero() {
  return (
    <section className="border-rule border-b">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="font-display text-display text-ink tracking-tight">
              Kayla Elisheva Siwi
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-ink-soft mt-4 text-xl tracking-tight sm:text-2xl">
              CS student building AI in production
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="text-ink-soft mt-5 font-mono text-[12px] tracking-wide">
              Software Engineer Intern @ Coldwell Banker Indonesia
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 sm:gap-x-10">
              <HeroLink href="/#projects">See projects</HeroLink>
              <HeroLink href="/#contact">Get in touch</HeroLink>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <HeroPhoto hasAvatar={hasAvatar} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group text-ink decoration-ink/30 hover:decoration-ink inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
    >
      {children}
      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
