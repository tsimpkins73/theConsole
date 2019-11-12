
import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import AddCommentView from './AddCommentView.js'
import './ArticleView.css'

export default class ArticleView extends React.Component {



    render(responseJson) {
        return (
            <div id="article-full-container" >
                <section id="article-Full">
                    <div id="articleImage">{responseJson.image}</div>
                    <div id="articleText">
                        <h3 id="articleText">{responseJson.headline}</h3>
                        <p id="articleText">{responseJson.text}</p>
                    </div>
                    <div id="articleButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                        <Link to={"/dashboard/article/" + responseJson.id + "/comment"}><button>Comment Button</button></Link>
                    </div>
                    <BrowserRouter>
                    <Route exact path={`/dashboard/article/${responseJson.id}/comment`} component={() => <AddCommentView articles={this.state.articles}/>
                } />
                </BrowserRouter>
                    <CommentsList />
                </section>
            </div >
        );
    }
}

ArticleView.defaultProps = {
    article: {}
}