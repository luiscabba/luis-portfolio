import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="pb-20 md:pb-28">
        <p className="anim-rise text-sm text-muted">
          Luis Madrid — Philippines
        </p>
        <h1 className="anim-rise anim-d1 mt-6 max-w-5xl text-display font-semibold">
          Data analyst.
          <br />
          Product designer.
        </h1>
        <p className="anim-rise anim-d2 mt-8 max-w-2xl text-body-lg text-muted">
          I work at the intersection of analytics and interface design — turning
          messy data into decisions, and ideas into products people can actually
          use. From my first paid commission to running the brand of my own food
          business, I ship the whole thing: the thinking, the design, the build.
        </p>
      </section>

      {/* Background */}
      <section className="anim-rise anim-d3 border-t border-hairline py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Background
          </h2>
          <div className="max-w-2xl space-y-6 text-body-lg">
            <p>
              Recent graduate, currently freelancing across design and
              analytics. On the design side I&apos;ve shipped a live Web3
              product, concepted community and travel apps, and built the brand
              of Beso Foods — a food business I co-own — from wordmark to
              marketing campaigns. On the data side I&apos;m building analytics
              case studies with Python and modern BI tooling.
            </p>
            <p className="text-muted">
              Aiming at data analyst and UX/UI roles — ideally remote, anywhere
              in the world.
            </p>
          </div>
        </div>
      </section>

      {/* The Fork */}
      <section className="border-t border-hairline pt-16 md:pt-20">
        <h2 className="anim-rise anim-d3 text-sm font-semibold uppercase tracking-widest text-muted">
          Choose a path
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/tech-portfolio"
            className="group anim-rise anim-d4 relative rounded-card border border-hairline p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-tech md:p-10"
          >
            <p className="text-sm font-semibold text-tech">01</p>
            <h3 className="mt-12 text-subheading font-semibold transition-colors duration-300 group-hover:text-tech md:mt-20">
              Tech / AI / Data Analytics
            </h3>
            <p className="mt-3 text-muted">
              Analyses, dashboards, models and AI workflows — and the thinking
              behind them.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2 text-sm transition-colors duration-300 group-hover:border-tech group-hover:text-tech">
              View projects
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
          <Link
            href="/design-portfolio"
            className="group anim-rise anim-d5 relative rounded-card border border-hairline p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-design md:p-10"
          >
            <p className="text-sm font-semibold text-design">02</p>
            <h3 className="mt-12 text-subheading font-semibold transition-colors duration-300 group-hover:text-design md:mt-20">
              UI / UX / Marketing / Design
            </h3>
            <p className="mt-3 text-muted">
              Product interfaces, brand identities and marketing design —
              shipped, not just mocked up.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2 text-sm transition-colors duration-300 group-hover:border-design group-hover:text-design">
              View projects
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
