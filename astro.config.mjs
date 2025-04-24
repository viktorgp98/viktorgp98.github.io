// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://viktorgp98.github.io",
  base: "portafolio_vk_2025",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
