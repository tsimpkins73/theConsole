import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './css/Dashboard.css'
import { API_BASE_URL } from './config'

export default class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            articles: [],
            categories: [],
            currentArticle: [],
            lpArticle: []
        };
    }


    componentWillMount() {
        fetch(`${API_BASE_URL}/categories`)
            .then(response => response.json())
            .then((categories) => { this.setState({ categories }); });
        console.log(this.state.categories)
    }

    componentDidMount() {
        fetch(`${API_BASE_URL}/articles`)
            .then(response => response.json())
            .then((articles) => { this.setState({ articles }); });
        console.log(this.state.articles)
        console.log(API_BASE_URL)
    }


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

    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="headerTitle">theConsole</h1></section>
            <section id="navbar"></section>
            <Sidebar articles={this.state.articles} handleSearchForm={this.handleSearchForm} categories={this.state.categories} />
            <Route exact path={'/dashboard'} component={() => <ArticleList articles={this.state.articles} searchTerm={this.searchterm} />} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
                let id = props.match.params.id
                console.log(this.state.articles)
                console.log(id)
                let article = (this.state.articles.find(a => (a.id == id)))
                console.log(article)
                return <ArticleView article={article} handleFavoriteButton={() => this.handleFavoriteButton(article)} />
            }} />
            <Route exact path={'/dashboard/:category'} render={(props) => {
                let categoryID = this.state.categories.find(category => (category.name == props.match.params.category))

                return <ArticleList articles={this.state.articles} searchTerm={this.searchterm} />
            }} />
        </section>
        );
    }
}
