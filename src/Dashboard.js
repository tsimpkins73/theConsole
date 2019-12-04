import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './css/Dashboard.css'

export default class Dashboard extends React.Component {
    


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section id="navbar"></section>
            <Sidebar articles={this.props.articles} handleSearchForm={this.props.handleSearchForm} categories={this.props.categories} />
            <Route exact path={'/dashboard'} render={(props) => 
                {return <ArticleList articles={this.props.articles} searchTerm={this.props.searchterm} />}} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
                let id = props.match.params.id
                console.log(this.props.articles)
                console.log(id)
                let article = (this.props.articles.find(a => (a.id == id)))
                console.log(article)
                return <ArticleView article={article} articleId={id} user={this.props.user} handleFavoriteButton={() => {this.props.handleFavoriteButton(article)}}  />
            }} />
            <Route exact path={'/dashboard/:categoryId'} render={(props) => {
                    return <ArticleList categoryId={props.match.params.categoryId} />
            }} />
        </section>
        );
    }
}
