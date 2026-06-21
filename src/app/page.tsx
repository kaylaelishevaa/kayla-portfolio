import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { PathSection } from "@/components/sections/path";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <PathSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
