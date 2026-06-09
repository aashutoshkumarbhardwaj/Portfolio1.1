import { ArrowRight } from "lucide-react";

export function CaseStudy() {
  return (
    <section id="case" className="py-12 sm:py-20">
      <div className="mb-4 inline-flex brutal-border bg-card px-3 py-1.5">
        <span className="font-mono text-[10px] font-bold tracking-widest">CASE STUDY 01</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl">
            PROJECT
            <br />
            MATRIX:
            <br />
            <span className="bg-ink text-paper px-2 -mx-1 inline-block">EDGE MESH</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A global decentralized AI mesh network designed for ultra-low latency edge inference.
            Scaled to 10M+ nodes with zero-trust security architecture and verifiable inference
            attestation across heterogeneous hardware.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "NODES", v: "10M+" },
              { k: "P50 LAT", v: "8ms" },
              { k: "REGIONS", v: "42" },
            ].map((m) => (
              <div key={m.k} className="brutal-border bg-card p-3 text-center">
                <div className="font-display text-2xl">{m.v}</div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground">
                  {m.k}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center gap-3 brutal-border brutal-press bg-brand-red px-5 py-3 font-mono text-xs font-bold tracking-widest text-paper">
            VIEW BLUEPRINTS
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* spec sheet (replaces decorative mesh visual) */}
        <div className="lg:col-span-5">
          <div className="brutal-border bg-ink text-paper">
            <div className="flex items-center justify-between border-b-2 border-paper/30 px-4 py-2 font-mono text-[10px] tracking-widest text-paper/70">
              <span>// SPEC.SHEET</span>
              <span>v4.2.0</span>
            </div>
            <dl className="divide-y-2 divide-paper/15">
              {[
                ["RUNTIME", "WASM + CUDA"],
                ["CONSENSUS", "BFT — 2/3"],
                ["ATTESTATION", "TEE + ZK"],
                ["TX THROUGHPUT", "14.2K / s"],
                ["RX THROUGHPUT", "12.9K / s"],
                ["UPTIME (12 MO)", "99.97%"],
                ["STATUS", "◉ HEALTHY"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between px-4 py-3 font-mono text-xs tracking-wider"
                >
                  <dt className="text-paper/60">{k}</dt>
                  <dd className={k === "STATUS" ? "text-brand-yellow" : ""}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
