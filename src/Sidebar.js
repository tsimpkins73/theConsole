import React from 'react'
import SearchDiv from './SearchDiv.js'
import FavoritesDiv from './FavoritesDiv.js'
import CategoriesDiv from './CategoriesDiv.js'
import TagsDiv from './TagsDiv.js'
import './Sidebar.css'

export default class Sidebar extends React.Component {
    render() {
        return (<section id="sidebar">
        <SearchDiv />
        <FavoritesDiv />
        <CategoriesDiv />
        <TagsDiv />
      </section>
        );
    }
}