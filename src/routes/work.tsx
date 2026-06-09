import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { ActiveBuilds } from "@/components/portfolio/ActiveBuilds";
import { CaseStudy } from "@/components/portfolio/CaseStudy";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "WORK // Ashutosh Kumar Bhardwaj" },
      {
        name: "description",
        content:
          "Selected work by Ashutosh Kumar Bhardwaj — active builds, case studies and infrastructure projects in distributed AI.",
      },
      { property: "og:title", content: "WORK // Ashutosh Kumar Bhardwaj" },
      {
        property: "og:description",
        content: "Active builds and case studies in distributed AI and edge inference.",
      },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <header className="pt-8 pb-4 sm:pt-14">
          <div className="mb-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
            // INDEX / 01
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl">
            MY
            <br />
            <span className="bg-ink text-paper px-2 -mx-1 inline-block">SELECTED</span>
            <br />
            <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">WORK</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Shipped systems, active builds, and infrastructure case studies.
          </p>
        </header>
        <ActiveBuilds />
        <CaseStudy />
      </main>
      <SiteFooter />
    </div>
  );
}
