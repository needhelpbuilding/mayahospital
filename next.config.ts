import type { NextConfig } from "next";

// Domains: the site is served only on mayahospital.care (canonical, set in
// src/config/site.ts) and www.mayahospital.care. The www -> apex 301 lives in
// Vercel -> Project -> Settings -> Domains, not here: Vercel applies it before
// this app runs, and a second copy here would loop if the two ever disagreed.

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: 'security',
  },
  // Used as <lastmod> in sitemap.xml (the page data has no modified dates).
  env: {
    BUILD_DATE: new Date().toISOString(),
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
