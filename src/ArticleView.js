import ArticleService from './services/article-service';
import React from 'react'
import { Link, Route } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import AddCommentView from './AddCommentView.js'
import './css/ArticleView.css'
import { API_BASE_URL } from './config'

export default class ArticleView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleComments: [],
            articles: [],
            currentArticle: [],
            user: {}
        };
    }

    addComment = comment => {
        const articleComments = [
            ...this.state.articleComments,
            comment
        ]
        this.setState({ articleComments })
        setTimeout(() => {
            const getCommentList = document.getElementById("articleComments");
            getCommentList.scrollIntoView({ block: "end" });
        }, 500);

    }

    getComments = (article_id) => {
        fetch(`${API_BASE_URL}/comments/${article_id}`)
            .then(response => response.json())
            .then((articleComments) => { this.setState({ articleComments }); });
    }

    removeCommentFromState = (commentId) => {
        let articleComments = this.state.articleComments.filter(articleComment => articleComment.id !== commentId)
        this.setState({ articleComments })
    }

    deleteComment = (commentId) => {
        ArticleService.deleteComment(commentId)
            .then(this.removeCommentFromState(commentId))
            .catch(this.context.setError)
    }



    componentDidMount() {
        if (this.props.articleId) {
            let currentArticle = this.props.currentArticle
            let user = this.props.user;
            this.setState({ user: user });
            this.setState({ currentArticle: currentArticle });
            this.getComments(this.props.articleId);

        }
        else {
            this.setState({ articleComments: [] })
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.articleId !== this.props.articleId) {
            let currentArticle = newProps.currentArticle
            this.setState({ currentArticle: currentArticle });
            this.getComments(newProps.articleId);
        }

        /*     else {
                let currentArticle = this.props.currentArticle 
                this.setState({ currentArticle: currentArticle });
                this.setState({ articleComments: [] })
            } */
    }

    render() {
        let user = this.state.user;
        let article = this.state.currentArticle;
        if (!this.state.currentArticle.id) { article = this.props.article || {} }
        return (
            <div id="article-full-container" >
                <section id="article-Full">
                    <div id="articleImage"><img id="previewImage" alt={"Headline Image for " + article.headline} src={article.image} /></div>
                    <div id="articleText">
                        <h3 id="articleText">{article.headline}</h3>
                        <p id="articleText">{article.text}</p>
                    </div>
                    <div id="articleButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite</button>
                        <Link to={"/dashboard/article/" + article.id + "/comment"}><button>Add Comment</button></Link>
                    </div>
                    <Route exact path={`/dashboard/article/${article.id}/comment`} render={() => <AddCommentView addComment={this.addComment} article={this.props.article} articleId={this.props.article.id} getComments={this.getComments} user={user} />} />
                    <CommentsList articleId={this.props.articleId} users={this.props.users} articleComments={this.state.articleComments} currentUser={this.props.currentUser} deleteComment={this.deleteComment} />
                </section>
            </div >
        );
    }
}
