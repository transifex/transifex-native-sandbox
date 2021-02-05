//
//  AppDelegate.swift
//  SwiftSampleApp
//
//  Created by Stelios Petrakis on 30/10/20.
//

import UIKit
import Transifex

class CustomLocaleProvider : TXCurrentLocaleProvider {
    func currentLocale() -> String {
        return "sl"
    }
}

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Extract token
        let transifexToken = Bundle.main.infoDictionary!["TRANSIFEX_TOKEN"] as! String
        
        // Initialize Transifex Native
        let localeState = TXLocaleState(sourceLocale: "en",
                                        appLocales: ["en", "fr", "de", "sl"],
                                        currentLocaleProvider: CustomLocaleProvider())
        
        TXNative.initialize(
            locales: localeState,
            token: transifexToken,
            secret: nil,
            missingPolicy: TXCompositePolicy(
                TXPseudoTranslationPolicy(),
                TXWrappedStringPolicy(start: "[", end: "]")
            )
        )
        TXNative.fetchTranslations()
        
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        // Called when a new scene session is being created.
        // Use this method to select a configuration to create the new scene with.
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }

    func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
        // Called when the user discards a scene session.
        // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
        // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
    }


}

