//
//  ContentView.swift
//  SwiftUISampleApp
//
//  Created by Stelios Petrakis on 3/6/24.
//

import SwiftUI

struct ContentView: View {
    @State private var password = ""
    @State private var value = 0
    @State private var areTogglesOn = false
    @State private var input = ""

    let testString: LocalizedStringKey = "test string"

    let gradient = LinearGradient(
        colors: [.blue, .green],
        startPoint: .leading,
        endPoint: .trailing
    )

    var body: some View {
        let localizedMinutes = NSLocalizedString("unit-time.%d-minute(s)",
                                                 comment: "dminutes")

        let localizedUnsignedMinutes = NSLocalizedString("unit-time.%u-minute(s)",
                                                         comment: "uminutes")

        VStack {
            Text(verbatim: "test string")
            // Simple text
            Text("test string")
            // Text with LocalizedStringKey variable
            Text(testString)
            // Text with color
            Text("test string").foregroundColor(.green)
            // Text with gradient inside text
            Text("lorem \(Text("test string").foregroundStyle(gradient)) ipsum")
            // Text with system image
            Label("test string", systemImage: "arrow.up")
            // Text with NSLocalizedString
            Text(NSLocalizedString("test string", comment: ""))
            // Label with system image
            Label("test string", systemImage: "arrow.up")
            // Simple button
            Button("test string") {
                print("Button 1 pressed")
            }
            // Button with Label
            Button {
                print("Button 2 pressed")
            } label: {
                Label("test string", systemImage: "arrow.up")
            }
            // Secure Field
            SecureField("test string", text: $password)
            // Stepper
            Stepper("test string", value: $value, in: 0...100)
            // TextField
            TextField("test string", text: $input)
            // Toggle
            Toggle("test string", isOn: $areTogglesOn)
            Text(String.localizedStringWithFormat(localizedMinutes,
                                                  3))
            Text(String.localizedStringWithFormat(localizedUnsignedMinutes,
                                                  UInt(2)))
            Text("Powerful you have become, the dark side I sense in you.")
            Text("I find your lack of faith disturbing.")

        }
        .padding()
    }
}

#Preview {
    ContentView()
}
