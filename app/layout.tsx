import type { Metadata, Viewport } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MET Excellence | Free Extracurricular Tutoring in Minnesota",
  description: "MET Excellence offers free chess classes, math tutoring, and extracurricular enrichment for Minnesota students. Join our passionate high school tutors to enhance your skills and unlock your potential.",
  keywords: "metexcellence, tutoring, Minnesota, met excellence, tutoringmn, mn tutoring, chess classes, math tutoring, extracurricular, high school tutors",
  openGraph: {
    title: "MET Excellence | Free Extracurricular Tutoring in Minnesota",
    description: "Free chess classes, math tutoring, and extracurricular enrichment for Minnesota students.",
    type: "website",
    locale: "en_US",
    siteName: "MET Excellence",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MET Excellence Open Graph Image',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MET Excellence | Free Tutoring in Minnesota",
    description: "Free chess classes, math tutoring, and extracurricular enrichment for Minnesota students.",
    images: ['/og-image.png'],
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.metexcellence.org" />
      </head>
      <body className={`${poppins.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
