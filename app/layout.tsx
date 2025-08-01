import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const host_grotesk = Host_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Negocios Locales",
  description:
    "Diseño web, desarrollo y marketing digital para negocios locales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={host_grotesk.className}>{children}</body>
    </html>
  );
}
