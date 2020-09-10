import React, {useState} from 'react';

import {tx} from '@transifex/native';
import {T, UT, LanguagePicker} from '@transifex/react';

tx.init({
  sourceLocale: 'en',
  token: '1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1',
});

function App() {
  const [string, setString] = useState('John Doe');
  const [number, setNumber] = useState(1);
  const [choice, setChoice] = useState('female');

  return (
    <table>
      <tbody>
        <tr>
          <th>Static content:</th>
          <td></td>
          <td><T _str="Hello world" /></td>
        </tr>
        <tr>
          <th>Dynamic content:</th>
          <td>
            <input
              value={string}
              onChange={(e) => setString(e.target.value)} />
          </td>
          <td><T _str="Hello {username}" username={string} /></td>
        </tr>
        <tr>
          <th>Pluralized:</th>
          <td>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)} />
          </td>
          <td>
            <T
              _str="{cnt, plural, one {You have # message} other {You have # messages}}"
              cnt={number} />
          </td>
        </tr>
        <tr>
          <th>Choice:</th>
          <td>
            <select value={choice} onChange={(e) => setChoice(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </td>
          <td>
            <T
              _str="{username} is a {gender, select, male {boy} female {girl} other {person}}"
              gender={choice}
              username={string} />
          </td>
        </tr>
        <tr>
          <th>Raw HTML:</th>
          <td>
            <input
              value={string}
              onChange={(e) => setString(e.target.value)} />
          </td>
          <td>
            <UT
              _str="<em style=&quot;color:red&quot;>Hello </em><strong style=&quot;color:blue&quot;>{username}</strong>"
              _inline
              username={string} />
          </td>
        </tr>
        <tr>
          <td><LanguagePicker /></td>
          <td colSpan={2}></td>
        </tr>
      </tbody>
    </table>
  )
}

export default App;
