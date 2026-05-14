# Jamie Williams — Portfolio

Single-page videographer portfolio. Astro 6 + Tailwind v4 (via `@tailwindcss/vite`), static output, deployed to Cloudflare Pages.

```sh
npm install
npm run dev       # local dev at http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # preview the built site
```

Cloudflare Pages settings: framework preset *Astro*, root directory `portfolio`, build command `npm run build`, output directory `dist`, env `NODE_VERSION=22`.
