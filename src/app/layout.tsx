import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Maya Hospital And Multi-speciality Centre",
  description: "Maya Hospital & Multi-speciality Centre in Meerpur, Lakhimpur Kheri. 24x7 Emergency, Gynaecology, Pediatrics, General Medicine, Orthopedics, Joint Replacement, Modern Operation Theatres.",
  icons: {
    icon: "/Purple Caduceus Laurel Monogram.png",
    apple: "/Purple Caduceus Laurel Monogram.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/Purple Caduceus Laurel Monogram.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Purple Caduceus Laurel Monogram.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="/css/fathima_combined.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
