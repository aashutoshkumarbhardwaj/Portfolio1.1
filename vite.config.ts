import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwind from "@tailwindcss/vite";
import { resolve } from "path";

// Minimal Vite config that mirrors the previously provided preset enough for a build.
// Keeps React plugin, TS path resolution and Tailwind integration. We also add a
// custom `tanstackStart` field so code reading vite.config.ts for that field still works.
export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwind()],
  resolve: {
    alias: {
      // Shim Node async_hooks for browser build
      "node:async_hooks": resolve(__dirname, "src/shims/node-async-hooks.ts"),
      // Provide a client shim for TanStack Start entry used by hydrateStart
      "#tanstack-start-entry": resolve(__dirname, "src/shims/tanstack-start-entry.ts"),
    },
  },
  // Keep a tanstackStart field similar to the preset so server entry redirect remains available.
  tanstackStart: {
    server: { entry: "server" },
  } as any,
});
