import React, { Component } from 'react'
import BookContext from './Context'

export default class Provider extends Component {

  // 9780140449389 placeholder ISBN for Penguin Classics 1001 Nights Volume 1
  state = {
    searchIsbnNumber: '9780140449389',
    handleIsbnInput: (isbn) => {
      this.setState({
        searchIsbnNumber: isbn
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