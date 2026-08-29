import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const interTight = localFont({
  src: "./fonts/inter-tight-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luiscmadrid.vercel.app"),
  title: {
    default: "Luis Madrid: Data Analytics & UI/UX Design",
    template: "%s | Luis Madrid",
  },
  description:
    "Portfolio of Luis Madrid: data analytics, AI and UI/UX design work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-hairline">
          <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-muted">
            <p>© {new Date().getFullYear()} Luis Madrid</p>
            <div className="flex gap-6">
              <Link href="/tech-portfolio" className="transition-colors hover:text-tech">
                Tech &amp; Data
              </Link>
              <Link href="/design-portfolio" className="transition-colors hover:text-design">
                Design
              </Link>
              <a
                href="https://github.com/luiscabba"
                className="transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
