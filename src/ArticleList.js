import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './ArticleList.css'

export default class ArticleList extends React.Component {


    render() {
        return (
            <section id="ArticleList">
                {this.props.articles.map(function(article){
                    return <ArticlePreview article={article}/>;
                })}
                </section>
                );
            }
}