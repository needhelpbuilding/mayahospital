import type { Metadata } from "next";
import { HOSPITAL_INFO } from "@/data/hospitalData";
import { clip, pageMetadata } from "@/lib/seo";

// /doctors/page.tsx is a client component and can't export metadata, so the
// listing's metadata is set here. /doctors/[slug] overrides all of it.
export const metadata: Metadata = pageMetadata({
  title: `Specialist Doctors & Surgeons | ${HOSPITAL_INFO.shortName} Meerpur`,
  description: clip(
    `Specialist doctors and surgeons at ${HOSPITAL_INFO.shortName}, Meerpur, Lakhimpur Kheri: qualifications, experience, OPD timings and appointment booking.`,
  ),
  path: "/doctors",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
