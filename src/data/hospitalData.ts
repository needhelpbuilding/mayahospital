export interface Doctor {
  id: string;
  slug: string;
  name: string;
  degrees: string;
  shortDegrees?: string;
  designation: string;
  department: string;
  departmentSlug: string;
  experience: string;
  image: string;
  availability: string;
  opdTimings: string;
  specialties: string[];
  about: string;
  services: string[];
  phone?: string;
  consultationFee?: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  iconClass: string;
  image: string;
  services: string[];
  headDoctor?: string;
  doctorIds: string[];
  timing: string;
  emergencySupport: boolean;
  badges: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
  location: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  discountedPrice?: string;
  testsCount: number;
  includes: string[];
  recommendedFor: string;
}

export const HOSPITAL_INFO = {
  name: "Maya Hospital & Multi Speciality Centre",
  shortName: "Maya Hospital",
  tagline: "Dedicated to Excellence in Patient-Centred Healthcare",
  subtagline: "Comprehensive 24x7 Multi-Speciality Care, Advanced Surgery, and Emergency Diagnostics in Meerpur, Lakhimpur Kheri",
  established: "2021",
  rating: "5.0",
  reviewCount: "51+",
  hours: "Open 24 Hours / 7 Days a Week",
  emergencyPhone: "+91 9839752108",
  bookingPhone: "+91 9161103325",
  secondaryPhone: "+91 7897576583",
  landlinePhone: "+91 7897576583",
  ambulancePhone: "+91 9839752108",
  allPhones: [
    { label: "24x7 Emergency Helpline", number: "+91 9839752108", raw: "9839752108", isEmergency: true },
    { label: "OPD Booking & Reception", number: "+91 9161103325", raw: "9161103325", isEmergency: false },
    { label: "Patient Care & Enquiry", number: "+91 7897576583", raw: "7897576583", isEmergency: false }
  ],
  phoneDisplayList: "+91 9839752108 (Emergency) • +91 9161103325 • +91 7897576583",
  freeAmbulance: "Free Ambulance Service (फ्री एम्बुलेंस सुविधा)",
  email: "contact@mayahospitalmeerpur.com",
  appointmentEmail: "appointments@mayahospitalmeerpur.com",
  fullAddress: "556, Maya HOSPITAL & Multispeciality Center, Near Children's Academy School, Aira Road Near Children's Academy Meerpur, Meerpur, Lakhimpur Kheri-262701, Uttar Pradesh",
  shortAddress: "Near Children's Academy School, Aira Road, Meerpur, Lakhimpur Kheri, UP - 262701",
  mapCoordinates: {
    lat: 27.9324587,
    lng: 80.8090101
  },
  justdialUrl: "https://jsdl.in/DT-99V4R2A1WW9",
  paymentMethods: ["Cash", "UPI / QR Code", "Debit & Credit Cards", "Net Banking", "Cheque / DD", "Ayushman Bharat / Insurance"],
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-krishna-kumar-bhandari",
    slug: "dr-krishna-kumar-bhandari",
    name: "Dr. Krishna Kumar Bhandari",
    degrees: "M.B.B.S. (Grant Medical College Mumbai), M.S., M.Ch (Gold Medal) Urology, KGMU Lucknow",
    shortDegrees: "MBBS (Grant MC Mumbai), MS, M.Ch Urology (KGMU)",
    designation: "Chief Consultant Urologist & Andrologist",
    department: "Urology",
    departmentSlug: "urology",
    experience: "15+ Years Experience",
    image: "/hospital-assets/doctors/krishnakumarbhandari.jpeg",
    availability: "Every Sunday from 10:00 AM to 04:00 PM",
    opdTimings: "Every Sunday: 10:00 AM - 04:00 PM",
    specialties: [
      "PCNL & URSL Endoscopic Stone Surgery",
      "TURP Prostate Enlargement (गदूद) Surgery",
      "Male Reproductive Issues & Andrology",
      "Urinary Tract Infections (UTIs)",
      "Kidney & Bladder Calculi Laser Care"
    ],
    about: "Dr. Krishna Kumar Bhandari is a nationally acclaimed Urologist and Andrologist with advanced surgical training from Grant Medical College, Mumbai, and an M.Ch Gold Medal in Urology from King George's Medical University (KGMU), Lucknow. He brings super-specialized urological treatments to Lakhimpur Kheri, conducting advanced endoscopic operations for kidney and urinary stones (PCNL, URSL, TURP) without incisions, alongside management of enlarged prostate and male infertility.",
    services: [
      "Successful treatment and endoscopic operations for kidney and urinary tract stones using PCNL, URSL, and TURP methods",
      "Treatment and endoscopic surgery for prostate enlargement (गदूद)",
      "Management of male reproductive issues and andrology disorders",
      "Comprehensive treatment for recurrent urinary tract infections (UTIs)"
    ],
    phone: HOSPITAL_INFO.bookingPhone,
    consultationFee: "₹500"
  },
  {
    id: "dr-shiv-narayan-pandey",
    slug: "dr-shiv-narayan-pandey",
    name: "Dr. Shiv Narayan Pandey",
    degrees: "MBBS, DrNB Neurosurgery, Neuro Endoscopy (Brain and Spine), FMISS (Minimal Invasive Spine), Global Spine Diploma (AO Spine), Consultant Brain and Spine Surgeon",
    shortDegrees: "MBBS, DrNB Neurosurgery, FMISS, AO Spine",
    designation: "Consultant Brain and Spine Surgeon, Neurosurgeon",
    department: "Neurosurgery",
    departmentSlug: "neurosurgery",
    experience: "14+ Years Experience",
    image: "/hospital-assets/doctors/shivnarayanpandey.jpeg",
    availability: "Second and fourth Sunday of every month from 10:00 AM to 04:00 PM",
    opdTimings: "2nd & 4th Sunday: 10:00 AM - 04:00 PM",
    specialties: [
      "Advanced Brain & Spine Surgeries",
      "Neuro Endoscopy (Brain & Spine)",
      "Minimally Invasive Spine Surgery (FMISS)",
      "Global Spine Diploma (AO Spine) Care",
      "Head Injury & Neuro-Trauma Care"
    ],
    about: "Dr. Shiv Narayan Pandey is a premier Consultant Brain and Spine Surgeon holding DrNB in Neurosurgery, fellowship in Minimal Invasive Spine Surgery (FMISS), and the globally prestigious AO Spine Diploma. He specializes in neuro-endoscopy and keyhole spinal interventions, offering modern surgical care for spinal disc slips, spondylitis, spinal cord compression, brain tumors, and acute head trauma.",
    services: [
      "Brain and spine surgeries with advanced micro-surgical instrumentation",
      "Neuro endoscopy for minimally invasive brain and spinal decompression",
      "Minimally invasive spine surgery (FMISS) for faster rehabilitation",
      "Advanced neurological care for trauma, tumor excisions, and spinal disorders"
    ],
    phone: HOSPITAL_INFO.bookingPhone,
    consultationFee: "₹600"
  },
  {
    id: "dr-apoorva-shrivastava",
    slug: "dr-apoorva-shrivastava",
    name: "Dr. Apoorva Shrivastava",
    degrees: "M.B.B.S.",
    shortDegrees: "M.B.B.S.",
    designation: "Consultant Obstetrician & Gynecologist",
    department: "Gynecology and Obstetrics",
    departmentSlug: "gynecology-obstetrics",
    experience: "10+ Years Experience",
    image: "/hospital-assets/doctors/apoorvasrivastava.jpeg",
    availability: "Every day",
    opdTimings: "Monday to Sunday: 09:30 AM - 05:00 PM (Emergency 24x7)",
    specialties: [
      "Antenatal Care & High-Risk Pregnancy",
      "Normal & Cesarean (C-Section) Deliveries",
      "Infertility Evaluation & Couple Counseling",
      "Hysterectomy (Complete Uterus Removal)",
      "Uterine Fibroids, Cysts & Pelvic Tumors"
    ],
    about: "Dr. Apoorva Shrivastava is a compassionate and seasoned Obstetrician and Gynecologist dedicated to women's complete reproductive and maternal well-being at Maya Hospital. Available daily, she leads the maternity wing with modern birthing facilities, ensuring gentle antenatal guidance, painless normal deliveries, safe cesarean procedures, and management of recurrent miscarriages and fibroids.",
    services: [
      "Comprehensive care and treatment for pregnant women across all trimesters",
      "Normal deliveries and emergency / elective Cesarean deliveries (C-Section)",
      "Infertility treatments and ovulation workups for couples struggling to conceive",
      "Comprehensive management of recurrent miscarriages and high-risk pregnancies",
      "Hysterectomy (complete surgical removal of the uterus) with minimal recovery time",
      "Examination and treatment of cervical wounds, erosion, and ulcers",
      "Treatment for uterine fibroids, ovarian cysts, and benign tumors",
      "Clinical treatment for irregular menstrual cycles and hormonal imbalances",
      "Specialized therapy for leucorrhea (chronic white discharge) and vaginal infections"
    ],
    phone: HOSPITAL_INFO.bookingPhone,
    consultationFee: "₹400"
  },
  {
    id: "dr-surbhi-mishra",
    slug: "dr-surbhi-mishra",
    name: "Dr. Surbhi Mishra",
    degrees: "B.A.M.S.",
    shortDegrees: "B.A.M.S.",
    designation: "Consultant Women's Health & Gynaecological Care",
    department: "Gynecology and Obstetrics",
    departmentSlug: "gynecology-obstetrics",
    experience: "8+ Years Experience",
    image: "/hospital-assets/doctors/surbhimishra.jpeg",
    availability: "Every day",
    opdTimings: "Monday to Sunday: 10:00 AM - 04:30 PM",
    specialties: [
      "Comprehensive Maternal & Prenatal Counseling",
      "Holistic Infertility & Conception Support",
      "Irregular Menstrual Cycles & PCOD/PCOS",
      "Chronic Leucorrhea (White Discharge) Care",
      "Cervical Wounds & Ulcer Treatments"
    ],
    about: "Dr. Surbhi Mishra is a devoted practitioner in women's health and gynecological wellness at Maya Hospital. Available every day, Dr. Mishra specializes in maternal counseling, post-partum recovery, menstrual regulation, leucorrhea management, and holistic support for couples facing conception delays.",
    services: [
      "Comprehensive maternal care and nutritional counseling for pregnant women",
      "Holistic support for normal delivery preparation and post-natal mother care",
      "Infertility counseling and natural cycle optimization for couples struggling to conceive",
      "Management of recurrent miscarriages and hormonal irregularities",
      "Treatment for irregular, painful, or prolonged menstrual cycles",
      "Examination and conservative treatment of cervical wounds and ulcers",
      "Management and relief from leucorrhea (white discharge) and chronic pelvic inflammation",
      "Collaborative care for women requiring uterine fibroid and cyst evaluations"
    ],
    phone: HOSPITAL_INFO.bookingPhone,
    consultationFee: "₹350"
  },
  {
    id: "dr-raviraj-singh",
    slug: "dr-raviraj-singh",
    name: "Dr. Raviraj Singh",
    degrees: "M.S., Anorectal Surgeon",
    shortDegrees: "M.S. (Anorectal Surgery)",
    designation: "Senior Consultant Anorectal Surgeon & Proctologist",
    department: "Anorectal Surgery",
    departmentSlug: "anorectal-surgery",
    experience: "12+ Years Experience",
    image: "/hospital-assets/doctors/rajivsingh.jpeg",
    availability: "Every day",
    opdTimings: "Monday to Sunday: 10:00 AM - 05:00 PM",
    specialties: [
      "Painless & Incisionless Piles Treatment",
      "Laser Hemorrhoids & Anorectal Warts Therapy",
      "Fistula (भगन्दर) Cure & Ksharasutra / Laser",
      "Fissurectomy & Lateral Internal Sphincterotomy",
      "Pilonidal Sinus & Varicose Veins Laser Therapy"
    ],
    about: "Dr. Raviraj Singh (Dr. Rajiv Singh) is an esteemed Anorectal Surgeon and Proctologist who provides advanced, painless, and incisionless interventions for anorectal conditions. Available daily at Maya Hospital, Dr. Singh utilizes modernized proctological techniques that guarantee rapid recovery, negligible blood loss, and swift resumption of normal daily life for patients with piles, fistula (भगन्दर), fissures, and varicose veins.",
    services: [
      "Painless and incisionless treatment for piles, hemorrhoids, and warts",
      "Advanced treatment for complex fistula-in-ano (भगन्दर) and anal fissures",
      "Specialized fissurectomy and sphincterotomy procedures for instant pain relief",
      "Minimally invasive treatment for recurrent pilonidal sinus",
      "Successful non-surgical and surgical treatments for painful varicose veins"
    ],
    phone: HOSPITAL_INFO.bookingPhone,
    consultationFee: "₹450"
  },
  {
    id: "dr-brijendra-verma",
    slug: "dr-brijendra-verma",
    name: "Dr. Brijendra Kumar Verma",
    degrees: "M.S. (General Surgeon)",
    shortDegrees: "M.S. (General Surgery)",
    designation: "Founder, Managing Director & Senior Consultant General Surgeon",
    department: "General Surgery",
    departmentSlug: "general-surgery",
    experience: "20+ Years Experience",
    image: "/hospital-assets/doctors/brijendraverma.jpeg",
    availability: "Every day",
    opdTimings: "Monday to Sunday: 09:00 AM - 06:00 PM (24x7 Emergency On-Call)",
    specialties: [
      "Abdominal & Stomach Disorders",
      "Gallbladder Stone Operations (Cholecystectomy)",
      "Operations for All Types of Stones (Kidney, Bladder, Bile)",
      "Tumors, Lumps, Hernias & Appendicitis Surgery",
      "Head Injury & Poly-Trauma Emergency Management",
      "Uterine Surgeries & Complex General Surgical Procedures"
    ],
    about: "Dr. Brijendra Kumar Verma is the visionary Founder and Managing Director of Maya Hospital & Multi Speciality Centre. With over two decades of distinguished surgical experience, Dr. Verma has performed thousands of successful general and emergency trauma operations. He is available daily to provide comprehensive surgical care for abdominal disorders, stone ailments, head trauma, hernia repairs, appendicitis, and uterine surgeries.",
    services: [
      "Clinical diagnosis and surgery for complex abdominal and stomach disorders",
      "24x7 emergency resuscitation, management, and treatment of head injuries",
      "Comprehensive operations for all types of stone conditions across the urinary and biliary systems",
      "Surgical removal and definitive treatment of tumors, lumps, hernias, and appendicitis",
      "Uterine surgeries and treatments",
      "Gallbladder stone operations"
    ],
    phone: HOSPITAL_INFO.emergencyPhone,
    consultationFee: "₹500"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "urology",
    name: "Urology Department",
    shortName: "Urology & Kidney Care",
    slug: "urology",
    shortDesc: "Endoscopic kidney stone surgery (PCNL, URSL, TURP), enlarged prostate care (गदूद), and male reproductive health.",
    fullDesc: "The Urology Department at Maya Hospital provides comprehensive, state-of-the-art diagnostic and surgical care for diseases of the urinary tract and male reproductive system. Spearheaded by Dr. Krishna Kumar Bhandari (Gold Medalist, KGMU), the department features advanced endoscopic towers for painless stone breakdown and prostate surgery.",
    iconName: "ShieldAlert",
    iconClass: "fa-solid fa-water",
    image: "/hospital-assets/doctors/krishnakumarbhandari.jpeg",
    services: [
      "Successful treatment and endoscopic operations for kidney and urinary tract stones using PCNL, URSL, and TURP methods",
      "Treatment and endoscopic surgery for prostate enlargement (गदूद)",
      "Management of male reproductive issues",
      "Treatment for urinary tract infections (UTIs)"
    ],
    headDoctor: "Dr. Krishna Kumar Bhandari (MBBS, MS, M.Ch Urology Gold Medalist)",
    doctorIds: ["dr-krishna-kumar-bhandari"],
    timing: "Every Sunday: 10:00 AM - 04:00 PM (Emergency 24x7)",
    emergencySupport: true,
    badges: ["PCNL / URSL", "TURP Prostate", "Kidney Stones", "Andrology"]
  },
  {
    id: "neurosurgery",
    name: "Neurosurgery Department",
    shortName: "Neurosurgery & Spine Care",
    slug: "neurosurgery",
    shortDesc: "Advanced brain and spine surgery, neuro-endoscopy, minimally invasive spine surgery (FMISS), and trauma care.",
    fullDesc: "The Neurosurgery Department at Maya Hospital offers cutting-edge surgical interventions for neurological trauma, brain tumors, spinal deformities, and chronic back pain. Led by Dr. Shiv Narayan Pandey (DrNB Neurosurgery, AO Spine Fellow), the center utilizes high-definition neuro-endoscopic instrumentation for minimal tissue trauma and fast rehabilitation.",
    iconName: "ActivitySquare",
    iconClass: "fa-solid fa-brain",
    image: "/hospital-assets/doctors/shivnarayanpandey.jpeg",
    services: [
      "Brain and spine surgeries",
      "Neuro endoscopy",
      "Minimally invasive spine surgery",
      "Advanced neurological and spinal care"
    ],
    headDoctor: "Dr. Shiv Narayan Pandey (MBBS, DrNB Neurosurgery, FMISS, AO Spine)",
    doctorIds: ["dr-shiv-narayan-pandey"],
    timing: "2nd & 4th Sunday: 10:00 AM - 04:00 PM (Emergency 24x7)",
    emergencySupport: true,
    badges: ["Brain Surgery", "AO Spine", "Neuro Endoscopy", "Slip Disc"]
  },
  {
    id: "gynecology-obstetrics",
    name: "Gynecology and Obstetrics Department",
    shortName: "Gynecology & Maternity",
    slug: "gynecology-obstetrics",
    shortDesc: "Complete maternal wellness, normal & Cesarean deliveries, infertility treatments, hysterectomy, and fibroid care.",
    fullDesc: "Our Department of Gynecology and Obstetrics is dedicated to women's healthcare across every phase of life. Staffed daily by Dr. Apoorva Shrivastava (M.B.B.S.) and Dr. Surbhi Mishra (B.A.M.S.), the department houses modern labor suites, fetal monitors, and neonatal resuscitation units for peaceful and safe maternity experiences.",
    iconName: "HeartPulse",
    iconClass: "fa-solid fa-person-breastfeeding",
    image: "/hospital-assets/doctors/apoorvasrivastava.jpeg",
    services: [
      "Comprehensive care and treatment for pregnant women",
      "Normal and Cesarean deliveries",
      "Infertility treatments for couples struggling to conceive",
      "Comprehensive management of recurrent miscarriages",
      "Treatment for irregular menstrual cycles",
      "Hysterectomy (complete removal of the uterus)",
      "Examination and treatment of cervical wounds/ulcers",
      "Treatment for uterine fibroids, cysts, and tumors",
      "Treatment for leucorrhea (white discharge)"
    ],
    headDoctor: "Dr. Apoorva Shrivastava (M.B.B.S.) & Dr. Surbhi Mishra (B.A.M.S.)",
    doctorIds: ["dr-apoorva-shrivastava", "dr-surbhi-mishra"],
    timing: "Open Daily: 09:30 AM - 05:00 PM (Labor & Delivery 24x7)",
    emergencySupport: true,
    badges: ["Normal Delivery", "C-Section OT", "Infertility Clinic", "Hysterectomy", "Fibroid Care"]
  },
  {
    id: "anorectal-surgery",
    name: "Anorectal Surgery Department",
    shortName: "Anorectal & Proctology",
    slug: "anorectal-surgery",
    shortDesc: "Painless and incisionless treatment for piles, hemorrhoids, fistula (भगन्दर), anal fissures, and varicose veins.",
    fullDesc: "The Anorectal Surgery Department at Maya Hospital is a specialized proctology center led by Dr. Raviraj Singh (M.S., Anorectal Surgeon). We employ painless, incisionless, and laser surgical techniques to treat piles, anal fissures, fistula-in-ano (भगन्दर), and varicose veins with same-day discharge and zero surgical trauma.",
    iconName: "Activity",
    iconClass: "fa-solid fa-hand-holding-medical",
    image: "/hospital-assets/doctors/rajivsingh.jpeg",
    services: [
      "Painless and incisionless treatment for piles, hemorrhoids, and warts",
      "Treatment for fistula (भगन्दर) and anal fissures",
      "Fissurectomy and sphincterotomy procedures",
      "Treatment for pilonidal sinus",
      "Successful treatment for varicose veins"
    ],
    headDoctor: "Dr. Raviraj Singh (M.S., Anorectal Surgeon)",
    doctorIds: ["dr-raviraj-singh"],
    timing: "Open Daily: 10:00 AM - 05:00 PM",
    emergencySupport: true,
    badges: ["Painless Piles", "Fistula (भगन्दर)", "Fissure", "Varicose Veins"]
  },
  {
    id: "general-surgery",
    name: "General Surgery Department",
    shortName: "General & Laparoscopic Surgery",
    slug: "general-surgery",
    shortDesc: "Abdominal & stomach surgeries, head injury trauma, stone operations, appendicitis, hernias, and gallbladder stone removal.",
    fullDesc: "Led by Maya Hospital's Founder and Senior Consultant Surgeon Dr. Brijendra Kumar Verma (M.S. General Surgery), this department offers emergency trauma interventions and elective surgical care in ultra-clean laminar airflow operation theatres.",
    iconName: "Stethoscope",
    iconClass: "fa-solid fa-stethoscope",
    image: "/hospital-assets/doctors/brijendraverma.jpeg",
    services: [
      "Abdominal and stomach disorders",
      "Management and treatment of head injuries",
      "Operations for all types of stone conditions",
      "Surgical removal and treatment of tumors, lumps, hernias, and appendicitis",
      "Uterine surgeries and treatments",
      "Gallbladder stone operations"
    ],
    headDoctor: "Dr. Brijendra Kumar Verma (M.S. General Surgeon)",
    doctorIds: ["dr-brijendra-verma"],
    timing: "Open Daily: 09:00 AM - 06:00 PM (Emergency 24x7)",
    emergencySupport: true,
    badges: ["Gallbladder Stone", "Hernia & Appendix", "Head Injuries", "All Stone Surgeries"]
  }
];

export const HOSPITAL_FACILITIES = [
  {
    id: "emergency-24x7",
    title: "24 Hours Emergency Services",
    subtitle: "24-Hour Trauma & Casualty",
    desc: "Immediate clinical triage, acute resuscitation, accident trauma, and critical injury stabilization round the clock.",
    iconClass: "fa-solid fa-truck-medical",
    badge: "24 Hours Always Open",
    phone: HOSPITAL_INFO.emergencyPhone
  },
  {
    id: "icu-nicu",
    title: "ICU / NICU Facilities",
    subtitle: "Intensive Critical Care Units",
    desc: "Equipped with advanced ventilators, multipara monitors, infant warmers, phototherapy, and dedicated intensive care teams.",
    iconClass: "fa-solid fa-bed-pulse",
    badge: "Level-2 NICU & Adult ICU",
    phone: HOSPITAL_INFO.emergencyPhone
  },
  {
    id: "free-ambulance",
    title: "Free Ambulance Service",
    subtitle: "फ्री एम्बुलेंस सुविधा",
    desc: "Rapid emergency ambulance dispatch equipped with oxygen support and emergency paramedic assistance across Lakhimpur Kheri.",
    iconClass: "fa-solid fa-ambulance",
    badge: "100% Free Ambulance",
    phone: HOSPITAL_INFO.ambulancePhone
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Archita Singh",
    rating: 5,
    date: "April 2026",
    location: "Meerpur, Lakhimpur Kheri",
    source: "Justdial Verified Patient",
    comment: "The doctors and hospital staff at Maya Hospital are exceptionally caring and prompt. My family received outstanding medical attention during an emergency. The premises are very clean and the pharmacy and testing are open 24 hours."
  },
  {
    id: "rev-2",
    author: "SB Maurya",
    rating: 5,
    date: "September 2026",
    location: "Lakhimpur Kheri",
    source: "Justdial Verified Patient",
    comment: "Maya Hospital and Multi-speciality Centre is the best hospital on Aira Road Meerpur. Dr. Verma and the surgical team provided excellent counseling and treatment. Very reasonable fees and genuinely transparent billing."
  },
  {
    id: "rev-3",
    author: "Pranshu Mishra",
    rating: 5,
    date: "December 2025",
    location: "Kheri District",
    source: "Justdial Verified Patient",
    comment: "Best multi-speciality hospital in the Lakhimpur Kheri rural & semi-urban belt. The surgery team and nursing care took care of my uncle's surgery smoothly. Grateful for their 24 hours round the clock support."
  },
  {
    id: "rev-4",
    author: "Mohammad Tariq",
    rating: 5,
    date: "February 2026",
    location: "Meerpur",
    source: "Google & Justdial Review",
    comment: "Prompt emergency response when we arrived late at night. The emergency doctor attended immediately, stabilized the patient, and kept us reassured throughout the recovery."
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: "basic-wellness",
    name: "Essential Health Checkup",
    tagline: "Ideal for regular yearly preventive health monitoring",
    price: "₹999",
    discountedPrice: "₹1,800 Value",
    testsCount: 42,
    includes: [
      "Complete Blood Count (CBC with ESR)",
      "Fasting Blood Sugar (Glucose)",
      "Kidney Function Profile (Urea, Creatinine)",
      "Liver Screening (SGOT, SGPT, Bilirubin)",
      "Urine Routine & Microscopic",
      "Digital Chest X-Ray & ECG",
      "Consultation with Senior Surgeon"
    ],
    recommendedFor: "Men & Women aged 18+"
  },
  {
    id: "comprehensive-cardio-diabetic",
    name: "Cardio-Diabetic Health Package",
    tagline: "Detailed cardiac risk profiling and glycemic health checks",
    price: "₹1,999",
    discountedPrice: "₹3,500 Value",
    testsCount: 65,
    includes: [
      "All Essential Package Investigations",
      "HbA1c (3-Month Glycemic Average)",
      "Complete Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)",
      "Serum Electrolytes (Sodium, Potassium)",
      "Resting 12-Lead Digital ECG",
      "Consultation with Senior Physician / Surgeon",
      "Personalized Diet & Lifestyle Prescription"
    ],
    recommendedFor: "Adults with diabetes, BP or sedentary lifestyle"
  },
  {
    id: "maternal-wellwoman",
    name: "Mother & Well-Woman Wellness",
    tagline: "Focused care for women across hormonal and reproductive phases",
    price: "₹1,499",
    discountedPrice: "₹2,600 Value",
    testsCount: 50,
    includes: [
      "CBC, Blood Grouping & Hemoglobin Electrophoresis",
      "Thyroid Function Panel (Free T3, T4, TSH)",
      "Pelvic Ultrasound / USG Lower Abdomen",
      "Serum Calcium & Vitamin D3 Screen",
      "Blood Sugar Fasting & Post-Meal",
      "Consultation with Senior Gynecologist"
    ],
    recommendedFor: "Women of all age groups & expectant mothers"
  },
  {
    id: "senior-citizen-gold",
    name: "Senior Citizen Comprehensive Care",
    tagline: "Advanced organ assessment and geriatric wellness package",
    price: "₹2,499",
    discountedPrice: "₹4,800 Value",
    testsCount: 74,
    includes: [
      "Comprehensive Liver, Kidney & Metabolic Panel",
      "Whole Abdomen Ultrasound (USG)",
      "Bone Mineral Density & Uric Acid Screening",
      "Digital Chest X-Ray & ECG",
      "Urine Microalbumin & Stool Screen",
      "Consultation with Senior Surgeon & Specialist",
      "Free Home Sample Collection Assistance"
    ],
    recommendedFor: "Seniors aged 55+"
  }
];

export const EMERGENCY_FACILITIES = [
  {
    title: "24x7 Emergency & Trauma",
    desc: "Immediate clinical triage, acute resuscitation, accident trauma, and critical injury stabilization.",
    icon: "Truck"
  },
  {
    title: "Level-2 NICU & Pediatric Ward",
    desc: "Phototherapy, incubators, neonatal resuscitation, and specialized neonatal nursing staff.",
    icon: "Baby"
  },
  {
    title: "Modern Modular OTs",
    desc: "Ultra-clean laminar airflow operation theatres equipped with laparoscopic surgical columns.",
    icon: "Activity"
  },
  {
    title: "24-Hour Digital X-Ray & Lab",
    desc: "Rapid diagnostic reporting for biochemistry, pathology, electrolytes, and high-frequency digital X-Rays.",
    icon: "Scan"
  },
  {
    title: "Advanced 2D Echo & USG",
    desc: "Color Doppler ultrasound for abdominal, obstetric, musculoskeletal, and cardiac scans.",
    icon: "ActivitySquare"
  },
  {
    title: "24-Hour In-House Pharmacy",
    desc: "Full inventory of emergency pharmaceuticals, surgical supplies, and pediatric medicines.",
    icon: "Pill"
  }
];

// Helper Functions
export function getDoctorBySlug(slug: string): Doctor | undefined {
  const normalized = slug.toLowerCase().trim();
  // Handle aliases
  if (normalized === "dr-rajiv-singh") {
    return DOCTORS.find((d) => d.slug === "dr-raviraj-singh");
  }
  return DOCTORS.find((d) => d.slug === normalized || d.id === normalized);
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  const normalized = slug.toLowerCase().trim();
  // Handle aliases
  if (normalized === "gynecology" || normalized === "obstetrics-gynaecology" || normalized === "gynaecology-obstetrics") {
    return DEPARTMENTS.find((dept) => dept.slug === "gynecology-obstetrics");
  }
  if (normalized === "general-medicine" || normalized === "medicine") {
    return DEPARTMENTS.find((dept) => dept.slug === "general-surgery");
  }
  return DEPARTMENTS.find((dept) => dept.slug === normalized || dept.id === normalized);
}

export function getDoctorsByDepartment(deptSlugOrId: string): Doctor[] {
  const dept = getDepartmentBySlug(deptSlugOrId);
  if (!dept) return [];
  return DOCTORS.filter((doc) => dept.doctorIds.includes(doc.id) || doc.departmentSlug === dept.slug);
}

export function getAllDoctorSlugs(): string[] {
  return DOCTORS.map((d) => d.slug);
}

export function getAllDepartmentSlugs(): string[] {
  return DEPARTMENTS.map((dept) => dept.slug);
}
