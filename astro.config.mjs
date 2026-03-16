// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ananthakkumaran.github.io",
  base: "/devportfolio/",
  output: "static",
  integrations: [tailwind()],
});