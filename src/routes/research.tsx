import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { KnowledgeVault } from "@/components/portfolio/KnowledgeVault";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "RESEARCH // Ashutosh Kumar Bhardwaj" },
      {
        name: "description",
        content:
          "Papers, essays and field notes on sparse attention, distributed inference and RAG systems by Ashutosh Kumar Bhardwaj.",
      },
      { property: "og:title", content: "RESEARCH // Ashutosh Kumar Bhardwaj" },
      {
        property: "og:description",
        content: "Papers and essays on sparse attention, distributed inference and RAG.",
      },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="pt-8 pb-4 sm:pt-14">
          <div className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
            // INDEX 
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl">
            MY
            <br />
            <span className="bg-ink text-paper px-2 -mx-1 inline-block">FIELD</span>
            <br />
            <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">RESEARCH</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Long-form writing — papers, essays and engineering notes.
          </p>
        </header>
        <KnowledgeVault />
      </main>
      <SiteFooter />
    </div>
  );
}
