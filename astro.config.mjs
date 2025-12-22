import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Pekzer.github.io',
  base: '/Herrera-Ramiro',
  integrations: [tailwind()]
});