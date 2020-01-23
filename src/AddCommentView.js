import React from 'react';
import ArticleService from './services/article-service';

export default class AddCommentView extends React.Component {

/* This function adds the comment to the database and then runs a function to refresh the state with comments and scroll to the newest comment. */
    newComment = event => {
        event.preventDefault();
        const text = event.currentTarget.addComment.value;
        const article_id = this.props.articleId;
        const user_id = this.props.currentUser.id
        const comment = { article_id, text }
        const getInput = document.getElementById("addCommentText");
        ArticleService.postComment(article_id, text, user_id)
            .then(() => this.props.getComments(article_id))
            .then(this.props.addComment())
            .catch(this.context.setError)
        getInput.value = ''
    }


    render() {
        return (
            <div id="newComment">
                <form onSubmit={this.newComment}>
                    <label htmlFor="AddComment">Add Comment</label>
                    <input id="addCommentText" name="addComment" type="text" placeholder=" "></input>
                    <button>Submit Comment</button>
                </form>
            </div>
        );
    }
}