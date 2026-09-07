import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanionCard } from "@/components/CompanionCard";
import { getDictionary, isValidLocale, type Locale } from "@/getDictionary";
import { getFeaturedCompanions } from "@/lib/companions";
import { locales } from "@/i18n-config";

export const revalidate = 0;

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    return {};
  }

  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  return {
    title: `ALL COMPANIONS | HENTAI PARADISE TOKYO`,
    description: dictionary.hero.subtitle,
  };
}

export default async function AllCompanionsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const [dictionary, companions] = await Promise.all([
    getDictionary(locale),
    getFeaturedCompanions(),
  ]);

  return (
    <>
      <Header dict={dictionary.header} lang={locale} variant="solid" />
      <main className="bg-[#0B0B0B] px-8 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-sm uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
            >
              &larr; BACK TO HOME
            </Link>
          </div>

          <h1 className="text-center font-heading text-[32px] font-bold leading-[110%] text-white md:text-[40px]">
            ALL COMPANIONS
          </h1>

          <div className="md:mx-auto md:w-[85%]">
            <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {companions.map((companion) => (
                <div key={companion.id} className="min-w-0 col-span-1 w-full">
                  <CompanionCard
                    companion={companion}
                    dict={dictionary.featured_companions}
                    lang={locale}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer dict={dictionary.footer} lang={locale} />
    </>
  );
}
