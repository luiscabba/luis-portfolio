import type { Metadata } from "next";
import HubShell from "@/components/HubShell";

export const metadata: Metadata = {
  title: "Tech, AI & Data Projects",
  description: "Data analytics, AI and engineering projects by Luis Madrid.",
};

export default function TechPortfolio() {
  return (
    <HubShell
      track="tech"
      title="Tech, AI & Data Projects"
      blurb="Analyses, dashboards, models and AI workflows — each one built to answer a real question."
    />
  );
}
