import React from 'react'
import './css/LoginForm.css'
import { Link } from 'react-router-dom';
import UserService from './services/user-service'

export default class LoginForm extends React.Component {
  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target

    UserService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.props.onLoginSuccess(res.username)
        this.props.history.push('/dashboard')
      })
      .catch(res => {
        this.setState({ error: res.error })

      })
  }


  render() {


    return (
      <section className="LandingContainer">
        <div className="LoginForm" >
          <div className="loginFormHeader">
            <h1 className="lpHeaderText"> Welcome, Please Sign In! </h1>
            <p> Guests, please login with
           Username: GenBlanc and Password: Password34!</p>
          </div>
          <form onSubmit={this.handleSubmitJwtAuth} className='RegistrationForm' >
            <div className='formLine'>
              <label htmlFor="username" > Username </label>
              <input type="text" name="username" />
            </div>
            <div className='formLine'>
              <label htmlFor="password" > Password </label>
              <input type="password" name="password" />
              <br />
            </div>
            <div className='signupButtons'>
              <button className="lpButton" >Submit</button>
              <Link to="/sign-up"><button className="lpButton" >Sign Up</button></Link>
              <div>{this.state.error}</div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}