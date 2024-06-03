import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://endearing-dango-b17c53.netlify.app",
  integrations: [preact()]
});