This is a React application, bootstrapped with
[Create React App](https://github.com/facebook/create-react-app) and integrated
with [Transifex Native](https://www.transifex.com/native/).

## Getting started

In order to get started, you can run

```sh
sh run.sh
```

Or, by hand:

```sh
# Will install all packages listed in package.json
npm install

# Will run the 'start' script from package.json, which compiles the application
# and starts a development server
npm run start
```

Now, you can visit the application in the browser, change the languages using
the language picker and see the translations being rendered in real time.

## Where to go from here

### Play with the interactive parts of the page

Change the various inputs to see how the final texts are being rendered. Also
change the selected language using the language picker and see the texts being
translated in real time.

### Edit translations

Head over to the
[linked transifex project](https://www.transifex.com/native-sandbox/main-native-sandbox/)
join a language team and help complete or edit the translations. Then head back
into the application, refresh and see the changes you made appear over-the-air.

### Customize the language picker

Try writing your own language picker by following the
[instructions](https://github.com/transifex/transifex-javascript/tree/master/packages/react#uselanguages-hook)

### Edit the content of the application and push

Open `src/App.js` and try adding some new strings using the
[T tag](https://github.com/transifex/transifex-javascript/tree/master/packages/react#t-component). Then, push to transifex using the
[cli](https://github.com/transifex/transifex-javascript/tree/master/packages/cli):

```sh
npx txjs-cli \
  --verbose \
  --token=1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1 \
  --secret=$SECRET_TOKEN \
  src/
```

_(You need to replace the `$SECRET_TOKEN` with the secret token of the
[linked transifex project](https://www.transifex.com/native-sandbox/main-native-sandbox/), [contact us]())_
