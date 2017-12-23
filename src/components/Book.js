import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

// This file will be the Book component
class Book extends Component {


    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired
    }

    // no state required

    // TODO: why is book image not showing?


    render() {
        const {books, book, onBookMove} = this.props
        const style = {
            width: 128,
            height: 193
        }
        const bookAuthors = book.authors

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                    />
                    <BookShelfChanger book={book} books={books} onBookMove={onBookMove}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors && book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
            </div>
        )

    }




}


export default Book