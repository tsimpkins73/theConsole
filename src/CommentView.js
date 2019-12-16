import React from 'react'
//import './CommentView.css'

export default class CommentView extends React.Component {
    render() {
        return (
            <div id="articleComment">
                <p>{this.props.comment.text}</p></div>
        );
    }
}