import {
  Brain,
  Atom,
  Database,
  Cpu,
  FileSearch,
  Wallet,
  Activity,
  GitBranch,
  Github,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const BUILDS = [
{
eyebrow: "01 / AI PRODUCT",
title: "PERSONAL AI\nOS",
icon: Brain,
desc: "An intelligent operating system for managing knowledge, goals, projects, and decision-making through contextual memory, agent workflows, and AI-assisted planning.",
tags: ["AGENTS", "RAG", "LLM"],
accent: "bg-brand-red text-paper",
},

{
eyebrow: "02 / AI RESEARCH",
title: "POLYMER\nINTELLIGENCE",
icon: Atom,
desc: "Machine learning platform for predicting polymer properties and accelerating virtual screening of sustainable materials through data-driven experimentation.",
tags: ["ML", "RESEARCH"],
accent: "bg-brand-yellow text-ink",
},

{
eyebrow: "03 / DATA SYSTEMS",
title: "DEEPSEA\nDNA",
icon: Database,
desc: "Large-scale marine intelligence platform processing over one million records daily with optimized data pipelines, cloud infrastructure, and analytical workflows.",
tags: ["BIG-DATA", "AWS"],
accent: "bg-brand-red text-paper",
},

{
eyebrow: "04 / AI SYSTEMS",
title: "DATABASE\nADVISOR",
icon: Cpu,
desc: "Retrieval-Augmented Generation system that analyzes performance logs, retrieves operational knowledge, and recommends database optimizations in real time.",
tags: ["RAG", "VECTOR-DB"],
accent: "bg-brand-yellow text-ink",
},

{
eyebrow: "05 / DEV TOOL",
title: "ATS\nOPTIMIZER",
icon: FileSearch,
desc: "Published Chrome extension that evaluates resumes, extracts keywords, measures ATS compatibility, and generates actionable improvement recommendations.",
tags: ["NLP", "CHROME"],
accent: "bg-brand-red text-paper",
},

{
eyebrow: "06 / FINTECH AI",
title: "GULLAK\nAI",
icon: Wallet,
desc: "AI-powered financial assistant helping users track spending behavior, understand transactions, and receive personalized financial insights.",
tags: ["FINTECH", "LLM"],
accent: "bg-brand-yellow text-ink",
},

{
eyebrow: "07 / DEV ANALYTICS",
title: "CODING\nWIDGET",
icon: Activity,
desc: "Cross-platform developer analytics dashboard tracking GitHub, LeetCode, and GeeksforGeeks progress with visual insights and growth metrics.",
tags: ["FLUTTER", "ANALYTICS"],
accent: "bg-brand-red text-paper",
},

{
eyebrow: "08 / OPEN SOURCE",
title: "APERTE\nCORE",
icon: GitBranch,
desc: "Maintained and scaled collaborative open-source infrastructure while reviewing contributions, guiding developers, and improving project architecture.",
tags: ["OSS", "MAINTAINER"],
accent: "bg-brand-yellow text-ink",
},

{
eyebrow: "09 / OPEN SOURCE",
title: "GSSOC\nCONTRIBUTIONS",
icon: Github,
desc: "Delivered 27+ pull requests across collaborative projects involving backend engineering, feature development, bug fixes, and performance improvements.",
tags: ["OSS", "COMMUNITY"],
accent: "bg-brand-red text-paper",
},

{
eyebrow: "10 / AI PLATFORM",
title: "HF\nLABS",
icon: Sparkles,
desc: "Collection of experiments, demos, and AI applications built on Hugging Face infrastructure exploring multimodal systems, LLM workflows, and applied machine learning.",
tags: ["HF", "AI"],
accent: "bg-brand-yellow text-ink",
}
];


export function ActiveBuilds() {
  return (
    <section className="py-12 sm:py-20">
      {/* header removed to hide large page title (ACTIVE BUILDS) */}

      <div className="grid gap-5 md:grid-cols-2">
        {BUILDS.map((b) => (
          <article key={b.title} className="brutal-border brutal-hover-lift bg-card">
            <div className={`flex items-center justify-between border-b-[3px] border-ink px-4 py-2 sm:border-b-4 ${b.accent}`}>
              <span className="font-mono text-[10px] font-bold tracking-widest">{b.eyebrow}</span>
              {(() => {
                const Icon = b.icon as any;
                return <Icon className="h-4 w-4" />;
              })()}
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="whitespace-pre-line text-3xl sm:text-4xl">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="brutal-border bg-paper px-2 py-1 font-mono text-[10px] font-bold tracking-widest"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="brutal-border bg-ink text-paper p-2 brutal-press">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
