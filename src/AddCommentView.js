
import React from 'react';
import ArticleService from './services/article-service';
//import './CommentView.css'

export default class AddCommentView extends React.Component {
    

    newComment = event => {
        event.preventDefault();
        const text = event.currentTarget.addComment.value;
        const article_id = this.props.articleId;
        const comment = {article_id, text}
        ArticleService.postComment(article_id, text)
        .then(this.props.addComment(comment))
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