// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://jamiewilliamscreative.co.uk';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
      { protocol: 'https', hostname: 'vumbnail.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
    ],
  },
  integrations: [
    sitemap({
      // Exclude the 404 page and the deliberately blank black-screen root.
      filter: (page) => {
        if (page.includes('/404')) return false;
        try {
          const pathname = new URL(page).pathname;
          if (pathname === '/' || pathname === '') return false;
        } catch {
          // If page is not parseable as a URL, fall through and include it.
        }
        return true;
      },
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
