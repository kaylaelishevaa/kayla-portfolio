import { Fragment } from "react";

const lanes = [
  {
    label: "Ingest",
    items: ["WhatsApp inbound", "Agent network", "Listing imports"],
  },
  {
    label: "Platform",
    items: ["NestJS API", "BullMQ worker", "Prisma · MySQL"],
  },
  {
    label: "AI",
    items: ["Structured output", "OpenAI API"],
  },
  {
    label: "Out",
    items: ["Portal sync", "Lark CRM bridge", "WhatsApp reply"],
  },
] as const;

export function ArchitectureDiagram() {
  return (
    <figure
      aria-label="Real Estate AI Platform — system architecture: WhatsApp, agents, and listing imports flow into a NestJS platform with a BullMQ worker and MySQL; an OpenAI structured-output extraction layer validated by deterministic code; outputs sync to listing portals, Lark CRM, and back to WhatsApp."
      className="font-mono text-[11px] tracking-wide"
    >
      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-start sm:gap-2">
        {lanes.map((lane, i) => (
          <Fragment key={lane.label}>
            <Lane label={lane.label} items={lane.items} />
            {i < lanes.length - 1 ? <Connector /> : null}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}

function Lane({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="text-ink-faint mb-2 text-[9px] tracking-[0.22em] uppercase">{label}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="border-rule bg-paper text-ink border px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Connector() {
  return (
    <>
      <div className="hidden self-center pt-7 sm:block" aria-hidden>
        <svg
          width="28"
          height="10"
          viewBox="0 0 28 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-faint"
        >
          <path d="M0 5 H24" />
          <path d="m20 1 4 4-4 4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex justify-center sm:hidden" aria-hidden>
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-faint"
        >
          <path d="M5 0 V16" />
          <path d="m1 13 4 4 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}
