import React from 'react'
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    render() {
        return (<div id="dashboardContainer">
            <section id="Header">Header</section>
            <navbar id="navbar">navbar</navbar>
           <Sidebar />
           <ArticleList />
            </div>
        );
    }
}