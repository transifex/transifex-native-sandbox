# Transifex iOS Sample apps

<p align="left">
<img src="https://img.shields.io/badge/platforms-iOS-lightgrey.svg">
</p>

This repository hosts two iOS sample apps written in Swift and Objective-C that make use
of the [Transifex iOS SDK](https://github.com/transifex/transifex-swift/).

## Usage

In order to run either the Swift or the Objective-C sample apps, you will need to change
the value for the `TRANSIFEX_TOKEN` key in the `Secrets.xcconfig` file found in each
project, to the value you have on your Transifex dashboard.

You will also have to provide the proper source and app locales during the initialization
of the SDK (make sure to update the `CustomLocaleProvider` class as well).

## License
Licensed under Apache License 2.0, see [LICENSE](LICENSE) file.
