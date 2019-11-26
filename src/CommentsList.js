import React from 'react'
import { Route } from "react-router-dom";
import CommentView from './CommentView.js'
import AddCommentView from './AddCommentView.js'
import { API_BASE_URL } from './config'
//import './CommentsList.css'

export default class CommentsList extends React.Component {
    componentDidMount () {
        if (this.props.articleId){
            
            fetch(`${API_BASE_URL}/comments/${this.props.articleId}`)
        .then(response => response.json())
        .then((articleComments) => { this.setState({ articleComments }); });
        }
        else{
            this.setState({articleComments:[]})
        }
        console.log(this.state.articleComments)
    }

    render() {
        const comments= this.state.articleComments;
        return (
        <div id="articleComments">
            <Route path={'/dashboard/article/:id/comment'} component={AddCommentView} />
            {comments.map(function (comment) {
                    return <CommentView comment={comment} />;
                })}
            </div>
                           );
            }
}