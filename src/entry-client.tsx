import "./lib/error-capture";
import { hydrateStart } from "@tanstack/react-start-client";
import React from "react";
import { createRoot } from "react-dom/client";

function renderFallback() {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  const root = createRoot(rootEl);
  root.render(
    React.createElement(
      "div",
      { style: { fontFamily: "Inter, system-ui, sans-serif", padding: 24 } },
      React.createElement("h1", null, "PORTFOLIO"),
      React.createElement("p", null, "Client hydration unavailable — running in client-only fallback mode."),
      React.createElement(
        "p",
        null,
        React.createElement("a", { href: "/", onClick: () => window.location.reload() }, "Reload")
      )
    )
  );
}

async function main() {
  try {
    // If the server injected the TanStack Start hydration marker, use hydrateStart.
    // hydrateStart expects server-provided options; guard to avoid throwing when missing.
    if (typeof window !== "undefined" && (window as any).$_TSR) {
      await hydrateStart();
      return;
    }

    // No server state found — render a safe client-only fallback to avoid runtime errors.
    renderFallback();
  } catch (err) {
    console.error("Client hydration failed:", err);
    try {
      renderFallback();
    } catch (e) {
      console.error("Fallback render also failed:", e);
    }
  }
}

void main();
