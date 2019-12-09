import React from 'react'
import ArticlePreview from "./ArticlePreview.js";
import './css/ArticleList.css'
import { API_BASE_URL } from './config'

export default class ArticleList extends React.Component {
constructor(props){
    super(props);
    this.state= {
        articles:[],
        categoryId: null,
    };
}

fetchData(){
    let categoryId =props.match.params.categoryId
    console.log(categoryId)
    fetch(`${API_BASE_URL}/articles/category/${categoryId}`)
        .then(response => response.json())
        .then((articles) => { this.setState({ articles, categoryId:categoryId }); });
}
    componentDidMount () {
        if (this.props.categoryId){
            this.fetchData();         
        }
        else{
            this.setState({articles:this.props.articles})
        }
    }
componentDidUpdate () {
        this.fetchData();         
    }

    render() {
        let articles = this.state.articles;
        if (this.props.searchterm) {
            articles = this.props.articles.filter(article => article.text.indexOf(this.props.searchterm) >= 0)
        }
        return (
            <section id="ArticleList">
                {articles.map(function (article) {
                    return <ArticlePreview article={article} />;
                })}
            </section>
        );
    }
}