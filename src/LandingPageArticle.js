import React from 'react'
import './css/ArticleView.css'
import { Link } from 'react-router-dom';
import { API_BASE_URL } from './config'



export default class LandingPageArticle extends React.Component {

    render() {
        // id= {this.props.article.id};
        return (
            <section id="lpArticle">
                <div id="lpArticleImageContainer"><img id="lpArticleImage" src={this.props.lpArticle.image} /></div>
                <div id="articleText">
                    <h3 id="articleText">{this.props.lpArticle.headline}</h3>
                    <p id="articleText">{this.props.lpArticle.summary}</p>
                </div>
            </section>
        );
    }
}