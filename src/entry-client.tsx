import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { SiteHeader } from "./components/portfolio/SiteHeader";
import { Hero } from "./components/portfolio/Hero";
import { OssAndAsk } from "./components/portfolio/OssAndAsk";
import { SiteFooter } from "./components/portfolio/SiteFooter";
import { getRouter } from "./router";
import "./lib/error-capture";

function App() {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(SiteHeader, null),
      React.createElement("main", { id: "top", className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10" },
        React.createElement(Hero, null),
        React.createElement(OssAndAsk, null),
      ),
      React.createElement(SiteFooter, null),
    )
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = createRoot(rootEl);
  const router = getRouter();
  root.render(React.createElement(RouterProvider, { router }, React.createElement(App, null)));
} else {
  // If for some reason #root doesn't exist, mount to body.
  const el = document.createElement("div");
  el.id = "root";
  document.body.appendChild(el);
  const root = createRoot(el);
  const router = getRouter();
  root.render(React.createElement(RouterProvider, { router }, React.createElement(App, null)));
}

