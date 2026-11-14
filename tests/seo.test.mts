// Run with: npm test  (Node 24+, built-in test runner; no extra deps)
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
const seo = await import("@/lib/seo");

test("clip keeps text within the limit and cuts at a word boundary", () => {
  const long = "word ".repeat(60).trim();
  const out = seo.clip(long, 160);
  assert.ok(out.length <= 160, String(out.length));
  assert.ok(out.endsWith("word…"));
  assert.equal(seo.clip("short"), "short");
});

test("home and listing descriptions stay within 160 characters", () => {
  assert.ok(seo.HOME_DESCRIPTION.length <= 160);
  assert.ok(seo.DEPARTMENTS_DESCRIPTION.length <= 160);
  for (const d of DEPARTMENTS) assert.ok(seo.HOME_DESCRIPTION.includes(d.name.replace(/ Department$/, "")));
});

test("every department and doctor gets a schema node on the canonical domain", () => {
  for (const d of DEPARTMENTS) {
    const node = seo.departmentNode(d);
    assert.equal(node.url, `${CANONICAL_ORIGIN}/departments/${d.slug}`);
    assert.ok((node.medicalSpecialty as string[]).length > 0, `no specialty for ${d.slug}`);
  }
  for (const d of DOCTORS) {
    const node = seo.doctorNode(d);
    assert.equal(node["@type"], "Person");
    assert.equal(node.url, `${CANONICAL_ORIGIN}/doctors/${d.slug}`);
  }
});

test("hospital schema has no third-party review rating and links every department", () => {
  const h = seo.hospitalNode(true);
  assert.equal(h.aggregateRating, undefined);
  assert.equal((h.department as unknown[]).length, DEPARTMENTS.length);
});
