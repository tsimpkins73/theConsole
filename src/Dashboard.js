import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from './Sidebar.js'
import ArticleList from './ArticleList.js'
import ArticleView from './ArticleView.js'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    render() {
        return (<section id="dashboardContainer">
            <section id="Header">Header</section>
            <section id="navbar"></section>
           <Sidebar />
           <BrowserRouter>
        <Route exact path={'/dashboard'} component={ArticleList} />
        <Route path={'/dashboard/article'} component={ArticleView} />
              </BrowserRouter>
            </section>
        );
    }
}