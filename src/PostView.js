import React from 'react'
import './Dashboard.css'

export default class Post extends Component {
    render() {
        return (
            <section class="Post">
                <section id="PostImageContainer">
                    <img class="PostImage"
                        src="/images/travisHeadshot.jpg">
      </section>
                    <section id="PostTextContainer">
                        <h2>Hi, I'm Travis</h2>
                        <p>{I am a front-end developer with 15 years of graphic design experience and a passion for improvement. I am
                           competently proficient in HTML5, CSS, JS, & Jquery. Additionally, being the main source for all things IT in
                           the small businesses I’ve worked for has given me a dedication to documentation and concise and usable
                           communication. I am excited to see how my skills can help you.}
         </p>

                    </section>
                </section>
                );
            }
}