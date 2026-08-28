import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByTrack } from "@/content/projects";

export const metadata: Metadata = {
  title: "Tech, AI & Data Analytics",
  description: "Data analysis, AI and analytics engineering work by Luis.",
};

export default function TechPortfolio() {
  const items = getProjectsByTrack("tech");

  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Tech / AI / Data Analytics
        </h1>
        <p className="opacity-70">
          Intro copy for this hub — who it is for and what they will find.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
