// Page metadata and schema.org JSON-LD, built from the same data the pages render.
import type { Metadata } from "next";
import { CANONICAL_ORIGIN, canonicalUrl } from "@/config/site";
import {
  DEPARTMENTS,
  DOCTORS,
  HOSPITAL_INFO,
  getDoctorsByDepartment,
  type Department,
  type Doctor,
} from "@/data/hospitalData";

export const SITE_NAME = HOSPITAL_INFO.name;

// Used when a page has no image of its own (home, listings, booking).
const DEFAULT_OG_IMAGE = {
  url: "/hero-lobby.png",
  width: 1437,
  height: 1094,
  alt: "Reception lobby at Maya Hospital, Meerpur",
};

/** Shortens text to at most `max` characters, cutting at a word boundary. */
export function clip(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:–-]+$/, "") + "…";
}

/** Title, description, canonical link and a complete Open Graph block for one page. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const { title, description, path, image, imageAlt } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [image ? { url: image, alt: imageAlt ?? title } : DEFAULT_OG_IMAGE],
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------

type Node = Record<string, unknown>;

const HOSPITAL_ID = `${CANONICAL_ORIGIN}/#hospital`;
const WEBSITE_ID = `${CANONICAL_ORIGIN}/#website`;
const departmentId = (d: Department) => `${canonicalUrl(`/departments/${d.slug}`)}#department`;
const doctorId = (d: Doctor) => `${canonicalUrl(`/doctors/${d.slug}`)}#physician`;

// schema.org MedicalSpecialty values for each department.
const SPECIALTIES: Record<string, string[]> = {
  urology: ["Urologic"],
  neurosurgery: ["Neurologic", "Surgical"],
  "gynecology-obstetrics": ["Gynecologic", "Obstetric"],
  "anorectal-surgery": ["Surgical"],
  "general-surgery": ["Surgical"],
};
const specialtiesOf = (slug: string) =>
  (SPECIALTIES[slug] ?? []).map((s) => `https://schema.org/${s}`);

const ADDRESS: Node = {
  "@type": "PostalAddress",
  streetAddress:
    "556, Maya HOSPITAL & Multispeciality Center, Near Children's Academy School, Aira Road Near Children's Academy Meerpur",
  addressLocality: "Meerpur",
  addressRegion: "Lakhimpur Kheri",
  postalCode: "262701",
  addressCountry: "IN",
};

export function graph(...nodes: Node[]): Node {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: canonicalUrl("/"),
    name: SITE_NAME,
    alternateName: HOSPITAL_INFO.shortName,
    inLanguage: "en-IN",
    publisher: { "@id": HOSPITAL_ID },
  };
}

/** The hospital entity. Pass `full` on the homepage; other pages get a short reference. */
export function hospitalNode(full = false): Node {
  const ref: Node = {
    "@type": "Hospital",
    "@id": HOSPITAL_ID,
    name: SITE_NAME,
    url: canonicalUrl("/"),
  };
  if (!full) return ref;
  const founder = DOCTORS.find((d) => /founder/i.test(d.designation));
  return {
    ...ref,
    alternateName: "Maya Hospital & Multispeciality Center",
    description: HOME_DESCRIPTION,
    logo: canonicalUrl("/logo.png"),
    image: canonicalUrl("/mayahospital.jpeg"),
    telephone: HOSPITAL_INFO.emergencyPhone,
    contactPoint: [
      { "@type": "ContactPoint", telephone: HOSPITAL_INFO.emergencyPhone, contactType: "emergency", availableLanguage: ["en", "hi"] },
      { "@type": "ContactPoint", telephone: HOSPITAL_INFO.bookingPhone, contactType: "reservations", availableLanguage: ["en", "hi"] },
    ],
    address: ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: HOSPITAL_INFO.mapCoordinates.lat,
      longitude: HOSPITAL_INFO.mapCoordinates.lng,
    },
    hasMap: `https://maps.google.com/maps?q=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`,
    areaServed: { "@type": "AdministrativeArea", name: "Lakhimpur Kheri, Uttar Pradesh" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    paymentAccepted: HOSPITAL_INFO.paymentMethods.join(", "),
    currenciesAccepted: "INR",
    foundingDate: HOSPITAL_INFO.established,
    ...(founder ? { founder: { "@id": doctorId(founder) } } : {}),
    medicalSpecialty: [...new Set(DEPARTMENTS.flatMap((d) => specialtiesOf(d.slug)))],
    department: DEPARTMENTS.map((d) => ({ "@id": departmentId(d) })),
    sameAs: [HOSPITAL_INFO.justdialUrl],
  };
}

export function departmentNode(d: Department): Node {
  return {
    "@type": "MedicalClinic",
    "@id": departmentId(d),
    name: `${d.name}, ${HOSPITAL_INFO.shortName}`,
    url: canonicalUrl(`/departments/${d.slug}`),
    description: d.fullDesc,
    image: canonicalUrl(d.image),
    medicalSpecialty: specialtiesOf(d.slug),
    parentOrganization: { "@id": HOSPITAL_ID },
    address: ADDRESS,
    telephone: HOSPITAL_INFO.bookingPhone,
    availableService: d.services.map((name) => ({ "@type": "MedicalProcedure", name })),
    employee: getDoctorsByDepartment(d.slug).map((doc) => ({ "@id": doctorId(doc) })),
  };
}

export function doctorNode(d: Doctor): Node {
  const dept = DEPARTMENTS.find((x) => x.slug === d.departmentSlug);
  return {
    "@type": "Person",
    "@id": doctorId(d),
    name: d.name,
    url: canonicalUrl(`/doctors/${d.slug}`),
    image: canonicalUrl(d.image),
    jobTitle: d.designation,
    description: d.about,
    worksFor: { "@id": HOSPITAL_ID },
    ...(dept ? { memberOf: { "@id": departmentId(dept) } } : {}),
    knowsAbout: d.specialties,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: d.degrees,
    },
  };
}

export function breadcrumbNode(trail: [name: string, path: string][]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: canonicalUrl(path),
    })),
  };
}

/** An ordered list of the pages a listing page links to. */
export function listNode(path: string, items: [name: string, path: string][]): Node {
  return {
    "@type": "ItemList",
    "@id": `${canonicalUrl(path)}#list`,
    itemListElement: items.map(([name, itemPath], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      url: canonicalUrl(itemPath),
    })),
  };
}

// ---------------------------------------------------------------------------
// Copy for pages whose own files are client components (no metadata export).
// ---------------------------------------------------------------------------

export const HOME_TITLE = `${SITE_NAME}, Meerpur, Lakhimpur Kheri`;
const DEPARTMENT_NAMES = DEPARTMENTS.map((d) => d.name.replace(/ Department$/, ""));
const DEPARTMENT_LIST = `${DEPARTMENT_NAMES.slice(0, -1).join(", ")} and ${DEPARTMENT_NAMES.at(-1)}`;

export const HOME_DESCRIPTION = clip(
  `24x7 multi-speciality hospital in Meerpur, Lakhimpur Kheri: ${DEPARTMENT_LIST}.`,
);
export const DEPARTMENTS_DESCRIPTION = clip(
  `${DEPARTMENT_LIST} departments at ${HOSPITAL_INFO.shortName}, Meerpur: services, specialist doctors and OPD timings.`,
);
