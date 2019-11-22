import React from 'react'
<<<<<<< HEAD
import './Sidebar.css'
import SearchBar from './SearchBar.js'
=======
import './css/Sidebar.css'
>>>>>>> 5c21c2d6d090fd3a8568570d0ee7a7f30f232b3f

export default class SearchDiv extends React.Component {
    render() {

        return (
            <div id="searchDiv">
<<<<<<< HEAD
            <SearchBar />
=======
            <form onSubmit={this.props.handleSearchForm}>
                <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                <button type="submit">Search</button>
                </form>
>>>>>>> 5c21c2d6d090fd3a8568570d0ee7a7f30f232b3f
          </div>
        );
    }
}