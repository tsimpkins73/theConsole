import React from 'react'
//import './ArticleView.css'

export default class ArticleView extends React.Component {


    render() {
        return (
            <section id="article-Full">
        <div id="articleImage"></div>
        <div id="articleText-Full">
          <h3>Article Headline</h3>
          <p>Article Text</p>
        </div>
        <div id="articleButtons">
            <div class="button">Favorite Button</div>
<div class="button">Comment Button</div>
        </div>
        <div id="articleComments">
            <div id="articleComment">Comment</div>
            <div id="articleComment">Comment</div>
            <div id="articleComment">Comment</div>
            </div>
            </section>
                );
            }
}