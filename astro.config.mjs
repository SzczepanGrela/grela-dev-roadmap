import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://roadmap.grela.dev",
  integrations: [react()],
  devToolbar: {
    enabled: false,
  },
  output: "static",
  build: {
    format: "directory",
  },
});
