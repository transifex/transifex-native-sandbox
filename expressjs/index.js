const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('static'));

const { TxExpress } = require('@transifex/express');
const txExpress = new TxExpress({
  token: '1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504',
  logging: console.log,
});
app.use(txExpress.middleware());
app.post('/i18n', txExpress.setLocale());

app.get('/', (req, res) => {
  const params = { string: 'John Doe', number: 1, choice: 'female', ...req.query };
  const serverStrings = [
    ['Static content:', req.t('Hello world')],
    ['Dynamic content:', req.t('Hello {username}', { username: params.string })],
    [
      'Pluralized:',
      req.t(
        '{cnt, plural, one {You have one message} other {You have # messages}}',
        { cnt: params.number },
      ),
    ],
    [
      'Choice:',
      req.t(
        '{username} is a {gender, select, male {boy} female {girl} other {other}}',
        { username: params.string, gender: params.choice }),
    ],
    [
      'Raw HTML:',
      req.ut(
        '<em style="color:red">Hello</em><strong style="color:blue">{username}</strong>',
        { username: params.string },
      ),
    ],
  ]

  res.render('index', { params, serverStrings });
});

txExpress.fetch().then(() => {
  app.listen(3000, () => {
    console.log('App listening on port 3000'); // eslint-disable-line no-console
  });
});
