import React from 'react'
import './css/SignUpForm.css'
import { Link } from 'react-router-dom';

export default class SignUpForm extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { name, email, username, password } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
            name: name.value,
            nickname: email.value,
        })
            .then(user => {
                name.value = ''
                email.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <section class="LandingContainer">
                <div class="SignUpForm"><h1 className="lpHeaderText">Please Sign Up to Join theConsole</h1>
                    <form
                        className='RegistrationForm'
                        onSubmit={this.handleSubmit}
                    >
                        <label for="Name">Name</label>
                        <input type="text" />
                        <label for="Email">Email</label>
                        <input type="text" />
                        <label for="Username">Username</label>
                        <input type="text" />
                        <label for="Password">Password</label>
                        <input type="text" /> 
                    </div>
                    <div>
                        <Link to="/dashboard"><button className="lpButton">Submit</button></Link>
                        <Link to="/login"><button className="lpButton">Login</button></Link>
                </form>
                </ div>
            </ section>
        );
    }
}