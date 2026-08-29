import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsByTrack, type Track } from "@/content/projects";

const TRACK = {
  tech: {
    numeral: "01",
    kicker: "Analytics · AI · Engineering",
    text: "text-tech",
    outline: "text-outline-tech",
    stroke: "hover:border-tech hover:text-tech",
    otherHref: "/design-portfolio",
    otherLabel: "UI, UX & Marketing Design",
    otherPrompt: "Looking for the design side?",
    otherHover: "hover:border-design hover:bg-design hover:text-canvas",
  },
  design: {
    numeral: "02",
    kicker: "UI / UX · Marketing · Brand",
    text: "text-design",
    outline: "text-outline-design",
    stroke: "hover:border-design hover:text-design",
    otherHref: "/tech-portfolio",
    otherLabel: "Tech, AI & Data Analytics",
    otherPrompt: "Looking for the analytics side?",
    otherHover: "hover:border-tech hover:bg-tech hover:text-canvas",
  },
} as const;

export default function HubShell({
  track,
  title,
  blurb,
  chips = [],
}: {
  track: Track;
  title: string;
  blurb: string;
  chips?: string[];
}) {
  const projects = getProjectsByTrack(track);
  const t = TRACK[track];

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-14 md:py-16">
      <nav aria-label="Breadcrumb" className="anim-rise">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-1.5 text-sm transition-colors duration-200 ${t.stroke}`}
        >
          <span aria-hidden>&larr;</span> Home
        </Link>
      </nav>

      <header className="mt-14 grid gap-6 md:mt-16 md:grid-cols-[auto_1fr] md:gap-[3vw]">
        <p
          aria-hidden
          className={`anim-rise text-outline select-none text-[7rem] font-extrabold leading-[0.78] tracking-[-0.05em] md:text-[13rem] ${t.outline}`}
        >
          {t.numeral}
        </p>
        <div>
          <p
            className={`anim-rise anim-d1 text-xs font-semibold uppercase tracking-[0.14em] ${t.text}`}
          >
            {t.kicker}
          </p>
          <h1 className="anim-rise anim-d1 mt-4 max-w-[18ch] text-heading font-bold">
            {title}
          </h1>
          <p className="anim-rise anim-d2 mt-5 max-w-[52ch] text-body-lg text-muted">
            {blurb}
          </p>
          {chips.length > 0 && (
            <ul className="anim-rise anim-d2 mt-7 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-hairline px-3 py-1.5 text-xs text-muted"
                >
                  {chip}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <section className="mt-14 border-t border-hairline pt-14">
        {projects.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + 3} />
            ))}
            {projects.length < 3 &&
              Array.from({ length: 3 - projects.length }).map((_, i) => (
                <div
                  key={`ghost-${i}`}
                  className="flex aspect-[4/3] items-center justify-center rounded-card border border-dashed border-hairline bg-surface text-sm text-muted"
                >
                  Next case study in progress
                </div>
              ))}
          </div>
        ) : (
          <p className="text-muted">Projects coming soon.</p>
        )}
      </section>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8">
        <p className="text-muted">{t.otherPrompt}</p>
        <Link
          href={t.otherHref}
          className={`group inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2 text-sm transition-colors duration-200 ${t.otherHover}`}
        >
          {t.otherLabel}
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}
