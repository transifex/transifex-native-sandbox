import React, { useState } from "react";
import i18n from 'i18next';
import { initReactI18next, useTranslation, withTranslation } from 'react-i18next';
import { TransifexI18next } from '@transifex/i18next';

const txBackend = new TransifexI18next({
  token: '1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504',
});

i18n
  .use(txBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
  });

function App() {
  const { t } = useTranslation();
  const [string, setString] = useState("John Doe");
  const [number, setNumber] = useState(1);
  const [choice, setChoice] = useState("female");

  return (
    <div className="container">
      <div className="header">
        <h1>Transifex Native playground</h1>
      </div>
      <div className="row">
        <div className="column">
          <h3>Static content</h3>
          <div>
            {t("Hello world")}
          </div>
        </div>
        <div className="column">
          <h3>Dynamic content</h3>
          <div>
            <input value={string} onChange={(e) => setString(e.target.value)} />
            <p>
              {t("Hello {{username}}", { username: string })}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Pluralized</h3>
          <div>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p>
              {t("messagesInfo", { count: number })}
            </p>
          </div>
        </div>
        <div className="column">
          <h3>Choice</h3>
          <div>
            <select value={choice} onChange={(e) => setChoice(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <p>
              {t("genderMessage", { username: string, context: choice })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(App);
