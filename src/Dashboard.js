import React from 'react'
import { Route, Link, } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './css/Dashboard.css'

export default class Dashboard extends React.Component {
    handleLogoutClick = () => {
    }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section id="navbar"><Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
        </Link>
                <Link
                    to='/register'>
                    Register
        </Link>
            
                <Link
                    to='/login'>
                    Log in
        </Link>
            </section>
            <Sidebar {...this.props} articles={this.props.articles} handleSearchForm={this.props.handleSearchForm} categories={this.props.categories} />
            <Route exact path={'/dashboard'} render={(props) => { return <ArticleList articles={this.props.articles} searchterm={this.props.searchterm} history={this.props.history} /> }} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
                let articleId = props.match.params.id
                let article = (this.props.articles.find(a => (a.id == articleId)))
                return <ArticleView article={article} articleId={articleId} setComment={this.props.setComment} user={this.props.user} handleFavoriteButton={() => { this.props.handleFavoriteButton(article) }} />
            }} />
            <Route exact path={'/dashboard/:categoryId'} render={(props) => {
                return <ArticleList categoryId={props.match.params.categoryId} />
            }} />
            <Route exact path={'/dashboard/search/:searchterm'} render={(props) => {
                return <ArticleList searchterm={props.match.params.searchterm} />
            }} />
        </section>
        );
    }
}
