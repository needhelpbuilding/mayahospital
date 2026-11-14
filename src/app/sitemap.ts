import type { MetadataRoute } from "next";
import { getAllDepartmentSlugs, getAllDoctorSlugs } from "@/data/hospitalData";
import { canonicalUrl } from "@/config/site";

// Built from the same data the department and doctor pages render from, so the
// sitemap can't drift from the routes. Alias slugs (e.g. /departments/gynecology,
// /doctors/dr-rajiv-singh) are left out: they duplicate a canonical page.
//
// hospitalData.ts has no per-entry modified dates, so every entry uses the
// build date, injected as BUILD_DATE by next.config.ts.
const LAST_MODIFIED = process.env.BUILD_DATE ?? new Date().toISOString();

export function sitemapPaths(): string[] {
  return [
    "/",
    "/departments",
    ...getAllDepartmentSlugs().map((slug) => `/departments/${slug}`),
    "/doctors",
    ...getAllDoctorSlugs().map((slug) => `/doctors/${slug}`),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths().map((path) => ({
    url: canonicalUrl(path),
    lastModified: LAST_MODIFIED,
  }));
}
