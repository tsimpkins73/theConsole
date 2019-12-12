import React from 'react'
import { Route } from "react-router-dom";
import CommentView from './CommentView.js'
import AddCommentView from './AddCommentView.js'
//import './CommentsList.css'

export default class CommentsList extends React.Component {

 
    
    render() {
        const comments= this.props.articleComments;
        const users= this.props.users; 
        return (
        <div id="articleComments">
            <Route path={'/dashboard/article/:id/comment'} component={AddCommentView} />
            {comments.map(function (comment) {
                    return <CommentView comment={comment} users={users} />;
                })}
            </div>
                           );
            }
}