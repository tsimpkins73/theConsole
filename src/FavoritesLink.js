import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default class FavoritesLink extends React.Component {
    render() {
        return (
            <Link to={"/dashboard/article/"+this.props.favorite.id}><h3>{this.props.favorite.headline}</h3></Link>
        );
    }
}