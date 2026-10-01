import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Jasiri — We help you build what you need.",
  description:
    "Technology for business. Business for people. Design, development, branding and marketing for MSMEs, startups, and individuals. Abuja, Nigeria.",
  authors: [{ name: "Jasiri Tech Nigeria Ltd." }],
  openGraph: {
    title: "Jasiri — We help you build what you need.",
    description: "Technology for business. Business for people. Built simply and bravely.",
    type: "website",
    images: ["/brand/logo.png"],
  },
  twitter: {
    card: "summary",
    site: "@Jasiri",
    title: "Jasiri — We help you build what you need.",
    description: "Technology for business. Business for people. Built simply and bravely.",
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <Nav />
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
