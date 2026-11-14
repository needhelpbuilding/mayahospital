import { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  getDoctorBySlug, 
  getDepartmentBySlug, 
  getAllDoctorSlugs, 
  HOSPITAL_INFO 
} from "@/data/hospitalData";
import DoctorDetailView from "@/components/DoctorDetailView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, clip, doctorNode, graph, hospitalNode, pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllDoctorSlugs();
  return [
    ...slugs.map((slug) => ({ slug })),
    { slug: "dr-rajiv-singh" }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found - Maya Hospital",
      description: "The requested doctor profile could not be found."
    };
  }

  // Canonical uses the main slug, so alias URLs (e.g. /doctors/dr-rajiv-singh) point at it.
  return pageMetadata({
    title: `${doctor.name} – ${doctor.department} | ${HOSPITAL_INFO.shortName}`,
    description: clip(
      `${doctor.name} (${doctor.shortDegrees || doctor.degrees}), ${doctor.designation} at ${HOSPITAL_INFO.shortName}, Meerpur. ${doctor.experience}. OPD: ${doctor.opdTimings}.`,
    ),
    path: `/doctors/${doctor.slug}`,
    image: doctor.image,
    imageAlt: doctor.name,
  });
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const department = getDepartmentBySlug(doctor.departmentSlug);

  return (
    <>
      <JsonLd
        data={graph(
          hospitalNode(),
          doctorNode(doctor),
          breadcrumbNode([
            ["Home", "/"],
            ["Doctors", "/doctors"],
            ...(department
              ? [[department.name, `/departments/${department.slug}`] as [string, string]]
              : []),
            [doctor.name, `/doctors/${doctor.slug}`],
          ]),
        )}
      />
      <DoctorDetailView doctor={doctor} department={department} />
    </>
  );
}
