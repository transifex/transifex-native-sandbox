# Transifex Custom Bundle Sample app

This sample project showcases the use of the custom bundle approach for the
Transifex SDK.

Developers can initialize the SDK using the `TXNative.initializeWithCustomBundle(...)`
initializer and then call `TXNative.fetchTranslations(...)`.

This sample includes SwiftLint with the custom regular expression rule
(`.swiftlint.yml`) that ensures that the custom `bundle: .tfx` argument is
provided where necessary.

This sample makes use of the custom Transifex `#Localized()` swift macro [^1] to
assist when using the custom bundle approach.

## Usage

In order to run the sample app, you will need to change the value for the
`TRANSIFEX_TOKEN` key in the `Secrets.xcconfig` file to the value you have on
your Transifex dashboard.

You will also have to provide the proper source and app locales during the
initialization of the SDK.

[^1]: https://github.com/transifex/transifex-swift-macro/
