import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jasiri" },
      {
        name: "description",
        content:
          "Design, technology, branding, document design, digital marketing and team augmentation. Done simply and well.",
      },
      { property: "og:title", content: "Services — Jasiri" },
      {
        property: "og:description",
        content: "Not everything. The right things. Done simply and well.",
      },
    ],
  }),
  component: ServicesPage,
});

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

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="hero-glow" />
        <div
          className="jasiri-container relative text-center"
          style={{ paddingTop: "16vh", paddingBottom: "10vh" }}
        >
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Services
            </p>
            <h1 className="display-hero mt-6">We help you build what you need.</h1>
            <p
              className="body-large mt-6 max-w-[600px] mx-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              Not everything. The right things. Done simply and well.
            </p>
          </Reveal>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceBlock key={s.name} service={s} number={i + 1} />
      ))}

      {/* Engagement models */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Engagement
            </p>
            <h2 className="display-section mt-4">How we work together.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
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
            ].map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="glass-card p-8 h-full">
                  <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                    {m.name}
                  </div>
                  <div className="text-[36px] font-bold mt-4 tracking-tight">{m.price}</div>
                  <p className="mt-5 text-[15px] text-white/60 leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white text-center">
        <div className="jasiri-container">
          <h2 className="display-section">Not sure where to start? Let's talk.</h2>
          <div className="mt-10 flex justify-center gap-5">
            <Link to="/contact" className="btn-pill">
              Get in touch
            </Link>
            <Link to="/work" className="link-chev">
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
      <div className="jasiri-container grid md:grid-cols-12 gap-12">
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
            <h3 className="display-sub mt-3" style={{ letterSpacing: "-0.025em" }}>
              {service.name}
            </h3>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={100}>
            <p
              className="body-large"
              style={{ color: dark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)" }}
            >
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
                    border: dark
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "1px solid rgba(0,0,0,0.08)",
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
                {service.deliverables.map((d) => (
                  <span
                    key={d}
                    className="text-[13px] px-3 py-1.5"
                    style={{
                      borderRadius: 980,
                      background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                      color: dark ? "rgba(255,255,255,0.85)" : "var(--ink)",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="mt-8 p-6 rounded-[16px]"
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
              <ul
                className="space-y-1.5 text-[15px]"
                style={{ color: dark ? "rgba(255,255,255,0.85)" : "var(--ink)" }}
              >
                {service.idealFor.map((x) => (
                  <li key={x}>· {x}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
