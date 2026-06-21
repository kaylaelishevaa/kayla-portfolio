import type { MetadataRoute } from "next";
import { caseStudies } from "#content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies
      .filter((study) => !study.draft)
      .map((study) => ({
        url: `${site.url}${study.permalink}`,
        lastModified: study.publishedAt ? new Date(study.publishedAt) : now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];
}
