export type ProjectSlug =
  | "real-estate-ai"
  | "mcp-connector-factory"
  | "latchkey"
  | "pulse"
  | "recapai";

export type Project = {
  slug: ProjectSlug;
  index: string;
  title: string;
  tagline: string;
  status: string;
  stack: readonly string[];
  href: string;
  repo?: string;
  privateRepo: boolean;
  related?: { slug: ProjectSlug; label: string; note: string };
};

export const projects: readonly Project[] = [
  {
    slug: "real-estate-ai",
    index: "01",
    title: "Real Estate AI Platform",
    tagline: "A production system that turns WhatsApp into a sales pipeline.",
    status: "Production · flagship",
    stack: ["TypeScript", "NestJS", "Fastify", "MySQL", "Prisma", "BullMQ", "OpenAI", "Structured output"],
    href: "/projects/real-estate-ai",
    repo: "https://github.com/kaylaelishevaa/real-estate-ai-platform",
    privateRepo: false,
  },
  {
    slug: "pulse",
    index: "02",
    title: "Pulse",
    tagline:
      "Turns live WhatsApp lines into a real-time oversight feed — every message captured, triaged, and pushed in seconds.",
    status: "Production · case study",
    stack: [
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "WebSocket",
      "Next.js PWA",
      "FCM push",
      "Docker · nginx",
      "Vitest · Testcontainers",
    ],
    href: "/projects/pulse",
    repo: "https://github.com/kaylaelishevaa/pulse-case-study",
    privateRepo: false,
    related: {
      slug: "latchkey",
      label: "Latchkey",
      note: "the magic-link handoff bug here, isolated into a runnable demo",
    },
  },
  {
    slug: "mcp-connector-factory",
    index: "03",
    title: "MCP Connector Factory",
    tagline:
      "One hardened MCP-server skeleton, forked per backend — two Claude custom connectors from the same codebase, with deliberately different security postures.",
    status: "Open source",
    stack: [
      "Python 3.11",
      "FastAPI",
      "JSON-RPC 2.0",
      "OAuth 2.0 facade",
      "Docker",
      "Cloudflare Tunnel",
      "348 tests",
    ],
    href: "/projects/mcp-connector-factory",
    repo: "https://github.com/kaylaelishevaa/mcp-connector-factory",
    privateRepo: false,
  },
  {
    slug: "latchkey",
    index: "04",
    title: "Latchkey",
    tagline:
      "Passwordless login that survives the in-app-browser → system-browser cookie-jar handoff.",
    status: "Open source · demo",
    stack: [
      "TypeScript",
      "Node",
      "Fastify",
      "Magic-link auth",
      "SHA-256 tokens",
      "CI · fully tested",
    ],
    href: "/projects/latchkey",
    repo: "https://github.com/kaylaelishevaa/latchkey",
    privateRepo: false,
    related: { slug: "pulse", label: "Pulse", note: "the production system it was extracted from" },
  },
  {
    slug: "recapai",
    index: "05",
    title: "RecapAI",
    tagline:
      "An AI meeting-notes platform that turns a recording or transcript into structured notes, and runs end-to-end with zero API keys.",
    status: "Personal · live demo",
    stack: [
      "React",
      "Vite",
      "Tailwind",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "SQLAlchemy",
      "OpenAI",
      "Docker",
    ],
    href: "/projects/recapai",
    repo: "https://github.com/kaylaelishevaa/recap-ai",
    privateRepo: false,
  },
] as const;

export function getProject(slug: ProjectSlug): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
