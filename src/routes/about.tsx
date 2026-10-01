import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jasiri" },
      { name: "description", content: "Jasiri means brave. Built by a designer who thinks like a founder. Meet the team behind Jasiri Tech Nigeria." },
      { property: "og:title", content: "About — Jasiri" },
      { property: "og:description", content: "Built by a designer who thinks like a founder." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { initials: "SM", name: "Sharafadeen Mubarak", role: "CEO / Founder" },
  { initials: "FA", name: "Fatima Arogundade", role: "COO" },
  { initials: "GA", name: "Godwin Adejoh", role: "CTO" },
  { initials: "PE", name: "Prince Etatuvie", role: "Head of R&D" },
  { initials: "MA", name: "Masud Abdullahi", role: "Head of Communications" },
  { initials: "SE", name: "Samuel Efewengbe", role: "Head of Admin" },
  { initials: "HM", name: "Habeebullah Muhammed", role: "Secretary" },
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="hero-glow" />
        <div className="jasiri-container relative text-center" style={{ paddingTop: "16vh", paddingBottom: "10vh" }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>About</p>
            <h1 className="display-hero mt-6 max-w-[18ch] mx-auto">Built by a designer who thinks like a founder.</h1>
            <p className="body-large mt-6 max-w-[600px] mx-auto" style={{ color: "var(--text-tertiary)" }}>
              Jasiri means brave. It takes courage to keep things simple when complexity is everywhere.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Belief */}
      <section className="section-pad bg-white">
        <div className="jasiri-container max-w-[900px] mx-auto text-center space-y-10">
          {[
            { t: "Technology should serve businesses.", green: false },
            { t: "Businesses should serve customers.", green: false },
            { t: "Keep it simple. Always.", green: true },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 120}>
              <p
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  color: b.green ? "var(--green-primary)" : "var(--ink)",
                }}
              >
                {b.t}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad bg-white border-t border-black/5">
        <div className="jasiri-container grid md:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-[24px] font-semibold"
              style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
            >
              SM
            </div>
            <h2 className="display-sub mt-6">Sharafadeen Mubarak</h2>
            <p className="text-[19px] mt-2" style={{ color: "var(--text-secondary)" }}>
              Founder & Lead Designer
            </p>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              Six years designing enterprise-grade products across fintech, insurance and mobility. Founded Jasiri to give Nigeria's
              MSMEs and startups access to the same execution quality larger companies take for granted.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["700+ screens", "6 years", "5 enterprise clients", "3 countries"].map((s) => (
                <span
                  key={s}
                  className="text-[13px] px-3 py-1.5"
                  style={{ borderRadius: 980, background: "rgba(0,0,0,0.06)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="tonal-card p-8">
              <div className="eyebrow mb-4" style={{ color: "var(--green-primary)" }}>Selected engagements</div>
              <ul className="space-y-3 text-[15px]" style={{ color: "var(--ink)" }}>
                <li>· Consolidated Hallmark Plc — Insurance platform (700+ screens)</li>
                <li>· 9th Payment Services — Fintech operating system (80+ screens)</li>
                <li>· Kayi Microfinance Bank — Full platform rebuild (345+ screens)</li>
                <li>· Motor Africa USA — Three-product mobility family</li>
                <li>· My Event Pod UK — SaaS redesign (123+ screens in 4 weeks)</li>
                <li>· Cotrac Nigeria — Full rebrand (600+ assets)</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="glass-card p-10 h-full">
              <div className="eyebrow" style={{ color: "var(--green-accent)" }}>Mission</div>
              <p className="display-sub mt-5">To help MSMEs, startups and individuals bring ideas to life — simply, bravely, and with the customer at the centre of every decision.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card p-10 h-full">
              <div className="eyebrow" style={{ color: "var(--green-accent)" }}>Vision</div>
              <p className="display-sub mt-5">To be the most trusted execution partner for Nigeria's growing class of builders and entrepreneurs by 2028.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>Team</p>
            <h2 className="display-section mt-4">Who you'll work with.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <div className="minimal-card p-6 h-full">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[16px] font-semibold"
                    style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
                  >
                    {m.initials}
                  </div>
                  <div className="mt-5 text-[17px] font-semibold" style={{ color: "var(--ink)" }}>{m.name}</div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--text-secondary)" }}>{m.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company strip */}
      <section className="py-14 bg-white border-t border-black/5">
        <div className="jasiri-container flex flex-wrap justify-center gap-3">
          {["RC No. 7282599", "Registered in Nigeria", "Abuja HQ", "Remote-first", "Founded 2019"].map((s) => (
            <span
              key={s}
              className="text-[13px] px-4 py-2"
              style={{ borderRadius: 980, background: "rgba(0,0,0,0.05)", color: "var(--text-secondary)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad bg-black text-white text-center">
        <div className="jasiri-container">
          <h2 className="display-section">Want to work with us?</h2>
          <div className="mt-10">
            <Link to="/contact" className="btn-pill">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}