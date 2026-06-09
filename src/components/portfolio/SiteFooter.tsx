export function SiteFooter() {
  return (
    <footer className="mt-10 border-t-[3px] border-ink bg-ink text-paper sm:border-t-4">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center bg-brand-yellow text-ink font-display">
                B
              </span>
              <span className="font-display text-2xl">AASHUTOSH</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-paper/70">
              Architecting the future of distributed intelligence through rigorous engineering and
              Bauhaus functionalism.
            </p>
            <div className="mt-6 brutal-border border-paper bg-paper text-ink p-4">
              <div className="grid grid-cols-2 gap-3 font-mono text-[10px] tracking-widest">
                <div>LOCATION</div>
                  <div className="text-right">BERLIN / SF · REMOTE</div>
                <div>AVAILABILITY</div>
                <div className="text-right text-brand-red">Q1 2026 — OPEN</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] font-bold tracking-widest text-paper/50">
              COMMUNICATION
            </div>
            <ul className="mt-3 space-y-2 font-display text-xl">
                <li>
                  <a
                    href="https://linkedin.com/in/ashutoshkbhardwaj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-colors hover:text-brand-yellow"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ashutoshkbhardwaj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-colors hover:text-brand-yellow"
                  >
                    GITHUB
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/ashutoshkbhardwaj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-colors hover:text-brand-yellow"
                  >
                    X / TWITTER
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ashutoshkumarbhardwaj7@gmail.com"
                    className="inline-block transition-colors hover:text-brand-yellow"
                  >
                    EMAIL
                  </a>
                </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] font-bold tracking-widest text-paper/50">
              SYSTEM
            </div>
            <ul className="mt-3 space-y-2 font-display text-xl">
                <li>
                  <a href="/status" className="inline-block transition-colors hover:text-brand-yellow">PLATFORM STATUS</a>
                </li>
                <li>
                  <a href="/docs" className="inline-block transition-colors hover:text-brand-yellow">DOCS</a>
                </li>
                <li>
                  <a href="/api" className="inline-block transition-colors hover:text-brand-yellow">API REFERENCE</a>
                </li>
                <li>
                  <a href="/changelog" className="inline-block transition-colors hover:text-brand-yellow">CHANGELOG</a>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/20 pt-6 font-mono text-[10px] tracking-widest text-paper/60 sm:flex-row sm:items-center">
          <div>© 2026 AASHUTOSH // ASHUTOSH KUMAR BHARDWAJ</div>
          <div className="text-brand-yellow">PRECISION IS THE ULTIMATE SOPHISTICATION</div>
        </div>
      </div>
    </footer>
  );
}
