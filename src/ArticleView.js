import React from 'react'
import CommentsList from './CommentsList.js'
import './ArticleView.css'


export default class ArticleView extends React.Component {


    render() {
        return (
            <section id="article-full-container"><section id="article-Full">
        <div id="articleImage"></div>
        <div id="articleText">
          <h3 id="articleText">Article Headline</h3>
          <p id="articleText">Article Text
          
          
          ....
          
          ....
          </p>
          <div id="articleButtons">
            <button>Favorite Button</button>
<button>Comment Button</button>
        </div>
        </div>
        <CommentsList />
            </section>
            </section>
                );
            }
            
}
