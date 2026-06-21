import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "#content";
import { ArrowIcon } from "@/components/arrow-icon";
import { ArchitectureDiagram } from "@/components/diagrams/architecture-diagram";
import { LatchkeyDiagram } from "@/components/diagrams/latchkey-diagram";
import { McpDiagram } from "@/components/diagrams/mcp-diagram";
import { PulseDiagram } from "@/components/diagrams/pulse-diagram";
import { RecapDiagram } from "@/components/diagrams/recap-diagram";
import { MDXContent } from "@/components/mdx-content";
import { mdxComponents } from "@/components/mdx-components";
import { Reveal } from "@/components/reveal";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.filter((study) => !study.draft).map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: study.permalink },
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article",
      url: study.permalink,
      publishedTime: study.publishedAt,
      images: [{ url: "/og", width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.summary,
      images: ["/og"],
    },
  };
}

function diagramFor(kind?: string) {
  if (kind === "architecture") return <ArchitectureDiagram />;
  if (kind === "mcp") return <McpDiagram />;
  if (kind === "pulse") return <PulseDiagram />;
  if (kind === "latchkey") return <LatchkeyDiagram />;
  if (kind === "recap") return <RecapDiagram />;
  return null;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const diagram = diagramFor(study.diagram);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="text-ink-soft flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
          <Link href="/#projects" className="hover:text-ink transition-colors">
            ← Projects
          </Link>
        </p>
        <h1 className="font-display text-ink mt-8 text-4xl leading-tight tracking-tight sm:text-5xl">
          {study.title}
        </h1>
        <p className="text-ink-soft mt-5 max-w-prose text-lg leading-relaxed">{study.summary}</p>
        <dl className="border-rule mt-10 grid grid-cols-1 gap-5 border-t pt-8 sm:grid-cols-3">
          <Meta label="Role" value={study.role} />
          <Meta label="Timeline" value={study.timeline} />
          <Meta label="Status" value={study.draft ? "Draft" : "Published"} />
        </dl>
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[11px] tracking-wide">
          {study.stack.map((s) => (
            <li key={s} className="border-rule bg-paper text-ink-soft border px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
        {study.repo ? (
          <a
            href={study.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-ink decoration-ink/30 hover:decoration-ink mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
          >
            View on GitHub
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        ) : null}
      </Reveal>

      {diagram ? (
        <Reveal delay={120}>
          <div className="border-rule bg-rule-soft/40 mt-12 overflow-x-auto border p-5 sm:p-7">
            {diagram}
          </div>
        </Reveal>
      ) : null}

      {study.highlights && study.highlights.length > 0 ? (
        <Reveal delay={160}>
          <section className="border-rule mt-12 border-t pt-10">
            <p className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">
              Highlights
            </p>
            <ul className="mt-6 space-y-7">
              {study.highlights.map((h) => {
                const [point, ...rest] = h.split("\n");
                const detail = rest.join(" ").trim();
                return (
                  <li key={point} className="flex gap-4">
                    <span aria-hidden className="bg-ink-faint mt-3 inline-block h-px w-4 shrink-0" />
                    <div className="max-w-prose">
                      <p className="text-ink text-base font-medium leading-snug sm:text-[17px]">
                        {point}
                      </p>
                      {detail ? (
                        <p className="text-ink-soft mt-1.5 text-base leading-relaxed sm:text-[17px]">
                          {detail}
                        </p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
            {study.repo ? (
              <a
                href={study.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-ink-soft hover:text-ink decoration-ink/20 hover:decoration-ink mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-[6px] transition-[color,text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
              >
                Read more on GitHub
                <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            ) : null}
          </section>
        </Reveal>
      ) : null}

      {study.related ? (
        <Reveal delay={200}>
          <section className="border-rule mt-12 border-t pt-10">
            <p className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">
              Related project
            </p>
            <Link href={`/projects/${study.related.slug}`} className="group mt-4 block">
              <span className="font-display text-ink text-xl tracking-tight underline decoration-transparent underline-offset-[6px] transition-[text-decoration-color] duration-200 group-hover:decoration-current sm:text-2xl">
                {study.related.label}
              </span>
              <span className="text-ink-soft mt-1 block max-w-prose leading-relaxed">
                {study.related.note}
              </span>
            </Link>
          </section>
        </Reveal>
      ) : null}

      {!study.bodyDraft ? (
        <Reveal delay={240}>
          <div className="border-rule mt-12 border-t pt-12 text-base sm:text-[17px]">
            <MDXContent code={study.body} components={mdxComponents} />
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={240}>
        <footer className="border-rule mt-16 border-t pt-8 text-sm">
          <Link
            href="/#contact"
            className="group text-ink decoration-ink/30 hover:decoration-ink inline-flex items-center gap-2 font-medium underline decoration-1 underline-offset-[6px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
          >
            Want to talk through this?
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </footer>
      </Reveal>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-ink-faint font-mono text-[11px] tracking-[0.18em] uppercase">{label}</dt>
      <dd className="text-ink mt-1">{value}</dd>
    </div>
  );
}
