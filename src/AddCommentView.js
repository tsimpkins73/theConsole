
import React from 'react';
import ArticleService from './services/article-service';
//import './CommentView.css'

export default class AddCommentView extends React.Component {


    newComment = event => {
        event.preventDefault();
        const text = event.currentTarget.addComment.value;
        const article_id = this.props.articleId;
        const comment = { article_id, text }
        const getInput = document.getElementById("addCommentText");
        ArticleService.postComment(article_id, text)
            .then(this.props.addComment(comment))
            .catch(this.context.setError)
        getInput.value = ''

    }


    render() {
        return (
            <div id="newComment">
                <form onSubmit={this.newComment}>
                    <label for="AddComment">Add Comment</label>
                    <input id="addCommentText" name="addComment" type="text" placeholder=" "></input>
                    <button>Submit Comment</button>
                </form>
            </div>
        );
    }
}