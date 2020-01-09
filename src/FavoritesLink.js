import React from 'react'
import { Link } from 'react-router-dom';


export default class FavoritesLink extends React.Component {
    render() {
        let favoriteID = this.props.favoriteID
        let headline = this.props.headline
        return (
            <Link to={"/dashboard/article/" + favoriteID} onClick={() => {this.props.handleArticleButton(favoriteID)}} ><h3>{headline}</h3></Link>
        );
    }
}