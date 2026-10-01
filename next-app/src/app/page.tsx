import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { Mockup } from "@/components/site/Mockup";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      <section
        className="relative overflow-hidden bg-black text-white"
        style={{ minHeight: "calc(92vh - 48px)" }}
      >
        <div className="hero-glow" />
        <div
          className="jasiri-container relative flex flex-col items-center px-6 pb-[8vh] pt-[10vh] text-center"
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
            <p
              className="body-large mt-6 max-w-[680px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Design, development, branding, and launch support for founders and business
              teams who need useful products shipped with care.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link href="/contact" className="btn-pill">
                Start a project <ArrowRight size={18} strokeWidth={1.8} />
              </Link>
              <Link href="/work" className="link-chev link-chev-dark">
                See case studies
              </Link>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-12 grid w-full max-w-[760px] grid-cols-3 gap-6 text-center">
              {[
                { v: "700+", l: "Screens delivered" },
                { v: "6 yrs", l: "Founder experience" },
                { v: "3", l: "Markets served" },
              ].map((item) => (
                <div key={item.l} className="border-t border-white/10 pt-4">
                  <div className="text-[28px] font-bold leading-none md:text-[34px]">{item.v}</div>
                  <div className="mt-2 text-[12px] uppercase text-white/45">{item.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
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
        <div className="proof-strip">
          <div className="jasiri-container flex flex-wrap items-center justify-center gap-x-10 gap-y-2 py-5 text-[13px] text-white/55">
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

      <section className="section-pad bg-white">
        <div className="jasiri-container grid gap-14 text-center md:grid-cols-3 md:gap-10">
          {[
            {
              n: 700,
              suf: "+",
              label: "Screens delivered across fintech, insurance, mobility, and SaaS",
            },
            {
              n: 6,
              suf: " yrs",
              label: "Founder experience in enterprise-grade product design",
            },
            {
              n: 62.5,
              suf: "%",
              label: "Career outcome rate from 7Central training cohorts",
              isFloat: true,
            },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="stat-num" style={{ color: "var(--green-primary)" }}>
                {stat.isFloat ? (
                  <>
                    {stat.n}
                    {stat.suf}
                  </>
                ) : (
                  <CountUp to={stat.n} suffix={stat.suf} />
                )}
              </div>
              <p className="mt-5 text-[17px]" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-black/5 bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Selected work
            </p>
            <h2 className="display-section mt-4">Products we&apos;ve shaped.</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link href={`/work/${project.slug}`} className="block overflow-hidden dark-card">
                  <Mockup glow={project.glow} aspect="16/10" />
                  <div className="bg-white p-7">
                    <div className="eyebrow" style={{ color: "var(--green-accent)" }}>
                      {project.industry}
                    </div>
                    <h3 className="mt-2 text-[21px] font-semibold" style={{ color: "var(--ink)" }}>
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                      {project.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.outcomes.slice(0, 2).map((outcome) => (
                        <span
                          key={outcome.label}
                          className="rounded-full px-3 py-1.5 text-[12px]"
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
            <Link href="/work" className="link-chev">
              View all work
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Capabilities
            </p>
            <h2 className="display-section mt-4 max-w-[18ch]">We keep it simple. Always.</h2>
            <p className="body-large mt-6 max-w-[640px]" style={{ color: "var(--text-tertiary)" }}>
              Not a menu of services. A focused set of capabilities built around what
              businesses and entrepreneurs actually need.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
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
            ].map((service, i) => (
              <Reveal key={service.name} delay={i * 100}>
                <div className="glass-card h-full p-8">
                  <div className="text-[28px]" style={{ color: "var(--green-accent)" }}>
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-[24px] font-semibold">{service.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services" className="link-chev link-chev-dark">
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black/5 bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              How we build
            </p>
            <h2 className="display-section mt-4 max-w-[18ch]">
              Clear decisions before beautiful screens.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-4">
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
                <div className="minimal-card h-full p-6">
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
                  <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-black/5 bg-white">
        <div className="jasiri-container grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Training · 7Central
            </p>
            <h2 className="display-section mt-4 max-w-[16ch]">
              Learn UI/UX from someone who does it.
            </h2>
            <p className="body-large mt-6" style={{ color: "var(--text-secondary)" }}>
              7Central is taught by a designer actively building enterprise products. The
              outcomes show it.
            </p>
            <div className="mt-8">
              <Link href="/7central" className="link-chev">
                Explore 7Central
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="tonal-card grid grid-cols-3 gap-6 p-10 text-center">
              {[
                { v: "8", l: "Graduates" },
                { v: "62.5%", l: "Career outcomes" },
                { v: "1", l: "Senior designer produced" },
              ].map((stat) => (
                <div key={stat.l}>
                  <div className="text-[44px] font-bold leading-none" style={{ color: "var(--green-primary)" }}>
                    {stat.v}
                  </div>
                  <div className="mt-3 text-[13px]" style={{ color: "var(--text-secondary)" }}>
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-black text-center text-white">
        <div className="jasiri-container">
          <Reveal>
            <h2 className="display-section">Ready to build?</h2>
            <p
              className="body-large mx-auto mt-6 max-w-[560px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Tell us about your idea. We&apos;ll help you build exactly what you need.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-pill">
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
