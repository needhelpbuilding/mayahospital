import { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  getDepartmentBySlug, 
  getDoctorsByDepartment, 
  getAllDepartmentSlugs, 
  HOSPITAL_INFO 
} from "@/data/hospitalData";
import DepartmentDetailView from "@/components/DepartmentDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllDepartmentSlugs();
  // Include common aliases
  return [
    ...slugs.map((slug) => ({ slug })),
    { slug: "gynecology" },
    { slug: "obstetrics-gynaecology" }
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    return {
      title: "Department Not Found - Maya Hospital",
      description: "The requested department could not be found at Maya Hospital."
    };
  }

  return {
    title: `${department.name} - ${HOSPITAL_INFO.shortName} Meerpur`,
    description: `${department.shortDesc} Expert specialist consultation and 24x7 emergency medical services in Meerpur, Lakhimpur Kheri.`,
    openGraph: {
      title: `${department.name} | Maya Hospital & Multi Speciality Centre`,
      description: department.shortDesc,
      images: [department.image]
    }
  };
}

export default async function DepartmentPage({ params }: PageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  const doctors = getDoctorsByDepartment(department.slug);

  return <DepartmentDetailView department={department} doctors={doctors} />;
}
