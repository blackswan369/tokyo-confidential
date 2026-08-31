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
        <Hero dict={dictionary.hero} />
        <Header dict={dictionary.header} />
      </div>
      <WhyChooseUs dict={dictionary.why_choose_us} />
      <Pricing dict={dictionary.pricing} />
      <FeaturedCompanions dict={dictionary.featured_companions} />
      <HowItWorks dict={dictionary.how_it_works} />
      <PersonalConcierge dict={dictionary.personal_concierge} />
      <Reviews dict={dictionary.reviews} />
      <FAQ dict={dictionary.faq} />
      <Footer dict={dictionary.footer} />
    </>
  );
}
