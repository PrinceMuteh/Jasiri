import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Mockup } from "@/components/site/Mockup";
import { getProject, nextProject } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project, next: nextProject(params.slug) };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Case study — Jasiri" }] };
    return {
      meta: [
        { title: `${p.name} — Jasiri Case Study` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.name} — Jasiri Case Study` },
        { property: "og:description", content: p.description },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="bg-black text-white" style={{ minHeight: "60vh" }}>
      <div className="jasiri-container py-32 text-center">
        <h1 className="display-section">Project not found.</h1>
        <p className="mt-6"><Link to="/work" className="link-chev-dark link-chev">Back to work</Link></p>
      </div>
    </div>
  ),
});

const steps = [
  "Discovery & Research",
  "User Flows & Architecture",
  "Wireframing",
  "High-Fidelity Design",
  "Prototype & Testing",
  "Handoff & Delivery",
];

function CaseStudy() {
  const data = Route.useLoaderData() as { project: Project; next: Project };
  const { project: p, next } = data;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: "calc(100vh - 48px)" }}>
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% 35%, ${p.glow}, transparent 60%)` }} />
        <div className="jasiri-container relative text-center flex flex-col items-center" style={{ paddingTop: "14vh", paddingBottom: "6vh" }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>{p.industry}</p>
            <h1 className="display-hero mt-6">{p.name}</h1>
            <p className="body-large mt-6" style={{ color: "var(--text-tertiary)" }}>{p.client}</p>
            <p className="text-[17px] mt-3 max-w-[600px] mx-auto" style={{ color: "var(--text-tertiary)" }}>{p.description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[p.industry, p.platforms, `${p.screens} screens`].map((m) => (
                <span key={m} className="text-[13px] px-3 py-1.5" style={{ borderRadius: 980, background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)" }}>{m}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-14 w-full max-w-[1000px]">
              <Mockup glow={p.glow} aspect="16/8" label={`${p.client} · ${p.year}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview stats */}
      <section className="section-pad bg-white">
        <div className="jasiri-container grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { v: p.screens, l: "Screens delivered" },
            { v: p.timeline, l: "Timeline" },
            { v: p.platforms, l: "Platforms" },
            { v: p.engagement, l: "Engagement" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="stat-num" style={{ color: "var(--green-primary)", fontSize: "clamp(40px, 6vw, 72px)" }}>{s.v}</div>
              <div className="mt-4 text-[15px]" style={{ color: "var(--text-secondary)" }}>{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brief */}
      <section className="section-pad bg-white border-t border-black/5">
        <div className="jasiri-container grid md:grid-cols-2 gap-14">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>The brief</p>
            <h2 className="display-section mt-4">What the client needed.</h2>
            <div className="mt-8 space-y-5 body-large" style={{ color: "var(--text-secondary)" }}>
              {p.brief.map((b, i) => <p key={i}>{b}</p>)}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="tonal-card p-8">
              <div className="eyebrow mb-4" style={{ color: "var(--green-primary)" }}>Project details</div>
              <dl className="space-y-3 text-[15px]">
                {[
                  ["Client", p.client],
                  ["Industry", p.industry],
                  ["Services", p.services.join(", ")],
                  ["Year", p.year],
                  ["Platforms", p.platforms],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <dt style={{ color: "var(--text-secondary)" }}>{k}</dt>
                    <dd className="text-right font-medium" style={{ color: "var(--ink)" }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>The challenge</p>
            <h2 className="display-section mt-4">What wasn't working.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {p.challenges.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="glass-card p-8 h-full" style={{ borderLeft: "2px solid rgba(62,207,126,0.5)" }}>
                  <h3 className="text-[24px] font-semibold">{c.title}</h3>
                  <p className="mt-4 text-[17px] text-white/65 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>The approach</p>
            <h2 className="display-section mt-4">How we approached it.</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute top-4 left-0 right-0 h-px bg-black/10 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {steps.map((s, i) => (
                <Reveal key={s} delay={i * 70}>
                  <div className="relative">
                    <div
                      className="w-8 h-8 rounded-full text-white text-[13px] font-semibold flex items-center justify-center"
                      style={{ background: "var(--green-primary)" }}
                    >
                      {i + 1}
                    </div>
                    <div className="mt-4 text-[15px] font-semibold" style={{ color: "var(--ink)" }}>{s}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>Showcase</p>
            <h2 className="display-section mt-4">Selected screens.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal><Mockup glow={p.glow} aspect="16/10" label="01" /></Reveal>
            <Reveal delay={100}><Mockup glow={p.glow} aspect="16/10" label="02" /></Reveal>
            <Reveal delay={140}><div className="md:col-span-2"><Mockup glow={p.glow} aspect="21/9" label="03 · Full width" /></div></Reveal>
            <Reveal delay={180}><Mockup glow={p.glow} aspect="4/5" label="04 · Mobile" /></Reveal>
            <Reveal delay={220}><Mockup glow={p.glow} aspect="4/5" label="05 · Mobile" /></Reveal>
          </div>
        </div>
      </section>

      {/* Decisions */}
      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>Key decisions</p>
            <h2 className="display-section mt-4">Why we made the choices we did.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {p.decisions.map((d, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="minimal-card p-8 h-full">
                  <h3 className="text-[22px] font-semibold" style={{ color: "var(--ink)" }}>{d.title}</h3>
                  <Row label="The problem" value={d.problem} />
                  <Row label="What we did" value={d.did} />
                  <Row label="Why it works" value={d.why} accent />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>Outcomes</p>
            <h2 className="display-section mt-4">What was delivered.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {p.outcomes.map((o) => (
              <Reveal key={o.label}>
                <div className="text-[56px] md:text-[72px] font-bold leading-none" style={{ color: "var(--green-accent)", letterSpacing: "-0.03em" }}>{o.value}</div>
                <div className="mt-4 text-[13px]" style={{ color: "var(--text-tertiary)" }}>{o.label}</div>
              </Reveal>
            ))}
          </div>
          <ul className="mt-16 grid md:grid-cols-2 gap-3 max-w-[860px] mx-auto">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[17px]">
                <span style={{ color: "var(--green-accent)" }}>✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {p.testimonial && (
            <Reveal>
              <div className="mt-20 max-w-[800px] mx-auto" style={{ borderLeft: "2px solid var(--green-primary)", paddingLeft: 24 }}>
                <p className="text-[28px] italic font-medium leading-snug">"{p.testimonial.quote}"</p>
                <p className="mt-5 text-[15px]" style={{ color: "var(--text-tertiary)" }}>{p.testimonial.name} · {p.testimonial.role}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Next */}
      <section className="py-16 bg-white border-t border-black/5">
        <div className="jasiri-container flex flex-col items-center text-center">
          <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>Next case study</p>
          <h3 className="display-sub mt-4">{next.name}</h3>
          <Link to="/work/$slug" params={{ slug: next.slug }} className="link-chev mt-5">View project</Link>
        </div>
      </section>
    </>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="mt-5">
      <div className="eyebrow mb-1" style={{ color: accent ? "var(--green-primary)" : "var(--text-secondary)" }}>{label}</div>
      <p className="text-[15px]" style={{ color: "var(--ink)" }}>{value}</p>
    </div>
  );
}