import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default ({ messages }) =>
  messages.map((message, i) => (
    <Text key={i} style={[message.red && styles.red, message.bold && styles.bold]}>
      {message.text}
    </Text>
  ));
