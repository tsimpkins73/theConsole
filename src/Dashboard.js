import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './css/Dashboard.css'
import { API_BASE_URL } from './config'

export default class Dashboard extends React.Component {
    

    handleFavoriteButton = (article) => {
        article.favorite = !article.favorite
        this.setState({
            articles: this.state.articles
        })
    }


    getLPArticle = () => {
        const lpArticle = this.state.articles[0];
        console.log(lpArticle)
        this.props.handleLPArticle(lpArticle);
    }

    handleSearchForm = (event) => {
        event.preventDefault()
        const term = event.currentTarget.searchTerm.value
        this.setState({
            searchterm: term
        })
        console.log(this.state.searchterm)
    }

    getArticlesByCategory = (category) => {
        let selectedCategory = this.state.categories.find(c => (c.name == category))
        let categoryID= selectedCategory.id
        fetch(`${API_BASE_URL}/articles/{category}`)
            .then(response => response.json())
            .then((articles) => { this.setState({ articles }); });

    }

    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section id="navbar"></section>
            <Sidebar articles={this.props.articles} handleSearchForm={this.handleSearchForm} categories={this.props.categories} />
            <Route exact path={'/dashboard'} component={() => <ArticleList articles={this.props.articles} searchTerm={this.searchterm} />} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
                let id = props.match.params.id
                console.log(this.props.articles)
                console.log(id)
                let article = (this.props.articles.find(a => (a.id == id)))
                console.log(article)
                return <ArticleView article={article} handleFavoriteButton={() => this.handleFavoriteButton(article)} />
            }} />
            <Route exact path={'/dashboard/:categoryId'} render={(props) => {
                    return <ArticleList searchTerm={this.searchterm} categoryId={props.match.params.categoryId} />
            }} />
        </section>
        );
    }
}
