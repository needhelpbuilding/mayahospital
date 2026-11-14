import React from "react";
import JsonLd from "@/components/JsonLd";
import { graph, hospitalNode, websiteNode } from "@/lib/seo";

// Homepage structured data: the hospital entity and the website.
export default function SchemaMarkup() {
  return <JsonLd data={graph(websiteNode(), hospitalNode(true))} />;
}
