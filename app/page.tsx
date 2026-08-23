import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FeaturedCompanions } from "@/components/FeaturedCompanions";
import { HowItWorks } from "@/components/HowItWorks";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { PersonalConcierge } from "@/components/PersonalConcierge";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <Header />
      </div>
      <WhyChooseUs />
      <FeaturedCompanions />
      <HowItWorks />
      <PersonalConcierge />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
}
