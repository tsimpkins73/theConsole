import React from 'react'
import './css/LoginForm.css'
import { Link } from 'react-router-dom';
import AuthApiService from './services/auth-api-service'

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }
    
      state = { error: null }
    
      handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target
    
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
          .then(res => {
            username.value = ''
            password.value = ''
            this.props.onLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    
    
    render() {

        
        return (
            <section class="LandingContainer">
                <div class="LoginForm" > <h1 id="HeaderText"> Login Form Header </h1>
                    <form>
                        <div>
                            <label for="username" > Username </label>
                            <input type="text" name="username"/>
                            <label for="password" > Password </label>
                            <input type="text" name="password"/>
                            <br />
                        </div>
                        <div>
                            <Link to="/dashboard"><button>Submit</button></Link>
                            <Link to="/forgot-password"><button>Forgot Password</button></Link>
                            <Link to="/sign-up"><button>Sign Up</button></Link>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}