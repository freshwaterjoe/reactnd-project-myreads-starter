import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookListApp from './components/BookListApp'

class BooksApp extends React.Component {

    state = {
        books : [],
        shelfTitles : ['Currently Reading', 'Read', 'Wish List'],
  }


  componentDidMount() {

      BooksAPI.getAll().then((books) => {
          this.setState({books})
      });

  }


  onAddBook = (book) => {

    // This method will be passed to the <Search> component, and will be in charge of placing new books on the
      // correct shelves.

}


  render() {
    return (
      <div className="app">
        <BookListApp/>
      </div>
        )}
}

export default BooksApp
