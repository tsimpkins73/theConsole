import React from 'react'
import './ArticleView.css'

export default class ArticlePreview extends React.Component {


    render() {
        return (
            <section id="article">
        <div id="articleImage"></div>
        <div id="articleText">
          <h3 id="articleText">Article Headline</h3>
          <p id="articleText">Article Text</p>
          <button>View Full Article</button>
        </div>
            </section>
                );
            }
}