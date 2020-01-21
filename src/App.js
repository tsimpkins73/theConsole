import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'
import { API_BASE_URL } from './config'



export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      articles: [],
      categories: [],
      currentArticle: [],
      lpArticle: {},
      categoryArticles: [],
      searchterm: '',
      searchArticles: [],
      currentUser: {},
      users: [],
      currentArticle: {}
    };
  }



  clearUser = () => {
    this.setState({ currentUser: {} });
    localStorage["user"] = 'null';
  }


  handleFavoriteButton = (article) => {
    article.favorite = !article.favorite;
    this.setState({
      articles: this.state.articles
    });
  }

  handleArticleButton = (article_id) => {
    let articleId = article_id
    let articles = this.state.articles
    let article = (articles.find(a => (a.id == articleId)))
    this.setState({ currentArticle: article });
  }

  handleSearchForm = (event) => {
    event.preventDefault();
    const term = event.currentTarget.searchTerm.value;
    this.setState({
      searchterm: term
    });
  }

  onLoginSuccess = (username) => {
    fetch(`${API_BASE_URL}/users/${username}`)
      .then(response => response.json())
      .then((currentUser) => {
        this.setState({ currentUser });
        localStorage["user"] = JSON.stringify(currentUser)
      });
  }

  getArticlesByCategory = (category) => {
    let selectedCategory = this.state.categories.find(c => (c.name === category))
    let categoryID = selectedCategory.id
    fetch(`${API_BASE_URL}/articles/category/${categoryID}`)
      .then(response => response.json())
      .then((categoryArticles) => { this.setState({ categoryArticles }); });
  }

  getArticles() {
    fetch(`${API_BASE_URL}/articles`)
      .then(response => response.json())
      .then((articles) => { this.setState({ articles }); });
  }
  getCategories() {
    fetch(`${API_BASE_URL}/categories`)
      .then(response => response.json())
      .then((categories) => { this.setState({ categories }); });
  }

  getUsers() {
    fetch(`${API_BASE_URL}/users`)
      .then(response => response.json())
      .then((users) => { this.setState({ users }); });
  }

  componentDidMount() {
    this.getArticles();
    this.getCategories();
    this.getUsers();
    if (localStorage["user"]) {
      const user = JSON.parse(localStorage["user"]);
      this.setState({ currentUser: user });
    }
  }

  render() {
    const lpArticle = this.state.articles[0];
    return (
      <main className='App'>
        <BrowserRouter>
          <Route exact path={'/'} render={() => <LandingPage lpArticle={lpArticle} />} />
          <Route path={'/login'} render={(props) => <LoginForm onLoginSuccess={this.onLoginSuccess} {...props} />} />
          <Route path={'/sign-up'} component={SignUpForm} />
          <Route path={'/dashboard'} render={(props) => <Dashboard {...props} handleArticleButton={this.handleArticleButton} users={this.state.users} articles={this.state.articles} setComment={this.setComment} searchterm={this.state.searchterm} currentUser={this.state.currentUser} categories={this.state.categories} handleSearchForm={this.handleSearchForm} handleFavoriteButton={this.handleFavoriteButton} clearUser={this.clearUser} currentArticle={this.state.currentArticle} />} />
        </BrowserRouter>
      </main>
    );
  }
}
