import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default class CategoriesLink extends React.Component {
    render() {if(typeof this.props.category == "string"){
        return (
            <Link to={"/dashboard/article/"+this.props.category}><h3>{this.props.category}</h3></Link>
        );
    }else{
        
    }
        
    }
}