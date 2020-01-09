import React from 'react'
import { Route, Link, } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './css/Dashboard.css'
import TokenService from './services/token-service'

export default class Dashboard extends React.Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.props.clearUser();
    }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section id="navbar">
                <Link id='navLink' onClick={this.handleLogoutClick} to='/'>
                    Logout
        </Link>
                <Link id='navLink' to='/dashboard'>
                    Home
        </Link>

            </section><section id="contenContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ArticleList handleArticleButton={this.props.handleArticleButton} articles={this.props.articles} searchterm={this.props.searchterm} history={this.props.history} /> }} />
                <Route path={'/dashboard/article/:id'} render={(props) => {
                    let articleId = props.match.params.id
                    let articles = this.props.articles
                    let article = (articles.find(a => (a.id == articleId)))
                    console.log(article);
                    console.log(articles);
                    console.log(articleId);
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
