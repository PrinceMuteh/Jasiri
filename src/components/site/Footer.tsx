import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="jasiri-container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <BrandLogo darkSurface />
          <p className="text-[14px] text-white/55 mt-3 max-w-xs leading-relaxed">
            We help you build what you need. Technology for business. Business for people.
          </p>
          <p className="text-[12px] text-white/40 mt-4">RC 7282599</p>
          <div className="mt-6">
            <Link to="/contact" className="btn-pill" style={{ padding: "10px 18px", fontSize: 14 }}>
              Start a project
            </Link>
          </div>
        </div>
        <FooterCol
          title="Navigate"
          links={[
            { to: "/", label: "Home" },
            { to: "/work", label: "Work" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Services"
          links={[
            { to: "/services", label: "Tech Design & Dev" },
            { to: "/services", label: "Branding & Graphics" },
            { to: "/services", label: "Document Design" },
            { to: "/services", label: "Digital Marketing" },
            { to: "/services", label: "Team Augmentation" },
          ]}
        />
        <div>
          <div className="text-[12px] uppercase tracking-[0.08em] text-white/55 mb-4">Contact</div>
          <ul className="space-y-2 text-[14px] text-white/70">
            <li>deen@jasiri.ng</li>
            <li>+234 909 904 8059</li>
            <li>Gwarimpa, Abuja</li>
            <li>
              <Link to="/7central" className="hover:text-white">
                7Central Academy ›
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="jasiri-container py-6 text-center text-[12px] text-white/55">
          © 2026 Jasiri Tech Nigeria Ltd. · RC 7282599 · We help you build what you need.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="text-[12px] uppercase tracking-[0.08em] text-white/55 mb-4">{title}</div>
      <ul className="space-y-2 text-[14px] text-white/70">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
