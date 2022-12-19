// next.config.js
module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'fr', 'de', 'el'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localeDetection: false,
  },
  publicRuntimeConfig: {
    TxNativePublicToken: '1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504',
  }
}
