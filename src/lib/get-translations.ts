import { en } from '@/translations/en';
import { th } from '@/translations/th';

export type Locale = 'en' | 'th';

export function getTranslations(locale: Locale) {
  return locale === 'th' ? th : en;
}

