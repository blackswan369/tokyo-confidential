import "server-only";

import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
} satisfies Record<
  Locale,
  () => Promise<{ hero_title_lead: string; hero_title_accent: string }>
>;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();

export { defaultLocale, isValidLocale, locales, type Locale } from "./i18n-config";
