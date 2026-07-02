import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const SITE_URL = "https://yeffer-sime.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Yeffer Sime H. | Desarrollador Mobile & Full Stack (Remoto LatAm/España)",
    template: "%s | Yeffer Sime H.",
  },
  description:
    "Desarrollador Mobile y Full Stack peruano, disponible remoto para Latinoamérica y España. Experiencia en Kotlin, SwiftUI, Next.js, Laravel y Django. Proyectos en producción en 4+ países, incluyendo apps para eventos deportivos internacionales.",
  keywords: [
    "Yeffer Sime",
    "desarrollador mobile",
    "desarrollador full stack",
    "desarrollador full stack remoto",
    "contratar desarrollador remoto Latinoamérica",
    "desarrollador Android freelance",
    "programador Kotlin Perú",
    "desarrollador Kotlin remoto",
    "freelance developer Latinoamérica",
    "desarrollador web freelance",
    "Kotlin",
    "SwiftUI",
    "Jetpack Compose",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Django",
    "Firebase",
    "portafolio desarrollador",
    "software engineer Perú",
  ],
  authors: [{ name: "Yeffer Sime H.", url: SITE_URL }],
  creator: "Yeffer Sime H.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["es_ES", "es_MX", "es_CO", "es_AR"],
    title: "Yeffer Sime H. | Desarrollador Mobile & Full Stack (Remoto LatAm/España)",
    description:
      "Desarrollador Mobile y Full Stack disponible remoto para Latinoamérica y España. Experiencia en Kotlin, SwiftUI, Next.js y Laravel. Proyectos en producción en 4+ países.",
    siteName: "Yeffer Sime H. — Portafolio",
    // Replace with a 1200×630 banner image when available:
    images: [{ url: "/image/profile2.png", width: 400, height: 400, alt: "Yeffer Sime H." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeffer Sime H. | Desarrollador Mobile & Full Stack (Remoto LatAm/España)",
    description:
      "Desarrollador Mobile y Full Stack disponible remoto para Latinoamérica y España. Experiencia en Kotlin, SwiftUI, Next.js y Laravel.",
    images: ["/image/profile2.png"],
  },
  other: {
    "geo.region": "PE",
    "geo.placename": "Perú",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yeffer Sime H.",
  url: SITE_URL,
  jobTitle: "Mobile & Full Stack Developer",
  description:
    "Desarrollador Mobile y Full Stack peruano, disponible remoto para Latinoamérica y España.",
  nationality: "Peruana",
  knowsAbout: [
    "Kotlin",
    "Jetpack Compose",
    "SwiftUI",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Django",
    "Firebase",
  ],
  sameAs: [
    "https://github.com/YefferSime",
    "https://www.linkedin.com/in/yeffersimehuarancca/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "TECSUP",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}