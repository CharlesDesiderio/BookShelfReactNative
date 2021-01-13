import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import BookContext from './Context'

export default Login = () => {
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  return (
    <BookContext.Consumer>
      {context => (
        <View style={styles.container}>
          <Text>Email Address:</Text>
          <TextInput
            textContentType="emailAddress"
            style={styles.textInput}
            onChangeText={(text) => setLoginEmail(text)}
            value={loginEmail}
          />
          <Text>Password:</Text>
          <TextInput
            textContentType="password"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={(text) => setLoginPassword(text)}
            value={loginPassword}
          />
          <Button onPress={() => context.state.loginUser(loginEmail, loginPassword)} title="Login" />

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