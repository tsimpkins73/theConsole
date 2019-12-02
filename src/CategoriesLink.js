import React from 'react'
import { Link } from 'react-router-dom';
import './css/Sidebar.css'

export default class CategoriesLink extends React.Component {
    render() {
            return (
                <Link to={"/dashboard/" + this.props.category.id} ><h3>{this.props.category.name}</h3></Link>
            );    
    }
}