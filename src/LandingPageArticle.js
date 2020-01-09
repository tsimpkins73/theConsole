import React from 'react'
import './css/ArticleView.css'



export default class LandingPageArticle extends React.Component {

    render() {
        let lpArticle= this.props.lpArticle
        return (
            <section id="lpArticle">
                <h1>Our Latest Post</h1>
                <div id="lpArticleImageContainer"><img id="lpArticleImage"  alt={"Headline Image for " + lpArticle.headline} src={lpArticle.image} /></div>
                <div id="articleText">
                    <h3 id="articleText">{lpArticle.headline}</h3>
                    <p id="articleText">{lpArticle.summary}</p>
                </div>
            </section>
        );
    }
}