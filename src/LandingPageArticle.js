import React from 'react'
import './css/ArticleView.css'



export default class LandingPageArticle extends React.Component {

    render() {
        // id= {this.props.article.id};
        return (
            <section id="lpArticle">
                <h1>Our Latest Post</h1>
                <div id="lpArticleImageContainer"><img id="lpArticleImage" src={this.props.lpArticle.image} /></div>
                <div id="articleText">
                    <h3 id="articleText">{this.props.lpArticle.headline}</h3>
                    <p id="articleText">{this.props.lpArticle.summary}</p>
                </div>
            </section>
        );
    }
}