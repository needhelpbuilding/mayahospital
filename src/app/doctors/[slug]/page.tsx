import { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  getDoctorBySlug, 
  getDepartmentBySlug, 
  getAllDoctorSlugs, 
  HOSPITAL_INFO 
} from "@/data/hospitalData";
import DoctorDetailView from "@/components/DoctorDetailView";

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

  return {
    title: `${doctor.name} (${doctor.shortDegrees || doctor.degrees}) - ${doctor.department} | ${HOSPITAL_INFO.shortName}`,
    description: `${doctor.name}, ${doctor.designation} at Maya Hospital Meerpur. ${doctor.about.slice(0, 160)}`,
    openGraph: {
      title: `${doctor.name} - ${doctor.department} Specialist | Maya Hospital`,
      description: doctor.about,
      images: [doctor.image]
    }
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const department = getDepartmentBySlug(doctor.departmentSlug);

  return <DoctorDetailView doctor={doctor} department={department} />;
}
