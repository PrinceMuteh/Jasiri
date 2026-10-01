export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  tagline: string;
  description: string;
  screens: string;
  timeline: string;
  platforms: string;
  engagement: string;
  services: string[];
  year: string;
  glow: string;
  challenges: { title: string; body: string }[];
  decisions: { title: string; problem: string; did: string; why: string }[];
  outcomes: { label: string; value: string }[];
  bullets: string[];
  testimonial?: { quote: string; name: string; role: string };
  brief: string[];
};

export const projects: Project[] = [
  {
    slug: "9th-payment-services",
    name: "9th Payment Services",
    client: "9th Payment Services",
    industry: "Fintech",
    tagline: "Admin console, merchant dashboard, payment gateway & invoicing.",
    description: "An end-to-end fintech operating system for merchants — built for clarity at scale.",
    screens: "80+",
    timeline: "5 months",
    platforms: "Web · Mobile",
    engagement: "Project-based",
    services: ["UI/UX Design", "Product Design", "Design System"],
    year: "2024",
    glow: "rgba(62,207,126,0.35)",
    challenges: [
      { title: "Fragmented operator tooling", body: "Internal admins were managing payments across three disconnected dashboards. Every reconciliation required exporting CSVs." },
      { title: "Merchant onboarding friction", body: "New merchants dropped off during KYC. The flow had 14 screens for what should have been 5." },
    ],
    decisions: [
      { title: "One operator console, three roles", problem: "Three apps for admins, finance, and support.", did: "Collapsed everything into a role-aware single console.", why: "Operators stop context-switching and reconciliations happen in-line." },
      { title: "Progressive KYC", problem: "Merchants gave up before reaching transactions.", did: "Broke KYC into 3 stages, each unlocking real value.", why: "Activation jumped because merchants see progress before completion." },
    ],
    outcomes: [{ label: "Screens delivered", value: "80+" }, { label: "Roles supported", value: "3" }, { label: "Activation lift", value: "2.1×" }, { label: "Months", value: "5" }],
    bullets: ["Admin console with role-based permissions", "Merchant dashboard with live transactions", "Hosted payment gateway", "Branded invoicing module"],
    brief: [
      "9th Payment Services needed a unified product surface across operator, merchant, and customer-facing touchpoints.",
      "The existing tools had grown organically — every team had its own dashboard and none of them spoke to each other.",
    ],
  },
  {
    slug: "consolidated-hallmark",
    name: "Consolidated Hallmark Plc",
    client: "Consolidated Hallmark Plc",
    industry: "Insurance",
    tagline: "Full insurance platform: broker, agent & underwriter.",
    description: "A 700+ screen insurance platform spanning brokers, agents, underwriters and customers.",
    screens: "700+",
    timeline: "14 months",
    platforms: "Web · Mobile · Internal",
    engagement: "Retainer",
    services: ["UI/UX Design", "Design System", "Prototyping"],
    year: "2023",
    glow: "rgba(120,180,255,0.30)",
    challenges: [
      { title: "Legacy quoting workflows", body: "Underwriters were working off PDFs and spreadsheets. Quotes took days to issue." },
      { title: "No shared design language", body: "Each business line had its own UI. Customers experienced four different brands." },
    ],
    decisions: [
      { title: "Single design system, four surfaces", problem: "Four products, four design languages.", did: "Built one component library that all four products consume.", why: "Releases are faster, and the brand feels coherent everywhere." },
      { title: "Underwriter command center", problem: "Underwriters were the bottleneck.", did: "Redesigned their console around the single decision: approve, decline, refer.", why: "Decisions are made in minutes, not days." },
    ],
    outcomes: [{ label: "Screens delivered", value: "700+" }, { label: "Products unified", value: "4" }, { label: "Quote time cut", value: "−72%" }, { label: "Months", value: "14" }],
    bullets: ["Full broker, agent, underwriter and customer apps", "Unified component library", "Underwriting command center", "Mobile-first claims flow"],
    testimonial: { quote: "Jasiri didn't just hand us screens. They handed us a way of thinking about our products.", name: "Product Lead", role: "Consolidated Hallmark Plc" },
    brief: [
      "Consolidated Hallmark needed to consolidate four product surfaces into one coherent experience without slowing down delivery on any of them.",
    ],
  },
  {
    slug: "kayi-microfinance",
    name: "Kayi Microfinance Bank",
    client: "Kayi Microfinance Bank",
    industry: "Microfinance",
    tagline: "Full platform redesign: website, mobile & internet banking.",
    description: "A complete banking platform rebuild — website through to mobile and internet banking.",
    screens: "345+",
    timeline: "9 months",
    platforms: "Web · Mobile · Internet Banking",
    engagement: "Project-based",
    services: ["UI/UX Design", "Branding", "Design System"],
    year: "2024",
    glow: "rgba(255,180,120,0.30)",
    challenges: [
      { title: "Outdated customer journey", body: "The mobile app had a 1.9 star rating. Customers had given up." },
      { title: "Brand felt inherited, not chosen", body: "The website looked like a template. There was no design point of view." },
    ],
    decisions: [
      { title: "Mobile-first banking", problem: "Most customers bank from a phone, but the app felt secondary.", did: "Redesigned mobile as the primary surface, internet banking second.", why: "We meet customers where they actually are." },
      { title: "Identity rebuild", problem: "The brand was forgettable.", did: "Refreshed identity, voice and motion language across every touchpoint.", why: "The bank now feels like a brand customers want to belong to." },
    ],
    outcomes: [{ label: "Screens delivered", value: "345+" }, { label: "App store rating", value: "4.6★" }, { label: "Brand surfaces", value: "3" }, { label: "Months", value: "9" }],
    bullets: ["Public website", "Native mobile banking app", "Internet banking portal", "Full identity refresh"],
    brief: [
      "Kayi needed to rebuild trust with its customers and the redesign was the most visible signal.",
    ],
  },
  {
    slug: "motor-africa",
    name: "Motor Africa (USA)",
    client: "Motor Africa USA",
    industry: "Mobility",
    tagline: "Tella, Checkout & Trace — consumer, lending & fleet.",
    description: "Three connected mobility products designed with a distributed US team.",
    screens: "200+",
    timeline: "Ongoing",
    platforms: "Mobile · Web",
    engagement: "Embedded",
    services: ["UI/UX Design", "Product Design", "Design Sprints"],
    year: "2024",
    glow: "rgba(200,140,255,0.30)",
    challenges: [
      { title: "Three products, one team", body: "Tella, Checkout and Trace had to feel like one company without becoming one product." },
      { title: "Distributed delivery", body: "Designers in Abuja, engineers in the US. Async by necessity." },
    ],
    decisions: [
      { title: "Product family system", problem: "The three apps were drifting visually.", did: "Built a family system: shared primitives, distinct personalities.", why: "Each product can move at its own pace without breaking the family." },
      { title: "Async-first artifacts", problem: "Live reviews didn't scale across time zones.", did: "Switched to recorded walkthroughs and Loom-style handoffs.", why: "Engineering unblocked themselves without waiting." },
    ],
    outcomes: [{ label: "Products shipped", value: "3" }, { label: "Time zones", value: "+7h" }, { label: "Cadence", value: "2-wk" }, { label: "Team", value: "Distributed" }],
    bullets: ["Tella consumer mobility app", "Checkout lending product", "Trace fleet operator", "Shared design family"],
    brief: [
      "Motor Africa is a three-product mobility company building in the US market with a Nigerian design partner.",
    ],
  },
  {
    slug: "my-event-pod",
    name: "My Event Pod (UK)",
    client: "My Event Pod UK",
    industry: "SaaS",
    tagline: "US-market event platform redesign with accessibility & localisation.",
    description: "A complete SaaS redesign — 123+ screens in 4 weeks, built for accessibility from the ground up.",
    screens: "123+",
    timeline: "4 weeks",
    platforms: "Web · Mobile",
    engagement: "Sprint",
    services: ["UI/UX Design", "Accessibility", "Localisation"],
    year: "2024",
    glow: "rgba(255,140,180,0.30)",
    challenges: [
      { title: "Tight US-market deadline", body: "The redesign had to ship for a US conference. There was no slack in the calendar." },
      { title: "Accessibility was an afterthought", body: "The original product wasn't WCAG-compliant. That had to change everywhere." },
    ],
    decisions: [
      { title: "Accessibility-first components", problem: "Bolting on a11y is expensive.", did: "Rebuilt the primitives so a11y is the default.", why: "Future screens are accessible without anyone thinking about it." },
      { title: "Compressed sprint cadence", problem: "Four weeks for 123 screens.", did: "Daily ship cycles, single decision-maker, no committee.", why: "We made the deadline without compromising craft." },
    ],
    outcomes: [{ label: "Screens delivered", value: "123+" }, { label: "Weeks", value: "4" }, { label: "WCAG level", value: "AA" }, { label: "Locales", value: "2" }],
    bullets: ["Full event platform redesign", "WCAG AA-compliant components", "US/UK localisation", "Mobile event companion"],
    brief: [
      "My Event Pod was entering the US market and needed a redesign that felt native to that audience.",
    ],
  },
  {
    slug: "cotrac",
    name: "Cotrac Nigeria",
    client: "Cotrac Nigeria",
    industry: "Branding",
    tagline: "Full company rebrand and 600+ marketing materials.",
    description: "A complete rebrand spanning identity, digital, and 600+ collateral pieces.",
    screens: "600+",
    timeline: "8 months",
    platforms: "Print · Digital",
    engagement: "Retainer",
    services: ["Brand Strategy", "Identity", "Collateral"],
    year: "2023",
    glow: "rgba(255,210,120,0.30)",
    challenges: [
      { title: "Brand had no center", body: "Every department was producing collateral with a different look." },
      { title: "Print and digital felt unrelated", body: "The print materials and the digital surfaces could have been two companies." },
    ],
    decisions: [
      { title: "One identity, every surface", problem: "Six visual languages across the company.", did: "Rebuilt the identity around a single tight system.", why: "Every team can produce on-brand materials without asking design." },
      { title: "Templates over freestyle", problem: "Each new deck started from scratch.", did: "Shipped a template library covering 80% of recurring needs.", why: "Quality stays high without depending on a senior designer." },
    ],
    outcomes: [{ label: "Collateral pieces", value: "600+" }, { label: "Templates", value: "40+" }, { label: "Departments", value: "6" }, { label: "Months", value: "8" }],
    bullets: ["Full visual identity refresh", "Brand guidelines and voice", "600+ marketing materials", "Template library"],
    brief: [
      "Cotrac needed a rebrand that would scale across six departments without losing coherence.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}