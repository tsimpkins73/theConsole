import React from 'react'
import { Link } from 'react-router-dom';
//import './CommentView.css'

export default class AddCommentView extends React.Component {


    render() {
        return (
            <div id="newComment">
                    <label for="AddComment">Add Comment</label>
                    <input id="addComment" type="text"></input>
                    <Link to="/dashboard/article"><button>Submit Comment Button</button></Link>
            </div>
                       );
            }
}