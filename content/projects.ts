// Single source of truth for every project on the site.
// Both hub pages and the universal /[slug] detail template read from here.

export type Track = "tech" | "design";

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  /** URL segment: /[slug]. Must be unique and must not collide with RESERVED_SLUGS. */
  slug: string;
  title: string;
  tagline: string;
  /** A project can live in one hub or both. */
  tracks: Track[];
  year: string;
  role: string;
  tools: string[];
  /** Path under /public, e.g. "/projects/daddydappy/cover.png" */
  cover?: string;
  /** Short blurb used on hub cards. */
  summary: string;
  /** Long-form case study body, rendered in order on the detail page. */
  sections?: ProjectSection[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "daddydappy",
    title: "DaddyDappy",
    tagline: "Web3 community boardroom app",
    tracks: ["design"],
    year: "2024",
    role: "UI Designer & Front-end Builder",
    tools: ["Figma", "Low-code", "Web3"],
    summary:
      "First paid commission — designed the UI and shipped the live front end for a Web3 community boardroom.",
    sections: [
      { heading: "Context", body: "Replace with the problem and the client's goal." },
      { heading: "Process", body: "Replace with research, wireframes, and iterations." },
      { heading: "Outcome", body: "Replace with results and what you learned." },
    ],
  },
  {
    slug: "example-analysis",
    title: "Example Data Analysis",
    tagline: "Placeholder tech project",
    tracks: ["tech"],
    year: "2026",
    role: "Data Analyst",
    tools: ["Python", "pandas", "Tableau"],
    summary: "Delete or rename this once you add your first real analytics case study.",
    sections: [
      { heading: "Question", body: "What were you trying to find out?" },
      { heading: "Method", body: "Data sources, cleaning, modelling." },
      { heading: "Findings", body: "The insight and the decision it supported." },
    ],
  },
];

/** Route segments that already exist as real pages — a project may never use these. */
export const RESERVED_SLUGS = new Set([
  "tech-portfolio",
  "design-portfolio",
  "api",
  "about",
  "contact",
  "resume",
]);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTrack(track: Track): Project[] {
  return projects.filter((p) => p.tracks.includes(track));
}

export function allSlugs(): string[] {
  return projects.map((p) => p.slug).filter((s) => !RESERVED_SLUGS.has(s));
}
