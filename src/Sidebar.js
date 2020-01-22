import React from 'react'
import SearchDiv from './SearchDiv.js'
import FavoritesDiv from './FavoritesDiv.js'
import CategoriesDiv from './CategoriesDiv.js'

export default class Sidebar extends React.Component {


  render() {
    let articles = this.props.articles;
    let categories = this.props.categories;
    let handleSearchForm = this.props.handleSearchForm;

    return (<section id="sidebar">
      <SearchDiv {...this.props} articles={articles} handleSearchForm={handleSearchForm} />
      <h1 id="sidebarHeadline">Favorites</h1>
      <FavoritesDiv articles={articles} handleArticleButton={this.props.handleArticleButton} />
      <h1 id="sidebarHeadline">Categories</h1>
      <CategoriesDiv categories={categories} />
    </section>
    );
  }
}