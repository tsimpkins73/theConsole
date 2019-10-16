import React from 'react'
import './ArticleView.css'

export default class ArticleView extends Component {


    render() {
        return (
            <section class="Article">
                <section id="ArticleImageContainer">
                    <img class="ArticleImage"
                        src="{Article.imgURL}">
      </section>
                    <section id="ArticleTextContainer">
                        <h2>{Article.title}</h2>
                        <p>{Article.text}
         </p>

                    </section>
                    <button>Favorite</button>
                    <button>Comment</button>
                </section>
                );
            }
}