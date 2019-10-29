
import React from 'react'
//import './CommentView.css'

export default class AddCommentView extends React.Component {
    newComment = event => {
        event.preventDefault();
        const newComment = event.currentTarget.addComment.value;
        console.log(newComment)
    }


    render() {
        return (
            <div id="newComment">
                <form onSubmit={this.newComment}>
                    <label for="AddComment">Add Comment</label>
                    <input id="addComment" name="addComment" type="text"></input>
                    <button>Submit Comment Button</button>
                </form>
            </div>
        );
    }
}