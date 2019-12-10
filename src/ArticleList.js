import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './css/ArticleList.css'
import { API_BASE_URL } from './config'

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            categoryId: null,
        };
    }

    fetchData(categoryId) {
        fetch(`${API_BASE_URL}/articles/category/${categoryId}`)
            .then(response => response.json())
            .then((articles) => { this.setState({ articles, categoryId: this.props.categoryId }); });
    }

fetchSearchArticles() {
    let searchArticles = this.props.articles.filter(article => article.text.indexOf(this.props.searchterm) >= 0);
    this.setState({ articles:searchArticles });
}    

    componentDidMount() {
        if (this.props.categoryId) {
            this.fetchData(this.props.categoryId);
        }
        else if (this.props.searchTerm) {
            this.fetchSearchArticles();
        }
        else {
            this.setState({ articles: this.props.articles })
        }
    }
    componentDidUpdate() {
        if (this.props.categoryId && this.state.categoryId !== this.props.categoryId) {
            this.fetchData(this.props.categoryId);
        }
    }

    render() {
        let articles = this.state.articles;
        return (
            <section id="ArticleList">
                {articles.map(function (article) {
                    return <ArticlePreview article={article} />;
                })}
            </section>
        );
    }
}