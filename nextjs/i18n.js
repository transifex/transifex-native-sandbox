import { tx, normalizeLocale } from '@transifex/native';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

/**
 * Used by SSR to pass translation to browser
 *
 * @export
 * @param {*} { locale, locales }
 * @return {*}
 */
export async function getServerSideTranslations({ locale, locales }) {
  tx.init({
    token: publicRuntimeConfig.TxNativePublicToken,
  });
  // ensure that nextjs locale is in the Transifex format,
  // for example, de-de -> de_DE
  const txLocale = normalizeLocale(locale);
  await tx.fetchTranslations(txLocale);
  return {
    locale,
    locales,
    translations: tx.cache.getTranslations(txLocale),
  };
}

/**
 * Initialize client side Transifex Native instance cache
 *
 * @export
 * @param {*} { locale, translations }
 * @return {*}
 */
export function setClientSideTranslations({ locale, translations }) {
  if (!locale || !translations) return;
  tx.init({
    currentLocale: locale,
  });
  tx.cache.update(locale, translations);
}
