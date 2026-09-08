import "server-only";

import type { Locale } from "./i18n-config";
import type { Dictionary } from "./types/dictionary";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
  "zh-TW": () =>
    import("./dictionaries/zh-TW.json").then((module) => module.default),
  ko: () => import("./dictionaries/ko.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export type { Dictionary } from "./types/dictionary";

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();

export { defaultLocale, isValidLocale, locales, type Locale } from "./i18n-config";
