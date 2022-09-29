package com.transifex.txnativesampleapp;

import android.os.Bundle;
import android.widget.TextView;

import com.transifex.txnative.activity.TxBaseAppCompatActivity;

/**
 * We extend from {@link TxBaseAppCompatActivity}, which has the required hooks for TxNative.
 * <p>
 * If your app is not using AppCompatActivity, you should extend from  {@link com.transifex.txnative.activity.TxBaseActivity}.
 */
public class MainActivity extends TxBaseAppCompatActivity {

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