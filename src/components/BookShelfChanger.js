import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onBookMove: PropTypes.func.isRequired,
    }


    render() {

        const { book, books, onBookMove } = this.props

        // book set to default value of no shelf, before checking for existing shelf and amending if required
        let shelf = 'none'
        for (let b of books ) {
            if (b.id === book.id)  {
                shelf = b.shelf
                break
            }
        }

        console.log(this.props)



        return (
            <div className="book-shelf-changer">
                <select defaultValue={shelf} onChange={(e) => onBookMove(book, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default BookShelfChanger