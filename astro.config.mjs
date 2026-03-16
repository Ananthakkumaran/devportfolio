// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ananthakkumaran.github.io",
  base: "/devportfolio/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});

