import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { Mockup } from "@/components/site/Mockup";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jasiri — We help you build what you need." },
      {
        name: "description",
        content:
          "Technology for business. Business for people. Design, development, branding and marketing — simply and bravely.",
      },
      { property: "og:title", content: "Jasiri — We help you build what you need." },
      {
        property: "og:description",
        content: "Technology for business. Business for people. Built simply and bravely.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.slice(0, 4);
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-black text-white overflow-hidden"
        style={{ minHeight: "calc(92vh - 48px)" }}
      >
        <div className="hero-glow" />
        <div
          className="jasiri-container relative flex flex-col items-center text-center"
          style={{ paddingTop: "10vh", paddingBottom: "8vh" }}
        >
          <Reveal>
            <BrandLogo darkSurface className="mx-auto" />
          </Reveal>
          <Reveal>
            <p className="eyebrow mt-8" style={{ color: "var(--green-accent)" }}>
              Product studio · Abuja, Nigeria
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-hero mt-5 max-w-[14ch]">Jasiri</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="body-large mt-6 max-w-[680px]" style={{ color: "var(--text-tertiary)" }}>
              Design, development, branding, and launch support for founders and business teams who
              need useful products shipped with care.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link to="/contact" className="btn-pill">
                Start a project <ArrowRight size={18} strokeWidth={1.8} />
              </Link>
              <Link to="/work" className="link-chev link-chev-dark">
                See case studies
              </Link>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-12 grid grid-cols-3 gap-6 text-center w-full max-w-[760px]">
              {[
                { v: "700+", l: "Screens delivered" },
                { v: "6 yrs", l: "Founder experience" },
                { v: "3", l: "Markets served" },
              ].map((item) => (
                <div key={item.l} className="border-t border-white/10 pt-4">
                  <div className="text-[28px] md:text-[34px] font-bold leading-none">{item.v}</div>
                  <div className="mt-2 text-[12px] uppercase text-white/45">{item.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Banner / preview */}
          <Reveal delay={560}>
            <div className="mt-14 w-full max-w-[1000px]">
              <Mockup
                glow="rgba(62,207,126,0.40)"
                aspect="16/8"
                label="Featured · 9th Payment Services"
              />
            </div>
          </Reveal>
        </div>
        {/* Client ticker */}
        <div className="proof-strip">
          <div className="jasiri-container py-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px] text-white/55">
            <span className="text-white/80">Selected client work</span>
            <span>Consolidated Hallmark Plc</span>
            <span>·</span>
            <span>9th Payment Services</span>
            <span>·</span>
            <span>Kayi Microfinance Bank</span>
            <span>·</span>
            <span>Motor Africa USA</span>
            <span>·</span>
            <span>My Event Pod UK</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad bg-white">
        <div className="jasiri-container grid md:grid-cols-3 gap-14 md:gap-10 text-center">
          {[
            {
              n: 700,
              suf: "+",
              label: "Screens delivered across fintech, insurance, mobility, and SaaS",
            },
            { n: 6, suf: " yrs", label: "Founder experience in enterprise-grade product design" },
            {
              n: 62.5,
              suf: "%",
              label: "Career outcome rate from 7Central training cohorts",
              isFloat: true,
            },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="stat-num" style={{ color: "var(--green-primary)" }}>
                {s.isFloat ? (
                  <>
                    {s.n}
                    {s.suf}
                  </>
                ) : (
                  <CountUp to={s.n} suffix={s.suf} />
                )}
              </div>
              <p className="mt-5 text-[17px]" style={{ color: "var(--text-secondary)" }}>
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="section-pad bg-white border-t border-black/5">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Selected work
            </p>
            <h2 className="display-section mt-4">Products we've shaped.</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="block dark-card overflow-hidden"
                >
                  <Mockup glow={p.glow} aspect="16/10" />
                  <div className="bg-white p-7">
                    <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                      {p.industry}
                    </div>
                    <h3 className="text-[21px] font-semibold mt-2" style={{ color: "var(--ink)" }}>
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                      {p.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.outcomes.slice(0, 2).map((outcome) => (
                        <span
                          key={outcome.label}
                          className="text-[12px] px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(26,122,74,0.08)",
                            color: "var(--green-primary)",
                          }}
                        >
                          {outcome.value} {outcome.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/work" className="link-chev">
              View all work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Capabilities
            </p>
            <h2 className="display-section mt-4 max-w-[18ch]">We keep it simple. Always.</h2>
            <p className="body-large mt-6 max-w-[640px]" style={{ color: "var(--text-tertiary)" }}>
              Not a menu of services. A focused set of capabilities built around what businesses and
              entrepreneurs actually need.
            </p>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "◐",
                name: "Tech Design & Dev",
                desc: "End-to-end UI/UX and product development for web and mobile. Delivered in Figma with full dev handoff.",
              },
              {
                icon: "◇",
                name: "Branding & Graphics",
                desc: "Brand strategy, visual identity, and marketing collateral that communicates who you are and why you matter.",
              },
              {
                icon: "◈",
                name: "Digital Marketing",
                desc: "SEO, social, and content marketing that builds real audience — not vanity metrics. Built around your goals.",
              },
            ].map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <div className="glass-card p-8 h-full">
                  <div className="text-[28px]" style={{ color: "var(--green-accent)" }}>
                    {s.icon}
                  </div>
                  <h3 className="text-[24px] font-semibold mt-5">{s.name}</h3>
                  <p className="mt-3 text-[15px] text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services" className="link-chev link-chev-dark">
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-white border-t border-black/5">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              How we build
            </p>
            <h2 className="display-section mt-4 max-w-[18ch]">
              Clear decisions before beautiful screens.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {[
              {
                t: "Scope",
                d: "We define the business goal, buyer, constraints, and what should be shipped first.",
              },
              {
                t: "Shape",
                d: "We map flows, content, components, and the decisions the interface must make obvious.",
              },
              {
                t: "Build",
                d: "We design or develop in focused sprints with review points that keep teams aligned.",
              },
              {
                t: "Launch",
                d: "We hand over assets, QA the experience, and support the next practical iteration.",
              },
            ].map((step, i) => (
              <Reveal key={step.t} delay={i * 80}>
                <div className="minimal-card p-6 h-full">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      strokeWidth={1.8}
                      style={{ color: "var(--green-primary)" }}
                    />
                    <div className="text-[18px] font-semibold" style={{ color: "var(--ink)" }}>
                      {step.t}
                    </div>
                  </div>
                  <p
                    className="mt-4 text-[14px] leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7CENTRAL TEASER */}
      <section className="section-pad bg-white border-t border-black/5">
        <div className="jasiri-container grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Training · 7Central
            </p>
            <h2 className="display-section mt-4 max-w-[16ch]">
              Learn UI/UX from someone who does it.
            </h2>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              7Central is taught by a designer actively building enterprise products. The outcomes
              show it.
            </p>
            <div className="mt-8">
              <Link to="/7central" className="link-chev">
                Explore 7Central
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="tonal-card p-10 grid grid-cols-3 gap-6 text-center">
              {[
                { v: "8", l: "Graduates" },
                { v: "62.5%", l: "Career outcomes" },
                { v: "1", l: "Senior designer produced" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-[44px] font-bold leading-none"
                    style={{ color: "var(--green-primary)" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-[13px] mt-3" style={{ color: "var(--text-secondary)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-black text-white text-center">
        <div className="jasiri-container">
          <Reveal>
            <h2 className="display-section">Ready to build?</h2>
            <p
              className="body-large mt-6 max-w-[560px] mx-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              Tell us about your idea. We'll help you build exactly what you need.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn-pill">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
