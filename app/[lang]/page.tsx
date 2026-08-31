import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { FeaturedCompanions } from "@/components/FeaturedCompanions";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { PersonalConcierge } from "@/components/PersonalConcierge";
import { Footer } from "@/components/Footer";
import { getDictionary, isValidLocale, type Locale } from "@/getDictionary";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <div className="relative">
        <Hero
          heroTitleLead={dictionary.hero_title_lead}
          heroTitleAccent={dictionary.hero_title_accent}
        />
        <Header />
      </div>
      <WhyChooseUs />
      <Pricing />
      <FeaturedCompanions />
      <HowItWorks />
      <PersonalConcierge />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}
