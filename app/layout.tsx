import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const roboto_condensed = Roboto_Condensed({
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
      <body className={roboto_condensed.className}>{children}</body>
    </html>
  );
}
