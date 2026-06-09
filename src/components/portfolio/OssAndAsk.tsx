import { useEffect, useRef, useState } from "react";
import { Send, GitCommit, GitBranch, Star, GitPullRequest, Bot, ExternalLink } from "lucide-react";

// Change this to your GitHub handle.
const GITHUB_USERNAME = "aashutoshkumarbhardwaj";

type GhUser = { public_repos: number; followers: number; html_url: string };
type GhRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
};

function formatCount(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
}

export function OssAndAsk() {
  const [q, setQ] = useState("");
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showChat, setShowChat] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const pendingRef = useRef<string | null>(null);
  const HF_ORIGIN = "https://aashutoshkumarbhardwaj-chatbot.hf.space";
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const [u, r] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`).then((res) =>
            res.ok ? res.json() : Promise.reject(new Error("user " + res.status)),
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          ).then((res) =>
            res.ok ? res.json() : Promise.reject(new Error("repos " + res.status)),
          ),
        ]);
        if (cancelled) return;
        setUser(u);
        setRepos(r);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "fetch failed");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const ownRepos = repos.filter((r) => !r.fork);
  const topRepos = [...ownRepos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

  const stats = [
    { icon: GitBranch, label: "REPOS", value: user ? formatCount(user.public_repos) : "—" },
    { icon: Star, label: "STARS", value: repos.length ? formatCount(totalStars) : "—" },
    { icon: GitPullRequest, label: "FOLLOWERS", value: user ? formatCount(user.followers) : "—" },
    { icon: GitCommit, label: "PUBLIC", value: ownRepos.length ? formatCount(ownRepos.length) : "—" },
  ];

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      // Only accept messages from the HF space origin for safety
      try {
        if (e.origin !== HF_ORIGIN) return;
      } catch {
        return;
      }

      const data = e.data ?? {};
      // Try common payload shapes (depends on the Spaces app)
      const text = typeof data === "string" ? data : data?.text ?? data?.message ?? data?.payload;
      if (text) {
        setMessages((m) => [...m, { from: "bot", text: String(text) }]);
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="ask" className="grid gap-5 py-12 sm:py-20 md:grid-cols-2">
      {/* OSS Activity */}
      <div className="brutal-border bg-card p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl sm:text-4xl">OSS ACTIVITY</h3>
          <a
            href={user?.html_url ?? `https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] tracking-widest text-muted-foreground hover:text-ink"
          >
            @{GITHUB_USERNAME} <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Live pull from GitHub — public repositories, stars and followers.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="brutal-border bg-paper p-3">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground">
                <s.icon className="h-3 w-3" /> {s.label}
              </div>
              <div className="font-display text-3xl">
                {loading ? <span className="opacity-40">···</span> : s.value}
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className="mt-4 brutal-border bg-brand-red text-paper px-3 py-2 font-mono text-[10px] tracking-widest">
            // GITHUB FETCH FAILED — {error}
          </div>
        )}

        <ul className="mt-5 brutal-border divide-y-2 divide-ink/15 bg-paper">
          {loading && (
            <li className="px-3 py-3 font-mono text-xs text-muted-foreground">
              &gt; loading repositories…
            </li>
          )}
          {!loading &&
            topRepos.map((r) => (
              <li key={r.id} className="hover:bg-brand-yellow">
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-3 py-2 font-mono text-xs"
                >
                  <span className="truncate font-bold tracking-wider">{r.name}</span>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    {r.language && (
                      <span className="brutal-border bg-card px-1.5 py-0.5 text-[9px] tracking-widest">
                        {r.language.toUpperCase()}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3 w-3" /> {formatCount(r.stargazers_count)}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          {!loading && !error && topRepos.length === 0 && (
            <li className="px-3 py-3 font-mono text-xs text-muted-foreground">
              &gt; no public repositories.
            </li>
          )}
        </ul>
      </div>

      {/* Ask Ashutosh AI */}
      <div className="brutal-border bg-ink text-paper p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-brand-yellow" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-paper/70">
            CUSTOM LLM // 7B FT
          </span>
        </div>
        <h3 className="mt-3 text-4xl sm:text-5xl">
          ASK
          <br />
          ASHUTOSH
          <br />
          <span className="bg-brand-yellow text-ink px-2 -mx-1 inline-block">AI</span>
        </h3>
        <p className="mt-3 text-sm text-paper/70">
          A custom LLM trained on my research papers, project notes, and architectural philosophy.
        </p>

        <div className="mt-5 brutal-border bg-card text-foreground p-3">
          <div className="font-mono text-[11px] text-muted-foreground">
            &gt; How can I help you understand my research today?
          </div>

          {/* Message log */}
          {messages.length > 0 && (
            <div className="mt-3 space-y-2 max-h-48 overflow-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded ${
                    m.from === "user" ? "bg-paper text-ink" : "bg-ink text-paper"
                  }`}
                >
                  <div className="font-mono text-[10px] tracking-widest">{m.from.toUpperCase()}</div>
                  <div className="mt-1 text-sm whitespace-pre-wrap">{m.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!q) return;
            // send message locally
            setMessages((m) => [...m, { from: "user", text: q }] );
            // show iframe
            setShowChat(true);
            // If iframe is ready, post message; otherwise hold pendingRef
            const payload = { message: q };
            if (iframeRef.current && iframeRef.current.contentWindow) {
              iframeRef.current.contentWindow.postMessage(payload, HF_ORIGIN);
            } else {
              pendingRef.current = q;
            }
            setQ("");
          }}
          className="mt-3 flex items-stretch gap-2"
        >
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ASK A QUESTION..."
            className="flex-1 brutal-border bg-paper text-ink px-3 py-3 font-mono text-xs placeholder:text-ink/40 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="send"
            className="brutal-border bg-brand-red text-paper px-4 brutal-press"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>

        {/* Inline iframe chat — only show when a question has been sent */}
        {showChat && (
          <div className="mt-4 brutal-border bg-card">
            <iframe
              ref={iframeRef}
              title="Ask Ashutosh AI"
              src="https://aashutoshkumarbhardwaj-chatbot.hf.space"
              width="100%"
              height={450}
              frameBorder={0}
              onLoad={() => {
                // If a pending message exists, post it once iframe finishes loading
                if (pendingRef.current && iframeRef.current?.contentWindow) {
                  iframeRef.current.contentWindow.postMessage({ message: pendingRef.current }, HF_ORIGIN);
                  pendingRef.current = null;
                }
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
