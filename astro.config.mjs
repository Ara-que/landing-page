// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: "https://Ara-que.github.io",
  base: "/landing-page",
});
