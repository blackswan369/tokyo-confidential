import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AgeVerification } from "@/components/AgeVerification";
import { SiteProtection } from "@/components/SiteProtection";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HENTAI PARADISE TOKYO",
  description: "Experience Tokyo Like Never Before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} antialiased select-none`}
      >
        <SiteProtection />
        <AgeVerification />
        {children}
      </body>
    </html>
  );
}
