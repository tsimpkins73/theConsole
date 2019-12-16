import React from 'react'
import SearchDiv from './SearchDiv.js'
import FavoritesDiv from './FavoritesDiv.js'
import CategoriesDiv from './CategoriesDiv.js'

export default class Sidebar extends React.Component {
    render() {
        return (<section id="sidebar">
        <SearchDiv {...this.props} articles={this.props.articles}  handleSearchForm={this.props.handleSearchForm}/>
        <FavoritesDiv articles={this.props.articles} />
        <CategoriesDiv categories={this.props.categories} />
      </section>
        );
    }
}