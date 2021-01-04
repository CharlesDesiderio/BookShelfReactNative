import React, { useState } from 'react'
import { StyleSheet, Text, TextComponent, View } from 'react-native'
import { Button, TextInput } from 'react-native'
import BookContext from './Context'

export default SearchBar = () => {
  
  const [textInput, setTextInput] = useState('9780140449389')

  return (
    <BookContext.Consumer>
      {context => (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
          />
          <Button onPress={() => context.state.runIsbnSearch(textInput)} title="Search" />
          <Text>{context.state.returnedBookData.title}</Text>
        </View>

      )}
    </BookContext.Consumer>
  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
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