import React from 'react'
import './LoginForm.css'

export default class LoginForm extends React.Component {
    render() {
        return (
            <section class="LandingContainer">
                <div class="LoginForm" > <h1 id="HeaderText"> Login Form Header </h1>
                <div>
                    <label for="Username" > Username </label>
                    <input type="text" />
                    <label for="Password" > Password </label>
                    <input type="text" />
                    <br />
                    </div>
                    <div>
                    <button>Submit</button>
                    <button>Forgot Password</button>
                    <button>Sign Up</button>
                    </div>
                </div>
            </section>
        );
    }
}