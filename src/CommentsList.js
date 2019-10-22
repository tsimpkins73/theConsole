import React from 'react'
import CommentView from './CommentView.js'
//import './CommentsList.css'

export default class CommentsList extends React.Component {


    render() {
        return (
        <div id="articleComments">
            <CommentView />
            <CommentView />
            <CommentView />
            </div>
                           );
            }
}