import React from 'react'
import './Sidebar.css'
import SearchBar from './SearchBar.js'

export default class SearchDiv extends React.Component {
    render() {
        return (
            <div id="searchDiv">
            <SearchBar />
          </div>
        );
    }
}