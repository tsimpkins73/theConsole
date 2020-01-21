import React from 'react'
//import './CommentView.css'

export default class CommentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            userId: {},
            currentUserId: {}
        };
    }

    setValues = () => {

        let users = this.props.users;
        if (users) {
            let user = users.find(user => (user.id === this.props.comment.user_id));
            let userId = this.props.comment.user_id
            if (this.props.currentUser) {
                let currentUserId = this.props.currentUser.id
                this.setState({ user: user });
                this.setState({ userId: userId });
                this.setState({ currentUserId: currentUserId });
            }
            else {
                let currentUserId = {}
                this.setState({ user: user });
                this.setState({ userId: userId });
                this.setState({ currentUserId: currentUserId });
            }
        }
    }


    componentDidMount() {
        this.setValues();
    }

    componentWillReceiveProps() {
        this.setValues();
    }


    render() {
        let users = this.props.users;
        let user = users.find(user => (user.id === this.props.comment.user_id)) || {};
        let userId = this.state.userId
        let currentUserId = this.state.currentUserId;
        let comment = this.props.comment
        let deleteComment= this.props.deleteComment
        
        if (userId === currentUserId) {
            return (
                <div id="commentContainer">
                    <div id="articleComment">
                        <div className="commentContent">
                            <div className="commenterName"><h1 className="commentOwner">{user.name}</h1></div>
                            <div className="commentText"><p>{comment.text}</p></div>
                        </div>
                        <div className="deleteComment">
                            <button className="deleteCommentButton" onClick={() => { deleteComment(comment.id) }}>X</button>
                        </div>

                    </div>
                </div>


            );
        }

        return (
            <div id="commentContainer">
                <div id="articleComment">
                    <div className="commentContent">
                        <div className="commenterName"><h1 className="commentOwner">{user.name}</h1></div>
                        <div className="commentText"><p>{comment.text}</p></div>
                    </div>
                    <div className="deleteComment">

                    </div>

                </div>
            </div>
        );
    }

}