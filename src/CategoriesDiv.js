import React from 'react'
import CategoriesLink from './CategoriesLink.js'
import './css/Sidebar.css'

export default class CategoriesDiv extends React.Component {
    render() {
        const categoriesArray = this.props.articles.map(article => article.categories);
        console.log(categoriesArray)
        let filteredCategories = categoriesArray.toString().split(',');
        console.log(filteredCategories)


        return (
            <div id="categoriesDiv">
                {filteredCategories.map(function (category) {
                    return <CategoriesLink category={category} />
                })}
            </div>
        );
    }
}