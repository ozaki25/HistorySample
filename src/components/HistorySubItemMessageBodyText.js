import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  big: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
});

export default ({ word }) => (
  <Text style={[word.red && styles.red, word.bold && styles.bold]}>{word.text}</Text>
);
