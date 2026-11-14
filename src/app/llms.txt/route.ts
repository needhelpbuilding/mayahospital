// /llms.txt: a plain-text summary of the site for AI assistants and answer engines
// (format: https://llmstxt.org). Built from the same data as the pages; prerendered at build.
import { canonicalUrl } from "@/config/site";
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from "@/data/hospitalData";
import { HOME_DESCRIPTION } from "@/lib/seo";

export function GET() {
  const lines = [
    `# ${HOSPITAL_INFO.name}`,
    "",
    `> ${HOME_DESCRIPTION}`,
    "",
    `- Address: ${HOSPITAL_INFO.fullAddress}`,
    `- Hours: ${HOSPITAL_INFO.hours}`,
    ...HOSPITAL_INFO.allPhones.map((p) => `- ${p.label}: ${p.number}`),
    `- Payment: ${HOSPITAL_INFO.paymentMethods.join(", ")}`,
    `- Established: ${HOSPITAL_INFO.established}`,
    "",
    "## Departments",
    "",
    ...DEPARTMENTS.map(
      (d) => `- [${d.name}](${canonicalUrl(`/departments/${d.slug}`)}): ${d.shortDesc} Timings: ${d.timing}.`,
    ),
    "",
    "## Doctors",
    "",
    ...DOCTORS.map(
      (d) =>
        `- [${d.name}](${canonicalUrl(`/doctors/${d.slug}`)}): ${d.designation}, ${d.department}. ${d.degrees}. OPD: ${d.opdTimings}.`,
    ),
    "",
    "## Pages",
    "",
    `- [Home](${canonicalUrl("/")})`,
    `- [All departments](${canonicalUrl("/departments")})`,
    `- [All doctors](${canonicalUrl("/doctors")})`,
    `- [Book a consultation](${canonicalUrl("/consultancy")})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
