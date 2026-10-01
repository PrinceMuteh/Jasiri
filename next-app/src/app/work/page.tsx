import type { Metadata } from "next";
import { WorkPageClient } from "@/components/site/WorkPageClient";

export const metadata: Metadata = {
  title: "Work — Jasiri",
  description:
    "700+ screens. Real clients. Real work. Fintech, insurance, mobility, SaaS and branding case studies.",
  openGraph: {
    title: "Work — Jasiri",
    description: "700+ screens. Real clients. Real work.",
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}
