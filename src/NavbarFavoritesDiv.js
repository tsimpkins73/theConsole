import React from 'react'
import FavoritesLink from './FavoritesLink.js'

export default class NavbarFavoritesDiv extends React.Component {
    render() {
        let articles = this.props.articles;
        let favoritesTrue = articles.filter(article => article.favorite);
        let handleArticleButton = this.props.handleArticleButton;
        return (
            <div className={(this.props.isActive) ? 'hidden' : 'navbar-favoritesDiv'}>
                 {favoritesTrue.map(function (favorite) {
                    return <FavoritesLink favoriteID={favorite.id} handleArticleButton={handleArticleButton} headline={favorite.headline} />
                })}
            </div>
        );
    }
}