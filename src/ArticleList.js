import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './ArticleList.css'

export default class ArticleList extends React.Component {


    render() {
        return (
            <section id="ArticleList">
                <ArticlePreview />
                <ArticlePreview />
                <ArticlePreview />
                </section>
                );
            }
}