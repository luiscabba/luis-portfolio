// Single source of truth for every project on the site.
// Both hub pages and the universal /[slug] detail template read from here.

export type Track = "tech" | "design";

export type ProjectSection = {
  heading: string;
  body: string;
};

export type TimelinePhase = {
  phase: string;
  period: string;
  description?: string;
};

export type MediaItem = {
  /** Path under /public, e.g. "/projects/daddydappy/screen-1.png" */
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectBrand = {
  /** Card + header background — the project's own brand color, not the site's. */
  bg: string;
  /** Text color on that background. */
  fg: string;
  /** Optional highlight used for small details. */
  accent?: string;
};

export type Project = {
  /** URL segment: /[slug]. Must be unique and must not collide with RESERVED_SLUGS. */
  slug: string;
  title: string;
  /** One-sentence teaser — shown on the hub card and under the detail title. */
  tagline: string;
  /** A project can live in one hub or both. */
  tracks: Track[];
  year: string;
  role: string;
  tools: string[];
  /** Per-project branding for the hub card interior. */
  brand?: ProjectBrand;
  /** Path under /public, e.g. "/projects/daddydappy/cover.png" */
  cover?: string;
  /** Short blurb used on hub cards (falls back to tagline). */
  summary: string;
  /** Companies / clients the project was for. */
  clients?: string[];
  /** Background, problem statement, or origin of the project. */
  context?: string;
  /** Duration and phases. */
  timeline?: TimelinePhase[];
  /** What was actually delivered. */
  outputs?: string[];
  /** What your specific role/tasks were. */
  responsibilities?: string[];
  /** Concepts & skills tags, e.g. "data modeling", "wireframing". */
  skills?: string[];
  /** Media gallery: images/charts/mockups under /public/projects/<slug>/ */
  media?: MediaItem[];
  /** Extra free-form case-study sections, rendered after Context. */
  sections?: ProjectSection[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "daddydappy",
    title: "DaddyDappy",
    tagline: "A Web3 community boardroom app, designed and shipped end-to-end.",
    tracks: ["design"],
    year: "2024",
    role: "UI Designer & Front-end Builder",
    tools: ["Figma", "Low-code", "Web3"],
    brand: { bg: "#14102a", fg: "#e9e2ff", accent: "#9d95ff" },
    summary:
      "First paid commission — designed the UI and shipped the live front end for a Web3 community boardroom.",
    context:
      "DaddyDappy was my first paid commission: a boardroom-style app for a Web3 community that needed a real, usable interface rather than a whitepaper mockup. I designed the UI and built the live front end with low-code tools, and the product ran in production for around six months.",
    timeline: [
      { phase: "Design & build", period: "2024", description: "UI design in Figma, front end assembled with low-code tools." },
      { phase: "Live operation", period: "~6 months", description: "Product live with the community until the project was discontinued." },
    ],
    outputs: [
      "Complete UI design for the boardroom app",
      "Live, working front end",
    ],
    responsibilities: [
      "Designed every screen and interaction",
      "Built and shipped the front end",
      "Iterated with the client while live",
    ],
    skills: ["UI design", "Design systems", "Low-code development", "Web3 UX"],
  },
  {
    slug: "okpo",
    title: "OKPO",
    tagline: "Early-stage concept for a Filipino creator & esports community platform.",
    tracks: ["design"],
    year: "2024",
    role: "Product Designer",
    tools: ["Figma"],
    brand: { bg: "#0a1f2e", fg: "#cdeeff", accent: "#00bae2" },
    summary:
      "Helped shape the business model and designed the initial desktop and mobile interfaces for a creator/esports community platform.",
    context:
      "OKPO set out to build a home for Filipino creators and esports communities. I joined at the concept stage, contributing to the business-model thinking and translating it into the platform's first desktop and mobile interface designs.",
    outputs: [
      "Initial desktop interface designs",
      "Initial mobile interface designs",
      "Business-model concept contributions",
    ],
    responsibilities: [
      "Shaped early product and business-model ideas",
      "Designed the first desktop and mobile UI concepts",
    ],
    skills: ["Product thinking", "UI design", "Mobile design", "Community platforms"],
  },
  {
    slug: "keptgreen",
    title: "KeptGreen",
    tagline: "A conceptual sustainability travel app, commissioned by Texxen.",
    tracks: ["design"],
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma"],
    brand: { bg: "#0d2417", fg: "#d6ffe3", accent: "#abff84" },
    summary:
      "Concept design for a sustainability-focused travel app — commissioned exploration work for Texxen.",
    clients: ["Texxen"],
    context:
      "Texxen commissioned KeptGreen as a concept: a travel app with sustainability at its core. The engagement produced the app's concept design; the project ultimately didn't move forward, but the exploration stands as a complete design exercise.",
    outputs: ["App concept and UI design exploration"],
    responsibilities: ["Concept development", "UI/UX design"],
    skills: ["Concept design", "UI/UX", "Sustainability"],
  },
  {
    slug: "beso-foods",
    title: "Beso Foods",
    tagline: "Brand identity and marketing for a food stall business I co-own.",
    tracks: ["design"],
    year: "2024–present",
    role: "Co-owner, Brand & Marketing Designer",
    tools: ["Branding", "Social media", "3D modelling"],
    brand: { bg: "#2b1205", fg: "#ffe8d1", accent: "#ff8709" },
    summary:
      "Designed the BESO brand identity and all social marketing content — campaigns drove 10,000+ engagements and 500+ new followers.",
    context:
      "Beso Foods is a food stall business I co-own and operate. I designed the brand identity — the BESO wordmark and lips logo mark — plus all of its social media marketing content, and modelled the physical stall in 3D for construction.",
    outputs: [
      "BESO brand identity (wordmark + lips logo mark)",
      "Ongoing social media marketing content",
      "3D stall models for construction",
    ],
    responsibilities: [
      "Brand identity design",
      "Marketing campaigns — 10,000+ social engagements, 500+ new followers",
      "Store operations and construction logistics",
    ],
    skills: ["Brand identity", "Marketing design", "Social media", "3D modelling"],
  },
  {
    slug: "example-analysis",
    title: "Example Data Analysis",
    tagline: "Placeholder tech project — replace with your first analytics case study.",
    tracks: ["tech"],
    year: "2026",
    role: "Data Analyst",
    tools: ["Python", "pandas", "Tableau"],
    brand: { bg: "#062b16", fg: "#abff84", accent: "#0ae448" },
    summary: "Delete or rename this once you add your first real analytics case study.",
    context: "What were you trying to find out? Replace with the question, the data, and why it mattered.",
    skills: ["Data cleaning", "Exploratory analysis", "Visualization"],
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
