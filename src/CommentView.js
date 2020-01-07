import React from 'react'
//import './CommentView.css'

export default class CommentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userId: [],
            currentUserId: []
        };
    }

    setValues = () => {
        let users = this.props.users;
        let user = users.filter(user => (user.id === this.props.comment.user_id));
        let userId = this.props.comment.user_id
        let currentUserId = this.props.currentUser.id
        this.setState({ user: user });
        this.setState({ userId: userId });
        this.setState({ currentUserId: currentUserId });
    }


    componentDidMount() {
        this.setValues();
    }


    render() {
        let user = this.state.user
        let userId = this.state.userId
        let currentUserId = this.state.currentUserId
        let comment = this.props.comment
        let deleteComment= this.props.deleteComment
        console.log(user)

        if (userId === currentUserId) {
            return (
                <div id="commentContainer">
                    <div id="articleComment">
                        <div class="commentContent">
                            <div class="commenterName"><h1 class="commentOwner">{user.name}</h1></div>
                            <div class="commentText"><p>{comment.text}</p></div>
                        </div>
                        <div class="deleteComment">
                            <button class="deleteCommentButton" onClick={() => { deleteComment(comment.id) }}>X</button>
                        </div>

                    </div>
                </div>


            );
        }

        return (
            <div id="commentContainer">
                <div id="articleComment">
                    <div class="commentContent">
                        <div class="commenterName"><h1 class="commentOwner">{user.name}</h1></div>
                        <div class="commentText"><p>{comment.text}</p></div>
                    </div>
                    <div class="deleteComment">

                    </div>

                </div>
            </div>
        );
    }

}