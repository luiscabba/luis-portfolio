import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

/**
 * Uniform-size card (locked 4:3 aspect) whose interior carries the
 * project's own branding via `project.brand`, not the site palette.
 */
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const brand = project.brand ?? { bg: "#191919", fg: "#fffce1" };

  return (
    <Link
      href={`/${project.slug}`}
      className="group anim-rise relative block aspect-[4/3] overflow-hidden rounded-card border border-hairline transition-transform duration-300 hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
      style={{
        animationDelay: `${Math.min(index, 8) * 90}ms`,
        backgroundColor: brand.bg,
        color: brand.fg,
      }}
    >
      {project.cover && (
        <>
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${brand.bg} 0%, transparent 55%)`,
            }}
          />
        </>
      )}
      <div className="relative flex h-full flex-col justify-between p-6">
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: brand.accent ?? brand.fg }}
        >
          {project.year}
        </span>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm" style={{ opacity: 0.8 }}>
            {project.tagline}
          </p>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 translate-y-full px-6 py-3 text-sm font-medium backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0"
        style={{
          backgroundColor: `${brand.bg}e6`,
          color: brand.accent ?? brand.fg,
        }}
      >
        View project →
      </div>
    </Link>
  );
}
