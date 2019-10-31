import React from 'react'
import CategoriesLink from './CategoriesLink.js'
import './Sidebar.css'

export default class CategoriesDiv extends React.Component {
    render() {
        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        };

        let categoriesArray = [...new Set(this.props.articles.map(x => x.categories))];
        console.log(categoriesArray)

        return (
            <div id="categoriesDiv">
                {categoriesArray.filter(function (category) {
                    return <CategoriesLink category={category} />
                })}
            </div>
        );
    }
}