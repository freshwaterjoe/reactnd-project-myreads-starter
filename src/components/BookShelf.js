import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import Book from'./Book'


class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired
    }


    // No state required

    render() {
        const {books, onBookMove} = this.props
        return (
            <ol className="books-grid">
                {books.map((book) => (
                    <Book
                        book={ book }
                        books={ books }
                        key={ book.id }
                        onBookMove={onBookMove}
                    />
                ))}
            </ol>
        )


    }

}

export default BookShelf