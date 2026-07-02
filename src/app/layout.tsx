import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Yeffer Sime H. | Mobile & Full Stack Developer",
    template: "%s | Yeffer Sime H.",
  },
  description:
    "Desarrollador Mobile y Full Stack con experiencia en Kotlin, SwiftUI, Next.js, Laravel y Django. Proyectos en producción en 4+ países, incluyendo apps para eventos deportivos internacionales.",
  keywords: [
    "Yeffer Sime",
    "desarrollador mobile",
    "full stack developer",
    "Kotlin",
    "SwiftUI",
    "Jetpack Compose",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Django",
    "Firebase",
    "portafolio",
    "software engineer",
  ],
  authors: [{ name: "Yeffer Sime H." }],
  creator: "Yeffer Sime H.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL("https://yeffer-sime.vercel.app"),
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "Yeffer Sime H. | Mobile & Full Stack Developer",
    description:
      "Desarrollador Mobile y Full Stack con experiencia en Kotlin, SwiftUI, Next.js y Laravel. Proyectos en producción en 4+ países.",
    siteName: "Yeffer Sime H. — Portafolio",
    // Replace with a 1200×630 banner image when available:
    images: [{ url: "/image/profile2.png", width: 400, height: 400, alt: "Yeffer Sime H." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeffer Sime H. | Mobile & Full Stack Developer",
    description:
      "Desarrollador Mobile y Full Stack con experiencia en Kotlin, SwiftUI, Next.js y Laravel.",
    images: ["/image/profile2.png"],
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
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}