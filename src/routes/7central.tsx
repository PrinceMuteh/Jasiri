import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/7central")({
  head: () => ({
    meta: [
      { title: "7Central — UI/UX Academy by Jasiri" },
      { name: "description", content: "Learn UI/UX from a designer actively building enterprise products. 8 graduates. 62.5% career outcomes." },
      { property: "og:title", content: "7Central — UI/UX Academy by Jasiri" },
      { property: "og:description", content: "Learn UI/UX from someone who actually does it." },
    ],
  }),
  component: SevenCentralPage,
});

function SevenCentralPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: "calc(100vh - 48px)" }}>
        <div className="hero-glow" />
        <div className="jasiri-container relative flex flex-col items-center text-center" style={{ paddingTop: "12vh", paddingBottom: "8vh" }}>
          <Reveal>
            <h1 style={{ fontSize: "clamp(64px, 11vw, 120px)", fontWeight: 800, letterSpacing: "-0.045em", lineHeight: 1 }}>
              7Central
            </h1>
            <p className="eyebrow mt-4" style={{ color: "var(--green-accent)" }}>
              design · innovate · scale
            </p>
            <p className="text-[13px] mt-3" style={{ color: "var(--text-tertiary)" }}>
              A division of Jasiri Tech Nigeria Ltd.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="display-section mt-12 max-w-[20ch]">Learn UI/UX from someone who actually does it.</h2>
            <p className="body-large mt-6 max-w-[640px] mx-auto" style={{ color: "var(--text-tertiary)" }}>
              Most courses are taught by people who studied design. 7Central is taught by a designer actively building enterprise
              products every day. The difference shows in the outcomes.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <a href="#programme" className="btn-pill">Enrol in the next cohort</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow text-center" style={{ color: "var(--text-secondary)" }}>Cohort outcomes</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-y-10 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-black/10">
            {[
              { v: "8", l: "Graduates trained" },
              { v: "3", l: "Immediate gigs (37.5%)" },
              { v: "1", l: "Mid-level designer" },
              { v: "1", l: "Senior designer" },
              { v: "62.5%", l: "Career outcomes" },
              { v: "3", l: "Cohorts delivered" },
            ].map((s) => (
              <div key={s.l} className="text-center px-4 py-4">
                <div className="text-[56px] md:text-[64px] font-bold leading-none" style={{ color: "var(--green-primary)", letterSpacing: "-0.03em" }}>
                  {s.v}
                </div>
                <div className="text-[13px] mt-3" style={{ color: "var(--text-secondary)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section id="programme" className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>Programme</p>
            <h2 className="display-section mt-4">Two phases. Built to compound.</h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass-card p-10 h-full">
                <div className="eyebrow" style={{ color: "var(--green-accent)" }}>Phase 1 — Foundation</div>
                <div className="text-[48px] font-bold mt-5 tracking-tight">₦45,000</div>
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
                  <Link to="/contact" className="btn-pill">Apply for Phase 1</Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="glass-card p-10 h-full" style={{ borderColor: "rgba(62,207,126,0.25)" }}>
                <div className="eyebrow" style={{ color: "var(--green-accent)" }}>Phase 2 — Professional</div>
                <div className="text-[48px] font-bold mt-5 tracking-tight">₦75,000</div>
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
                  <Link to="/contact" className="btn-outline">Apply for Phase 2</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who should enrol */}
      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>Audience</p>
            <h2 className="display-section mt-4">Who should enrol.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { t: "Graduates & NYSC", d: "University graduates and corps members entering the workforce." },
              { t: "Career-switchers", d: "From banking, education, healthcare or media into product design." },
              { t: "Upskillers", d: "Working professionals expanding their design toolkit." },
              { t: "Graphic → Product", d: "Designers transitioning from graphic to product design." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 70}>
                <div className="minimal-card p-6 h-full">
                  <div className="text-[18px] font-semibold" style={{ color: "var(--ink)" }}>{x.t}</div>
                  <p className="mt-3 text-[14px]" style={{ color: "var(--text-secondary)" }}>{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Post-course support */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>After the course</p>
            <h2 className="display-section mt-4">We don't stop at graduation.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {["Portfolio & resume review", "Alumni community (WhatsApp / Discord)", "Jasiri Studio internship referral", "Ongoing mentorship"].map((s, i) => (
              <Reveal key={s} delay={i * 70}>
                <div className="glass-card p-6 h-full text-[15px]">{s}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="section-pad bg-white">
        <div className="jasiri-container grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-[24px] font-semibold"
              style={{ background: "linear-gradient(135deg, #1A7A4A, #3ECF7E)" }}
            >
              SM
            </div>
            <h3 className="display-sub mt-6">Sharafadeen Mubarak</h3>
            <p className="text-[17px] mt-2" style={{ color: "var(--text-secondary)" }}>Founder, Jasiri · Instructor, 7Central</p>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              6+ years designing enterprise products. Teaching UI/UX since 2023. 8 graduates. 1 is now a senior designer.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="tonal-card p-10">
              <p className="text-[28px] italic font-medium" style={{ color: "var(--green-primary)", lineHeight: 1.3, borderLeft: "2px solid var(--green-primary)", paddingLeft: "20px" }}>
                "1 graduate is now a senior designer."
              </p>
              <p className="mt-6 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                — The 7Central outcome statement
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enrolment CTA */}
      <section className="section-pad bg-black text-white text-center">
        <div className="jasiri-container">
          <Reveal>
            <h2 className="display-section">Next cohort forming now.</h2>
            <p className="body-large mt-6 max-w-[560px] mx-auto" style={{ color: "var(--text-tertiary)" }}>
              Limited to 14 students per cohort. Spots fill fast.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn-pill">Apply for Phase 1</Link>
              <Link to="/contact" className="btn-outline">Apply for Phase 2</Link>
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