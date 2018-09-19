import React from 'react';
import { Text, View } from 'react-native';
import HistorySubItemMessageBodyLink from './HistorySubItemMessageBodyLink';
import HistorySubItemMessageBodyText from './HistorySubItemMessageBodyText';

export default ({ messages }) =>
  // ex. messages = [[{ text: '文字列1', red: true }, { text: '文字列2', href: 'http://google.com'}], [{ text: '文字列3' }]]
  messages.map((message, i) => {
    // ex. message = [{ text: '文字列1', red: true }, { text: '文字列2', href: 'http://google.com'}]
    const linkable = message.find(item => item.href);
    const contents = message.map(
      (data, j) =>
        data.href ? (
          <HistorySubItemMessageBodyLink key={j} word={data} />
        ) : (
          <HistorySubItemMessageBodyText key={j} word={data} />
        ),
    );
    return linkable ? <View key={i}>{contents}</View> : <Text key={i}>{contents} </Text>;
  });
