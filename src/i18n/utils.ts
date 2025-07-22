import es from './es.json';
import en from './en.json';

export const languages = { es, en } as const;

type TranslationObject = typeof es;

// Profundiza en el objeto para obtener todas las claves tipo "home.title"
type DeepKeys<T, P extends string = ""> = {
  [K in keyof T]: T[K] extends object
    ? DeepKeys<T[K], `${P}${K & string}.`>
    : `${P}${K & string}`;
}[keyof T];

export type TranslationKey = DeepKeys<TranslationObject>;

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: TranslationKey): string {
    return key
      .split('.')
      .reduce((obj: any, segment: string) => obj?.[segment], languages[lang]) || key;
  };
}


export type SupportedLang = keyof typeof languages;

