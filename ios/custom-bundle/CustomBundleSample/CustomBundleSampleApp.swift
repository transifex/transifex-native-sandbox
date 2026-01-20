//
//  CustomBundleSampleApp.swift
//  CustomBundleSample
//
//  Created by Stelios Petrakis on 06.05.25.
//

import SwiftUI
import Transifex

@main
struct CustomBundleSampleApp: App {
    init() {
        // Extract token
        guard let transifexToken = Bundle.main.infoDictionary!["TRANSIFEX_TOKEN"] as? String else {
            return
        }

        // Initialize Transifex Native
        TXNative.initializeWithCustomBundle(sourceLocale: "en",
                                            appLocales: ["en", "el"],
                                            token: transifexToken)

        // Fetch translations
        TXNative.fetchTranslations()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
