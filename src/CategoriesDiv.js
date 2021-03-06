import React from 'react'
import CategoriesLink from './CategoriesLink.js'
import './css/Sidebar.css'

export default class CategoriesDiv extends React.Component {
    static defaultProps = {
        categories: []
    }

    render() {
        let categoriesArray = this.props.categories;

        return (
            <div id="categoriesDiv">
                   {categoriesArray.map(function (category) {
                    return <CategoriesLink category={category} />
                })}
            </div>
        );
    }
}