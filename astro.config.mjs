// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: "/devportfolio/",  // <--- important for GitHub Pages
  vite: {
    plugins: [tailwindcss()],
  },
});