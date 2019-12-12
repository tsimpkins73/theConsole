
import React from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom';
import CommentsList from './CommentsList.js'
import AddCommentView from './AddCommentView.js'
import './css/ArticleView.css'
import { API_BASE_URL } from './config'

export default class ArticleView extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            articleComments:[]
        };
    }

    getComments = (article_id) => {
        console.log(article_id);
        fetch(`${API_BASE_URL}/comments/${article_id}`)
        .then(response => response.json())
        .then((articleComments) => { this.setState({ articleComments }); });
    }
    

    componentDidMount () {
        if (this.props.article.id){
            
this.getComments(this.props.article.id);
        console.log(this.state.articleComments);
        }
        else{
            this.setState({articleComments:[]})
        }
        console.log(this.state.articleComments)
    }

    render() {
      console.log(this.props.user);
      const user = this.props.user;
        return (
            <div id="article-full-container" >
                <section id="article-Full">
                    <div id="articleImage"><img src={this.props.article.image} /></div>
                    <div id="articleText">
                        <h3 id="articleText">{this.props.article.headline}</h3>
                        <p id="articleText">{this.props.article.text}</p>
                    </div>
                    <div id="articleButtons">
                        <button onClick={this.props.handleFavoriteButton}>Favorite Button</button>
                        <Link to={"/dashboard/article/" + this.props.article.id + "/comment"}><button>Comment Button</button></Link>
                    </div>
                        <Route exact path={`/dashboard/article/${this.props.article.id}/comment`} render={() => <AddCommentView article={this.props.article} articleId={this.props.article.id} getComments={this.getComments} user={user} />
                        } />
                    <CommentsList articleId={this.props.articleId} users={this.props.users} articleComments={this.state.articleComments} />
                </section>
            </div >
        );
    }
}

/* ArticleView.defaultProps = {
    article: {}
} */