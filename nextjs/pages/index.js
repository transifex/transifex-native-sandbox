import { useState } from 'react';
import { T, UT } from '@transifex/react';
import { useRouter } from 'next/router';
import { getServerSideTranslations, setClientSideTranslations } from '../i18n';

export default function Home(props) {
  // initialize client side translation from server side props
  setClientSideTranslations(props);

  const router = useRouter()
  const { pathname, asPath, query } = router;

  const [string, setString] = useState("John Doe");
  const [number, setNumber] = useState(1);
  const [choice, setChoice] = useState("female");

  return (
    <div className="container">
      <div className="header">
        <h1>Transifex Native playground</h1>
        {props.locales.map(nextLocale => {
          return (
            <button key={nextLocale} onClick={() => {
              router.push({ pathname, query }, asPath, { locale: nextLocale })
            }}>{nextLocale}</button>
          );
        })}
      </div>
      <div className="row">
        <div className="column">
          <h3>Static content</h3>
          <div>
            <T _str="Hello world 2" />
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
  )
}

export async function getServerSideProps(context) {
  const data = await getServerSideTranslations(context)
  return {
    props: {
      ...data,
    }
  }
}
