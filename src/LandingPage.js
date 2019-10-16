import React from 'react'
//import './LandingPage.css'

export default class LandingPage extends React.Component {
  render() {
    return (
      <section class="LandingContainer">
        <div><h1 id="HeaderText">Blog Name</h1>
          <p>Blog description & explanation</p>
          <div>
            <button>Sign Up</button>
            <button>Login</button>
          </div>
          <div class="newestPost">
            <h1 id="HeaderText">Newest Blog Post</h1>
          </div>
        </div>
      </section>
    );

  }

}
