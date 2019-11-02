import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                { id: "1", headline: "a string", summary: "Article 1 summary is a summary iof article 1. This will hold a small snippet of the article's text", text: "", comments: [""], categories: ["Tutorial"], image: "IMAGE 1 URL", favorite: false },
                { id: "2", headline: "another string", summary: "Article 2 summary is a summary iof article 2. This will hold a small snippet of the article's text", text: "", comments: [""], categories: ["News", "New Technology"], image: "IMAGE 2 URL", favorite: true },
                { id: "3", headline: "a string", summary: "Article 3 summary is a summary iof article 3. This will hold a small snippet of the article's text", text: "", comments: [""], categories: ["Tutorial"], image: "IMAGE 3 URL", favorite: true },
            ],

        };
    }

    handleFavoriteButton = (article) => {
       article.favorite = !article.favorite
        this.setState({
            articles: this.state.articles
        })
    }

    handleSearchForm = (event) => {
        event.preventDefault()
        const term = event.currentTarget.searchTerm.value
        this.setState({
            searchterm: term
        })
        console.log(this.state.searchterm)
    }

    render() {
        return (<section id="dashboardContainer">
            <section id="Header">Header</section>
            <section id="navbar"></section>
            <Sidebar articles={this.state.articles} handleSearchForm={this.handleSearchForm} />
            <Route exact path={'/dashboard'} component={() => <ArticleList articles={this.state.articles} searchTerm={this.state.searchterm} />} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
                let article = (this.state.articles.find(a => a.id === props.match.params.id));
                console.log(article)
                return <ArticleView article={article} handleFavoriteButton= {() => this.handleFavoriteButton(article)} />
            }} />
        </section>
        );
    }
}
