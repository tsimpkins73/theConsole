
import React from 'react'
import { Link } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import './ArticleView.css'

export default class ArticleView extends React.Component {


    render() {
        return (
            <div id="article-full-container">
            <section id="article-Full">
        <div id="articleImage"></div>
        <div id="articleText">
          <h3 id="articleText">Article Headline</h3>
          <p id="articleText">Article Text</p>
        </div>
        <div id="articleButtons">
            <button>Favorite Button</button>
            <Link to="/dashboard/article/comment"><button>Comment Button</button></Link>
        </div>
        <CommentsList />
            </section>
            </div>
                );
            }