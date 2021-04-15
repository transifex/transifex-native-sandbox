package com.transifex.txnativesampleapp;

import android.app.Activity;
import android.content.Context;

import com.transifex.txnative.TxNative;

/**
 * An Activity that has the required hooks for TxNative
 * <p>
 * All your activities should extend this class or copy this code to your base class.
 * <p>
 * If you are using Androidx's AppCompatActivity, you should use {@link BaseAppCompatActivity} instead.
 */
public class BaseActivity extends Activity {

    @Override
    protected void attachBaseContext(Context base) {
        // Wrap the Activity context
        super.attachBaseContext(TxNative.wrap(base));
    }
}
