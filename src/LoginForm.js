import React from 'react'
import './css/LoginForm.css'
import { Link } from 'react-router-dom';
import UserService from './services/user-service'

export default class LoginForm extends React.Component {
   /*  static defaultProps = {
        onLoginSuccess: () => {}
      } */
    
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
            <section class="LandingContainer">
                <div class="LoginForm" > <h1 id="HeaderText"> Welcome, Please Sign In! </h1>
                Guests, please login with Username: GenBlanc and Password: Password34! 
                    <form onSubmit={this.handleSubmitJwtAuth}>
                        <div>
                            <label for="username" > Username </label>
                            <input type="text" name="username"/>
                            <label for="password" > Password </label>
                            <input type="password" name="password"/>
                            <br />
                        </div>
                        <div>
                            <button >Submit</button> 
                            <Link to="/sign-up"><button>Sign Up</button></Link>
                            <div>{this.state.error}</div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}