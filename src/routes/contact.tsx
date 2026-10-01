import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jasiri" },
      {
        name: "description",
        content:
          "Tell us about your idea. We'll help you build exactly what you need. Abuja, Nigeria.",
      },
      { property: "og:title", content: "Contact — Jasiri" },
      { property: "og:description", content: "Let's build something together." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "Do you work with clients outside Abuja?",
    a: "Yes — we're fully remote-first and work with clients across Nigeria, the UK, and the US.",
  },
  {
    q: "What size of business do you work with?",
    a: "MSMEs, startups, and individuals at any stage. From first product to full platform.",
  },
  {
    q: "What makes Jasiri different from a regular agency?",
    a: "We're an execution partner, not a vendor. We think like founders, not service providers.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. We'll clarify in our first conversation — no surprises.",
  },
  { q: "Can I hire Jasiri on retainer?", a: "Yes. Monthly retainers start from ₦150,000/month." },
  {
    q: "How do I enrol in 7Central?",
    a: "Email deen@jasiri.ng or fill in the form above and select '7Central Enrolment'.",
  },
];

const intents = [
  "Branding & Graphics",
  "Tech Design & Dev",
  "7Central Enrolment",
  "Document Design",
  "Team Augmentation",
];

function ContactPage() {
  const [intent, setIntent] = useState<string | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section
        className="relative bg-black text-white overflow-hidden"
        style={{ minHeight: "50vh" }}
      >
        <div className="hero-glow" />
        <div
          className="jasiri-container relative text-center flex flex-col justify-center"
          style={{ minHeight: "50vh", paddingTop: "10vh", paddingBottom: "8vh" }}
        >
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--green-accent)" }}>
              Contact
            </p>
            <h1 className="display-hero mt-6 max-w-[18ch] mx-auto">
              Let's build something together.
            </h1>
            <p
              className="body-large mt-6 max-w-[560px] mx-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              Tell us about your idea. We'll help you build exactly what you need.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="jasiri-container grid md:grid-cols-2 gap-14">
          {/* Left — Contact */}
          <Reveal>
            <h2 className="display-sub" style={{ color: "var(--ink)" }}>
              Reach us directly.
            </h2>
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {[
                { label: "Email", href: "mailto:deen@jasiri.ng", icon: Mail },
                { label: "Call", href: "tel:+2349099048059", icon: Phone },
                { label: "WhatsApp", href: "https://wa.me/2349099048059", icon: MessageSquare },
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-black/10 px-4 py-3 text-[14px] font-medium transition-colors hover:bg-black hover:text-white"
                  >
                    <Icon size={17} strokeWidth={1.8} />
                    {action.label}
                  </a>
                );
              })}
            </div>
            <ul className="mt-10 divide-y divide-black/10">
              {[
                { l: "Email", v: "deen@jasiri.ng", href: "mailto:deen@jasiri.ng" },
                { l: "Phone", v: "+234 909 904 8059", href: "tel:+2349099048059" },
                { l: "Web", v: "www.jasiri.ng", href: "https://www.jasiri.ng" },
                { l: "Address", v: "No. 26, 62 Road off 6th Avenue, Gwarimpa, Abuja" },
                { l: "LinkedIn", v: "Sharafadeen Mubarak" },
                { l: "Dribbble", v: "tactical_deen" },
              ].map((c) => (
                <li key={c.l} className="py-4 flex justify-between gap-6 items-baseline">
                  <span
                    className="text-[12px] uppercase tracking-[0.06em]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {c.l}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-[16px] font-medium text-right"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.v}
                    </a>
                  ) : (
                    <span
                      className="text-[16px] font-medium text-right"
                      style={{ color: "var(--ink)" }}
                    >
                      {c.v}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <div className="eyebrow mb-4" style={{ color: "var(--text-secondary)" }}>
                Quick select
              </div>
              <div className="flex flex-wrap gap-2">
                {intents.map((i) => {
                  const on = intent === i;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIntent(i)}
                      className="text-[13px] px-3 py-1.5 transition-colors"
                      style={{
                        borderRadius: 980,
                        background: on ? "var(--green-primary)" : "rgba(0,0,0,0.05)",
                        color: on ? "#fff" : "var(--ink)",
                      }}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={140}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="p-6 md:p-10 rounded-[12px]"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              {submitted && (
                <div
                  className="mb-8 flex gap-3 rounded-[8px] p-4"
                  style={{ background: "rgba(26,122,74,0.08)", color: "var(--green-primary)" }}
                  role="status"
                >
                  <CheckCircle2 size={20} strokeWidth={1.8} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Message prepared.</div>
                    <p className="mt-1 text-[14px]" style={{ color: "var(--text-secondary)" }}>
                      This demo form is ready for backend wiring. For now, use email, phone, or
                      WhatsApp for the fastest response.
                    </p>
                  </div>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full name">
                  <input name="name" className="apple-input" required />
                </Field>
                <Field label="Company">
                  <input name="company" className="apple-input" />
                </Field>
                <Field label="Email">
                  <input name="email" type="email" className="apple-input" required />
                </Field>
                <Field label="Phone">
                  <input name="phone" className="apple-input" />
                </Field>
              </div>
              <div className="mt-6">
                <Field label="What do you need?">
                  <select
                    name="intent"
                    className="apple-input"
                    value={intent || ""}
                    onChange={(e) => setIntent(e.target.value || null)}
                  >
                    <option value="">Select…</option>
                    <option>Tech Design & Dev</option>
                    <option>Branding & Graphics</option>
                    <option>Document Design</option>
                    <option>Digital Marketing</option>
                    <option>Team Augmentation</option>
                    <option>7Central Enrolment</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>
              <div className="mt-6">
                <Field label="Tell us more">
                  <textarea name="message" rows={5} className="apple-input resize-none" />
                </Field>
              </div>
              <button type="submit" className="btn-pill w-full mt-10">
                Send message <Send size={17} strokeWidth={1.8} />
              </button>
              <p
                className="text-[14px] mt-5 text-center"
                style={{ color: "var(--text-secondary)" }}
              >
                We typically respond within 24 hours.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-black text-white">
        <div className="jasiri-container max-w-[860px] mx-auto">
          <Reveal>
            <h2 className="display-section">Questions.</h2>
          </Reveal>
          <div className="mt-12">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-t border-white/10 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <span className="text-[19px] font-medium">{f.q}</span>
                    <span
                      className="text-[24px] transition-transform"
                      style={{
                        color: "var(--green-accent)",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <p className="text-[17px] pb-6" style={{ color: "var(--text-tertiary)" }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="apple-label">{label}</span>
      {children}
    </label>
  );
}
