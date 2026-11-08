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
        {/* Site fonts: Plus Jakarta Sans (headings) + Inter (body) */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="/css/fathima_combined.css" />
        {/* Without JavaScript: never block the page behind the loader or hidden reveal sections */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>.maya-page-loader{display:none!important}.reveal-on-scroll{opacity:1!important;transform:none!important}</style>",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
