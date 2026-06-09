import { useEffect, useRef, useState } from "react";
import { Menu, X, Grid3x3 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const NAV: { label: string; to: string }[] = [
  { label: "WORK EXPERIENCE", to: "/work" },
  { label: "RESEARCH", to: "/research" },
  { label: "CAREER TIMELINE", to: "/roadmap" },
  { label: "CONTACT", to: "/contact" },
];

const QUICK_LINKS: { label: string; to: string; hash?: string; meta: string }[] = [
  { label: "INDEX", to: "/", meta: "HOME" },
  { label: "WORK EXPERIENCE", to: "/work", meta: "BUILDS / CASE STUDIES" },
  { label: "RESEARCH", to: "/research", meta: "PAPERS / ESSAYS" },
  { label: "CAREER TIMELINE", to: "/roadmap", meta: "CAREER TIMELINE" },
  { label: "OSS // ASK", to: "/", hash: "ask", meta: "OPEN SOURCE / LLM" },
  { label: "CONTACT", to: "/contact", meta: "EMAIL / SOCIAL" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener("mousedown", onDoc);
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95 backdrop-blur sm:border-b-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center bg-ink text-paper font-display text-xs sm:h-8 sm:w-8">
            B
          </span>
          <span className="font-display text-lg tracking-tight sm:text-xl">PORTFOLIO</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              activeProps={{ className: "bg-ink text-paper" }}
              className="px-3 py-2 font-mono text-xs font-bold tracking-wider hover:bg-ink hover:text-paper"
            >
              {n.label}
            </Link>
          ))}

          <div className="relative ml-2" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="open quick menu"
              aria-expanded={menuOpen}
              className="brutal-border bg-brand-yellow p-2 brutal-press"
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-72 brutal-border bg-paper p-2 z-50"
              >
                <div className="px-3 py-2 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                  // QUICK NAV
                </div>
                <ul className="flex flex-col">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        hash={l.hash}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between gap-3 border-t-2 border-ink/10 px-3 py-3 hover:bg-brand-yellow"
                      >
                        <span className="font-display text-base tracking-tight">{l.label}</span>
                        <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
                          {l.meta}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
          className="brutal-border bg-card p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-ink bg-card md:hidden">
          <div className="flex flex-col">
            {QUICK_LINKS.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                hash={n.hash}
                onClick={() => setOpen(false)}
                className="border-b-2 border-ink/20 px-5 py-4 font-mono text-xs font-bold tracking-wider last:border-b-0"
              >
                {n.label}
                <span className="ml-2 text-[10px] text-muted-foreground">{n.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
