import type { Metadata } from "next";
import { ContactPageClient } from "@/components/site/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Jasiri",
  description:
    "Tell us about your idea. We'll help you build exactly what you need. Abuja, Nigeria.",
  openGraph: {
    title: "Contact — Jasiri",
    description: "Let's build something together.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
