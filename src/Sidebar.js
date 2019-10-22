import React from 'react'
import './Sidebar.css'

export default class Sidebar extends React.Component {
    render() {
        return (<section id="sidebar">
        <div id="searchDiv">
          <label for="searchBar">Search Bar</label>
          <input type="text"></input>
        </div>
        <div id="favoritesDiv">Favorites Links</div>
        <div id="categoriesDiv">Categories Links</div>
        <div id="tagsDiv">Tags links</div>
      </section>
        );
    }
}