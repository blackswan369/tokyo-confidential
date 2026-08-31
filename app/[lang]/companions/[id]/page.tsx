import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CompanionProfileView } from "@/components/CompanionProfileView";
import { getDictionary, isValidLocale, type Locale } from "@/getDictionary";
import { getCompanionById, getCompanionIds } from "@/lib/companions";
import { locales } from "@/i18n-config";

export const revalidate = 0;

type PageProps = {
  params: Promise<{ lang: string; id: string }>;
};

export async function generateStaticParams() {
  try {
    const ids = await getCompanionIds();

    return locales.flatMap((lang) =>
      ids.map((id) => ({
        lang,
        id,
      })),
    );
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const companion = await getCompanionById(id);

  if (!companion) {
    return {};
  }

  return {
    title: `${companion.name} | HENTAI PARADISE TOKYO`,
    description: companion.introduction,
    openGraph: {
      title: `${companion.name} | HENTAI PARADISE TOKYO`,
      images: [{ url: companion.image }],
    },
  };
}

export default async function CompanionProfilePage({ params }: PageProps) {
  const { lang, id } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const [dictionary, companion] = await Promise.all([
    getDictionary(locale),
    getCompanionById(id),
  ]);

  if (!companion) {
    notFound();
  }

  console.log("Gallery Data:", companion.gallery);

  return (
    <>
      <Header dict={dictionary.header} lang={locale} variant="solid" />
      <CompanionProfileView
        companion={companion}
        dict={dictionary.companion_profile}
        lang={locale}
      />
      <Footer dict={dictionary.footer} lang={locale} />
    </>
  );
}
