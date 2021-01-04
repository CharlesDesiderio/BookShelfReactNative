import React, { Component } from 'react'
import BookContext from './Context'
import Axios from 'axios'
import axios from 'axios'
export default class Provider extends Component {

  // 9780140449389 placeholder ISBN for Penguin Classics 1001 Nights Volume 1
  state = {
    returnedBookData: {},
    runIsbnSearch: (isbnNumber) => {
      axios.get(`https://openlibrary.org/isbn/${isbnNumber}.json`)
      .then(res => {
        this.setState({
          returnedBookData: res.data
        })
      })
      .catch(err => {
        console.log(err)
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