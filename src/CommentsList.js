import React from 'react'
import { Route } from "react-router-dom";
import CommentView from './CommentView.js'
import AddCommentView from './AddCommentView.js'
//import './CommentsList.css'

export default class CommentsList extends React.Component {


    render() {
        return (
        <div id="articleComments">
            <Route path={'/dashboard/article/:id/comment'} component={AddCommentView} />
            <CommentView />
            <CommentView />
            <CommentView />
            </div>
                           );
            }
}