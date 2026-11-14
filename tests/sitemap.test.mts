// Run with: npm test  (Node 24+, uses Node's built-in test runner and type stripping; no extra deps)
import { test } from "node:test";
import assert from "node:assert/strict";
import * as nodeModule from "node:module";
import { pathToFileURL } from "node:url";
import path from "node:path";

// registerHooks exists in Node 24 but not in the project's @types/node@20.
type NextResolve = (specifier: string, context: unknown) => unknown;
const { registerHooks } = nodeModule as unknown as {
  registerHooks(hooks: {
    resolve(specifier: string, context: unknown, nextResolve: NextResolve): unknown;
  }): void;
};

// Resolve the app's "@/..." alias and extensionless imports the way tsconfig does.
const SRC = path.resolve(import.meta.dirname, "../src");
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      return nextResolve(pathToFileURL(path.join(SRC, specifier.slice(2)) + ".ts").href, context);
    }
    return nextResolve(specifier, context);
  },
});

const { DEPARTMENTS, DOCTORS } = await import("@/data/hospitalData");
const { CANONICAL_ORIGIN } = await import("@/config/site");
const { default: sitemap } = await import("@/app/sitemap");
const { default: robots } = await import("@/app/robots");

const urls = sitemap().map((entry) => entry.url);

test("sitemap includes the homepage and listing pages", () => {
  for (const p of ["/", "/departments", "/doctors"]) {
    assert.ok(urls.includes(new URL(p, CANONICAL_ORIGIN).toString()), `missing ${p}`);
  }
});

test("sitemap includes every department route", () => {
  for (const dept of DEPARTMENTS) {
    const url = `${CANONICAL_ORIGIN}/departments/${dept.slug}`;
    assert.ok(urls.includes(url), `missing ${url}`);
  }
});

test("sitemap includes every doctor route", () => {
  for (const doc of DOCTORS) {
    const url = `${CANONICAL_ORIGIN}/doctors/${doc.slug}`;
    assert.ok(urls.includes(url), `missing ${url}`);
  }
});

test("sitemap has no duplicates, only canonical-domain URLs, and a lastmod on each entry", () => {
  assert.equal(new Set(urls).size, urls.length);
  for (const entry of sitemap()) {
    assert.ok(entry.url.startsWith(`${CANONICAL_ORIGIN}/`), entry.url);
    assert.ok(entry.lastModified, `no lastModified for ${entry.url}`);
    assert.equal(entry.priority, undefined);
    assert.equal(entry.changeFrequency, undefined);
  }
});

test("robots.txt points at the canonical sitemap", () => {
  assert.equal(robots().sitemap, `${CANONICAL_ORIGIN}/sitemap.xml`);
});
