import React from 'react'
import './css/SignUpForm.css'
import { Link } from 'react-router-dom';
import UserService from './services/user-service'


export default class SignUpForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, username, password } = ev.target

        this.setState({ error: null })
        UserService.postUser({
            username: username.value,
            password: password.value,
            name: name.value,
        })
            .then(user => {
                name.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
                this.props.history.push('/dashboard')
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <section class="LandingContainer">
                <div class="SignUpForm"><h1 className="lpHeaderText">Please Sign Up to Join theConsole</h1>
                    <form className='RegistrationForm' onSubmit={this.handleSubmit} >
                        <label for="Name">Name</label>
                        <input type="text" name="name" />
                        <label for="Username">Email</label>
                        <input type="text" name="username" />
                        <label for="Password">Password</label>
                        <input type="text" name="password" /> 
                    <div>
                     <button className="lpButton" type="submit">Submit</button>
                        <Link to="/login"><button className="lpButton">Login</button></Link>
                        </div>
                </form>
                </ div>
            </ section>
        );
    }
}