package com.transifex.txnativesampleapp;

import android.os.Bundle;
import android.widget.TextView;

/**
 * We extend from BaseAppCompatActivity, which has the required hooks for TxNative.
 * <p>
 * If your app is not using AppCompatActivity, you should extend from  {@link BaseActivity}.
 */
public class MainActivity extends BaseAppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Formatted string
        TextView welcomeTextView = findViewById(R.id.welcome_user);
        welcomeTextView.setText(getString(R.string.hello_user, "testUser"));

        // Plural + formatted string
        TextView pluralTextView = findViewById(R.id.plural_label);
        pluralTextView.setText(getResources().getQuantityString(R.plurals.new_messages, 2, 2));
    }
}