import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mockup } from "@/components/site/Mockup";
import { Reveal } from "@/components/site/Reveal";
import { getProject, nextProject, projects } from "@/lib/projects";

const steps = [
  "Discovery & Research",
  "User Flows & Architecture",
  "Wireframing",
  "High-Fidelity Design",
  "Prototype & Testing",
  "Handoff & Delivery",
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Case study — Jasiri",
    };
  }

  return {
    title: `${project.name} — Jasiri Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Jasiri Case Study`,
      description: project.description,
    },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const next = nextProject(slug);

  return (
    <>
      <section
        className="relative overflow-hidden bg-black text-white"
        style={{ minHeight: "calc(100vh - 48px)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 50% 35%, ${project.glow}, transparent 60%)` }}
        />
        <div
          className="jasiri-container relative flex flex-col items-center text-center"
          style={{ paddingTop: "14vh", paddingBottom: "6vh" }}
        >
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              {project.industry}
            </p>
            <h1 className="display-hero mt-6">{project.name}</h1>
            <p className="body-large mt-6" style={{ color: "var(--text-tertiary)" }}>
              {project.client}
            </p>
            <p
              className="mx-auto mt-3 max-w-[600px] text-[17px]"
              style={{ color: "var(--text-tertiary)" }}
            >
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[project.industry, project.platforms, `${project.screens} screens`].map((meta) => (
                <span
                  key={meta}
                  className="px-3 py-1.5 text-[13px]"
                  style={{
                    borderRadius: 980,
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {meta}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-14 w-full max-w-[1000px]">
              <Mockup glow={project.glow} aspect="16/8" label={`${project.client} · ${project.year}`} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {[
            { v: project.screens, l: "Screens delivered" },
            { v: project.timeline, l: "Timeline" },
            { v: project.platforms, l: "Platforms" },
            { v: project.engagement, l: "Engagement" },
          ].map((stat) => (
            <Reveal key={stat.l}>
              <div
                className="stat-num"
                style={{ color: "var(--green-primary)", fontSize: "clamp(40px, 6vw, 72px)" }}
              >
                {stat.v}
              </div>
              <div className="mt-4 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                {stat.l}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad border-t border-black/5 bg-white">
        <div className="jasiri-container grid gap-14 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              The brief
            </p>
            <h2 className="display-section mt-4">What the client needed.</h2>
            <div className="body-large mt-8 space-y-5" style={{ color: "var(--text-secondary)" }}>
              {project.brief.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="tonal-card p-8">
              <div className="eyebrow mb-4" style={{ color: "var(--green-primary)" }}>
                Project details
              </div>
              <dl className="space-y-3 text-[15px]">
                {[
                  ["Client", project.client],
                  ["Industry", project.industry],
                  ["Services", project.services.join(", ")],
                  ["Year", project.year],
                  ["Platforms", project.platforms],
                ].map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4 border-b border-black/5 pb-2">
                    <dt style={{ color: "var(--text-secondary)" }}>{key}</dt>
                    <dd className="text-right font-medium" style={{ color: "var(--ink)" }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              The challenge
            </p>
            <h2 className="display-section mt-4">What wasn&apos;t working.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 100}>
                <div
                  className="glass-card h-full p-8"
                  style={{ borderLeft: "2px solid rgba(62,207,126,0.5)" }}
                >
                  <h3 className="text-[24px] font-semibold">{challenge.title}</h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-white/65">
                    {challenge.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              The approach
            </p>
            <h2 className="display-section mt-4">How we approached it.</h2>
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-4 hidden h-px bg-black/10 md:block" />
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
              {steps.map((step, index) => (
                <Reveal key={step} delay={index * 70}>
                  <div className="relative">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                      style={{ background: "var(--green-primary)" }}
                    >
                      {index + 1}
                    </div>
                    <div className="mt-4 text-[15px] font-semibold" style={{ color: "var(--ink)" }}>
                      {step}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-black text-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Showcase
            </p>
            <h2 className="display-section mt-4">Selected screens.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Mockup glow={project.glow} aspect="16/10" label="01" />
            </Reveal>
            <Reveal delay={100}>
              <Mockup glow={project.glow} aspect="16/10" label="02" />
            </Reveal>
            <Reveal delay={140}>
              <div className="md:col-span-2">
                <Mockup glow={project.glow} aspect="21/9" label="03 · Full width" />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <Mockup glow={project.glow} aspect="4/5" label="04 · Mobile" />
            </Reveal>
            <Reveal delay={220}>
              <Mockup glow={project.glow} aspect="4/5" label="05 · Mobile" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
              Key decisions
            </p>
            <h2 className="display-section mt-4">Why we made the choices we did.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {project.decisions.map((decision, index) => (
              <Reveal key={decision.title} delay={index * 100}>
                <div className="minimal-card h-full p-8">
                  <h3 className="text-[22px] font-semibold" style={{ color: "var(--ink)" }}>
                    {decision.title}
                  </h3>
                  <DecisionRow label="The problem" value={decision.problem} />
                  <DecisionRow label="What we did" value={decision.did} />
                  <DecisionRow label="Why it works" value={decision.why} accent />
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
              Outcomes
            </p>
            <h2 className="display-section mt-4">What was delivered.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {project.outcomes.map((outcome) => (
              <Reveal key={outcome.label}>
                <div
                  className="text-[56px] font-bold leading-none tracking-[-0.03em] md:text-[72px]"
                  style={{ color: "var(--green-accent)" }}
                >
                  {outcome.value}
                </div>
                <div className="mt-4 text-[13px]" style={{ color: "var(--text-tertiary)" }}>
                  {outcome.label}
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="mx-auto mt-16 grid max-w-[860px] gap-3 md:grid-cols-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-[17px]">
                <span style={{ color: "var(--green-accent)" }}>✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {project.testimonial ? (
            <Reveal>
              <div
                className="mx-auto mt-20 max-w-[800px]"
                style={{ borderLeft: "2px solid var(--green-primary)", paddingLeft: 24 }}
              >
                <p className="text-[28px] font-medium italic leading-snug">
                  &quot;{project.testimonial.quote}&quot;
                </p>
                <p className="mt-5 text-[15px]" style={{ color: "var(--text-tertiary)" }}>
                  {project.testimonial.name} · {project.testimonial.role}
                </p>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="border-t border-black/5 bg-white py-16">
        <div className="jasiri-container flex flex-col items-center text-center">
          <p className="eyebrow" style={{ color: "var(--text-secondary)" }}>
            Next case study
          </p>
          <h3 className="display-sub mt-4">{next.name}</h3>
          <Link href={`/work/${next.slug}`} className="link-chev mt-5">
            View project
          </Link>
        </div>
      </section>
    </>
  );
}

function DecisionRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="mt-5">
      <div
        className="eyebrow mb-1"
        style={{ color: accent ? "var(--green-primary)" : "var(--text-secondary)" }}
      >
        {label}
      </div>
      <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {value}
      </p>
    </div>
  );
}
