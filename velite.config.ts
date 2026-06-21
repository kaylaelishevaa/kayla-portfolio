import { defineConfig, s } from "velite";
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from "rehype-pretty-code";

const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "min-light",
  keepBackground: false,
  defaultLang: { block: "plaintext", inline: "plaintext" },
};

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    caseStudies: {
      name: "CaseStudy",
      pattern: "case-studies/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(120),
          slug: s.string(),
          summary: s.string().max(280),
          role: s.string(),
          timeline: s.string(),
          stack: s.array(s.string()),
          publishedAt: s.isodate().optional(),
          draft: s.boolean().default(false),
          diagram: s.enum(["architecture", "mcp", "pulse", "latchkey", "recap"]).optional(),
          highlights: s.array(s.string()).optional(),
          related: s
            .object({ slug: s.string(), label: s.string(), note: s.string() })
            .optional(),
          repo: s.string().optional(),
          videoUrl: s.string().optional(),
          body: s.mdx(),
        })
        .transform((data, { meta }) => {
          const source = meta.value?.toString() ?? "";
          const proseWordCount = source
            .replace(/^---[\s\S]*?---/, "")
            .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
            .replace(/^#+ .+$/gm, "")
            .replace(/<[^>]+>/g, "")
            .split(/\s+/)
            .filter(Boolean).length;
          return {
            ...data,
            permalink: `/projects/${data.slug}`,
            bodyDraft: proseWordCount < 80,
          };
        }),
    },
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
