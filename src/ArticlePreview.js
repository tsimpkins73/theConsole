import React from 'react'
import { Link } from 'react-router-dom';
import './ArticleView.css'

export default class ArticlePreview extends React.Component {


    render() {
        return (
            <section id="article">
        <div id="articleImage"></div>
        <div id="articleText">
          <h3 id="articleText">Article Headline</h3>
          <p id="articleText">Article Text</p>
          <Link to="/dashboard/article"><button>View Full Article</button></Link>
        </div>
            </section>
                );
            }
}