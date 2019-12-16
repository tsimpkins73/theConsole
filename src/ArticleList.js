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
            .then((articles) => { this.setState({ articles, categoryId: categoryId }); });
    }

fetchSearchArticles(searchterm) {
    let searchArticles = this.props.articles.filter(article => article.text.indexOf(searchterm) >= 0);
    this.setState({ articles: searchArticles });
    this.props.history.push('/dashboard');
}    

    componentDidMount() {
        if (this.props.categoryId) {
            this.fetchData(this.props.categoryId);
        }
        else{
            this.setState({articles: this.props.articles});
        }
    }
    
    componentWillReceiveProps(newProps){
        if (newProps.categoryId !== this.props.categoryId) {
            this.fetchData(newProps.categoryId);
        }        
        if (newProps.articles !== this.props.articles){
            this.setState({articles: newProps.articles})
        }
     if (this.props.searchterm !== newProps.searchterm) {
            this.fetchSearchArticles(newProps.searchterm);
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