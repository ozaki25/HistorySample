import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HistoryItem from './components/HistoryItem';
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
    console.log(this.state.histories);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.histories}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => <HistoryItem history={item} />}
        />
      </View>
    );
  }
}
