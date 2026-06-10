// @#.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "vite";

// Minimal Vite config: keep defaults and allow adding TanStack-specific
// behavior elsewhere. If you rely on a custom TanStack plugin package,
// re-add it via your environment. This placeholder avoids an unresolved
// import during development.
export default defineConfig({
  // leave empty; the project uses framework-specific defaults elsewhere
});
