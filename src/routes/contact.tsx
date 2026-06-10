import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  ArrowUpRight,
  Cpu,
  Send,
  FileText,
  Sparkles,
  Activity,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => {
    const title =
      "Contact Aashutosh Kumar Bhardwaj — AI, Backend & Data Engineer";
    const description =
      "Get in touch with Aashutosh Kumar Bhardwaj — AI, backend, and data engineer. Available for collaborations, contract work, and research. Email, GitHub, LinkedIn, and X / Twitter.";
    const url = "https://snappy-heart-web.#.app/contact";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index,follow" },
  { name: "author", content: "Aashutosh Kumar Bhardwaj" },
        {
          name: "keywords",
          content:
            "Ashutosh Kumar Bhardwaj, contact, AI engineer, backend engineer, data engineer, LLM infrastructure, hire, collaboration",
        },

        { property: "og:type", content: "profile" },
        { property: "og:site_name", content: "PORTFOLIO" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
  { property: "profile:first_name", content: "Aashutosh" },
        { property: "profile:last_name", content: "Bhardwaj" },
  { property: "profile:username", content: "ashutoshkbhardwaj" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@PORTFOLIO" },
        { name: "twitter:creator", content: "@PORTFOLIO" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: title,
            description,
            url,
            mainEntity: {
              "@type": "Person",
              name: "Aashutosh Kumar Bhardwaj",
              jobTitle: "AI, Backend & Data Engineer",
              email: "mailto:ashutoshkumarbhardwaj7@gmail.com",
              url,
              sameAs: [
                "https://github.com/ashutoshkbhardwaj",
                "https://linkedin.com/in/ashutoshkbhardwaj",
                "https://x.com/ashutoshkbhardwaj",
              ],
            },
          }),
        },
      ],
    };
  },
  component: ContactPage,
});

type Channel = {
  label: string;
  handle: string;
  href: string;
  meta: string;
  icon: typeof Github;
  tone: "ink" | "red" | "yellow" | "paper";
};

const CHANNELS: Channel[] = [
  {
    label: "EMAIL",
  handle: "ashutoshkumarbhardwaj7@gmail.com",
  href: "mailto:ashutoshkumarbhardwaj7@gmail.com",
    meta: "PRIMARY // 24H REPLY",
    icon: Mail,
    tone: "red",
  },
  {
    label: "GITHUB",
    handle: "@ashutoshkbhardwaj",
    href: "https://github.com/ashutoshkbhardwaj",
    meta: "OSS // 100+ REPOS",
    icon: Github,
    tone: "ink",
  },
  {
    label: "LINKEDIN",
    handle: "/in/ashutoshkbhardwaj",
    href: "https://linkedin.com/in/ashutoshkbhardwaj",
    meta: "PROFESSIONAL NETWORK",
    icon: Linkedin,
    tone: "paper",
  },
  {
    label: "HUGGINGFACE",
    handle: "/in/ashutoshkbhardwaj",
    href: "https://huggingface.co/aashutoshkumarbhardwaj",
    meta: "PROFESSIONAL NETWORK",
    icon: Sparkles,
    tone: "paper",
  },
  {
    label: "KAGGLE",
    handle: "/in/ashutoshkbhardwaj",
    href: "https://www.kaggle.com/aashutoshbhardwaj5",
    meta: "PROFESSIONAL NETWORK",
    icon: Activity,
    tone: "paper",
  },

  {
    label: "X / TWITTER",
    handle: "@ashutoshkbhardwaj",
    href: "https://x.com/ashutoshpande_y",
    meta: "NOTES // SHIPS",
    icon: Twitter,
    tone: "yellow",
  },
];

const SECONDARY = [
  { label: "READ.CV", href: "#", meta: "RESUME" },
  { label: "HUGGING FACE", href: "#", meta: "MODELS" },
  { label: "ARXIV", href: "#", meta: "PAPERS" },
  { label: "SUBSTACK", href: "#", meta: "ESSAYS" },
];

function toneClasses(tone: Channel["tone"]) {
  switch (tone) {
    case "red":
      return "bg-brand-red text-paper";
    case "yellow":
      return "bg-brand-yellow text-ink";
    case "ink":
      return "bg-ink text-paper";
    default:
      return "bg-paper text-ink";
  }
}

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HERO */}
        <header className="pt-8 pb-8 sm:pt-14">
          <div className="mb-3 flex items-center gap-3 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
            <span>// INDEX / 05</span>
            <span className="h-px flex-1 bg-ink/20" />
            <span>CONTACT — OPEN CHANNEL</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl">
                LET&apos;S
                <br />
                <span className="bg-ink text-paper px-2 -mx-1 inline-block">BUILD</span>{" "}
                <span className="bg-brand-red text-paper px-2 -mx-1 inline-block">
                  SOMETHING
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
                I&apos;m{" "}
                <span className="bg-brand-yellow px-1 font-bold">Aashutosh Kumar Bhardwaj</span> —
                an AI, backend, and data engineer building distributed systems, ML infrastructure,
                and full-stack products. Currently open to collaborations, contract work, and
                research conversations.
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="brutal-border bg-ink text-paper p-5">
                <div className="font-mono text-[10px] font-bold tracking-widest text-paper/60">
                  // STATUS
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 animate-pulse bg-brand-green" />
                  <span className="font-display text-xl">AVAILABLE</span>
                </div>
                <ul className="mt-4 space-y-2 font-mono text-[11px] tracking-wider">
                  <li className="flex items-center justify-between gap-3 border-t border-paper/20 pt-2">
                    <span className="text-paper/60">WINDOW</span>
                    <span>Q1 2026 — OPEN</span>
                  </li>
                  <li className="flex items-center justify-between gap-3 border-t border-paper/20 pt-2">
                    <span className="text-paper/60">LOCATION</span>
                    <span>NOIDA / IN· REMOTE</span>
                  </li>
                  <li className="flex items-center justify-between gap-3 border-t border-paper/20 pt-2">
                    <span className="text-paper/60">TIMEZONE</span>
                    <span>UTC+1 / UTC-8</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </header>

        <div className="stripes-bg h-3 my-4" />

        {/* CHANNELS GRID */}
        <section className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl">CHANNELS</h2>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              04 ACTIVE
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="brutal-border brutal-hover-lift bg-card p-6 group block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`brutal-border inline-flex h-12 w-12 items-center justify-center ${toneClasses(
                        c.tone,
                      )}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <div className="mt-5 font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-2xl sm:text-3xl break-all">
                    {c.handle}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-widest text-muted-foreground">
                    {c.meta}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ABOUT / BIO */}
        <section className="py-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="brutal-border bg-brand-yellow text-ink p-5 sticky top-24">
              <div className="font-mono text-[10px] font-bold tracking-widest">
                // SPEC.SHEET
              </div>
              <div className="mt-3 font-display text-3xl">A.K.B.</div>
              <ul className="mt-4 space-y-2 font-mono text-[11px] tracking-wider">
                <li className="flex justify-between gap-3 border-t-2 border-ink/20 pt-2">
                  <span className="opacity-60">ROLE</span>
                  <span>AI / BACKEND ENG</span>
                </li>
                <li className="flex justify-between gap-3 border-t-2 border-ink/20 pt-2">
                  <span className="opacity-60">STACK</span>
                  <span>PY · TS · RUST</span>
                </li>
                <li className="flex justify-between gap-3 border-t-2 border-ink/20 pt-2">
                  <span className="opacity-60">FOCUS</span>
                  <span>LLM INFRA · DATA</span>
                </li>
                <li className="flex justify-between gap-3 border-t-2 border-ink/20 pt-2">
                  <span className="opacity-60">SHIPPED</span>
                  <span>5+ YEARS</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                // ABOUT
              </div>
              <h2 className="mt-2 text-3xl sm:text-5xl">CONTEXT.</h2>
            </div>

            <p className="text-lg leading-[1.7]">
              <span className="float-left mr-3 mt-1 bg-ink text-paper font-display text-5xl leading-none px-2 py-1">
                I
              </span>
              design and ship systems where machine learning meets production reality —
              distributed inference, retrieval pipelines, and the backend plumbing that keeps
              them honest. My work sits at the intersection of research and infrastructure:
              fast enough to deploy, rigorous enough to trust.
            </p>

            <p className="text-base leading-[1.7] text-foreground/80">
              Over the past five years I&apos;ve built data platforms, LLM-powered products,
              and edge-deployed models for teams that needed both velocity and depth. I care
              about clean interfaces, observable systems, and the small details that make
              software feel inevitable.
            </p>

            <div className="brutal-border bg-card p-5">
              <div className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
                // CURRENTLY
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex gap-3">
                  <Cpu className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                  <span>
                    Building <span className="font-bold">EDGE MESH</span> — distributed
                    inference fabric for low-latency LLM workloads.
                  </span>
                </li>
                <li className="flex gap-3">
                  <FileText className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                  <span>
                    Writing field notes on sparse attention, RAG verification, and edge
                    deployment.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Send className="mt-0.5 h-4 w-4 text-brand-red shrink-0" />
                  <span>Open to consulting on AI infra, backend architecture, and data platforms.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECONDARY LINKS */}
        <section className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl">ELSEWHERE</h2>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              MIRRORS
            </span>
          </div>
          <div className="brutal-border bg-card">
            {SECONDARY.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`flex items-center justify-between gap-4 px-5 py-4 hover:bg-brand-yellow ${
                  i !== 0 ? "border-t-2 border-ink/15" : ""
                }`}
              >
                <span className="font-display text-xl sm:text-2xl">{l.label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {l.meta}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="brutal-border bg-brand-red text-paper p-8 sm:p-12">
            <div className="grid gap-6 lg:grid-cols-12 items-end">
              <div className="lg:col-span-8">
                <div className="font-mono text-[10px] font-bold tracking-widest text-paper/70">
                  // PREFERRED CHANNEL
                </div>
                <h3 className="mt-2 text-4xl sm:text-6xl">
                  SEND A<br />
                  SIGNAL.
                </h3>
                <p className="mt-4 max-w-md text-paper/85">
                  Short intros are great. Tell me about the system, the constraints, and the
                  timeline.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href="mailto:ashutoshkumarbhardwaj7@gmail.com"
                  className="brutal-border brutal-hover-lift bg-paper text-ink inline-flex items-center gap-3 px-6 py-4 font-display text-xl"
                >
                  <Mail className="h-5 w-5" />
                  EMAIL ME
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 font-mono text-[10px] tracking-widest text-paper/70 border-t border-paper/30 pt-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" /> NOIDA / IN· REMOTE
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" /> Q1 2026 — OPEN
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-3 w-3" /> RESPONSE &lt; 24H
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Link
              to="/"
              className="brutal-border bg-card px-4 py-2 font-mono text-xs font-bold tracking-wider brutal-hover-lift"
            >
              ← BACK TO INDEX
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
