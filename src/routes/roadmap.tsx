import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { Roadmap } from "@/components/portfolio/Roadmap";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "ROADMAP // Ashutosh Kumar Bhardwaj" },
      {
        name: "description",
        content:
          "Career timeline and engineering roadmap of Ashutosh Kumar Bhardwaj — past roles, experience and trajectory.",
      },
      { property: "og:title", content: "ROADMAP // Ashutosh Kumar Bhardwaj" },
      {
        property: "og:description",
        content: "Career timeline and engineering roadmap.",
      },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* header intentionally removed to avoid empty spacing when commented */}
        <Roadmap />
      </main>
      <SiteFooter />
    </div>
  );
}
