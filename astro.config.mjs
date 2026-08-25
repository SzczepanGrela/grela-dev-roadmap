import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://szczepangrela.github.io",
  base: "/grela-dev-roadmap",
  integrations: [react()],
  devToolbar: {
    enabled: false,
  },
  output: "static",
  build: {
    format: "directory",
  },
});
