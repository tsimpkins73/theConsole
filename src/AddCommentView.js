
import React from 'react';
import ArticleService from './services/article-service';
//import './CommentView.css'

export default class AddCommentView extends React.Component {
    newComment = event => {
        event.preventDefault();
        const newCommentText = event.currentTarget.addComment.value;
        console.log(this.props.user);
        const userId = this.props.user.id;
        const articleId = this.props.articleId;
        ArticleService.postComment(articleId, newCommentText, userId)
        .then(this.context.addComment)
        .then(() => {
            newCommentText.value = ''
        })
        .catch(this.context.setError)
    }


    render() {
        return (
            <div id="newComment">
                <form onSubmit={this.newComment}>
                    <label for="AddComment">Add Comment</label>
                    <input id={this.props.articleId} name="addComment" type="text"></input>
                    <button>Submit Comment Button</button>
                </form>
            </div>
        );
    }
}