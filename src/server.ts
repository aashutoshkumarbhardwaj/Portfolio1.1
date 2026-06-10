import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { startInstance } from "./start";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
        const handler = await getServerEntry();
        const response = await handler.fetch(request, env, ctx);

        // If this is an HTML response, inject a small, safe `window.__TSS_START_OPTIONS__`
        // payload so client-side `hydrateStart()` can read sensible defaults and not crash.
        const contentType = response.headers.get("content-type") ?? "";
        if (contentType.includes("text/html")) {
          try {
            const text = await response.text();

            // Build a safe options object: only primitive/serializable fields.
            const serverOpts = await (startInstance?.getOptions?.() as Promise<any>).catch(() => ({}));
            const safeOpts: Record<string, any> = {
              defaultSsr: serverOpts?.defaultSsr ?? false,
              basepath: serverOpts?.basepath ?? undefined,
              serializationAdapters: [],
            };

            const injected = text.replace(
              /<\/body>/i,
              `<script>window.__TSS_START_OPTIONS__ = ${JSON.stringify(safeOpts)};</script></body>`,
            );

            return new Response(injected, {
              status: response.status,
              headers: { "content-type": "text/html; charset=utf-8" },
            });
          } catch (err) {
            console.error("Failed to inject start options into HTML response:", err);
            // fall through to normalize/return original response
          }
        }

        return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
