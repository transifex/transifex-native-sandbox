import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, TextInput, View } from 'react-native';

import nodeNative, {tx} from '@transifex/native';
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

  const LangButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Transifex Native playground</Text>
      </View>
      <View style={{ flex: 8 }}>
        <Row>
          <Text style={styles.row_heading}>Static content</Text>
          <Text style={styles.row_content}><T _str="Hello world" /></Text>
        </Row>
        <Row>
          <Text style={styles.row_heading}>Dynamic content</Text>
          <View style={styles.row_content}>
            <TextInput
              style={styles.inputText}
              onChangeText={setString}
              value={string} />
            <Text>
              <T _str="Hello {username}" username={string} />
            </Text>
          </View>
        </Row>
        <Row>
          <Text style={styles.row_heading}>Pluralized</Text>
          <View style={styles.row_content}>
            <TextInput
              style={styles.inputText}
              onChangeText={setNumber}
              value={number}
              keyboardType="number-pad" />
            <Text>
              <T
                _str="{cnt, plural, one {You have one message} other {You have # messages}}"
                cnt={number} />
            </Text>
          </View>
        </Row>
        <Row>
          <Text style={styles.row_heading}>Choice</Text>
          <View style={styles.row_content}>
            <TextInput
              style={styles.inputText}
              onChangeText={setChoice}
              value={choice} />
            <Text>
              <T
                _str="{gender, select, male {{username} is a boy} female {{username} is a girl} other {{username} is a person}}"
                username={string}
                gender={choice} />
            </Text>
          </View>
        </Row>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5}}>
         <LangButton
          title="English"
          onPress={() => tx.setCurrentLocale('en')} />
          {languages.map(({code, name}) => (
            <LangButton
              key={code}
              title={name}
              onPress={() => tx.setCurrentLocale(code)} />
          ))}
        </View>
      </View>
    </View>
  );
}

function Row({ children }) {
  return (
    <View style={styles.row}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    maxWidth: 700,
    width: '100%',
    flex: 1,
  },
  heading: {
    fontSize: 18,
    marginBottom: 15,
  },
  row: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: '#f4f5f7',
    marginTop: 10,
    marginBottom: 10,
  },
  row_heading: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    fontSize: 16,
    backgroundColor: '#84CCFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  row_content: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  inputText: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 3,
    padding: 6,
    marginBottom: 10,
  },
  buttonContainer: {
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#0086E6',
    borderRadius: 3,
    textAlign: 'center',
    padding: 12,
  },
  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
  }
});
