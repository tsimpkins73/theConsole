import React from 'react'
import CommentsList from './CommentsList.js'
import './ArticleView.css'

export default class ArticleView extends React.Component {


    render() {
        return (
            <section id="article-Full">
        <div id="articleImage"></div>
        <div id="articleText">
          <h3 id="articleText">Article Headline</h3>
          <p id="articleText">Article Text</p>
        </div>
        <div id="articleButtons">
            <div class="button">Favorite Button</div>
<div class="button">Comment Button</div>
        </div>
        <CommentsList />
            </section>
                );
            }
}