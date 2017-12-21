import React, {Component} from 'react'
import BookShelf from './BookShelf'
import Search from './Search'
import PropTypes from 'prop-types'

class BookList extends Component {


    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired,
        shelves: PropTypes.array.isRequired
    }

    render() {
        const {books, onBookMove, shelves} = this.props
        return(
            <div className="list-books-content">
                {shelves.map((shelf, index) => {
                    const booksOnShelf = books.filter(book => book.shelf === shelf.type)
                    return (
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <BookShelf books={booksOnShelf} onBookMove={onBookMove}/>
                            </div>
                        </div>
                    )
                })}

            </div>

        )
    }
}

export default BookList