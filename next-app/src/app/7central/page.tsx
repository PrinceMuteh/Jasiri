import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "7Central — UI/UX Academy by Jasiri",
  description:
    "Learn UI/UX from a designer actively building enterprise products. 8 graduates. 62.5% career outcomes.",
  openGraph: {
    title: "7Central — UI/UX Academy by Jasiri",
    description: "Learn UI/UX from someone who actually does it.",
  },
};

export default function SevenCentralPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-black text-white"
        style={{ minHeight: "calc(100vh - 48px)" }}
      >
        <div className="hero-glow" />
        <div
          className="jasiri-container relative flex flex-col items-center text-center"
          style={{ paddingTop: "12vh", paddingBottom: "8vh" }}
        >
          <Reveal>
            <h1
              style={{
                fontSize: "clamp(64px, 11vw, 120px)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 1,
              }}
            >
              7Central
            </h1>
            <p className="eyebrow mt-4" style={{ color: "var(--green-accent)" }}>
              design · innovate · scale
            </p>
            <p className="mt-3 text-[13px]" style={{ color: "var(--text-tertiary)" }}>
              A division of Jasiri Tech Nigeria Ltd.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="display-section mt-12 max-w-[20ch]">
              Learn UI/UX from someone who actually does it.
            </h2>
            <p
              className="body-large mx-auto mt-6 max-w-[640px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Most courses are taught by people who studied design. 7Central is taught by a
              designer actively building enterprise products every day. The difference
              shows in the outcomes.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#programme" className="btn-pill">
                Enrol in the next cohort
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--text-secondary)" }}>
              Cohort outcomes
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-y-10 divide-y divide-black/10 md:grid-cols-6 md:gap-y-0 md:divide-x md:divide-y-0">
            {[
              { v: "8", l: "Graduates trained" },
              { v: "3", l: "Immediate gigs (37.5%)" },
              { v: "1", l: "Mid-level designer" },
              { v: "1", l: "Senior designer" },
              { v: "62.5%", l: "Career outcomes" },
              { v: "3", l: "Cohorts delivered" },
            ].map((stat) => (
              <div key={stat.l} className="px-4 py-4 text-center">
                <div
                  className="text-[56px] font-bold leading-none tracking-[-0.03em] md:text-[64px]"
                  style={{ color: "var(--green-primary)" }}
                >
                  {stat.v}
                </div>
                <div className="mt-3 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programme" className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Programme
            </p>
            <h2 className="display-section mt-4">Two phases. Built to compound.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glass-card h-full p-10">
                <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                  Phase 1 — Foundation
                </div>
                <div className="mt-5 text-[48px] font-bold tracking-tight">₦45,000</div>
                <ul className="mt-5 space-y-1 text-[14px] text-white/65">
                  <li>· 6 weeks · Live online</li>
                  <li>· 2 sessions per week</li>
                  <li>· 10–14 students per cohort</li>
                </ul>
                <div className="mt-7 space-y-2 text-[15px] text-white/85">
                  <div>— Intro to UI/UX</div>
                  <div>— User Research</div>
                  <div>— Atomic Design</div>
                  <div>— Prototyping in Figma</div>
                </div>
                <div className="mt-10">
                  <Link href="/contact" className="btn-pill">
                    Apply for Phase 1
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="glass-card h-full p-10"
                style={{ borderColor: "rgba(62,207,126,0.25)" }}
              >
                <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                  Phase 2 — Professional
                </div>
                <div className="mt-5 text-[48px] font-bold tracking-tight">₦75,000</div>
                <ul className="mt-5 space-y-1 text-[14px] text-white/65">
                  <li>· 6 weeks · Live online</li>
                  <li>· 2 sessions per week</li>
                  <li>· 10–14 students per cohort</li>
                </ul>
                <div className="mt-7 space-y-2 text-[15px] text-white/85">
                  <div>— Advanced UI Systems</div>
                  <div>— Industry Case Studies</div>
                  <div>— End-to-End Projects</div>
                  <div>— Portfolio Development</div>
                </div>
                <div className="mt-10">
                  <Link href="/contact" className="btn-outline">
                    Apply for Phase 2
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Audience
            </p>
            <h2 className="display-section mt-4">Who should enrol.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              {
                t: "Graduates & NYSC",
                d: "University graduates and corps members entering the workforce.",
              },
              {
                t: "Career-switchers",
                d: "From banking, education, healthcare or media into product design.",
              },
              {
                t: "Upskillers",
                d: "Working professionals expanding their design toolkit.",
              },
              {
                t: "Graphic → Product",
                d: "Designers transitioning from graphic to product design.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 70}>
                <div className="minimal-card h-full p-6">
                  <div className="text-[18px] font-semibold" style={{ color: "var(--ink)" }}>
                    {item.t}
                  </div>
                  <p className="mt-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              After the course
            </p>
            <h2 className="display-section mt-4">We don&apos;t stop at graduation.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              "Portfolio & resume review",
              "Alumni community (WhatsApp / Discord)",
              "Jasiri Studio internship referral",
              "Ongoing mentorship",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 70}>
                <div className="glass-card h-full p-6 text-[15px]">{item}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full text-[24px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
            >
              SM
            </div>
            <h3 className="display-sub mt-6">Sharafadeen Mubarak</h3>
            <p className="mt-2 text-[17px]" style={{ color: "var(--text-secondary)" }}>
              Founder, Jasiri · Instructor, 7Central
            </p>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              6+ years designing enterprise products. Teaching UI/UX since 2023. 8
              graduates. 1 is now a senior designer.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="tonal-card p-10">
              <p
                className="border-l-[2px] pl-5 text-[28px] font-medium italic"
                style={{ color: "var(--green-primary)", lineHeight: 1.3, borderLeftColor: "var(--green-primary)" }}
              >
                &quot;1 graduate is now a senior designer.&quot;
              </p>
              <p className="mt-6 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                — The 7Central outcome statement
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-black text-center text-white">
        <div className="jasiri-container">
          <Reveal>
            <h2 className="display-section">Next cohort forming now.</h2>
            <p
              className="body-large mx-auto mt-6 max-w-[560px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Limited to 14 students per cohort. Spots fill fast.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-pill">
                Apply for Phase 1
              </Link>
              <Link href="/contact" className="btn-outline">
                Apply for Phase 2
              </Link>
            </div>
            <p className="mt-8 text-[14px]" style={{ color: "var(--text-tertiary)" }}>
              deen@jasiri.ng · +234 909 904 8059
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
