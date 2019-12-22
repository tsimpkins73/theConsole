import React from 'react'
import FavoritesLink from './FavoritesLink.js'

export default class FavoritesDiv extends React.Component {
    render() {
       const favoritesTrue = this.props.articles.filter(article => article.favorite);
        
        return (
            <div id="categoriesDiv">
                <h1 id="sidebarHeadline">Favorites</h1>
                {favoritesTrue.map(function (favorite) {
                    return <FavoritesLink favoriteID={favorite.id} headline={favorite.headline}/>
                })}
            </div>
        );
    }
}