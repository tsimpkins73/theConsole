import React from 'react'
import CategoriesLink from './CategoriesLink.js'
import './css/Sidebar.css'

export default class NavbarCategoriesDiv extends React.Component {
    static defaultProps = {
        categories: []
    }

    render() {
        let categoriesArray = this.props.categories;

        return (
            <div className={(this.props.isActive) ? 'hidden' : 'navbar-categoriesDiv'}>
                   {categoriesArray.map(function (category) {
                    return <CategoriesLink category={category} />
                })}
            </div>
        );
    }
}