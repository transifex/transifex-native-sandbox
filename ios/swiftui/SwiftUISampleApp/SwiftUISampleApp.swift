//
//  SwiftUISampleApp.swift
//  SwiftUISampleApp
//
//  Created by Stelios Petrakis on 3/6/24.
//

import SwiftUI
import Transifex

class CustomLocaleProvider : TXCurrentLocaleProvider {
    func currentLocale() -> String {
        return "sl"
    }
}

@main
struct SwiftUISampleApp: App {
    init() {
        // Extract token
        let transifexToken = Bundle.main.infoDictionary!["TRANSIFEX_TOKEN"] as! String

        // Initialize Transifex Native
        TXNativeBuilder()
            .setLocales(TXLocaleState(sourceLocale: "en",
                                     appLocales: ["en", "fr", "de", "sl"],
                                     currentLocaleProvider: CustomLocaleProvider()))
            .setToken(transifexToken)
            .build()
        TXNative.fetchTranslations()
    }
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
