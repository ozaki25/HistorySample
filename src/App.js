import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { defaultHistories } from './data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      histories: defaultHistories,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
        <Text>{JSON.stringify(this.state.histories)}</Text>
      </View>
    );
  }
}
