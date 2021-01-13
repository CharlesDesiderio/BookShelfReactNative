import React, { Component } from 'react'
import BookContext from './Context'
import axios from 'axios'
export default class Provider extends Component {

  // 9780140449389 placeholder ISBN for Penguin Classics 1001 Nights Volume 1
  state = {
    test: 'fake news',
    userData: {},
    returnedBookData: {},
    loginUser: (email, password) => {
      axios.post('http://localhost:3001/user/login', {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },  
        email: email,
        password: password
      })
      .then(res => {
        this.setState({
          test: 'true',
          userData: res.data.user
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    runIsbnSearch: (isbnNumber) => {
      axios.get(`https://openlibrary.org/isbn/${isbnNumber}.json`)
      .then(res => {
        console.log(res)
        return res.data.data
      })
      .catch(err => {
        console.log(err)
        throw err
      })
    }
  }

  render() {
    return(
      <BookContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </BookContext.Provider>
    )
  }

}