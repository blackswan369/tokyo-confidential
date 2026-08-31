import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { AgeVerification } from "@/components/AgeVerification";
import { SiteProtection } from "@/components/SiteProtection";
import { isValidLocale, locales, type Locale } from "@/getDictionary";
import "../globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "HENTAI PARADISE TOKYO",
  description: "Experience Tokyo Like Never Before.",
  openGraph: {
    title: "HENTAI PARADISE TOKYO",
  },
  twitter: {
    title: "HENTAI PARADISE TOKYO",
  },
  verification: {
    google: "pvzAZ7Gs7iXlK6UPjpeXOiQU51La35j2Q5okW4_Zi5c",
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <html lang={locale} className={cormorantGaramond.variable}>
      <body className={`${inter.variable} antialiased select-none`}>
        <SiteProtection />
        <AgeVerification />
        {children}
      </body>
    </html>
  );
}
