import React from 'react'
import CategoriesLink from './CategoriesLink.js'

export default class CategoriesLinks extends React.Component {
    render() {
        for (var i = 0; i < this.props.categories[0].length; i++) {
            console.log(this.props.categories[i])
            return <div className={this.props.categories[i]}>
                <CategoriesLink key={this.props.categories[i]} category={this.props.categories[i]} />
                </div>
        }
    }
}
