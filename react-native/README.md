This is a React-Native application, bootstrapped with
[Create React Native App](https://github.com/expo/create-react-native-app)
and integrated with [Transifex Native](https://www.transifex.com/native/).

## Getting started


You need a "reasonably recent" version of node/npm to run this application.

You will also need the Expo app
([android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US),
[ios](https://apps.apple.com/us/app/expo-client/id982107779))

In order to get started, you can run:

```sh
sh run.sh
```

Or, by hand:

```sh
# Will install all packages listed in package.json
npm install

# Will run the 'start' script from package.json, which compiles the application
# opens a webpage that will allow you to run the application either in the
# browser or in you mobile device, via the Expo app
npm run web
```

Now, you can scan the QR code in the page that opened in your browser
(http://localhost:19002) with the Expo app in your mobile phone and the app
will load.

## Where to go from here

### Play with the interactive parts of the page

Change the various inputs to see how the final texts are being rendered. Also
change the selected language using the language picker and see the texts being
translated in real time.

### Edit translations

Head over to the
[linked transifex project](https://www.transifex.com/transifex/native-sandbox/dashboard/),
join a language team and help complete or edit the translations. Then head back
into the application, refresh and see the changes you made appear over-the-air
(there may be a delay before the new translations become available to your
application).

### Customize the language picker

Try writing your own language picker by following the
[instructions](https://github.com/transifex/transifex-javascript/tree/master/packages/react#uselanguages-hook).

### Edit the content of the application and push

Open `src/App.js` and try adding some new strings using the
[T component](https://github.com/transifex/transifex-javascript/tree/master/packages/react#t-component).
Then push to transifex by running:

```sh
sh push.sh
```

Or, if you want to do it by hand using the
[cli](https://github.com/transifex/transifex-javascript/tree/master/packages/cli):

```sh
npx txjs-cli push \
  --token=1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504 \
  --secret=1/9bd7ad8531cf7e0c3faec7c1e523c20df9b12e32 \
  src/
```
