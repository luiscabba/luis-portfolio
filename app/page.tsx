import Image from "next/image";
import Link from "next/link";

const TRACKS = [
  {
    href: "/tech-portfolio",
    kicker: "01 / Tech",
    title: "Tech, AI & Data Analytics",
    hover: "hover:bg-tech-soft",
  },
  {
    href: "/design-portfolio",
    kicker: "02 / Design",
    title: "UI, UX & Marketing Design",
    hover: "hover:bg-design-soft hover:text-white",
  },
] as const;

export default function Home() {
  return (
    <section className="grid min-h-[calc(100svh-69px)] grid-rows-[1fr_auto] overflow-hidden">
      {/* Split: copy 55%, portrait 45% */}
      <div className="grid min-h-0 md:grid-cols-[55%_45%]">
        <div className="flex min-h-0 flex-col justify-end px-6 pb-10 pt-14 md:px-[4.5vw] md:pb-[5vh] md:pt-16">
          <h1 className="anim-rise text-[15.5vw] font-extrabold leading-[0.86] tracking-[-0.042em] md:text-[9.2vw]">
            <span className="block text-outline">LUIS</span>
            <span className="block">MADRID</span>
          </h1>

          <div className="anim-rise anim-d1 mt-7 max-w-[42ch]">
            <p className="text-xl font-semibold tracking-tight md:text-[1.28rem]">
              Data Analyst &amp; UI/UX Designer
            </p>
            <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-muted">
              Turning messy data into decisions, and ideas into interfaces
              people actually use.
            </p>
            <a
              href="mailto:luiscabmadrid@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-[0.93rem] font-medium text-canvas transition-colors duration-200 hover:bg-canvas hover:text-ink"
            >
              Let&rsquo;s collaborate
              <span aria-hidden className="transition-transform duration-200">
                &#8599;
              </span>
            </a>
          </div>
        </div>

        <div className="relative order-first h-[52vh] overflow-hidden bg-[#1c1d20] md:order-none md:h-auto">
          <Image
            src="/hero/luis-portrait-mono.jpg"
            alt="Portrait of Luis Madrid"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-[50%_12%]"
          />
        </div>
      </div>

      {/* Full-width track band */}
      <div className="grid border-t border-hairline md:grid-cols-2">
        {TRACKS.map((track, i) => (
          <Link
            key={track.href}
            href={track.href}
            className={`group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 md:px-[4.5vw] ${
              i === 1 ? "border-t border-hairline md:border-l md:border-t-0" : ""
            } ${track.hover}`}
          >
            <span>
              <span className="block text-[0.68rem] uppercase tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-ink/60">
                {track.kicker}
              </span>
              <span className="mt-1 block text-lg font-semibold tracking-tight">
                {track.title}
              </span>
            </span>
            <span
              aria-hidden
              className="text-lg transition-transform duration-300 group-hover:translate-x-1.5"
            >
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
