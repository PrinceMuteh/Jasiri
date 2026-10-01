"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mockup } from "@/components/site/Mockup";
import { projects } from "@/lib/projects";

const filters = ["All", "Fintech", "Insurance", "Microfinance", "Mobility", "SaaS", "Branding"] as const;

export function WorkPageClient() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.industry === active);
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden bg-black text-white">
        <div className="hero-glow" />
        <div
          className="jasiri-container relative py-[10vh] pt-[16vh] text-center"
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
              className="body-large mx-auto mt-6 max-w-[560px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Fintech, insurance, mobility, SaaS and branding — products and
              identities shipped end-to-end.
            </p>
          </Reveal>
        </div>
      </section>

      <div
        className="sticky z-40 border-b border-black/5 bg-white/80 backdrop-blur-md"
        style={{ top: 48 }}
      >
        <div className="jasiri-container flex flex-wrap items-center gap-2 py-4">
          <span
            className="mr-2 text-[12px] uppercase tracking-[0.08em]"
            style={{ color: "var(--text-secondary)" }}
          >
            Filter
          </span>
          {filters.map((filter) => {
            const on = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className="px-4 py-1.5 text-[13px] transition-colors"
                style={{
                  borderRadius: 980,
                  background: on ? "var(--green-primary)" : "transparent",
                  color: on ? "#fff" : "var(--text-secondary)",
                  border: on
                    ? "1px solid var(--green-primary)"
                    : "1px solid rgba(0,0,0,0.12)",
                }}
              >
                {filter === "All" ? "All industries" : filter}
              </button>
            );
          })}
          <span className="ml-auto hidden text-[13px] md:inline" style={{ color: "var(--text-secondary)" }}>
            {list.length} case {list.length === 1 ? "study" : "studies"}
          </span>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="jasiri-container grid gap-8 md:grid-cols-2">
          {list.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link href={`/work/${project.slug}`} className="block overflow-hidden dark-card">
                <Mockup glow={project.glow} aspect="16/10" />
                <div className="bg-white p-7">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="eyebrow" style={{ color: "var(--green-accent)" }}>
                      {project.industry}
                    </span>
                    <span className="text-[12px]" style={{ color: "var(--text-tertiary)" }}>
                      {project.screens} screens
                    </span>
                  </div>
                  <h3 className="text-[24px] font-semibold" style={{ color: "var(--ink)" }}>
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                    {project.tagline}
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {project.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome.label} className="rounded-[8px] border border-black/10 p-3">
                        <div
                          className="text-[20px] font-semibold leading-none"
                          style={{ color: "var(--green-primary)" }}
                        >
                          {outcome.value}
                        </div>
                        <div className="mt-1 text-[12px]" style={{ color: "var(--text-secondary)" }}>
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="link-chev mt-5">View case study</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-black text-white text-center">
        <div className="jasiri-container">
          <h2 className="display-section">Want work like this? Let&apos;s build it.</h2>
          <div className="mt-10">
            <Link href="/contact" className="btn-pill">
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
