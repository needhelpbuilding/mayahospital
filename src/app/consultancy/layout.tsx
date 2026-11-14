import type { Metadata } from "next";
import { HOSPITAL_INFO } from "@/data/hospitalData";
import { clip, pageMetadata } from "@/lib/seo";

// /consultancy/page.tsx is a client component and can't export metadata,
// so it is set here.
export const metadata: Metadata = pageMetadata({
  title: `Book a Doctor Consultation | ${HOSPITAL_INFO.shortName} Meerpur`,
  description: clip(
    `Book an OPD consultation at ${HOSPITAL_INFO.shortName}, Meerpur: choose a department and doctor, pick a date and time slot, or call ${HOSPITAL_INFO.bookingPhone}.`,
  ),
  path: "/consultancy",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
