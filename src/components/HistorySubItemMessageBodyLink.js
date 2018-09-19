import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ({ word }) => (
  <TouchableOpacity onPress={() => alert(word.href)}>
    <Text style={[word.href && styles.link, word.red && styles.red, word.bold && styles.bold]}>
      {word.text}
    </Text>
  </TouchableOpacity>
);
