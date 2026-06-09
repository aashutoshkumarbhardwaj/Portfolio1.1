import { Cpu, Network, ShieldCheck, ArrowUpRight, GitBranch, Sparkles } from "lucide-react";

const COMPETENCIES = [
  { icon: Cpu, label: "AI / ML ENGINEERING" },
  { icon: Network, label: "BACKEND & APIS" },
  { icon: ShieldCheck, label: "DATA ANALYTICS" },
];

const HIGHLIGHTS = [
{
eyebrow: "FLAGSHIP",
title: "DEEPSEA DNA",
desc: "Built large-scale data infrastructure processing 1M+ records daily with optimized pipelines, cloud integration, and high-performance querying.",
tag: "AI DATA",
},

{
eyebrow: "OPEN SOURCE",
title: "MAINTAINER",
desc: "Open Source Maintainer and GSSoC Contributor with 27+ pull requests spanning backend systems, tooling, and collaborative development.",
tag: "OSS",
},

{
eyebrow: "BUILDER",
title: "AI PRODUCTS",
desc: "Built and shipped RAG systems, AI assistants, Chrome extensions, finance tools, and developer platforms used by real users.",
tag: "LLM",
},
];


export function Hero() {
  return (
    <section id="top" className="pt-6 pb-12 sm:pt-10 sm:pb-20">
      <div className="grid gap-6 grid-cols-1 lg:gap-8">
        {/* Title */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 brutal-border bg-card px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse bg-brand-red" />
            <span className="font-mono text-[10px] font-bold tracking-widest sm:text-xs">
              AI · BACKEND · DATA ENGINEER
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl break-words leading-[0.9]">
            AASHUTOSH
            <br />
            KUMAR
            <br />
            <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">BHARDWAJ</span>
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="brutal-border bg-card p-4">
              <div className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                CORE COMPETENCIES
              </div>
              <ul className="space-y-2">
                {COMPETENCIES.map((c) => (
                  <li key={c.label} className="flex items-center gap-2 group">
                    <span className="inline-flex h-6 w-6 items-center justify-center bg-ink text-paper transition-transform group-hover:scale-110">
                      <c.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wide">{c.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="brutal-border bg-brand-yellow p-4">
              <div className="mb-3 font-mono text-[10px] font-bold tracking-widest">
                CURRENT FOCUS
              </div>
              <div className="font-display text-4xl leading-none">{`AI · BACKEND · DATA`}</div>
              <div className="mt-3 font-mono text-[10px] tracking-wider">
                BACKEND ENG // FULL STACK // DATA ANALYTICS
              </div>
              <div className="mt-3 stripes-bg h-4 brutal-border opacity-80" />
            </div>
          </div>
        </div>

        {/* Right: highlight cards */}
        <div id="builds">


          <div className="mb-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
              <Sparkles className="h-3 w-3" /> SELECTED HIGHLIGHTS
            </div>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              [ 03 ]
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {HIGHLIGHTS.map((h, i) => (
              <article
                key={h.title}
                className={`brutal-border brutal-hover-lift p-4 sm:p-5 ${
                  i === 0 ? "bg-ink text-paper" : "bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-bold tracking-widest ${
                      i === 0 ? "text-brand-yellow" : "text-muted-foreground"
                    }`}
                  >
                    {h.eyebrow}
                  </span>
                  <span
                    className={`brutal-border px-1.5 py-0.5 font-mono text-[9px] tracking-widest ${
                      i === 0 ? "bg-brand-yellow text-ink border-paper" : "bg-paper"
                    }`}
                  >
                    {h.tag}
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between gap-3">
                  <div className="font-display text-3xl sm:text-4xl leading-none">{h.title}</div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 ${i === 0 ? "text-paper/60" : "text-muted-foreground"}`}
                  />
                </div>
                <p
                  className={`mt-3 text-xs leading-relaxed sm:text-sm ${
                    i === 0 ? "text-paper/70" : "text-muted-foreground"
                  }`}
                >
                  {h.desc}
                </p>
              </article>
            ))}

            <div className="brutal-border bg-brand-red text-paper p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest">
                <GitBranch className="h-3 w-3" /> OPEN TO COLLABORATIONS
              </div>
              <span className="font-mono text-[10px] tracking-widest">◉ AVAILABLE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
