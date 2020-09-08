import React, {useState} from 'react';

import {tx} from '@transifex/native';
import {T, LanguagePicker} from '@transifex/react';

tx.init({ sourceLocale: 'en', token: '1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1' });

function App() {
  const [string, setString] = useState('John Doe');
  const [number, setNumber] = useState(1);
  return (
    <>
      <table>
        <tr>
          <th>Static content</th>
          <td><T _str="Hello world" /></td>
          <td></td>
        </tr>
        <tr>
          <th>Dynamic content</th>
          <td>
            <T _str="Hello {username}" username={string} />
          </td>
          <td>
            <input value={string} onChange={(e) => setString(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th>Pluralized</th>
          <td>
            <T
              _str="{cnt, plural, one {You have # message} other {You have # messages}}"
              cnt={number} />
          </td>
          <td>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)} />
          </td>
        </tr>
      </table>
      <LanguagePicker />
    </>
  );
}

export default App;
