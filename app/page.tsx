import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Luis — data analytics and design.
        </h1>
        <p className="text-lg opacity-70">
          Replace this with your positioning statement. Two sentences, tops.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/tech-portfolio"
          className="rounded-xl border border-black/10 p-8 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
        >
          <h2 className="text-xl font-medium">Tech / AI / Data Analytics</h2>
          <p className="mt-2 text-sm opacity-70">
            Analyses, models, dashboards and the thinking behind them.
          </p>
        </Link>
        <Link
          href="/design-portfolio"
          className="rounded-xl border border-black/10 p-8 transition hover:border-black/30 dark:border-white/10 dark:hover:border-white/30"
        >
          <h2 className="text-xl font-medium">UI / UX / Marketing / Design</h2>
          <p className="mt-2 text-sm opacity-70">
            Product interfaces, brand work and marketing design.
          </p>
        </Link>
      </section>
    </div>
  );
}
