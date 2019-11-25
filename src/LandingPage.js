import React from 'react'
import { Link } from 'react-router-dom';
import './css/LandingPage.css'
import LandingPageArticle from "./LandingPageArticle.js";

export default class LandingPage extends React.Component {
  render() {
    console.log(this.props.lpArticle);
    return (
      <section class="LandingContainer">
        <div><h1 className="lpHeaderText">theConsole</h1>
          <p>theConsole is a collection of Web Development focused articles and resources.
            We compile these article from a number of sources across the web in an easy to navigate format.
          </p>
          <div>
            <Link to="/sign-up"><button className="lpButton">Sign Up</button></Link>
            <Link to="/login"><button className="lpButton">Login</button></Link>
          </div>
          <div class="lpArticle-container">
            { this.props.lpArticle?<LandingPageArticle lpArticle={this.props.lpArticle} />:null}
          </div>
        </div>
      </section>
    );

  }

}
