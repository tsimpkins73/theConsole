import React from 'react'
import { Link } from 'react-router-dom';


export default class FavoritesLink extends React.Component {
    render() {
        return (
            <Link to={"/dashboard/article/" + this.props.favoriteID}><h3>{this.props.headline}</h3></Link>
        );
    }
}