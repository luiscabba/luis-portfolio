import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-4 text-heading font-semibold">Nothing here.</h1>
      <p className="mt-4 text-body-lg text-muted">
        That page doesn&apos;t exist. Try one of the portfolios instead.
      </p>
      <div className="mt-10 flex justify-center gap-3">
        <Link
          href="/tech-portfolio"
          className="rounded-full border border-hairline px-5 py-2 text-sm transition-colors hover:border-tech hover:text-tech"
        >
          Tech &amp; Data
        </Link>
        <Link
          href="/design-portfolio"
          className="rounded-full border border-hairline px-5 py-2 text-sm transition-colors hover:border-design hover:text-design"
        >
          Design
        </Link>
      </div>
    </div>
  );
}
