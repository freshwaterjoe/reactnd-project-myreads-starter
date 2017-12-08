import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Route, Link} from 'react-router-dom'
import Search from './Search'

class BookListApp extends Component {


    render() {
        return(
            <div className='book-list-app'>
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
        )
    }
}

export default BookListApp