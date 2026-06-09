import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Hash,
  Share2,
  Bookmark,
  Quote,
  Terminal,
  Info,
  AlertTriangle,
  Cpu,
} from "lucide-react";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import {
  getPostBySlug,
  RESEARCH_POSTS,
  type ResearchPost,
  type ResearchBlock,
} from "@/lib/research-posts";

export const Route = createFileRoute("/research/$slug")({
  loader: ({ params }): { post: ResearchPost } => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} // RESEARCH` : "RESEARCH";
    const desc = post?.note ?? "Field research — papers and essays.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h1 className="text-5xl sm:text-7xl">
          POST
          <br />
          <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">NOT FOUND</span>
        </h1>
        <Link
          to="/research"
          className="mt-8 inline-flex items-center gap-2 brutal-border bg-ink text-paper px-4 py-2 font-mono text-xs font-bold tracking-widest brutal-press"
        >
          <ArrowLeft className="h-4 w-4" /> BACK TO RESEARCH
        </Link>
      </main>
      <SiteFooter />
    </div>
  ),
  component: PostPage,
});

function useReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pct;
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function PostPage() {
  const { post } = Route.useLoaderData() as { post: ResearchPost };
  const idx = RESEARCH_POSTS.findIndex((p) => p.slug === post.slug);
  const total = RESEARCH_POSTS.length;
  const prev: ResearchPost = RESEARCH_POSTS[(idx - 1 + total) % total];
  const next: ResearchPost = RESEARCH_POSTS[(idx + 1) % total];
  const others = RESEARCH_POSTS.filter((p) => p.slug !== post.slug);
  const progress = useReadingProgress();

  const accent = post.tag === "PAPER" ? "bg-brand-red text-paper" : "bg-brand-yellow text-ink";
  const wordCount = post.body
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  const toc = post.body
    .map((b, i) => (b.type === "h2" ? { id: `${slugify(b.text)}-${i}`, text: b.text } : null))
    .filter((x): x is { id: string; text: string } => !!x);

  return (
    <div className="min-h-screen">
      {/* Reading progress bar */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-50 h-1 bg-brand-red transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <SiteHeader />

      {/* HERO */}
      <header className="border-b-[3px] border-ink bg-card sm:border-b-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 pt-6 sm:pt-10">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 brutal-border bg-paper px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest brutal-press"
            >
              <ArrowLeft className="h-3 w-3" /> FIELD RESEARCH
            </Link>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              // ENTRY {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <span className="ml-auto hidden font-mono text-[10px] tracking-widest text-muted-foreground sm:inline">
              ↓ {Math.round(progress)}% READ
            </span>
          </div>

          <div className="grid gap-6 pt-8 pb-10 lg:grid-cols-12 lg:gap-10 lg:pt-14 lg:pb-16">
            <div className="lg:col-span-8">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span
                  className={`brutal-border px-2 py-1 font-mono text-[10px] font-bold tracking-widest ${accent}`}
                >
                  {post.tag}
                </span>
                <span className="brutal-border bg-paper px-2 py-1 font-mono text-[10px] font-bold tracking-widest">
                  <Calendar className="mr-1 inline h-3 w-3" />
                  {post.date}
                </span>
                <span className="brutal-border bg-paper px-2 py-1 font-mono text-[10px] font-bold tracking-widest">
                  <Clock className="mr-1 inline h-3 w-3" />
                  {post.readingTime}
                </span>
                <span className="brutal-border bg-paper px-2 py-1 font-mono text-[10px] font-bold tracking-widest">
                  <Hash className="mr-1 inline h-3 w-3" />
                  {wordCount} WORDS
                </span>
              </div>

              <h1 className="text-4xl leading-[0.95] sm:text-6xl lg:text-[5.5rem]">
                {post.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-snug text-muted-foreground sm:text-xl">
                {post.note}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center brutal-border bg-brand-yellow text-ink">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-bold tracking-wide">A. K. BHARDWAJ</div>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    PORTFOLIO // RESEARCH UNIT
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar meta panel */}
            <aside className="lg:col-span-4">
              <div className="brutal-border bg-ink text-paper p-5 sm:p-6">
                <div className="font-mono text-[10px] font-bold tracking-widest text-paper/60">
                  // SPEC.SHEET
                </div>
                <dl className="mt-4 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-paper/15 pb-2">
                    <dt className="text-paper/60">AUTHOR</dt>
                    <dd className="font-bold tracking-wider">A. K. BHARDWAJ</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-paper/15 pb-2">
                    <dt className="text-paper/60">TYPE</dt>
                    <dd className="font-bold tracking-wider">{post.tag}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-paper/15 pb-2">
                    <dt className="text-paper/60">PUBLISHED</dt>
                    <dd className="font-bold tracking-wider">{post.date}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-paper/60">SLUG</dt>
                    <dd className="truncate font-bold tracking-wider">{post.slug}</dd>
                  </div>
                </dl>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="brutal-border bg-paper text-ink px-3 py-2 font-mono text-[10px] font-bold tracking-widest brutal-press"
                  >
                    <Share2 className="mr-1 inline h-3 w-3" /> SHARE
                  </button>
                  <button
                    type="button"
                    className="brutal-border bg-brand-yellow text-ink px-3 py-2 font-mono text-[10px] font-bold tracking-widest brutal-press"
                  >
                    <Bookmark className="mr-1 inline h-3 w-3" /> SAVE
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="stripes-bg h-3 border-t-[3px] border-ink sm:h-4 sm:border-t-4" />
      </header>

      {/* BODY */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-14">
          {/* Sticky TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-24">
                <div className="brutal-border bg-paper p-4">
                  <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                    // CONTENTS
                  </div>
                  <ol className="mt-3 space-y-2">
                    {toc.map((t, i) => (
                      <li key={t.id} className="flex gap-2">
                        <span className="font-mono text-[10px] font-bold tracking-widest text-brand-red">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <a
                          href={`#${t.id}`}
                          className="font-display text-sm font-bold leading-tight hover:bg-brand-yellow"
                        >
                          {t.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          )}

          {/* Article */}
          <article className={toc.length > 0 ? "lg:col-span-9" : "lg:col-span-10 lg:col-start-2"}>
            {post.body.map((block, i) => (
              <BlockRenderer key={i} block={block} index={i} first={i === 0} />
            ))}

            {/* End marker */}
            <div className="mt-12 flex items-center gap-4">
              <span className="inline-block h-3 w-3 bg-ink" />
              <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                END OF ENTRY // {post.slug.toUpperCase()}
              </span>
              <span className="h-[3px] flex-1 bg-ink" />
            </div>

            {/* Author footer card */}
            <div className="mt-10 brutal-border bg-card p-5 sm:p-6">
              <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                // FILED BY
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center brutal-border bg-brand-red text-paper">
                  <Cpu className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl font-bold">ASHUTOSH KUMAR BHARDWAJ</div>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    ARCHITECTING DISTRIBUTED INTELLIGENCE — BAUHAUS FUNCTIONALISM FOR SYSTEMS.
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* PREV / NEXT */}
        <nav aria-label="post navigation" className="grid gap-4 pb-12 sm:grid-cols-2 sm:pb-16">
          <Link
            to="/research/$slug"
            params={{ slug: prev.slug }}
            className="group brutal-border brutal-hover-lift bg-paper p-5 sm:p-6"
          >
            <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
              ← PREVIOUS
            </div>
            <div className="mt-2 font-display text-xl leading-tight sm:text-2xl">{prev.title}</div>
            <div className="mt-2 font-mono text-[10px] tracking-widest text-muted-foreground">
              {prev.date} // {prev.tag}
            </div>
          </Link>
          <Link
            to="/research/$slug"
            params={{ slug: next.slug }}
            className="group brutal-border brutal-hover-lift bg-ink text-paper p-5 sm:p-6 text-right"
          >
            <div className="font-mono text-[10px] font-bold tracking-widest text-paper/60">
              NEXT →
            </div>
            <div className="mt-2 font-display text-xl leading-tight sm:text-2xl">{next.title}</div>
            <div className="mt-2 font-mono text-[10px] tracking-widest text-brand-yellow">
              {next.date} // {next.tag}
            </div>
          </Link>
        </nav>

        {/* More from the vault */}
        <section className="pb-16 sm:pb-24">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl">
              MORE FROM
              <br />
              THE <span className="bg-brand-yellow text-ink px-2 -mx-1 inline-block">VAULT</span>
            </h2>
            <Link
              to="/research"
              className="brutal-border bg-paper px-3 py-2 font-mono text-[10px] font-bold tracking-widest brutal-press"
            >
              ALL ENTRIES →
            </Link>
          </div>
          <ul className="brutal-border bg-card divide-y-[3px] divide-ink sm:divide-y-4">
            {others.map((e) => (
              <li key={e.slug}>
                <Link
                  to="/research/$slug"
                  params={{ slug: e.slug }}
                  className="group flex items-center gap-4 p-4 transition-colors hover:bg-brand-yellow sm:p-6"
                >
                  <div className="hidden font-mono text-[10px] font-bold tracking-widest text-muted-foreground sm:block sm:w-28">
                    {e.date}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground sm:hidden">
                      {e.date} — {e.tag}
                    </div>
                    <h3 className="mt-1 text-xl sm:text-2xl">{e.title}</h3>
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
      </main>

      <SiteFooter />
    </div>
  );
}

function BlockRenderer({
  block,
  index,
  first,
}: {
  block: ResearchBlock;
  index: number;
  first: boolean;
}) {
  switch (block.type) {
    case "p": {
      const dropCap =
        first
          ? "[&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-7xl [&::first-letter]:leading-[0.85] [&::first-letter]:text-brand-red sm:[&::first-letter]:text-8xl"
          : "";
      return (
        <p
          className={`mb-6 text-lg leading-[1.7] tracking-[-0.005em] text-foreground sm:text-xl sm:leading-[1.65] ${dropCap}`}
        >
          {block.text}
        </p>
      );
    }
    case "h2": {
      const id = `${slugify(block.text)}-${index}`;
      return (
        <h2
          id={id}
          className="mt-12 mb-5 flex items-center gap-3 scroll-mt-24 text-3xl sm:text-4xl lg:text-5xl"
        >
          <span className="inline-block h-7 w-2 bg-brand-red sm:h-9" />
          {block.text}
        </h2>
      );
    }
    case "h3":
      return (
        <h3 className="mt-8 mb-3 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <figure className="my-8 brutal-border bg-brand-yellow p-5 sm:p-7">
          <Quote className="h-5 w-5 text-ink" />
          <blockquote className="mt-3 font-display text-2xl leading-snug text-ink sm:text-3xl">
            “{block.text}”
          </blockquote>
          {block.cite && (
            <figcaption className="mt-3 font-mono text-[10px] font-bold tracking-widest text-ink/70">
              — {block.cite}
            </figcaption>
          )}
        </figure>
      );
    case "code":
      return (
        <div className="my-6 brutal-border bg-ink text-paper">
          <div className="flex items-center justify-between border-b border-paper/15 px-4 py-2">
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-paper/60">
              <Terminal className="h-3 w-3" /> {block.lang ?? "SHELL"}
            </div>
            <div className="flex gap-1">
              <span className="h-2 w-2 bg-brand-red" />
              <span className="h-2 w-2 bg-brand-yellow" />
              <span className="h-2 w-2 bg-paper/40" />
            </div>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
            <code>{block.text}</code>
          </pre>
        </div>
      );
    case "list":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-lg leading-snug sm:text-xl">
              <span className="mt-2 inline-block h-2 w-4 shrink-0 bg-brand-red" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const Icon =
        block.tone === "warn" ? AlertTriangle : block.tone === "spec" ? Cpu : Info;
      const bg =
        block.tone === "warn"
          ? "bg-brand-red text-paper"
          : block.tone === "spec"
            ? "bg-ink text-paper"
            : "bg-card text-ink";
      return (
        <aside className={`my-8 brutal-border p-5 sm:p-6 ${bg}`}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest opacity-80">
            <Icon className="h-3.5 w-3.5" /> {block.title}
          </div>
          <p className="mt-2 text-lg leading-snug sm:text-xl">{block.text}</p>
        </aside>
      );
    }
  }
}
