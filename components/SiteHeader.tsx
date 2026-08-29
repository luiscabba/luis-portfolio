import Link from "next/link";
import Mark from "@/components/Mark";

export default function SiteHeader() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5">
        <Link
          href="/"
          aria-label="Luis Madrid, home"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          <Mark className="h-6 w-6 shrink-0" />
          Luis Madrid
        </Link>
        <nav aria-label="Portfolio hubs" className="flex gap-3 text-sm">
          <Link
            href="/tech-portfolio"
            className="rounded-full border border-hairline px-4 py-1.5 transition-colors duration-200 hover:border-tech hover:bg-tech hover:text-canvas"
          >
            Tech &amp; Data
          </Link>
          <Link
            href="/design-portfolio"
            className="rounded-full border border-hairline px-4 py-1.5 transition-colors duration-200 hover:border-design hover:bg-design hover:text-canvas"
          >
            Design
          </Link>
        </nav>
      </div>
    </header>
  );
}
