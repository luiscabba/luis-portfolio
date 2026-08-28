import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-sm">
        <Link href="/" className="font-semibold tracking-tight">
          Luis
        </Link>
        <div className="flex gap-6">
          <Link href="/tech-portfolio" className="hover:underline underline-offset-4">
            Tech &amp; Data
          </Link>
          <Link href="/design-portfolio" className="hover:underline underline-offset-4">
            Design
          </Link>
        </div>
      </nav>
    </header>
  );
}
