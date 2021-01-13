import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import BookView from './BookView'
import BookContext from './Context'
// import axios from 'axios'

export default Profile = () => {
  
  return (
    <BookContext.Consumer>
      {context => (
        <View style={styles.container}>
          <Text>Hello there {context.state.userData.email}</Text>
          <Text>My Collection: </Text>
          {context.state.userData.bookCollection.map(book => {
            return <BookView book={book} />
          })}
        </View>
      )}
    </BookContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    width: 250
  },
  textInput: {
    padding: 4,
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 3
  }
})