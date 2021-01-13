import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BookContext from './components/Context';
import Login from './components/Login';
import Profile from './components/Profile';
import Provider from './components/Provider';

export default class App extends Component {
  
  render() {
    return (
      <Provider>
        <BookContext.Consumer>
        {context => (
        <View style={styles.container}>
          {Object.keys(context.state.userData).length === 0 ? <Login /> : <Profile /> }
          <Text></Text>

        </View>

        )}
        </BookContext.Consumer>
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
