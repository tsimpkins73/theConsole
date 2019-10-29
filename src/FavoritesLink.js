import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default class FavoritesLink extends React.Component {
    render() {
        return (
            <Link to={"/dashboard/article/"+this.props.category}>{this.props.category}</Link>
        );
    }
}