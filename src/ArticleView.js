
import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import AddCommentView from './AddCommentView.js'
import './css/ArticleView.css'

export default class ArticleView extends React.Component {


    render() {
      console.log(this.props.user);
       /*    const commentsArray = this.props.comments;
        const articleComments = commentsArray.filter(comment => comment.articleId == this.props.article.id); */
        return (
            <div id="article-full-container" >
                <section id="article-Full">
                    <div id="articleImage"><img src={this.props.article.image} /></div>
                    <div id="articleText">
                        <h3 id="articleText">{this.props.article.headline}</h3>
                        <p id="articleText">{this.props.article.text}</p>
                    </div>
                    <div id="articleButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                        <Link to={"/dashboard/article/" + this.props.article.id + "/comment"}><button>Comment Button</button></Link>
                    </div>
                    <BrowserRouter>
                        <Route exact path={`/dashboard/article/${this.props.article.id}/comment`} component={() => <AddCommentView article={this.props.article} user={this.props.user} />
                        } />
                    </BrowserRouter>
                    <CommentsList articleId={this.props.articleId} users={this.props.users} />
                </section>
            </div >
        );
    }
}

/* ArticleView.defaultProps = {
    article: {}
} */