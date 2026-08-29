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
  /**
   * Optional gallery grouping. Items sharing a group render together under a
   * subheading, in the order the group first appears in `media`. Leave unset
   * and the gallery stays a single flat grid.
   */
  group?: string;
};

export type ProjectBrand = {
  /** Card + header background: the project's own brand color, not the site's. */
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
  /** One-sentence teaser, shown on the hub card and under the detail title. */
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
    slug: "beso-foods",
    title: "Beso Foods",
    tagline:
      "A South American food stall I co-own: brand book, 3D-modelled stall, and the social feed that fills it.",
    tracks: ["design"],
    year: "2024 \u2013 Present",
    role: "Co-owner, Head of Marketing & Design",
    tools: ["Branding", "3D modelling", "Social media", "Art direction"],
    brand: { bg: "#272829", fg: "#F4F0E0", accent: "#FD7970" },
    cover: "/projects/beso-foods/cover.jpg",
    clients: ["Beso Foods"],
    liveUrl: "https://www.instagram.com/beso.admu/",
    summary:
      "Co-owner and head of design for a food stall averaging \u20b180,000 monthly revenue. Built the BESO brand identity from scratch, 3D-modelled the physical stall for construction, and ran the social campaigns that drove 10,000+ engagements.",
    context:
      "Beso, kiss in Spanish, started as a South American food stall at Ateneo de Manila's JSEC, built on the idea that a meal should feel like an experience rather than a transaction. I co-founded it and took the creative side end to end: the brand needed an identity that could carry that warmth across a physical stall, a menu, and an Instagram feed at once, and none of it existed yet. Everything on this page (the guidelines, the stall, the feed) came out of that gap.",
    sections: [
      {
        heading: "Process",
        body:
          "Nothing here shipped on a first pass. Every output started in a Figma \u201ccreative space\u201d as a wide spread of variants (twenty-odd logo lockups, four typography stacks, six versions of the same post with the headline set differently) and then narrowed. My co-owners and the operations side reviewed each spread with me, and whatever survived moved into numbered \u201cfinal drafts\u201d batches for a last round before publishing. Laying the options out side by side meant feedback landed on a wall of alternatives rather than a single proposal, so decisions got made by comparison, and the reasoning stayed on the canvas for the next output to build on.",
      },
    ],
    timeline: [
      {
        phase: "Brand identity & brand book",
        period: "2024",
        description:
          "Logo system, palette, typography and a full 23\u201324 brand book codifying it.",
      },
      {
        phase: "Stall design & construction",
        period: "2024",
        description:
          "3D-modelled the ~8.7 ft \u00d7 8.7 ft stall, led interior design, oversaw build logistics.",
      },
      {
        phase: "Launch & operations",
        period: "2024 \u2013 Present",
        description:
          "Daily operations, inventory, and ongoing social campaigns with consistent MoM revenue growth.",
      },
    ],
    outputs: [
      "BESO brand book: identity, logo system, palette, typography, tone and social guidelines",
      "Logo suite: the layered \u201ckiss\u201d lips mark plus wordmark variations, in four palette treatments",
      "Full 3D model and floor plan of the stall, used for construction",
      "Interior design: service counter, kitchen line, cold storage and shelving layout",
      "Menu design: the printed stall menu and a photographed dish menu",
      "Packaging and wrapper artwork built from the brand\u2019s type system",
      "Food photography and art direction for the menu and campaign posts",
      "Social media posting guide and content aesthetic",
      "Ongoing Instagram and Facebook campaigns",
    ],
    responsibilities: [
      "Co-manage a food stall averaging \u20b180,000 monthly revenue with consistent month-over-month growth",
      "Led all creative for the brand guideline and its design system",
      "Shot and art-directed the food photography behind the menu and campaign posts",
      "Ran the review loop with co-owners and operations. Variants explored in Figma, narrowed together, finalised in batches",
      "3D-modelled the stall and led its interior design",
      "Oversaw construction logistics and daily store operations, including inventory",
      "Grew the brand's following by 500+ new followers across 10,000+ social engagements",
    ],
    skills: [
      "Brand identity",
      "Brand guidelines",
      "Logo design",
      "Typography",
      "3D modelling",
      "Interior & spatial design",
      "Food photography",
      "Photo art direction",
      "Menu & packaging design",
      "Social media strategy",
      "Art direction",
      "Operations management",
    ],
    media: [
      {
        src: "/projects/beso-foods/brand-cover.jpg",
        alt: "Cover of the BESO brand book: a coral field with the layered lips mark and the \u201cbeso.\u201d wordmark",
        caption: "The brand book cover: the \u201ckiss\u201d mark that anchors the whole identity.",
        group: "Brand guidelines",
      },
      {
        src: "/projects/beso-foods/palette-logo.jpg",
        alt: "BESO color palette swatches and the no-text lips logo shown on four background colors",
        caption: "Four colors and one mark, specified to hold up on every surface.",
        group: "Brand guidelines",
      },
      {
        src: "/projects/beso-foods/logo-variations.jpg",
        alt: "BESO wordmark in three letter cases plus logo lockups on cream, coral and charcoal backgrounds",
        caption: "Wordmark and lockup variations for different placements.",
        group: "Brand guidelines",
      },
      {
        src: "/projects/beso-foods/typography.jpg",
        alt: "BESO type stack (TAN-Nimbus, TAN-Harmoni, Playfair Display and Aileron) with a sample heading hierarchy",
        caption: "The type system: \u201cTaste the passion, feel the love.\u201d",
        group: "Brand guidelines",
      },
      {
        src: "/projects/beso-foods/graphic-elements.jpg",
        alt: "Six sample BESO graphic outputs reinterpreting the kiss mark as patterns, lockups and poster layouts",
        caption: "Creative freedom inside the system: the mark reinterpreted post to post.",
        group: "Brand guidelines",
      },
      {
        src: "/projects/beso-foods/menu-poster.jpg",
        alt: "The Beso stall menu poster: BESO Specials, Sandwiches, Main Dishes, and a Sides, Add-ons and Drinks panel, set in the brand\u2019s coral and cream",
        caption: "The stall menu: the whole offer on one sheet, priced and sectioned in brand type.",
        group: "Menus & packaging",
      },
      {
        src: "/projects/beso-foods/menu-food-photography.jpg",
        alt: "A dark-background Beso menu page with overhead shots of chicken tenders, thin slice steak and chili lemon garlic shrimp, each with a description and heat rating",
        caption: "A photographed menu page: dishes shot overhead on dark stone, each with a heat rating.",
        group: "Menus & packaging",
      },
      {
        src: "/projects/beso-foods/wrapper-design.jpg",
        alt: "Beso wrapper artwork: a tiling typographic pattern of BESO, XOXO, \u201cwrapped in love\u201d and \u201cin pleasure we find guilt\u201d in coral, red and black",
        caption: "Wrapper artwork: the brand\u2019s voice tiled into a repeating pattern for packaging.",
        group: "Menus & packaging",
      },
      {
        src: "/projects/beso-foods/post-driven-by-love.jpg",
        alt: "Beso post: two people running hand-in-hand across a green field in white, headline \u201cDriven by love, desiring more\u201d",
        caption: "\u201cDriven by love, desiring more\u201d: 106 likes, the account's best-performing post.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-beso-is-back.jpg",
        alt: "Beso post: a woman looking over her shoulder in a field, the word BESO set large across the frame",
        caption: "\u201cBeso is back\u201d: the relaunch post. 94 likes.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-sweet-as-a-dream.jpg",
        alt: "Beso post: two hands clasped against greenery, headline \u201cSweet as a dream\u201d with a note on the cuddle hormone",
        caption: "\u201cSweet as a dream\u201d: the definition-caption device the brand book calls for.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-indulged-in-pairs.jpg",
        alt: "Beso post: a couple embracing seen from behind, headline \u201cMeant to be indulged in pairs\u201d",
        caption: "\u201cMeant to be indulged in pairs\u201d: pairing the product promise to the brand's theme.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-next-up.jpg",
        alt: "Beso post: a woman resting her face in her hands, headline \u201cNext up\u201d with \u201cComing soon\u201d",
        caption: "\u201cNext up\u201d: a teaser built on the same type system.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-challengers-of-love.jpg",
        alt: "Beso menu post: three dishes styled on white linen with labels for calamares sandwich, garlic parmesan and lemon pepper chicken",
        caption: "\u201cChallengers of love\u201d: a menu launch, each dish annotated in brand type.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/post-gochujang-noodles.jpg",
        alt: "Beso menu post: a bowl of gochujang noodles on wood with red petals, headline \u201cStarving for some snacks?\u201d",
        caption: "\u201cStarving for some snacks?\u201d: menu item priced in-frame, kiss mark struck through the copy.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/ig-grid.jpg",
        alt: "The @beso.admu Instagram profile page showing a twelve-post grid of campaign images",
        caption: "The feed as one composition: warm tones, candid shots, bold type, post to post.",
        group: "Social media posts",
      },
      {
        src: "/projects/beso-foods/floor-plan.jpg",
        alt: "Top-down floor plan of the Beso stall, 104.3 by 104.3 inches, with equipment positions marked",
        caption: "Floor plan: every inch of an 8.7 ft square accounted for.",
        group: "3D stall renders & construction",
      },
      {
        src: "/projects/beso-foods/stall-exterior.jpg",
        alt: "3D render of the Beso stall front showing the signage band, service counters and wall-mounted menu boards",
        caption: "The stall front as modelled, with the signage band and service counters.",
        group: "3D stall renders & construction",
      },
      {
        src: "/projects/beso-foods/stall-interior-kitchen.jpg",
        alt: "Interior 3D render looking down the Beso kitchen line: sink, fryers, induction hob and open shelving",
        caption: "The kitchen line: sink, fryers and hob along one wall, shelving above.",
        group: "3D stall renders & construction",
      },
      {
        src: "/projects/beso-foods/stall-interior-service.jpg",
        alt: "Interior 3D render of the Beso service side showing the food warmer, drinks chiller and prep counter",
        caption: "The service side: warmer, chiller and prep counter within one pivot of each other.",
        group: "3D stall renders & construction",
      },
      {
        src: "/projects/beso-foods/process-logo-explorations.jpg",
        alt: "Figma canvas titled Beso Logo Ideas, showing more than twenty lips-mark and wordmark lockups alongside typography specimen boards",
        caption: "Logo and type exploration: the mark tested as a lockup across every palette combination before one was chosen.",
        group: "Process & iteration",
      },
      {
        src: "/projects/beso-foods/process-brand-boards.jpg",
        alt: "Figma canvas showing seven competing brand-system boards, each pairing a logo treatment with the color palette, a typography stack and sample imagery",
        caption: "Seven whole brand systems side by side. The review compared complete directions, not single elements.",
        group: "Process & iteration",
      },
      {
        src: "/projects/beso-foods/process-creative-space.jpg",
        alt: "Figma canvas titled Creative Space, showing rows of campaign post variants with the same photograph and different headline treatments",
        caption: "The creative space: one photograph, many headline treatments, kept until the review narrowed it.",
        group: "Process & iteration",
      },
      {
        src: "/projects/beso-foods/process-ig-batch-1.jpg",
        alt: "Figma frame labelled Beso IG Final Drafts Batch 1, showing shortlisted campaign posts arranged in columns",
        caption: "Final drafts, batch 1: the shortlist that came out of the first review round.",
        group: "Process & iteration",
      },
      {
        src: "/projects/beso-foods/process-ig-batch-2.jpg",
        alt: "Figma frame labelled Beso IG Final Drafts Batch 2, showing a later shortlist of menu and campaign posts",
        caption: "Batch 2: menu launches and seasonal posts through the same loop.",
        group: "Process & iteration",
      },
    ],
  },
  {
    slug: "okpo",
    title: "OKPO",
    tagline:
      "Concept designs for a Filipino creator community platform and the financing app built alongside it.",
    tracks: ["design"],
    year: "2024",
    role: "Product Designer",
    tools: ["Figma"],
    brand: { bg: "#221F20", fg: "#F5F0E6", accent: "#F8D557" },
    cover: "/projects/okpo/app-mockup.jpg",
    summary:
      "Commissioned concept work for OkPo, a community-builder SaaS startup: brand system, creator community website, and a companion loan app for its members.",
    clients: ["OkPo"],
    context:
      "OkPo set out to build a home for Filipino creators and esports communities, with a financing arm that let members borrow against what they were building. I was commissioned at the concept stage, contributing to the business-model thinking and turning it into a working visual language: a logo and design system, a full community website layout, and the mobile app that carried the same brand into loan applications, transactions, and member chat.",
    outputs: [
      "Logo lockups and a simple design system (color, type scale, buttons)",
      "V2 community website design, desktop and component breakdown",
      "Mobile app concept screens: onboarding, loan dashboard, loan application, transactions, chat",
      "Business-model concept contributions",
    ],
    responsibilities: [
      "Shaped early product and business-model ideas with the founders",
      "Built the brand and design system from scratch",
      "Designed the community website and every mobile app screen",
    ],
    skills: [
      "Product thinking",
      "Brand identity",
      "Design systems",
      "UI design",
      "Mobile design",
      "Community platforms",
    ],
    media: [
      {
        src: "/projects/okpo/logo-variations.jpg",
        alt: "Three OkPo logo lockups on white, brand yellow and black backgrounds.",
        caption: "Logo variations across the three brand backgrounds.",
        group: "Brand & design system",
      },
      {
        src: "/projects/okpo/design-system.jpg",
        alt: "OkPo design system sheet showing color palette, type scale and button states.",
        caption:
          "Design system: #F8D557 / #221F20 / #D4D0C5, a Jockey One and Poppins type scale, and primary and alternate button states.",
        group: "Brand & design system",
      },
      {
        src: "/projects/okpo/website-v2.jpg",
        alt: "V2 OkPo community website design with its component breakdown alongside.",
        caption:
          "V2 website design: hero, creator spotlight, latest content grid and newsletter, with the component breakdown beside it.",
        group: "Community platform",
      },
      {
        src: "/projects/okpo/app-mockup.jpg",
        alt: "Three phone screens showing the OkPo login, loan dashboard and member chat.",
        caption: "Login, loan dashboard and member chat in the OkPo brand.",
        group: "Mobile app concepts",
      },
      {
        src: "/projects/okpo/app-concepts.jpg",
        alt: "Full screen flow board of the OkPo mobile app concept designs.",
        caption:
          "Full screen flow: onboarding variants, dashboard, add loan, transactions and chat.",
        group: "Mobile app concepts",
      },
    ],
  },
  {
    slug: "daddydappy",
    title: "DaddyDappy",
    tagline:
      "Branding, NFT characters, use-case UI and a shipped landing page for a Web3 community boardroom startup.",
    tracks: ["design"],
    year: "2022",
    role: "Product & UI/UX Designer",
    tools: ["Figma", "Wix", "Canva"],
    brand: { bg: "#101711", fg: "#EAF3EC", accent: "#4FC46E" },
    cover: "/projects/daddydappy/laptop-mockup.jpg",
    summary:
      "Product and UI/UX design for DaddyDappy, a crypto startup building Web3 boardrooms for token holders: brand direction, NFT character mockups, use-case UI, the whitepaper, and the live landing page.",
    context:
      "DaddyDappy set out to fix a gap the founders kept hitting in crypto communities: Discord, Telegram and Twitter are good at gathering a crowd but bad at proving who actually holds the token, so founders talk past bots and holders feel disconnected from the project. The answer was a token-gated \"boardroom\", part Reddit feed, part Discord channel list, with leaderboards, reward gifting and public listings that let communities compete for a top spot. I joined as the product and UI/UX designer, working across branding, the character work, the interface concepts and everything the project showed the public.",
    timeline: [
      {
        phase: "Branding & ideation",
        period: "Q1 2022",
        description:
          "Visual direction, the Daddy mascot, and shaping the boardroom concept with the founders.",
      },
      {
        phase: "Feature & UI design",
        period: "Q2 to Q3 2022",
        description:
          "Use-case UI for boardrooms, leaderboards, direct messaging and rewards.",
      },
      {
        phase: "Launch collateral",
        period: "Q3 to Q4 2022",
        description:
          "Whitepaper design and the public landing page shipped on Wix.",
      },
    ],
    outputs: [
      "Brand direction: logo, green and yellow palette, and the Daddy mascot",
      "NFT character mockups for the Tribute Collection, 18 hand-drawn pop-culture Daddies",
      "Use-case UI concepts for boardrooms, leaderboards, direct messaging, rewards and social integrations",
      "Landing page and rankings screen designs",
      "The public landing page, built and shipped on Wix",
      "The DaddyDappy whitepaper, cover to roadmap",
    ],
    responsibilities: [
      "Assisted in branding and product ideation with the founders",
      "Ideated and mocked up the NFT characters",
      "Designed the use-case UI that explained each boardroom feature",
      "Solely responsible for building and shipping the landing page on Wix",
      "Designed and produced the whitepaper",
    ],
    skills: [
      "Product design",
      "UI/UX design",
      "Brand identity",
      "Illustration & character design",
      "Web3 UX",
      "Wix",
      "Whitepaper design",
    ],
    media: [
      {
        src: "/projects/daddydappy/laptop-mockup.jpg",
        alt: "DaddyDappy landing page on a laptop, green hero with the yellow Daddy mascot and a speech bubble.",
        caption:
          "The shipped landing page: \"Open and ready-to-use community boardroom dapp.\"",
        group: "Landing page",
      },
      {
        src: "/projects/daddydappy/landing-mockups.jpg",
        alt: "Two DaddyDappy web designs, the landing page and a project rankings table.",
        caption:
          "Landing page and the public rankings screen, where boardrooms compete on rewards, activity and members.",
        group: "Landing page",
      },
      {
        src: "/projects/daddydappy/usecase-ui.jpg",
        alt: "Board of DaddyDappy interface concepts covering leaderboards, rewards, direct messaging and social sharing.",
        caption:
          "Use-case UI iterations: boardrooms, leaderboards, community rewards, holder-only direct messaging and social integration.",
        group: "Use-case UI",
      },
      {
        src: "/projects/daddydappy/whitepaper.jpg",
        alt: "DaddyDappy whitepaper pages in green, including the roadmap spread and the Tribute NFT card.",
        caption:
          "Whitepaper pages: cover, contents, the 2022 to 2023 roadmap, and the 18-piece Tribute NFT collection.",
        group: "Whitepaper",
      },
    ],
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
      "Concept design for a sustainability-focused travel app, commissioned exploration work for Texxen.",
    clients: ["Texxen"],
    context:
      "Texxen commissioned KeptGreen as a concept: a travel app with sustainability at its core. The engagement produced the app's concept design; the project ultimately didn't move forward, but the exploration stands as a complete design exercise.",
    outputs: ["App concept and UI design exploration"],
    responsibilities: ["Concept development", "UI/UX design"],
    skills: ["Concept design", "UI/UX", "Sustainability"],
  },
  {
    slug: "example-analysis",
    title: "Example Data Analysis",
    tagline: "Placeholder tech project. Replace with your first analytics case study.",
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

/** Route segments that already exist as real pages. A project may never use these. */
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
