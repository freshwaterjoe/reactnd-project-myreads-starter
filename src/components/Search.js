import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired
    }

    state = {
        searchQuery: '',
        searchResults: [],
        queryError: false
    }

    searchBooksWithQuery = (e) => {

        // trim whitespace on query
        const searchQuery = e.target.value.trim()

        this.setState({ searchQuery: searchQuery })

        // if there is a query, run it and limit to 20 results
        if (searchQuery) {
            BooksAPI.search(searchQuery, 20).then((books) => {
                // If results, no error, else there is a search error
                books.length > 0 ?  this.setState({searchResults: books, queryError: false }) : this.setState({ searchResults: [], queryError: true })
            })

            // else if no query, display all books
        } else this.setState({searchResults: [], searchErr: false })
    }



    render() {

        const { searchQuery, searchResults, queryError } = this.state
        const {books, onBookMove } = this.props


        return (
            <div className='search-books'>
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                 You can find these search terms here:
                 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                 you don't find a specific author or title. Every search is limited by search terms.
               */}
                        <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={this.searchBooksWithQuery}/>
                    </div>
                </div>
                <div className="search-books-results">
                    { searchResults.length > 0 && (
                        <div>
                            <div className=''>
                                <h3>Search returned { searchResults.length } books </h3>
                            </div>
                            <ol className="books-grid">
                                {searchResults.map((book) => (
                                    <Book
                                        book={book}
                                        books={books}
                                        key={book.id}
                                        onbookmove={onBookMove}
                                    />
                                ))}
                            </ol>
                        </div>
                    )}
                    { queryError && (
                        <div>
                            <div className=''>
                                <h3>No search results, try again!</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }


}
export default Search