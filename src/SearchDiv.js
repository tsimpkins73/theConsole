import React from 'react'
import './Sidebar.css'

export default class SearchDiv extends React.Component {
    render() {
        return (
            <div id="searchDiv">
            <input type="text" className="input" placeholder="Search..." />
          </div>
        );
    }
}