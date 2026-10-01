import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mockup } from "@/components/site/Mockup";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Jasiri" },
      {
        name: "description",
        content:
          "700+ screens. Real clients. Real work. Fintech, insurance, mobility, SaaS and branding case studies.",
      },
      { property: "og:title", content: "Work — Jasiri" },
      { property: "og:description", content: "700+ screens. Real clients. Real work." },
    ],
  }),
  component: WorkPage,
});

const filters = [
  "All",
  "Fintech",
  "Insurance",
  "Microfinance",
  "Mobility",
  "SaaS",
  "Branding",
] as const;

function WorkPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.industry === active);
  }, [active]);

  return (
    <>
      <section className="relative bg-black text-white overflow-hidden">
        <div className="hero-glow" />
        <div
          className="jasiri-container relative text-center"
          style={{ paddingTop: "16vh", paddingBottom: "10vh" }}
        >
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Selected work
            </p>
            <h1 className="display-hero mt-6">
              700+ screens.
              <br />
              Real clients. Real work.
            </h1>
            <p
              className="body-large mt-6 max-w-[560px] mx-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              Fintech, insurance, mobility, SaaS and branding — products and identities shipped
              end-to-end.
            </p>
          </Reveal>
        </div>
      </section>

      <div
        className="sticky z-40 bg-white/80 backdrop-blur-md border-b border-black/5"
        style={{ top: 48 }}
      >
        <div className="jasiri-container py-4 flex flex-wrap items-center gap-2">
          <span
            className="text-[12px] uppercase tracking-[0.08em] mr-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Filter
          </span>
          {filters.map((f) => {
            const on = f === active;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="text-[13px] px-4 py-1.5 transition-colors"
                style={{
                  borderRadius: 980,
                  background: on ? "var(--green-primary)" : "transparent",
                  color: on ? "#fff" : "var(--text-secondary)",
                  border: on ? "1px solid var(--green-primary)" : "1px solid rgba(0,0,0,0.12)",
                }}
              >
                {f === "All" ? "All industries" : f}
              </button>
            );
          })}
          <span
            className="ml-auto hidden md:inline text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            {list.length} case {list.length === 1 ? "study" : "studies"}
          </span>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="jasiri-container grid md:grid-cols-2 gap-8">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="block dark-card overflow-hidden"
              >
                <Mockup glow={p.glow} aspect="16/10" />
                <div className="bg-white p-7">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="eyebrow" style={{ color: "var(--green-accent)" }}>
                      {p.industry}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--text-tertiary)" }}>
                      {p.screens} screens
                    </span>
                  </div>
                  <h3 className="text-[24px] font-semibold" style={{ color: "var(--ink)" }}>
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                    {p.tagline}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {p.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome.label} className="rounded-[8px] border border-black/10 p-3">
                        <div
                          className="text-[20px] font-semibold leading-none"
                          style={{ color: "var(--green-primary)" }}
                        >
                          {outcome.value}
                        </div>
                        <div
                          className="mt-1 text-[12px]"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 link-chev">View case study</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-black text-white text-center">
        <div className="jasiri-container">
          <h2 className="display-section">Want work like this? Let's build it.</h2>
          <div className="mt-10">
            <Link to="/contact" className="btn-pill">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
