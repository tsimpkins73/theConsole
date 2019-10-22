import React from 'react'
import './Sidebar.css'

export default class SearchDiv extends React.Component {
    render() {
        return (
            <div id="searchDiv">
            <label for="searchBar">Search Bar</label>
            <input type="text"></input>
          </div>
        );
    }
}