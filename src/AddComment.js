import React from 'react'
//import './CommentView.css'

export default class AddComment extends React.Component {


    render() {
        return (
            <div id="newComment">
                    <label for="AddComment">Add Comment</label>
                    <input id="addComment" type="text"></input>
                    <div class="button">Submit Button</div>
            </div>
                       );
            }
}