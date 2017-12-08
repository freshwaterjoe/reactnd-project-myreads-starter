import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import Book from'./Book'


class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired
    }


    state = {

    }

    render() {

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book/>
                        </li>
                        <li>
                            <Book/>
                        </li>
                    </ol>
                </div>
            </div>
        )


    }

}

export default BookShelf