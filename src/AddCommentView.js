
import React from 'react';
import ArticleService from './services/article-service';
//import './CommentView.css'

export default class AddCommentView extends React.Component {
    

    newComment = event => {
        event.preventDefault();
        const newCommentText = event.currentTarget.addComment.value;
        const article_id = this.props.articleId;
        console.log(article_id);
        ArticleService.postComment(article_id, newCommentText)
        .then(this.props.getComments(article_id))
        .catch(this.context.setError)
        window.location.reload(false);
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