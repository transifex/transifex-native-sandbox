package com.transifex.txnativesampleapp;

import android.app.Application;

import com.transifex.common.TranslationMapStorage;
import com.transifex.txnative.LocaleState;
import com.transifex.txnative.TxNative;
import com.transifex.txnative.cache.TxCache;
import com.transifex.txnative.cache.TxDiskTranslationsProvider;
import com.transifex.txnative.cache.TxFileOutputCacheDecorator;
import com.transifex.txnative.cache.TxMemoryCache;
import com.transifex.txnative.cache.TxProviderBasedCache;
import com.transifex.txnative.cache.TxReadonlyCacheDecorator;
import com.transifex.txnative.cache.TxStandardCache;
import com.transifex.txnative.cache.TxTranslationsProvider;
import com.transifex.txnative.cache.TxUpdateFilterCache;
import com.transifex.txnative.missingpolicy.AndroidMissingPolicy;

import java.io.File;

public class MyApplication extends Application {

    private static final String TRANSIFEX_TOKEN = "1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504";

    @Override
    public void onCreate() {
        super.onCreate();

        // Initialize TxNative
        simpleConfiguration();

        //alternateConfiguration();

        // Fetch all translations from CDS
        TxNative.fetchTranslations(null);
    }

    private void simpleConfiguration() {
        // The app locales entered here should match the ones in `resConfigs` in gradle, so that
        // multi locale support works for newer Androids.
        LocaleState localeState = new LocaleState(getApplicationContext(),
                "en",
                new String[]{"en", "el", "de", "fr", "es", "pt_BR"},
                null);

        TxNative.init(
                getApplicationContext(),
                localeState,
                TRANSIFEX_TOKEN,
                null,
                null,
                null);
    }

    /**
     * This alternate configuration provides a customized {@link TxCache}. It's similar to the
     * default {@link TxStandardCache}, but it will update the in-memory cache when new translations
     * are fetched.
     * <p>
     * Also, we use the {@link AndroidMissingPolicy} instead of the default one.
     */
    private void alternateConfiguration() {
        LocaleState localeState = new LocaleState(getApplicationContext(),
                "en",
                new String[]{"en", "el", "de", "fr", "es", "pt_BR"},
                null);

        // The location where cached translations will be downloaded to and read from
        File cachedTranslationsDir = new File(getApplicationContext().getCacheDir()
                + File.separator + TranslationMapStorage.DEFAULT_TRANSLATIONS_DIR_NAME);

        TxTranslationsProvider[] providers = new TxDiskTranslationsProvider[] {
                new TxDiskTranslationsProvider(
                        getApplicationContext().getAssets(),
                        TranslationMapStorage.DEFAULT_TRANSLATIONS_DIR_NAME),
                new TxDiskTranslationsProvider(cachedTranslationsDir)
        };

        TxCache instantUpdateCache = new TxFileOutputCacheDecorator(
                cachedTranslationsDir,
                new TxProviderBasedCache(
                        providers,
                        new TxUpdateFilterCache(
                                TxUpdateFilterCache.TxCacheUpdatePolicy.REPLACE_ALL,
                                new TxMemoryCache()
                        )
                )
        );

        TxNative.init(
                getApplicationContext(),
                localeState,
                TRANSIFEX_TOKEN,
                null,
                instantUpdateCache,
                new AndroidMissingPolicy(getApplicationContext()));
    }
}
