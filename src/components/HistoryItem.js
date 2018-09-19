import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HistorySubItemMessageHeader from './HistorySubItemMessageHeader';
import HistorySubItemMessageBody from './HistorySubItemMessageBody';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  content: {
    marginTop: 10,
  },
});

export default ({ history }) => (
  <View style={styles.container}>
    <View>
      <Text>deskCode: {history.deskCode}</Text>
      <Text>uketsukeNumber: {history.uketsukeNumber}</Text>
      <Text>requestDivisionValue: {history.requestDivisionValue}</Text>
      <Text>requestDate: {history.requestDate}</Text>
    </View>
    <View>
      {history.message.header && (
        <View style={styles.content}>
          <Text>~見出し~</Text>
          <HistorySubItemMessageHeader messages={history.message.header} />
        </View>
      )}
      {history.message.body && (
        <View style={styles.content}>
          <Text>~本文~</Text>
          <HistorySubItemMessageBody messages={history.message.body} />
        </View>
      )}
    </View>
  </View>
);
