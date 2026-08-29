import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
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
  return { title: project.title, description: project.summary };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
      {children}
    </h2>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isTech = project.tracks.includes("tech");
  const backHref = isTech ? "/tech-portfolio" : "/design-portfolio";
  const backLabel = isTech ? "Back to tech portfolio" : "Back to design portfolio";
  const accentText = isTech ? "text-tech" : "text-design";
  const accentHover = isTech
    ? "hover:border-tech hover:text-tech"
    : "hover:border-design hover:text-design";
  const brandAccent = project.brand?.accent;
  const skills = project.skills ?? project.tools;

  return (
    <article>
      {/* Sticky back navigation */}
      <div className="sticky top-4 z-10 anim-rise">
        <Link
          href={backHref}
          className={`inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas/80 px-4 py-1.5 text-sm backdrop-blur transition-colors duration-200 ${accentHover}`}
        >
          <span aria-hidden>←</span> {backLabel}
        </Link>
      </div>

      {/* Project header */}
      <header className="mt-10 md:mt-14">
        <p
          className="anim-rise anim-d1 text-sm font-semibold uppercase tracking-widest"
          style={brandAccent ? { color: brandAccent } : undefined}
        >
          {project.year} · {project.role}
        </p>
        <h1 className="anim-rise anim-d1 mt-4 max-w-4xl text-heading font-semibold">
          {project.title}
        </h1>
        <p className="anim-rise anim-d2 mt-5 max-w-2xl text-body-lg text-muted">
          {project.tagline}
        </p>
        {project.clients && project.clients.length > 0 && (
          <p className="anim-rise anim-d2 mt-4 text-sm text-muted">
            For {project.clients.join(", ")}
          </p>
        )}
        {(project.liveUrl || project.repoUrl) && (
          <div className="anim-rise anim-d3 mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-200 ${accentText} ${isTech ? "border-tech" : "border-design"} hover:bg-surface`}
              >
                Visit live site <span aria-hidden>↗</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-2.5 text-sm transition-colors duration-200 hover:border-cream"
              >
                View repository <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* Context */}
      {project.context && (
        <section className="mt-16 border-t border-hairline pt-12 md:mt-20">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <SectionLabel>Context</SectionLabel>
            <p className="max-w-2xl text-body-lg">{project.context}</p>
          </div>
        </section>
      )}

      {/* Timeline */}
      {project.timeline && project.timeline.length > 0 && (
        <section className="mt-12 border-t border-hairline pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <SectionLabel>Timeline</SectionLabel>
            <ol className="max-w-2xl space-y-6">
              {project.timeline.map((t) => (
                <li key={t.phase} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <span className="text-sm text-muted">{t.period}</span>
                  <div>
                    <p className="font-medium">{t.phase}</p>
                    {t.description && (
                      <p className="mt-1 text-sm text-muted">{t.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Output & Responsibilities */}
      {(project.outputs || project.responsibilities) && (
        <section className="mt-12 border-t border-hairline pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <SectionLabel>Output &amp; Responsibilities</SectionLabel>
            <div className="grid max-w-2xl gap-10 sm:grid-cols-2">
              {project.outputs && (
                <div>
                  <h3 className="text-sm font-medium">Delivered</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {project.outputs.map((o) => (
                      <li key={o} className="border-l border-hairline pl-3">{o}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.responsibilities && (
                <div>
                  <h3 className="text-sm font-medium">My role</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="border-l border-hairline pl-3">{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Extra free-form sections */}
      {project.sections && project.sections.length > 0 && (
        <section className="mt-12 space-y-12 border-t border-hairline pt-12">
          {project.sections.map((section) => (
            <div key={section.heading} className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <SectionLabel>{section.heading}</SectionLabel>
              <p className="max-w-2xl text-body-lg">{section.body}</p>
            </div>
          ))}
        </section>
      )}

      {/* Concepts & Skills */}
      {skills.length > 0 && (
        <section className="mt-12 border-t border-hairline pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <SectionLabel>Concepts &amp; Skills</SectionLabel>
            <ul className="flex max-w-2xl flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-hairline px-4 py-1.5 text-sm text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Resources & Sample Outputs */}
      {project.media && project.media.length > 0 && (
        <section className="mt-12 border-t border-hairline pt-12">
          <SectionLabel>Resources &amp; Sample Outputs</SectionLabel>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {project.media.map((item) => (
              <Reveal key={item.src}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-hairline bg-surface">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {item.caption && (
                    <figcaption className="mt-2 text-sm text-muted">
                      {item.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Bottom navigation */}
      <nav className="mt-16 border-t border-hairline pt-10">
        <Link
          href={backHref}
          className={`inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2 text-sm transition-colors duration-200 ${accentHover}`}
        >
          <span aria-hidden>←</span> {backLabel}
        </Link>
      </nav>
    </article>
  );
}
