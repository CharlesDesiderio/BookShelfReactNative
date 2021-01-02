import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import BookContext from './Context'
// import Axios from 'axios'

export default SearchBar = () => {
  
  return (
    <BookContext.Consumer>
      {context => (
        <View>
          <TextInput
            onChangeText={isbn => context.state.handleIsbnInput(isbn)}
            value={context.state.searchIsbnNumber}
          />
          
        </View>

      )}
    </BookContext.Consumer>
  )
}