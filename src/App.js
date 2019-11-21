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
        lpArticle: []
    };
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



  handleLPArticle = (lpArticle) => {
    this.setState({lpArticle: lpArticle});
    return this.state.lpArticle;
}
  render() {
 console.log(this.state.lpArticle)
  return (
    <main className='App'>
      <BrowserRouter>
        <Route exact path={'/'} render ={(props) => <LandingPage lpArticle={this.state.articles[0]} />} />
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/sign-up'} component={SignUpForm} />
        <Route path={'/forgot-password'} component={ForgotPasswordForm} />
        <Route path={'/dashboard'} render ={(props) => <Dashboard articles={this.state.articles} categories={this.state.categories} />} />
      </BrowserRouter>
    </main>
  );
}
}
