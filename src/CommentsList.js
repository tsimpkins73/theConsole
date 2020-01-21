import React from 'react'
import CommentView from './CommentView.js'

export default class CommentsList extends React.Component {
    static defaultProps = {
        articleComments: []
    }



    render() {
        let comments = this.props.articleComments;
        let users = this.props.users;
        let currentUser = this.props.currentUser;
        let deleteComment = this.props.deleteComment;
        return (
            <div id="articleComments">
                {comments.map(function (comment) {
                    return <CommentView comment={comment} users={users} currentUser={currentUser} deleteComment={deleteComment} />;
                })}
            </div>
        );
    }
}