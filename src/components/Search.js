import React from 'react'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class Search extends Component {


    render() {
        return (
            <div>
                <Link classname='close-search' to='/'>Back</Link>
                <p>Hello World</p>
            </div>
        )
    }


}
export default Search