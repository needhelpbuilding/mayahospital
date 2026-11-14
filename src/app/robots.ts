import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/config/site";

// No robots.txt existed before. The app has no admin, API or other internal
// routes, so nothing is disallowed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: canonicalUrl("/sitemap.xml"),
  };
}
