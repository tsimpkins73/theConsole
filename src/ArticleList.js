import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './css/ArticleList.css'
import { API_BASE_URL } from './config'

export default class ArticleList extends React.Component {
constructor(props){
    super(props);
    this.state= {
        listArticles:[]
    };
}

    componentDidMount () {
        if (this.props.categoryId){
            
            fetch(`${API_BASE_URL}/articles/category/${this.props.categoryId}`)
        .then(response => response.json())
        .then((listArticles) => { this.setState({ listArticles }); });
        }
        else{
            this.setState({listArticles:this.props.articles})
        }
    }

    render() {
        let articles = this.state.listArticles
        if (this.props.searchterm) {
            articles = this.props.articles.filter(article => article.text.indexOf(this.props.searchterm) >= 0)
        }
        console.log(this.props.articles);
        return (
            <section id="ArticleList">
                {articles.map(function (article) {
                    return <ArticlePreview article={article} />;
                })}
            </section>
        );
    }
}