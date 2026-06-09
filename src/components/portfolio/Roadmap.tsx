const ROLES = [
{
title: "OPEN SOURCE PROJECT ADMIN",
period: "2026 — TILL NOW",
org: "GSSOC",
desc: "Leading feature development, reviewing pull requests, mentoring contributors, and improving architecture across a collaborative open-source ecosystem.",
accent: "bg-ink text-paper",
},
{
title: "OPEN SOURCE MAINTAINER",
period: "2025 — 2026",
org: "APERTE",
desc: "Leading feature development, reviewing pull requests, mentoring contributors, and improving architecture across a collaborative open-source ecosystem.",
accent: "bg-brand-red text-paper",
},

{
title: "AI SYSTEMS BUILDER",
period: "2025 — PRESENT",
org: "INDEPENDENT",
desc: "Building RAG platforms, AI assistants, agent workflows, developer tools, and machine learning systems focused on real-world applications and production deployment.",
accent: "bg-brand-yellow text-ink",
},

{
title: "FREELANCE AI ENGINEER",
period: "2025 — PRESENT",
org: "CLIENT PROJECTS",
desc: "Designed and delivered AI-powered products including finance assistants, ATS optimization tools, automation systems, and custom LLM workflows for clients and startups.",
accent: "bg-ink text-paper",
},

{
title: "OPEN SOURCE CONTRIBUTOR",
period: "2025 — 2025",
org: "GIRLSCRIPT SUMMER OF CODE",
desc: "Delivered 27+ pull requests spanning backend engineering, bug fixes, feature implementation, performance optimization, and collaborative development workflows.",
accent: "bg-brand-red text-paper",
},

{
title: "FULL STACK DEVELOPER",
period: "2024 — 2025",
org: "WEB & PRODUCT DEVELOPMENT",
desc: "Built and shipped web applications, dashboards, portfolio systems, analytics platforms, APIs, and client-facing products across multiple domains.",
accent: "bg-brand-yellow text-ink",
},

{
title: "AI RESEARCHER",
period: "2024 — PRESENT",
org: "INDEPENDENT RESEARCH",
desc: "Exploring machine learning for polymer prediction, retrieval-augmented generation, multimodal workflows, intelligent agents, and scalable AI systems.",
accent: "bg-ink text-paper",
},

{
title: "COMPETITIVE PROGRAMMER",
period: "2024 — PRESENT",
org: "LEETCODE • GFG",
desc: "Solved 400+ algorithmic problems while strengthening foundations in data structures, algorithms, optimization, and software engineering.",
accent: "bg-brand-red text-paper",
}
];


export function Roadmap() {
  return (
    <section id="roadmap" className="py-12 sm:py-20">
      <div className="mb-6 sm:mb-10">
        <div className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
          // CAREER
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl">
          MY
          <br />
          <span className="bg-ink text-paper px-2 -mx-1 inline-block">CAREER</span>
          <br />
          <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">TIMELINE</span>
        </h2>
      </div>

      <ol className="space-y-4">
        {ROLES.map((r, i) => (
          <li key={r.title} className="brutal-border brutal-hover-lift bg-card">
            <div className="grid gap-0 sm:grid-cols-[auto_1fr]">
              <div
                className={`flex items-center justify-center border-b-[3px] border-ink px-5 py-3 font-display text-3xl sm:border-b-0 sm:border-r-4 sm:px-6 sm:text-4xl ${r.accent}`}
              >
                0{i + 1}
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl sm:text-3xl">{r.title}</h3>
                  <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                    {r.period} // {r.org}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
