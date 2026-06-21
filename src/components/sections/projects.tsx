import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { LatchkeyDiagram } from "@/components/diagrams/latchkey-diagram";
import { McpDiagram } from "@/components/diagrams/mcp-diagram";
import { PulseDiagram } from "@/components/diagrams/pulse-diagram";
import { RecapDiagram } from "@/components/diagrams/recap-diagram";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { projects, type Project } from "@/data/projects";

const diagrams: Record<Project["slug"], ReactNode> = {
  "real-estate-ai": <ArchitectureDiagram />,
  "mcp-connector-factory": <McpDiagram />,
  latchkey: <LatchkeyDiagram />,
  pulse: <PulseDiagram />,
  recapai: <RecapDiagram />,
};

export function ProjectsSection() {
  return (
    <section id="projects" className="border-rule border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeader label="Projects" />
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i === 0 ? 0 : 80}>
              <ProjectCard project={project} diagram={diagrams[project.slug]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, diagram }: { project: Project; diagram: ReactNode }) {
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <header className="lg:col-span-5">
        <p className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">
          {project.index} · {project.status}
        </p>
        <h3 className="font-display text-ink mt-3 text-3xl tracking-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="text-ink-soft mt-4 max-w-md text-base leading-relaxed sm:text-lg">
          {project.tagline}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] tracking-wide">
          {project.stack.map((s) => (
            <li key={s} className="border-rule bg-paper text-ink-soft border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href={project.href}
            className="group text-ink decoration-ink/30 hover:decoration-ink inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
          >
            Read case study
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-ink-soft hover:text-ink decoration-ink/20 hover:decoration-ink inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
            >
              View on GitHub
              <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          ) : null}
        </div>
        {project.related ? (
          <p className="text-ink-faint mt-5 font-mono text-[11px] leading-relaxed tracking-wide">
            Related:{" "}
            <Link
              href={`/projects/${project.related.slug}`}
              className="text-ink-soft decoration-ink/20 hover:text-ink hover:decoration-ink underline decoration-1 underline-offset-[4px] transition-[color,text-decoration-color] duration-200"
            >
              {project.related.label}
            </Link>{" "}
            — {project.related.note}
          </p>
        ) : null}
      </header>
      <div className="lg:col-span-7">
        <div className="border-rule bg-rule-soft/40 overflow-x-auto border p-5 sm:p-7">
          {diagram}
        </div>
      </div>
    </article>
  );
}
