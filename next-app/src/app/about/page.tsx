import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "About — Jasiri",
  description:
    "Jasiri means brave. Built by a designer who thinks like a founder. Meet the team behind Jasiri Tech Nigeria.",
  openGraph: {
    title: "About — Jasiri",
    description: "Built by a designer who thinks like a founder.",
  },
};

const team = [
  { initials: "SM", name: "Sharafadeen Mubarak", role: "CEO / Founder" },
  { initials: "FA", name: "Fatima Arogundade", role: "COO" },
  { initials: "GA", name: "Godwin Adejoh", role: "CTO" },
  { initials: "PE", name: "Prince Etatuvie", role: "Head of R&D" },
  { initials: "MA", name: "Masud Abdullahi", role: "Head of Communications" },
  { initials: "SE", name: "Samuel Efewengbe", role: "Head of Admin" },
  { initials: "HM", name: "Habeebullah Muhammed", role: "Secretary" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="hero-glow" />
        <div className="jasiri-container relative py-[10vh] pt-[16vh] text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              About
            </p>
            <h1 className="display-hero mx-auto mt-6 max-w-[18ch]">
              Built by a designer who thinks like a founder.
            </h1>
            <p
              className="body-large mx-auto mt-6 max-w-[600px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Jasiri means brave. It takes courage to keep things simple when complexity is
              everywhere.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container mx-auto max-w-[900px] space-y-10 text-center">
          {[
            { t: "Technology should serve businesses.", green: false },
            { t: "Businesses should serve customers.", green: false },
            { t: "Keep it simple. Always.", green: true },
          ].map((belief, i) => (
            <Reveal key={belief.t} delay={i * 120}>
              <p
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: 0,
                  lineHeight: 1.15,
                  color: belief.green ? "var(--green-primary)" : "var(--ink)",
                }}
              >
                {belief.t}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-black/5 bg-white">
        <div className="jasiri-container grid items-start gap-14 md:grid-cols-2">
          <Reveal>
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full text-[24px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
            >
              SM
            </div>
            <h2 className="display-sub mt-6">Sharafadeen Mubarak</h2>
            <p className="mt-2 text-[19px]" style={{ color: "var(--text-secondary)" }}>
              Founder & Lead Designer
            </p>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              Six years designing enterprise-grade products across fintech, insurance and
              mobility. Founded Jasiri to give Nigeria&apos;s MSMEs and startups access to
              the same execution quality larger companies take for granted.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["700+ screens", "6 years", "5 enterprise clients", "3 countries"].map(
                (stat) => (
                  <span
                    key={stat}
                    className="px-3 py-1.5 text-[13px]"
                    style={{ borderRadius: 980, background: "rgba(0,0,0,0.06)" }}
                  >
                    {stat}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="tonal-card p-8">
              <div className="eyebrow mb-4" style={{ color: "var(--green-primary)" }}>
                Selected engagements
              </div>
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

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-10">
              <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                Mission
              </div>
              <p className="display-sub mt-5">
                To help MSMEs, startups and individuals bring ideas to life — simply,
                bravely, and with the customer at the centre of every decision.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-card h-full p-10">
              <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                Vision
              </div>
              <p className="display-sub mt-5">
                To be the most trusted execution partner for Nigeria&apos;s growing class of
                builders and entrepreneurs by 2028.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Team
            </p>
            <h2 className="display-section mt-4">Who you&apos;ll work with.</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <div className="minimal-card h-full p-6">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-[16px] font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
                  >
                    {member.initials}
                  </div>
                  <div className="mt-5 text-[17px] font-semibold" style={{ color: "var(--ink)" }}>
                    {member.name}
                  </div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    {member.role}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-14">
        <div className="jasiri-container flex flex-wrap justify-center gap-3">
          {["RC No. 7282599", "Registered in Nigeria", "Abuja HQ", "Remote-first", "Founded 2019"].map(
            (item) => (
              <span
                key={item}
                className="px-4 py-2 text-[13px]"
                style={{
                  borderRadius: 980,
                  background: "rgba(0,0,0,0.05)",
                  color: "var(--text-secondary)",
                }}
              >
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="section-pad bg-black text-center text-white">
        <div className="jasiri-container">
          <h2 className="display-section">Want to work with us?</h2>
          <div className="mt-10">
            <Link href="/contact" className="btn-pill">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
