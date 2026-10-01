import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Team" },
  { to: "/7central", label: "7Central" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.55)",
          backdropFilter: "saturate(180%) blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
          transition: "background-color 250ms ease, border-color 250ms ease",
        }}
      >
        <div className="jasiri-container flex items-center justify-between" style={{ height: 48 }}>
          <Link to="/" aria-label="Jasiri home">
            <BrandLogo />
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[14px] text-[color:var(--ink)]/85 hover:text-[color:var(--ink)] transition-colors"
                activeProps={{ className: "text-[14px] text-[color:var(--ink)] font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/contact" className="btn-pill" style={{ padding: "8px 18px", fontSize: 14 }}>
              Start a project
            </Link>
          </div>
          <button
            aria-label="Menu"
            className="md:hidden text-[color:var(--ink)]"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} strokeWidth={1.6} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black text-white flex flex-col">
          <div
            className="jasiri-container flex items-center justify-between"
            style={{ height: 48 }}
          >
            <Link to="/" aria-label="Jasiri home" onClick={() => setOpen(false)}>
              <BrandLogo darkSurface />
            </Link>
            <button aria-label="Close" onClick={() => setOpen(false)}>
              <X size={22} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="flex-1 jasiri-container flex flex-col justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-[40px] font-semibold tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-pill mt-6 w-fit">
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
