import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-ink font-medium">{children}</strong>
);

export function WorkSection() {
  return (
    <section id="work" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Work" />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h3 className="font-display text-ink text-2xl tracking-tight sm:text-3xl">
              Coldwell Banker Indonesia
            </h3>
            <p className="text-ink-soft mt-2">Software Engineer Intern</p>
            <p className="text-ink-faint mt-3 font-mono text-[11px] tracking-[0.18em] uppercase">
              Feb 2026 – Jul 2026
            </p>
            <p className="text-ink-faint mt-1 font-mono text-[11px] tracking-[0.18em] uppercase">
              Jakarta
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <ul className="text-ink-soft space-y-5 text-base leading-relaxed sm:text-lg">
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Rebuilt the brokerage&apos;s production real-estate platform from a PHP/Laravel
                  monolith to a <Strong>NestJS + MySQL stack</Strong>.
                </span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Built the <Strong>OpenAI-powered listing parser</Strong> — a stateful WhatsApp bot
                  that turns free-form Indonesian broadcasts into validated, structured listings via
                  structured-output extraction, with deterministic validation instead of trusting the raw model.
                </span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Built and fully tested an <Strong>agentic WhatsApp gateway</Strong>{" "}in Python — a
                  tool-calling agent loop with persistent sessions that turns free-form chat into
                  structured actions (logging, confirmations, inter-agent Q&amp;A).
                </span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Built <Strong>Pulse</Strong>, a real-time WhatsApp ingestion and alerting system
                  (Postgres · Redis · WebSocket · PWA · mobile push) that captures every message
                  exactly-once and pushes urgent alerts to mobile in seconds — ~460 tests, deployed
                  on a single VPS.
                </span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Shipped <Strong>two Model Context Protocol servers</Strong>{" "}in FastAPI, exposing
                  the brokerage&apos;s internal CRM and web APIs to AI agents over hardened, token-authed,
                  audited endpoints.
                </span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                <span>
                  Worked across the <Strong>full stack</Strong> — a 45-model polymorphic Prisma
                  schema with JWT + RBAC, async BullMQ pipelines (multi-portal syndication with
                  retry + dead-letter, image enhancement), an admin CMS (Next.js + Ant Design), and
                  DevOps (Docker, DigitalOcean, Cloudflare).
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
