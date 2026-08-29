import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByTrack, type Track } from "@/content/projects";

const ACCENT = {
  tech: { text: "text-tech", border: "hover:border-tech hover:text-tech" },
  design: { text: "text-design", border: "hover:border-design hover:text-design" },
} as const;

export default function HubShell({
  track,
  title,
  blurb,
}: {
  track: Track;
  title: string;
  blurb: string;
}) {
  const projects = getProjectsByTrack(track);
  const accent = ACCENT[track];

  return (
    <div>
      <nav aria-label="Breadcrumb" className="anim-rise">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5 text-sm transition-colors duration-200 ${accent.border}`}
        >
          <span aria-hidden>←</span> Home
        </Link>
      </nav>

      <header className="mt-12 md:mt-16">
        <p className={`anim-rise anim-d1 text-sm font-semibold uppercase tracking-widest ${accent.text}`}>
          {track === "tech" ? "01" : "02"}
        </p>
        <h1 className="anim-rise anim-d1 mt-4 max-w-4xl text-heading font-semibold">
          {title}
        </h1>
        <p className="anim-rise anim-d2 mt-5 max-w-2xl text-body-lg text-muted">
          {blurb}
        </p>
      </header>

      <section className="mt-14 border-t border-hairline pt-14 md:mt-16">
        {projects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 3} />
            ))}
          </div>
        ) : (
          <p className="text-muted">Projects coming soon.</p>
        )}
      </section>
    </div>
  );
}
