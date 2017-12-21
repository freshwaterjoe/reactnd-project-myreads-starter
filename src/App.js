import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/BookShelf'
import {Route, Link} from 'react-router-dom'
import Search from './components/Search'
import BookList from './components/BookList'

class BooksApp extends React.Component {

    constructor(props) {
        super(props)
        // Add all functions to be binded here
    }

    state = {
        search: {
            query: '',
            results: []
        },

        books : [],
        shelfTitles : ['Currently Reading', 'Read', 'Wish List'],
  }


  componentDidMount() {

      BooksAPI.getAll().then((data) => {
          this.setState({books : data})
      });

  }


    /**
     *
     * @param query - string to be searched
     */
  bookSearch(query) {
        BooksAPI.search(query).then( data => {
            const results = { query: query, results: []}
            if (!data.error) {
                results.items = data
            }
            this.setState({results})
        })
  }


  
    /**
     * onBookMove function handles changes in a books shelf. passed down to child components as a prop
     * @param alteredBook - the book object to be moved
     * @param shelf - the shelf the book is to be moved too
     */
  onBookMove(alteredBook, shelf) {

      if (alteredBook.shelf !== shelf) {
          BooksAPI.update(alteredBook, shelf).then(response => {

              // update the shelf
              alteredBook.shelf = shelf;

              var latestBooks = this.state.books.filter(book => book.id !== alteredBook.id)
              latestBooks.push(alteredBook);
              this.setState({books : latestBooks})
          })
      }
  }


  render() {
      const {books} = this.state

    return (
      <div className="app">
          <Route exact path="/" component={
              props => {
                  return (
                      <BookList books={books} onBookMove={this.onBookMove} bookSearch={this.bookSearch}/>
                  )
              }} />

          <Route exact path='/search' component={
              props => {
                  return (
                      <Search books={books}  onBookMove={this.onBookMove}/>
                  )
              }
          }/>
      </div>
        )}
}

export default BooksApp
