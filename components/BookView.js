import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import BookContext from './Context'
import axios from 'axios'

export default BookView = (props) => {

  const [bookData, setBookData] = useState('')
  
  console.log(props.book)

  useEffect(() => {

  const fetchData = async (isbn) => {
    const result = await axios.get(`https://openlibrary.org/isbn/${isbn}.json`)
    setBookData(result.data)
    console.log(result)
  }
  fetchData(props.book)
}, [])

  return (
    // <BookContext.Consumer>
    //   {context => (
        <View style={styles.container}>
          <Text>{bookData.title}</Text>
        </View>
    //   )}
    // </BookContext.Consumer>
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