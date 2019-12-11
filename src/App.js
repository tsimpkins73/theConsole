import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'
import ForgotPasswordForm from './ForgotPasswordForm.js'
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
      user: {},
      allUsers: [],
    };
  }

  setComment= (comment) => {
    this.setState([
      ...this.state.comments,
      comment
    ])
  }


  handleFavoriteButton = (article) => {
    article.favorite = !article.favorite
    this.setState({
      articles: this.state.articles
    })
  }

  handleSearchForm = (event) => {
    event.preventDefault()
    const term = event.currentTarget.searchTerm.value
    console.log(term)
    this.setState({
      searchterm: term
    })
  }

  onLoginSuccess = (username) => {
    console.log(username)
    fetch(`${API_BASE_URL}/users/${username}`)
      .then(response => response.json())
      .then((user) => {
        this.setState({ user });
      });
    console.log(this.state.user)
  }

  getArticlesByCategory = (category) => {
    let selectedCategory = this.state.categories.find(c => (c.name == category))
    let categoryID = selectedCategory.id
    fetch(`${API_BASE_URL}/articles/category/${categoryID}`)
      .then(response => response.json())
      .then((categoryArticles) => { this.setState({ categoryArticles }); });
    console.log(this.state.categoryArticles)
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/articles`)
      .then(response => response.json())
      .then((articles) => { this.setState({ articles }); });
    console.log(this.state.articles)
    fetch(`${API_BASE_URL}/categories`)
      .then(response => response.json())
      .then((categories) => { this.setState({ categories }); });
    console.log(this.state.categories)
  }


  render() {
    const lpArticle = this.state.articles[0];
    console.log(lpArticle)
    return (
      <main className='App'>
        <BrowserRouter>
          <Route exact path={'/'} render={() => <LandingPage lpArticle={lpArticle} />} />
          <Route path={'/login'} render={(props) => <LoginForm onLoginSuccess={this.onLoginSuccess} {...props} />} />
          <Route path={'/sign-up'} component={SignUpForm} />
          <Route path={'/forgot-password'} component={ForgotPasswordForm} />
          <Route path={'/dashboard'} render={() => <Dashboard articles={this.state.articles} setComment={this.setComment} searchTerm={this.state.searchterm} user={this.state.user} categories={this.state.categories} handleSearchForm={this.handleSearchForm} handleFavoriteButton={this.handleFavoriteButton} user={this.state.user} />} />
        </BrowserRouter>
      </main>
    );
  }
}
