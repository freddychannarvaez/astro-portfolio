import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: "static",
  adapter: vercel()
});