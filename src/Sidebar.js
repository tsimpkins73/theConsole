import React from 'react'
import SearchDiv from './SearchDiv.js'
import FavoritesDiv from './FavoritesDiv.js'
import CategoriesDiv from './CategoriesDiv.js'
import './Sidebar.css'

export default class Sidebar extends React.Component {
    render() {
        return (<section id="sidebar">
        <SearchDiv articles={this.props.articles}  handleSearchForm={this.handleSearchForm}/>
        <FavoritesDiv articles={this.props.articles} />
        <CategoriesDiv articles={this.props.articles} />
      </section>
        );
    }
}