import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}