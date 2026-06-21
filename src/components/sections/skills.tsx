import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const groups = [
  { name: "Languages", items: ["TypeScript", "Python", "SQL"] },
  {
    name: "Backend",
    items: ["NestJS", "Fastify", "FastAPI", "Node.js", "MySQL", "PostgreSQL", "Prisma", "Redis"],
  },
  { name: "Frontend", items: ["Next.js", "React", "Tailwind", "Ant Design"] },
  { name: "Async", items: ["BullMQ", "WebSockets", "background workers"] },
  {
    name: "AI / LLM",
    items: ["Anthropic (Claude)", "OpenAI", "Google Gemini", "tool-calling", "MCP"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "GitHub Actions", "nginx", "Cloudflare", "Vercel", "AWS S3", "DigitalOcean"],
  },
] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Stack" />
        <Reveal>
          <dl className="grid gap-0">
            {groups.map((group, i) => (
              <div
                key={group.name}
                className={
                  i === 0
                    ? "grid grid-cols-1 gap-3 py-5 sm:grid-cols-[200px_1fr] sm:gap-12 sm:py-6"
                    : "border-rule grid grid-cols-1 gap-3 border-t py-5 sm:grid-cols-[200px_1fr] sm:gap-12 sm:py-6"
                }
              >
                <dt className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">
                  {group.name}
                </dt>
                <dd className="text-ink text-base sm:text-lg">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
