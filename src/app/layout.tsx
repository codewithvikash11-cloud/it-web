import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-inter", // Using --font-inter to match globals default, though font is Outfit
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rovio Tech | Antigravity AI & IT Solutions Company",
  description: "Rovio Tech is a next-generation IT company specialized in WordPress, Shopify, App Development, and AI Solutions. Innovate with antigravity digital solutions.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rovio Tech - Antigravity AI & IT Solutions',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.variable} suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
