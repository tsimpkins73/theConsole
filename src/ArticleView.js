
import React from 'react'
import { Link } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import './ArticleView.css'

export default class ArticleView extends React.Component {


    render() {
               console.log(this.props.article)

        return (
            <div id="article-full-container">
            <section id="article-Full">
        <div id="articleImage">{this.props.article.image}</div>
        <div id="articleText">
          <h3 id="articleText">{this.props.article.headline}</h3>
          <p id="articleText">{this.props.article.text}</p>
        </div>
        <div id="articleButtons">
            <button>Favorite Button</button>
            <Link to={"/dashboard/article/"+this.props.article.id+"/comment"}><button>Comment Button</button></Link>
        </div>
        <CommentsList />
            </section>
            </div>
                );
            }
        }

        ArticleView.defaultProps={
            article:{}
        }