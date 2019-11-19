import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './css/ArticleList.css'

export default class ArticleList extends React.Component {
    

    render() {
        let articles = this.props.articles
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