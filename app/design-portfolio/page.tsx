import type { Metadata } from "next";
import HubShell from "@/components/HubShell";

export const metadata: Metadata = {
  title: "UI/UX, Marketing & Design Projects",
  description: "Interface, brand and marketing design projects by Luis Madrid.",
};

export default function DesignPortfolio() {
  return (
    <HubShell
      track="design"
      title="UI/UX, Marketing & Design Projects"
      blurb="Product interfaces, brand identities and marketing design — from first paid commission to a brand I run day to day."
    />
  );
}
