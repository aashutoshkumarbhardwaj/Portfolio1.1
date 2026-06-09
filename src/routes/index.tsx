import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { OssAndAsk } from "@/components/portfolio/OssAndAsk";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PORTFOLIO // Ashutosh Kumar Bhardwaj — AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ashutosh Kumar Bhardwaj — AI engineer and researcher building distributed intelligence, LLM architectures, and edge inference systems.",
      },
      { property: "og:title", content: "PORTFOLIO // Ashutosh Kumar Bhardwaj" },
      {
        property: "og:description",
        content:
          "AI engineer and researcher. Distributed intelligence, LLM architectures, edge inference.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Hero />
        <OssAndAsk />
      </main>
      <SiteFooter />
    </div>
  );
}
