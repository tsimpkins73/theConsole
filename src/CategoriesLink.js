import React from 'react'
import { Link } from 'react-router-dom';
import './css/Sidebar.css'

export default class CategoriesLink extends React.Component {
    render() {
        let category= this.props.category
            return (
                <Link to={"/dashboard/" + category.id} ><h3>{category.name}</h3></Link>
            );    
    }
}