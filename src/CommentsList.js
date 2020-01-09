import React from 'react'
import CommentView from './CommentView.js'
//import './CommentsList.css'

export default class CommentsList extends React.Component {

 
    
    render() {
        const comments= this.props.articleComments;
        let users= this.props.users; 
        const currentUser = this.props.currentUser;
        const deleteComment = this.props.deleteComment;
        return (
        <div id="articleComments">
            {comments.map(function (comment) {
                    return <CommentView  comment={comment} users={users} currentUser={currentUser} deleteComment={deleteComment} />;
                })}
            </div>
                           );
            }
}