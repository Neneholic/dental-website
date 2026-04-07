import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LifePath Dental - Seamless Dental Care",
  description: "Professional dental services with experienced professionals. Book your appointment today for a brighter smile.",
  keywords: ["dental", "dentist", "dental care", "teeth cleaning", "root canal", "oral surgery"],
  openGraph: {
    title: "LifePath Dental - Seamless Dental Care",
    description: "Professional dental services with experienced professionals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
