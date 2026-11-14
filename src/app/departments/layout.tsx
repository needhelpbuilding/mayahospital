import type { Metadata } from "next";
import { HOSPITAL_INFO } from "@/data/hospitalData";
import { DEPARTMENTS_DESCRIPTION, pageMetadata } from "@/lib/seo";

// /departments/page.tsx is a client component and can't export metadata, so the
// listing's metadata is set here. /departments/[slug] overrides all of it.
export const metadata: Metadata = pageMetadata({
  title: `Specialist Departments | ${HOSPITAL_INFO.shortName} Meerpur, Lakhimpur Kheri`,
  description: DEPARTMENTS_DESCRIPTION,
  path: "/departments",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
