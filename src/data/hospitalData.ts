export interface Doctor {
  id: string;
  name: string;
  degrees: string;
  designation: string;
  department: string;
  experience: string;
  image: string;
  availability: string;
  specialties: string[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  services: string[];
  headDoctor?: string;
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
  name: "Maya Hospital And Multi-speciality Centre",
  shortName: "Maya Hospital",
  tagline: "Dedicated to Excellence in Patient-Centred Healthcare",
  subtagline: "Comprehensive 24x7 Multi-Speciality Care, Advanced Surgery, and Emergency Diagnostics in Meerpur, Lakhimpur Kheri",
  established: "2021",
  rating: "5.0",
  reviewCount: "51+",
  hours: "Open 24 Hours / 7 Days a Week",
  emergencyPhone: "108",
  bookingPhone: "+91 91611 03325",
  landlinePhone: "05872 250105",
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

/** `tel:` link for a display-formatted phone number ("+91 91611 03325" -> "tel:+919161103325") */
export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

/** Google Maps turn-by-turn directions to the hospital */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${HOSPITAL_INFO.mapCoordinates.lat},${HOSPITAL_INFO.mapCoordinates.lng}`;

export const DEPARTMENTS: Department[] = [
  {
    id: "gen-medicine",
    name: "General Medicine & Critical Care",
    slug: "general-medicine",
    shortDesc: "Comprehensive diagnosis and clinical management of acute and chronic illnesses with dedicated ICU backup.",
    fullDesc: "Our General Medicine & Critical Care Department provides evidence-based therapies for diabetes, cardiovascular disorders, infectious ailments, hypertension, respiratory complications, and geriatric medicine.",
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    services: [
      "24x7 Critical Care & Emergency Stabilization",
      "Comprehensive Diabetes & Metabolic Care Unit",
      "Hypertension, Cardiac & Stroke Risk Management",
      "Infectious Diseases, Dengue & Viral Fever Treatment",
      "Respiratory and Chronic Asthma Therapies",
      "Geriatric Comprehensive Health Assessments"
    ],
    headDoctor: "Dr. R. K. Sharma (MD Physician)"
  },
  {
    id: "gynaecology-obstetrics",
    name: "Obstetrics & Gynaecology",
    slug: "obstetrics-gynaecology",
    shortDesc: "Complete maternity, painless delivery, high-risk pregnancy management, and advanced laparoscopic gynecology.",
    fullDesc: "Providing compassionate, state-of-the-art care for mothers and newborns, our Gynaecology & Obstetrics department features modern labor suites, fetal monitoring, prenatal care, and minimally invasive surgeries.",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    services: [
      "Safe Normal & Painless Epidural Deliveries",
      "Advanced Caesarean Section (C-Section) Theatres",
      "High-Risk Pregnancy & Recurrent Loss Management",
      "Laparoscopic Hysterectomy & Fibroid Surgeries",
      "Adolescent & Menopausal Healthcare Clinics",
      "Infertility Workup and Follicular Monitoring"
    ],
    headDoctor: "Dr. Maya Verma (MS, DGO)"
  },
  {
    id: "paediatrics-neonatology",
    name: "Paediatrics & Neonatology (NICU)",
    slug: "paediatrics-neonatology",
    shortDesc: "Dedicated Level-2 NICU facilities, pediatric intensive care, growth clinics, and comprehensive immunization.",
    fullDesc: "Our child health center offers nurturing pediatric and newborn care equipped with warmers, phototherapy, advanced neonatal monitors, and round-the-clock pediatric emergency support.",
    iconName: "Baby",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    services: [
      "Level II Neonatal Intensive Care Unit (NICU)",
      "Pediatric Emergency & Fever Clinic",
      "WHO-standard Routine & Optional Immunization",
      "Growth, Developmental Milestone & Nutrition Clinics",
      "Pediatric Asthma & Allergy Management",
      "Neonatal Jaundice & Premature Infant Care"
    ],
    headDoctor: "Dr. Alok Srivastava (MD Paediatrics)"
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Replacement",
    slug: "orthopedics",
    shortDesc: "Advanced trauma surgery, fracture management, arthroscopy, spine care, and total joint replacement.",
    fullDesc: "Specializing in restorative bone, joint, and spine interventions, from complex road accident trauma repairs to computer-assisted hip and knee replacements and sports injury arthroscopies.",
    iconName: "Bone",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    services: [
      "Complex Fracture & Accidental Trauma Care 24x7",
      "Total Knee Replacement (TKR) & Hip Replacement (THR)",
      "Arthroscopic Meniscal & ACL Reconstruction Surgeries",
      "Spine Decompression, Slip Disc & Sciatica Solutions",
      "Osteoarthritis, Gout & Rheumatoid Joint Clinics",
      "Post-operative Physiotherapy & Rehabilitation"
    ],
    headDoctor: "Dr. S. K. Singh (MS Ortho, FIJR)"
  },
  {
    id: "general-lap-surgery",
    name: "General & Laparoscopic Surgery",
    slug: "general-surgery",
    shortDesc: "Painless keyhole surgeries, laser gallbladder removal, hernia repairs, appendix, and gastrointestinal procedures.",
    fullDesc: "Featuring modular laminar airflow operation theatres equipped with HD laparoscopic towers for minimal pain, faster recovery, and minimal scarring across general surgical specialties.",
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    services: [
      "Laparoscopic Cholecystectomy (Gallbladder Stone)",
      "Laparoscopic Appendectomy & Hernia Repair",
      "Laser Proctology (Piles, Fissure, Fistula Procedures)",
      "Thyroid, Breast & Soft Tissue Lump Excision",
      "Emergency Abdominal Trauma & Bowel Perforation Surgery",
      "Day Care Minor Surgeries and Wound Care"
    ],
    headDoctor: "Dr. A. P. Mishra (MS General Surgery)"
  },
  {
    id: "cardiology",
    name: "Cardiology & Vascular Medicine",
    slug: "cardiology",
    shortDesc: "Non-invasive cardiac investigations, ECG, 2D Echocardiography, TMT, Holter, and intensive cardiac monitoring.",
    fullDesc: "Prompt diagnosis and emergency medical treatment of myocardial infarction, cardiac arrhythmias, heart failure, and lifestyle-related coronary artery diseases.",
    iconName: "ActivitySquare",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    services: [
      "24x7 Emergency Cardiac Resuscitation & ICU",
      "Digital 12-Lead ECG & 2D Color Doppler Echo",
      "TMT (Treadmill Stress Test) & Holter Monitoring",
      "Post-Heart Attack Care & Secondary Prevention",
      "Hypertensive Heart Disease & Heart Failure Management",
      "Peripheral Vascular Doppler Assessment"
    ]
  },
  {
    id: "nephrology-urology",
    name: "Nephrology & Urology",
    slug: "nephrology-urology",
    shortDesc: "Kidney disease management, prostate disorder treatments, urinary tract solutions, and kidney stone management.",
    fullDesc: "Comprehensive renal and urological services catering to acute kidney injury, chronic renal disorders, urinary tract calculi (stone), prostate enlargement, and reconstructive urology.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=800",
    services: [
      "Kidney Stone Evaluation and Endoscopic Solutions (URSL/PCNL)",
      "Prostate (BPH) Diagnostic Profiling & Medical/Surgical Care",
      "Chronic Kidney Disease (CKD) Management & Dialysis Support",
      "Recurrent UTI & Bladder Infection Protocols",
      "Renal Function Monitoring & Diabetic Nephropathy Care",
      "Men's Urological Health & Andrology Services"
    ]
  },
  {
    id: "ent-head-neck",
    name: "ENT, Head & Neck Care",
    slug: "ent-head-neck",
    shortDesc: "Ear, nose, throat diagnostics, endoscopic sinus checkups, hearing tests, and voice disorder treatments.",
    fullDesc: "Equipped with diagnostic nasal endoscopes and specialized ENT examination units for treatment of chronic sinusitis, tonsillitis, tympanic membrane perforations, and hearing deficits.",
    iconName: "Headphones",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    services: [
      "Microscopic Ear Examination & Ear Drum Repair (Tympanoplasty)",
      "Endoscopic Sinus Procedures (FESS) & DNS Correction",
      "Coblation Tonsillectomy & Adenoidectomy",
      "Pure Tone Audiometry (PTA) & Hearing Loss Assessment",
      "Vertigo, Tinnitus & Dizziness Clinical Evaluation",
      "Foreign Body Removal from Ear, Nose, & Throat"
    ]
  },
  {
    id: "radiology-diagnostics",
    name: "Radiology, Pathology & 24x7 Pharmacy",
    slug: "radiology-diagnostics",
    shortDesc: "Digital X-Ray, High-Resolution Ultrasound, Color Doppler, Fully Automated Biochemistry Lab, and 24x7 Pharmacy.",
    fullDesc: "Quick and dependable diagnostics under one roof. Our pathology analyzer provides rapid turnaround times for blood, urine, liver, and kidney markers, complemented by advanced ultrasound imaging.",
    iconName: "Scan",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    services: [
      "High-Frequency Digital X-Ray (All Skeletal & Chest Studies)",
      "Advanced 3D/4D Abdominal & Pelvic Ultrasound (USG)",
      "Obstetric Anomaly Scans & Fetal Well-being Doppler",
      "Fully Automated Hematology, Biochemistry & Electrolyte Lab",
      "24-Hour In-House Emergency Pharmacy with Genuine Meds",
      "Thyroid, Hormone, HbA1c & Vitamin Profiling"
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-maya-verma",
    name: "Dr. Maya Verma",
    degrees: "MBBS, MS (Obs & Gynae), FMAS",
    designation: "Chief Consultant Gynecologist & Laparoscopic Surgeon",
    department: "Obstetrics & Gynaecology",
    experience: "16+ Years Experience",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sat: 10:00 AM - 04:00 PM",
    specialties: ["High-Risk Pregnancy", "Laparoscopic Hysterectomy", "Infertility Management", "Painless Delivery"]
  },
  {
    id: "dr-rk-sharma",
    name: "Dr. R. K. Sharma",
    degrees: "MBBS, MD (Medicine), FCCP",
    designation: "Senior Consultant Physician & Critical Care Specialist",
    department: "General Medicine & Critical Care",
    experience: "18+ Years Experience",
    image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sun: 09:30 AM - 02:30 PM & 05:00 PM - 08:00 PM",
    specialties: ["Critical Care ICU", "Diabetes & Hypertension", "Infectious Fevers", "Cardio-Respiratory Care"]
  },
  {
    id: "dr-sk-singh",
    name: "Dr. S. K. Singh",
    degrees: "MBBS, MS (Orthopedics), FIJR (Fellow Joint Replacement)",
    designation: "Senior Consultant Orthopedic & Joint Replacement Surgeon",
    department: "Orthopedics & Joint Replacement",
    experience: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sat: 11:00 AM - 05:00 PM",
    specialties: ["Joint Replacement (Knee/Hip)", "Trauma & Fracture Surgery", "Arthroscopy", "Spine Disorders"]
  },
  {
    id: "dr-ap-mishra",
    name: "Dr. A. P. Mishra",
    degrees: "MBBS, MS (General Surgery), FIAGES",
    designation: "Consultant General & Minimal Access Laparoscopic Surgeon",
    department: "General & Laparoscopic Surgery",
    experience: "14+ Years Experience",
    image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sat: 10:30 AM - 04:30 PM",
    specialties: ["Gallbladder Stone Surgery", "Laparoscopic Hernia Repair", "Laser Piles Clinic", "Appendectomy"]
  },
  {
    id: "dr-alok-srivastava",
    name: "Dr. Alok Srivastava",
    degrees: "MBBS, MD (Paediatrics), Fellowship Neonatology",
    designation: "Senior Pediatrician & Neonatal Specialist",
    department: "Paediatrics & Neonatology (NICU)",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sun: 10:00 AM - 03:00 PM & 06:00 PM - 08:30 PM",
    specialties: ["Neonatal ICU Care", "Pediatric Asthma & Allergies", "Newborn Resuscitation", "Child Vaccination"]
  },
  {
    id: "dr-priya-pandey",
    name: "Dr. Priya Pandey",
    degrees: "MBBS, DMRD (Radiology)",
    designation: "Consultant Radiologist & Sonologist",
    department: "Radiology, Pathology & 24x7 Pharmacy",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    availability: "Mon - Sat: 09:00 AM - 03:00 PM",
    specialties: ["Anomaly Sonography", "Color Doppler Studies", "Abdominal Diagnostics", "Digital Radiography"]
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
    comment: "Maya Hospital and Multi-speciality Centre is the best hospital on Aira Road Meerpur. Dr. Verma and Dr. Sharma provided excellent counseling and treatment. Very reasonable fees and genuinely transparent billing."
  },
  {
    id: "rev-3",
    author: "Pranshu Mishra",
    rating: 5,
    date: "December 2025",
    location: "Kheri District",
    source: "Justdial Verified Patient",
    comment: "Best multi-speciality hospital in the Lakhimpur Kheri rural & semi-urban belt. The surgery team and nursing care took care of my uncle's fracture surgery smoothly. Grateful for their 24 hours round the clock support."
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
      "Consultation with Senior Physician"
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
      "Consultation with Cardiologist / MD Physician",
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
      "Orthopedic & Physician Dual Consultation",
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
