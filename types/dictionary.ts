import type en from "@/dictionaries/en.json";

export type Dictionary = typeof en;

export type HeroDictionary = Dictionary["hero"];
export type HeaderDictionary = Dictionary["header"];
export type PricingDictionary = Dictionary["pricing"];
export type HowItWorksDictionary = Dictionary["how_it_works"];
export type FaqDictionary = Dictionary["faq"];
export type WhyChooseUsDictionary = Dictionary["why_choose_us"];
export type FeaturedCompanionsDictionary = Dictionary["featured_companions"];
export type CompanionProfileDictionary = Dictionary["companion_profile"];
export type PersonalConciergeDictionary = Dictionary["personal_concierge"];
export type ReviewsDictionary = Dictionary["reviews"];
export type ReviewItem = ReviewsDictionary["items"][number];
export type FooterDictionary = Dictionary["footer"];
