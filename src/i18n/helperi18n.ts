import { useTranslations, languages } from './utils';
import type { TranslationKey } from './utils';

export const SUPPORTED_LANGS = Object.keys(languages) as (keyof typeof languages)[];

export function getStaticPaths() {
  return SUPPORTED_LANGS.map(lang => ({ params: { lang } }));
}

export function getI18nProps(params: any, section: string) {
  const lang = params.lang as keyof typeof languages;
  const t = useTranslations(lang);
  const title = t(`${section}.title` as TranslationKey);

  return { lang, t, title };
}
