import React from 'react'
import FavoritesLink from './FavoritesLink.js'

export default class FavoritesDiv extends React.Component {
    render() {
       let favoritesTrue = this.props.articles.filter(article => article.favorite);
        let handleArticleButton=this.props.handleArticleButton;
        return (
            <div id="categoriesDiv">
                <h1 id="sidebarHeadline">Favorites</h1>
                {favoritesTrue.map(function (favorite) {
                    return <FavoritesLink favoriteID={favorite.id} handleArticleButton={handleArticleButton} headline={favorite.headline}/>
                })}
            </div>
        );
    }
}