import React from 'react'
import './css/ArticleView.css'
import { Link } from 'react-router-dom';



export default class ArticlePreview extends React.Component {

    render() {

            return(
            <section id="article">
                <div id="previewImageContainer"><img id="previewImage" src={this.props.article.image} /></div>
                <div id="articleText">
                    <h3 id="articleText">{this.props.article.headline}</h3>
                    <p id="articleText">{this.props.article.summary}</p>
                    <Link to={"/dashboard/article/"+(this.props.article.article_id || this.props.article.id)}><button>View Full Article</button></Link>
                </div>
            </section>
                );
}
}