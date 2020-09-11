import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import {tx} from '@transifex/native';
import {T, useLanguages} from '@transifex/react';

tx.init({
  sourceLocale: 'en',
  token: '1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1',
});

export default function App() {
  const [string, setString] = useState('John Doe');
  const [number, setNumber] = useState('1');
  const [choice, setChoice] = useState('female');

  const languages = useLanguages();

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Transifex Native playground</Text>
      </View>
      <View style={{ flex: 8, backgroundColor: '#ddf' }}>
        <Row>
          <Text>Static content:</Text>
          <Text><T _str="Hello world" /></Text>
        </Row>
        <Row>
          <View style={{ flex: 1 }}>
            <Text>Dynamic content:</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#eef' }}>
              <TextInput onChangeText={setString} value={string} />
            </View>
            <View style={{ flex: 2 }}>
              <Text>
                <T _str="Hello {username}" username={string} />
              </Text>
            </View>
          </View>
        </Row>
        <Row>
          <View style={{ flex: 1 }}>
            <Text>Pluralized:</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#eef' }}>
              <TextInput
                onChangeText={setNumber}
                value={number}
                keyboardType="number-pad" />
            </View>
            <View style={{ flex: 2 }}>
              <Text>
                <T
                  _str="{cnt, plural, one {You have one message} other {You have # messages}}"
                  cnt={number} />
              </Text>
            </View>
          </View>
        </Row>
        <Row>
          <View style={{ flex: 1 }}>
            <Text>Choice:</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#eef' }}>
              <TextInput onChangeText={setChoice} value={choice} />
            </View>
            <View style={{ flex: 2 }}>
              <Text>
                <T
                  _str="{gender, select, male {{username} is a boy} female {{username} is a girl} other {{username} is a person}}"
                  username={string}
                  gender={choice} />
              </Text>
            </View>
          </View>
        </Row>
        <Row>
          <View style={{ flexDirection: 'row' }}>
            <Button title="English" onPress={() => tx.setCurrentLocale('en')} />
            {languages.map(({code, name}) => (
              <Button
                key={code}
                title={name}
                onPress={() => tx.setCurrentLocale(code)} />
            ))}
          </View>
        </Row>
      </View>
    </View>
  );
}

function Row({ children }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#ccf', margin: 10 }}>
      {children}
    </View>
  );
}
