import React from 'react'
import './Sidebar.css'
import FavoritesLink from './FavoritesLink.js'

export default class FavoritesDiv extends React.Component {
    render() {
       const favoritesTrue = this.props.articles.filter(article => article.favorite);
    console.log(favoritesTrue);

        
        return (
            <div id="categoriesDiv">
                {favoritesTrue.map(function (favorite) {
                    return <FavoritesLink favorite={favorite} />
                })}
            </div>
        );
    }
}