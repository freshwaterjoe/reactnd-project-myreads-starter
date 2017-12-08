import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css'
import Search from './components/Search'
import BookShelf from './components/BookShelf'

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
        <Route  exact path='/' render={() => (
            <div className='list-books'>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfTitle={'Currently Reading'}/>
                        <BookShelf shelfTitle={'Want To Read'}/>
                        <BookShelf shelfTitle={'Read'}/>
                    </div>
                </div>
            </div>
        )}/>
          <Route exact path='/search' component={Search}/>

          <div className="open-search">
              <Link to='/search' className='add-book'>Add a book</Link>
          </div>
      </div>
        )}
}

export default BooksApp
