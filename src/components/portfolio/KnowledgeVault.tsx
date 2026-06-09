import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { RESEARCH_POSTS } from "@/lib/research-posts";

export function KnowledgeVault() {
  return (
    <section id="vault" className="py-12 sm:py-20">
      {/* <div className="mb-6 sm:mb-10">
        <div className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
          // WRITING
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-8xl">
          KNOWLEDGE
          <br />
          <span className="bg-brand-yellow text-ink px-2 -mx-1 inline-block">VAULT</span>
        </h2>
      </div> */}

      <ul className="brutal-border bg-card divide-y-[3px] divide-ink sm:divide-y-4">
        {RESEARCH_POSTS.map((e) => (
          <li key={e.slug}>
            <Link
              to="/research/$slug"
              params={{ slug: e.slug }}
              className="group flex items-center gap-4 p-4 transition-colors hover:bg-brand-yellow sm:p-6"
            >
              <div className="hidden font-mono text-[10px] font-bold tracking-widest text-muted-foreground sm:block sm:w-28">
                {e.date}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground sm:hidden">
                  {e.date} — {e.tag}
                </div>
                <h3 className="mt-1 text-xl sm:text-2xl lg:text-3xl">{e.title}</h3>
                <div className="mt-1 hidden text-xs text-muted-foreground sm:block">{e.note}</div>
              </div>
              <span className="hidden brutal-border bg-paper px-2 py-1 font-mono text-[10px] font-bold tracking-widest sm:block">
                {e.tag}
              </span>
              <span className="brutal-border bg-ink text-paper p-2 transition-transform group-hover:-translate-y-1">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
