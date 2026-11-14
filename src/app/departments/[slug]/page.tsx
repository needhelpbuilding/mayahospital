import { Metadata } from "next";
import { notFound } from "next/navigation";
import { 
  getDepartmentBySlug, 
  getDoctorsByDepartment, 
  getAllDepartmentSlugs, 
  HOSPITAL_INFO 
} from "@/data/hospitalData";
import DepartmentDetailView from "@/components/DepartmentDetailView";
import JsonLd from "@/components/JsonLd";
import { breadcrumbNode, clip, departmentNode, graph, hospitalNode, pageMetadata } from "@/lib/seo";

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

  // Canonical uses the main slug, so alias URLs (e.g. /departments/gynecology) point at it.
  return pageMetadata({
    title: `${department.name} - ${HOSPITAL_INFO.shortName} Meerpur`,
    description: clip(`${department.shortDesc} ${HOSPITAL_INFO.shortName}, Meerpur, Lakhimpur Kheri.`),
    path: `/departments/${department.slug}`,
    image: department.image,
    imageAlt: `${department.name} at ${HOSPITAL_INFO.shortName}, Meerpur`,
  });
}

export default async function DepartmentPage({ params }: PageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    notFound();
  }

  const doctors = getDoctorsByDepartment(department.slug);

  return (
    <>
      <JsonLd
        data={graph(
          hospitalNode(),
          departmentNode(department),
          breadcrumbNode([
            ["Home", "/"],
            ["Departments", "/departments"],
            [department.name, `/departments/${department.slug}`],
          ]),
        )}
      />
      <DepartmentDetailView department={department} doctors={doctors} />
    </>
  );
}
