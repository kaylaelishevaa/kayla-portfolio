import type { ComponentProps } from "react";
import type { MDXComponents } from "@/components/mdx-content";

function H2(props: ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className="font-display text-ink mt-14 scroll-mt-24 text-2xl tracking-tight first:mt-0 sm:text-3xl"
    />
  );
}

function H3(props: ComponentProps<"h3">) {
  return (
    <h3 {...props} className="text-ink mt-10 scroll-mt-24 text-lg font-medium tracking-tight" />
  );
}

function P(props: ComponentProps<"p">) {
  return <p {...props} className="text-ink-soft mt-5 leading-relaxed" />;
}

function Ul(props: ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className="text-ink-soft mt-5 space-y-2 pl-5 leading-relaxed [list-style:square]"
    />
  );
}

function Ol(props: ComponentProps<"ol">) {
  return (
    <ol {...props} className="text-ink-soft mt-5 list-decimal space-y-2 pl-5 leading-relaxed" />
  );
}

function Li(props: ComponentProps<"li">) {
  return <li {...props} className="marker:text-ink-faint" />;
}

function Blockquote(props: ComponentProps<"blockquote">) {
  return <blockquote {...props} className="border-rule text-ink-soft mt-6 border-l pl-5 italic" />;
}

function A(props: ComponentProps<"a">) {
  const { href, ...rest } = props;
  const isExternal = href?.startsWith("http") ?? false;
  return (
    <a
      href={href}
      {...rest}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-ink decoration-ink/30 hover:decoration-ink underline decoration-1 underline-offset-[5px] transition-[text-decoration-color,text-decoration-thickness] duration-200 hover:decoration-2"
    />
  );
}

function InlineCode(props: ComponentProps<"code">) {
  return (
    <code
      {...props}
      className="border-rule bg-rule-soft/40 text-ink rounded-[2px] border px-1.5 py-0.5 font-mono text-[0.9em]"
    />
  );
}

function Pre(props: ComponentProps<"pre">) {
  return (
    <pre
      {...props}
      className="border-rule bg-rule-soft/40 text-ink mt-6 overflow-x-auto border p-4 font-mono text-xs leading-relaxed"
    />
  );
}

function Hr(props: ComponentProps<"hr">) {
  return <hr {...props} className="border-rule my-10 border-0 border-t" />;
}

function Video({ src, title }: { src?: string; title?: string }) {
  const isPlaceholder = !src || src.includes("TODO");
  if (isPlaceholder) {
    return (
      <div className="border-rule bg-rule-soft/30 text-ink-faint mt-6 border p-10 text-center font-mono text-[11px] tracking-[0.18em] uppercase">
        Walkthrough video — to be recorded
      </div>
    );
  }
  return (
    <div className="border-rule bg-paper mt-6 aspect-video border">
      <iframe
        src={src}
        title={title ?? "Walkthrough"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: H2 as MDXComponents[string],
  h3: H3 as MDXComponents[string],
  p: P as MDXComponents[string],
  ul: Ul as MDXComponents[string],
  ol: Ol as MDXComponents[string],
  li: Li as MDXComponents[string],
  blockquote: Blockquote as MDXComponents[string],
  a: A as MDXComponents[string],
  code: InlineCode as MDXComponents[string],
  pre: Pre as MDXComponents[string],
  hr: Hr as MDXComponents[string],
  Video: Video as MDXComponents[string],
};
