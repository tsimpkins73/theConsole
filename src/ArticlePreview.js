import React from 'react'
import './css/ArticleView.css'
import { Link } from 'react-router-dom';



export default class ArticlePreview extends React.Component {

    render() {
let article= this.props.article
let handleArticleButton = this.props.handleArticleButton
            return(
            <section id="article">
                <div id="previewImageContainer"><img id="previewImage" alt={"Headline Image for " + article.headline} src={article.image} /></div>
                <div id="articleText">
                    <h3 id="articleText">{article.headline}</h3>
                    <p id="articleText">{article.summary}</p>
                    <Link to={"/dashboard/article/"+(article.article_id || article.id)}><button onClick={() => {this.props.handleArticleButton(article.article_id || article.id)}}>View Full Article</button></Link>
                </div>
            </section>
                );
}
}