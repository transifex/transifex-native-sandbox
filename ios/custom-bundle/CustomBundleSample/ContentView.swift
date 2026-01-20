//
//  ContentView.swift
//  CustomBundleSample
//
//  Created by Stelios Petrakis on 06.05.25.
//

import SwiftUI
import Localized

struct ContentView: View {
    @State private var itemCount = 1
    @State private var peopleCount = 1
    @State private var password = ""
    @State private var value = 1
    @State private var areTogglesOn = false
    @State private var input = ""

    let testString: LocalizedStringKey = "test string"

    let gradient = LinearGradient(
        colors: [.blue, .green],
        startPoint: .leading,
        endPoint: .trailing
    )

    var localizedMins: NSString {
        let localizedMinutes = NSLocalizedString("unit-time.%d-minute(s)", bundle: .tfx,
                                                 comment: "dminutes")
        return NSString.localizedStringWithFormat(localizedMinutes as NSString,
                                                  value)
    }

    var body: some View {
        VStack {
            Text("\(itemCount) Books", bundle: .tfx)
            Text("\(peopleCount) \(itemCount)", bundle: .tfx)
            Text("This is a device", bundle: .tfx)
            Text("This device has \(peopleCount) stored", bundle: .tfx)
            Text(verbatim: localizedMins as String)
            Text(#Localized("test string"))
            Text(String(localized: "test string", bundle: .tfx))
            Text(verbatim: "test string")
            // Simple text
            Text("test string", bundle: .tfx)
            // Text with LocalizedStringKey variable
            Text(testString, bundle: .tfx)
            // Text with color
            Text("test string", bundle: .tfx).foregroundColor(.green)
            // Text with gradient inside text
            Text("lorem \(Text("test string", bundle: .tfx).foregroundStyle(gradient)) ipsum", bundle: .tfx)
            // Button
            Button {
                print("Button pressed")
            } label: {
                Text("test string", bundle: .tfx)
            }
            // Secure Field
            SecureField(text: $password) {
                Text("test string", bundle: .tfx)
            }
            // Stepper
            Stepper(value: $value) {
                Text("test string", bundle: .tfx)
            }
            // TextField
            TextField(text: $input) {
                Text("test string", bundle: .tfx)
            }
            // Toggle
            Toggle(isOn: $areTogglesOn) {
                Text("test string", bundle: .tfx)
            }
            Text("Powerful you have become, the dark side I sense in you.", bundle: .tfx)
            Text("I find your lack of faith disturbing.", bundle: .tfx)
        }
        .padding()
    }
}

// MARK: - Per locale previews

#Preview("English") {
    ContentView()
        .environment(\.locale, Locale(identifier: "en"))
}

#Preview("Greek") {
    ContentView()
        .environment(\.locale, Locale(identifier: "el"))
}
