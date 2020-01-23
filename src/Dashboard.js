import React from 'react'
import { Route, Link, } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import SearchDiv from './SearchDiv.js'
import NavbarFavoritesDiv from './NavbarFavoritesDiv.js'
import NavbarCategoriesDiv from './NavbarCategoriesDiv.js'
import './css/Dashboard.css'
import TokenService from './services/token-service'

export default class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
        menuIsActive: true,
        favoritesIsActive: true,
        categoriesIsActive: true,
        };
      }
    

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.props.clearUser();
    }

    mobileNavbarReveal = (event) => {
        event.preventDefault();
      this.setState({menuIsActive: !this.state.menuIsActive,});
      }

 favoritesReveal = (event) => {
              event.preventDefault();
            this.setState({favoritesIsActive: !this.state.favoritesIsActive,});
            }

            categoriesReveal = (event) => {
                event.preventDefault();
              this.setState({categoriesIsActive: !this.state.categoriesIsActive,});
              }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section className={(this.state.menuIsActive) ? 'mobile-navbar' : 'hidden'} onClick={this. mobileNavbarReveal}><h2>Menu</h2></section>
            <section className={(this.state.menuIsActive) ? 'hidden' : 'mobile-navbar'}>
                <h2 onClick={this. mobileNavbarReveal}>-</h2>
                <h2><Link id='navLink' onClick={this.handleLogoutClick} to='/'>Logout</Link></h2>
                <h2><Link id='navLink' to='/dashboard'>Home</Link></h2>
                <SearchDiv {...this.props} articles={this.props.articles} handleSearchForm={this.props.handleSearchForm} />
                <h2 className="navbarFavorites" onClick={this.favoritesReveal}>Favorites</h2>
      <NavbarFavoritesDiv isActive={this.state.favoritesIsActive} articles={this.props.articles} handleArticleButton={this.props.handleArticleButton} />
      <h2 onClick={this.categoriesReveal} className="navbarFavorites">Categories</h2>
      <NavbarCategoriesDiv isActive={this.state.categoriesIsActive} categories={this.props.categories} />
            </section>
            <section id="desktop-navbar">
                <Link id='navLink' onClick={this.handleLogoutClick} to='/'>Logout</Link>
                <Link id='navLink' to='/dashboard'>Home</Link>

            </section>
            <section id="contenContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ArticleList handleArticleButton={this.props.handleArticleButton} articles={this.props.articles} searchterm={this.props.searchterm} history={this.props.history} /> }} />
                <Route path={'/dashboard/article/:id'} render={(props) => {
                    let articleId = props.match.params.id
                    let articles = this.props.articles
                    let article = (articles.find(a => (a.id == articleId)))
                    return <ArticleView currentArticle={this.props.currentArticle} users={this.props.users} articles={articles} article={article} articleId={articleId} setComment={this.props.setComment} currentUser={this.props.currentUser} handleArticleButton={this.props.handleArticleButton} handleFavoriteButton={() => { this.props.handleFavoriteButton(article) }} />
                }} />
                <Route exact path={'/dashboard/:categoryId'} render={(props) => {
                    return <ArticleList handleArticleButton={this.props.handleArticleButton} categoryId={props.match.params.categoryId} />
                }} />
                <Route exact path={'/dashboard/search/:searchterm'} render={(props) => {
                    return <ArticleList handleArticleButton={this.props.handleArticleButton} searchterm={props.match.params.searchterm} />
                }} />
                <Sidebar {...this.props} handleArticleButton={this.props.handleArticleButton} articles={this.props.articles} handleSearchForm={this.props.handleSearchForm} categories={this.props.categories} />
            </section>
        </section>
        );
    }
}
