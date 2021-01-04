import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Provider from './components/Provider';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <SearchBar />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
