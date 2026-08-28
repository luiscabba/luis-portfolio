import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group block rounded-xl border border-black/10 p-6 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <span className="text-xs opacity-60">{project.year}</span>
      </div>
      <p className="mt-2 text-sm opacity-70">{project.summary}</p>
      <p className="mt-4 text-xs uppercase tracking-wide opacity-50">
        {project.tools.join(" · ")}
      </p>
    </Link>
  );
}
