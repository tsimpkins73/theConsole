import React from 'react'
import ArticleView from "./ArticleView.js";
//import './ArticleList.css'

export default class ArticleList extends React.Component {


    render() {
        return (
            <section class="ArticleList">
                <ArticleView />
                <ArticleView />
                <ArticleView />
                </section>
                );
            }
}