import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Services — Jasiri",
  description:
    "Design, technology, branding, document design, digital marketing and team augmentation. Done simply and well.",
  openGraph: {
    title: "Services — Jasiri",
    description: "Not everything. The right things. Done simply and well.",
  },
};

type Service = {
  icon: string;
  name: string;
  body: string;
  deliverables: string[];
  idealFor: string[];
  starting: string;
  timeline: string;
  dark: boolean;
};

const services: Service[] = [
  {
    icon: "◐",
    name: "Tech Design & Development",
    body: "End-to-end UI/UX design and product development for web and mobile — admin consoles, dashboards, payment flows, consumer apps, and portals. Delivered in Figma with full developer handoff.",
    deliverables: [
      "UI/UX design",
      "Product development",
      "Figma systems",
      "Prototyping",
      "Dev handoff",
      "Responsive design",
    ],
    idealFor: [
      "Startups building their first product",
      "MSMEs digitising their business",
      "Teams needing a senior design partner",
    ],
    starting: "From ₦500k",
    timeline: "2-12 weeks",
    dark: false,
  },
  {
    icon: "◇",
    name: "Branding & Graphics",
    body: "Brand strategy, visual identity, and marketing collateral that communicates who you are and why you matter — built to work across digital and print.",
    deliverables: [
      "Brand strategy",
      "Logo & identity",
      "Brand guidelines",
      "Marketing collateral",
      "Presentation design",
      "Social media graphics",
    ],
    idealFor: [
      "New businesses building a brand",
      "Established businesses refreshing their identity",
      "Entrepreneurs needing pitch materials",
    ],
    starting: "From ₦250k",
    timeline: "1-6 weeks",
    dark: true,
  },
  {
    icon: "◈",
    name: "Document & Report Design",
    body: "Business plans, proposals, investor decks, annual reports, and branded templates — designed to be read, trusted, and remembered.",
    deliverables: [
      "Business plans",
      "Proposals",
      "Investor decks",
      "Annual reports",
      "White papers",
      "Branded templates",
    ],
    idealFor: [
      "Startups seeking funding",
      "MSMEs applying for grants",
      "Organisations producing formal reports",
    ],
    starting: "From ₦120k",
    timeline: "3-10 days",
    dark: false,
  },
  {
    icon: "◍",
    name: "Digital Marketing",
    body: "SEO, social media strategy, and content marketing that builds real audience — not vanity metrics. Built around your business goals, not a generic playbook.",
    deliverables: [
      "SEO strategy",
      "Social media management",
      "Content marketing",
      "Campaign design",
      "Analytics & reporting",
    ],
    idealFor: [
      "Businesses that have launched but aren't generating traction",
      "Brands entering new audience segments",
    ],
    starting: "From ₦150k/mo",
    timeline: "Monthly",
    dark: true,
  },
  {
    icon: "◉",
    name: "Team Augmentation",
    body: "An embedded designer or developer for your team on a contract basis — for projects that need extra capacity without a full hire.",
    deliverables: [
      "Embedded design support",
      "Short-term project sprints",
      "Design review & QA",
      "Junior talent from 7Central",
    ],
    idealFor: [
      "Product teams with capacity gaps",
      "Agencies needing overflow support",
      "Startups in active build phases",
    ],
    starting: "From ₦300k/mo",
    timeline: "Monthly",
    dark: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="hero-glow" />
        <div className="jasiri-container relative py-[10vh] pt-[16vh] text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Services
            </p>
            <h1 className="display-hero mt-6">We help you build what you need.</h1>
            <p
              className="body-large mx-auto mt-6 max-w-[600px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Not everything. The right things. Done simply and well.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((service, i) => (
        <ServiceBlock key={service.name} service={service} number={i + 1} />
      ))}

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Engagement
            </p>
            <h2 className="display-section mt-4">How we work together.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Project-based",
                price: "₦500k – ₦3.5M",
                desc: "Defined scope. Defined timeline. One deliverable, done right.",
              },
              {
                name: "Monthly Retainer",
                price: "₦150k – ₦400k/mo",
                desc: "Ongoing design partnership. Predictable capacity. Continuous improvement.",
              },
              {
                name: "Design Sprint",
                price: "Fixed scope, fixed price",
                desc: "One week. One outcome. Validated direction before you invest further.",
              },
            ].map((model, i) => (
              <Reveal key={model.name} delay={i * 100}>
                <div className="glass-card h-full p-8">
                  <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                    {model.name}
                  </div>
                  <div className="mt-4 text-[36px] font-bold tracking-tight">{model.price}</div>
                  <p className="mt-5 text-[15px] leading-relaxed text-white/60">{model.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white text-center">
        <div className="jasiri-container">
          <h2 className="display-section">Not sure where to start? Let&apos;s talk.</h2>
          <div className="mt-10 flex justify-center gap-5">
            <Link href="/contact" className="btn-pill">
              Get in touch
            </Link>
            <Link href="/work" className="link-chev">
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceBlock({ service, number }: { service: Service; number: number }) {
  const dark = service.dark;

  return (
    <section
      className="section-pad"
      style={{
        background: dark ? "#000" : "#fff",
        color: dark ? "#fff" : "var(--ink)",
        borderTop: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div className="jasiri-container grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="text-[64px] leading-none" style={{ color: "var(--green-accent)" }}>
              {service.icon}
            </div>
            <p
              className="eyebrow mt-6"
              style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)" }}
            >
              0{number} · Service
            </p>
            <h3 className="display-sub mt-3">{service.name}</h3>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={100}>
            <p className="body-large" style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)" }}>
              {service.body}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Starting point", value: service.starting },
                { label: "Typical timeline", value: service.timeline },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] p-4"
                  style={{
                    background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                    border: dark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="text-[12px] uppercase"
                    style={{ color: dark ? "rgba(255,255,255,0.48)" : "var(--text-secondary)" }}
                  >
                    {item.label}
                  </div>
                  <div className="mt-2 text-[20px] font-semibold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div
                className="eyebrow mb-4"
                style={{ color: dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)" }}
              >
                Deliverables
              </div>
              <div className="flex flex-wrap gap-2">
                {service.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="px-3 py-1.5 text-[13px]"
                    style={{
                      borderRadius: 980,
                      background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                      color: dark ? "rgba(255,255,255,0.85)" : "var(--ink)",
                    }}
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="mt-8 rounded-[16px] p-6"
              style={{
                background: dark ? "rgba(62,207,126,0.08)" : "rgba(26,122,74,0.06)",
                border: dark ? "1px solid rgba(62,207,126,0.18)" : "1px solid rgba(26,122,74,0.15)",
              }}
            >
              <div
                className="eyebrow mb-3"
                style={{ color: dark ? "var(--green-accent)" : "var(--green-primary)" }}
              >
                Ideal for
              </div>
              <ul className="space-y-1.5 text-[15px]" style={{ color: dark ? "rgba(255,255,255,0.85)" : "var(--ink)" }}>
                {service.idealFor.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
