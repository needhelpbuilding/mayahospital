// Single source of truth for the site's public domain.
// Used by metadataBase, canonical links, Open Graph/Twitter image URLs,
// JSON-LD, sitemap.xml and robots.txt.
//
// Bare host, without protocol or trailing slash. The build fails with a clear
// error if this is not a valid host.
export const CANONICAL_DOMAIN = "mayahospital.care";

function resolveOrigin(domain: string): string {
  let url: URL;
  try {
    url = new URL(`https://${domain}`);
  } catch {
    throw new Error(
      `CANONICAL_DOMAIN is not a valid host ("${domain}"). Set it in src/config/site.ts.`,
    );
  }
  if (url.host !== domain.toLowerCase()) {
    throw new Error(
      `CANONICAL_DOMAIN must be a bare host like "www.example.com", got "${domain}". Set it in src/config/site.ts.`,
    );
  }
  return url.origin;
}

/** e.g. "https://www.example.com" (no trailing slash) */
export const CANONICAL_ORIGIN = resolveOrigin(CANONICAL_DOMAIN);

/** Absolute URL on the canonical domain for a site-relative path. */
export function canonicalUrl(path: string = "/"): string {
  return new URL(path, CANONICAL_ORIGIN).toString();
}
