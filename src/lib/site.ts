export const site = {
  name: "Kayla Elisheva Siwi",
  shortName: "Kayla Elisheva Siwi",
  role: "CS student building AI in production",
  url: "https://kaylasiwi.com",
  email: "kaykayelisheva@gmail.com",
  github: "https://github.com/kaylaelishevaa",
  linkedin: "https://www.linkedin.com/in/kayla-elisheva-siwi/",
  resume: "/resume.pdf",
  description:
    "Computer Science student at Monash University Malaysia and software engineer at Coldwell Banker Indonesia, building AI systems in production.",
  locales: ["Kuala Lumpur", "Jakarta"] as const,
} as const;

export type Site = typeof site;
