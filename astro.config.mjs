import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your real domain before deploying — it powers sitemap.xml,
// canonical URLs and Open Graph absolute links.
export default defineConfig({
  site: 'https://www.avsportsinfrastructure.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
