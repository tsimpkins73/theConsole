import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'
import ForgotPasswordForm from './ForgotPasswordForm.js'



export default class App extends React.Component {
  constructor(props) 
    { 
        super(props); 
        this.state = { lpArticle: "" }; 
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
        <Route exact path={'/'} component={LandingPage} lpArticle={this.state.lpArticle}/>
        <Route path={'/login'} component={LoginForm} />
        <Route path={'/sign-up'} component={SignUpForm} />
        <Route path={'/forgot-password'} component={ForgotPasswordForm} />
        <Route path={'/dashboard'} component={Dashboard} lpArticle={this.handleLPArticle}/>
      </BrowserRouter>
    </main>
  );
}
}
