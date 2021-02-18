import React, { useState } from "react";

import { tx } from "@transifex/native";
import { T, UT, LanguagePicker } from "@transifex/react";

tx.init({
  token: "1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1",
});

function App() {
  const [string, setString] = useState("John Doe");
  const [number, setNumber] = useState(1);
  const [choice, setChoice] = useState("female");

  return (
    <div className="container">
      <div className="header">
        <h1>Transifex Native playground</h1>
        <div className="picker">
          <LanguagePicker />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Static content</h3>
          <div>
            <T _str="Hello world" />
          </div>
        </div>
        <div className="column">
          <h3>Dynamic content</h3>
          <div>
            <input value={string} onChange={(e) => setString(e.target.value)} />
            <p>
              <T _str="Hello {username}" username={string} />
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
              <T
                _str="{cnt, plural, one {You have # message} other {You have # messages}}"
                cnt={number}
              />
            </p>
          </div>
        </div>
        <div className="column">
          <h3>Choice</h3>
          <div>
            <select value={choice} onChange={(e) => setChoice(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p>
              <T
                _str="{username} is a {gender, select, male {boy} female {girl} other {person}}"
                gender={choice}
                username={string}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Raw HTML</h3>
          <div>
            <input value={string} onChange={(e) => setString(e.target.value)} />
            <p>
              <UT
                _str='<em style="color:red">Hello </em><strong style="color:blue">{username}</strong>'
                _inline
                username={string}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
