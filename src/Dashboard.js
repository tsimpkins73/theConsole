import React from 'react'
import { Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './Dashboard.css'
import {API_BASE_URL} from './config'

export default class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          articles: [],
        };
      }
    
      componentDidMount() {
        fetch(`${API_BASE_URL}/articles`)
          .then(response => response.json())
          .then((articles) => { this.setState({ articles }); });
      }
    
      
    /* allArticles = () => dispatch => {
        fetch(`${API_BASE_URL}/articles`).then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(response => response.json())
        .then(responseJson => this.render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    };

    
    articleByID = (id) => dispatch => {
        fetch(`${API_BASE_URL}/articles/${id}`).then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        }).then(response => response.json())
        .then(responseJson => this.render(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    };
 */
    handleFavoriteButton = (article) => {
       article.favorite = !article.favorite
        this.setState({
            articles: this.state.articles
        })
    }

    handleSearchForm = (event) => {
        event.preventDefault()
        const term = event.currentTarget.searchTerm.value
        this.setState({
            searchterm: term
        })
        console.log(this.state.searchterm)
    }

    render() {
        return (<section id="dashboardContainer">
            <section id="Header">Header</section>
            <section id="navbar"></section>
            <Sidebar articles={this.state.articles} handleSearchForm={this.handleSearchForm} />
            <Route exact path={'/dashboard'} component={() => <ArticleList articles={this.state.articles} searchTerm={this.searchterm} />} />
            <Route path={'/dashboard/article/:id'} render={(props) => {
   let article = (this.state.articles.find(a => a.id === props.match.params.id));
                console.log(article)
                return <ArticleView article={article} handleFavoriteButton= {() => this.handleFavoriteButton(article)} />
            }} />
        </section>
        );
    }
}
