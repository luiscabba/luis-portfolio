import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luis-portfolio.vercel.app"),
  title: {
    default: "Luis — Data Analytics & UI/UX Design",
    template: "%s — Luis",
  },
  description:
    "Portfolio of Luis: data analytics, AI and UI/UX design work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
        <footer className="mx-auto max-w-5xl px-6 py-12 text-xs opacity-50">
          © {new Date().getFullYear()} Luis
        </footer>
      </body>
    </html>
  );
}
