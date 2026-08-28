import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSlugs, getProject } from "@/content/projects";

// Only slugs listed in content/projects.ts render. Anything else 404s,
// so this catch-all can safely sit at the root next to the static hubs.
export const dynamicParams = false;

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const backHref = project.tracks.includes("tech")
    ? "/tech-portfolio"
    : "/design-portfolio";

  return (
    <article className="space-y-12">
      <Link href={backHref} className="text-sm opacity-60 hover:opacity-100">
        ← Back
      </Link>

      <header className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="text-lg opacity-70">{project.tagline}</p>
      </header>

      <dl className="grid grid-cols-2 gap-6 border-y border-black/10 py-6 text-sm sm:grid-cols-4 dark:border-white/10">
        <div>
          <dt className="opacity-50">Year</dt>
          <dd className="mt-1">{project.year}</dd>
        </div>
        <div>
          <dt className="opacity-50">Role</dt>
          <dd className="mt-1">{project.role}</dd>
        </div>
        <div className="col-span-2">
          <dt className="opacity-50">Tools</dt>
          <dd className="mt-1">{project.tools.join(", ")}</dd>
        </div>
      </dl>

      <div className="max-w-2xl space-y-10">
        {project.sections?.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-medium">{section.heading}</h2>
            <p className="opacity-75 leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="flex gap-4 text-sm">
          {project.liveUrl && (
            <a href={project.liveUrl} className="underline underline-offset-4">
              Live site
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className="underline underline-offset-4">
              Repository
            </a>
          )}
        </div>
      )}
    </article>
  );
}
