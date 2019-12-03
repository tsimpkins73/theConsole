import React from 'react'
//import './CommentView.css'

export default class CommentView extends React.Component {
/*     constructor(props){
        super(props);
        this.state= {
            articleComments:[]
        };
    }
 
    componentDidMount () {
        if (this.props.articleId){
            
            fetch(`${API_BASE_URL}/comments/${this.props.articleId}`)
        .then(response => response.json())
        .then((articleComments) => { this.setState({ articleComments }); });
        console.log(this.state.articleComments);
        }
        else{
            this.setState({articleComments:[]})
        }
        console.log(this.state.articleComments)
    } */

    render() {
        // let user=this.props.users.filter(users.id == this.props.comment.user_id);
        return (
            <div id="articleComment">
                <p>{this.props.comment.text}</p></div>
        );
    }
}