import React from 'react'
import './css/Sidebar.css'

export default class SearchDiv extends React.Component {
  
  /* This function handles submissions of the search form */
  handleSubmit = (e) => {
    this.props.handleSearchForm(e)
    this.props.history.push('/dashboard')
  }

  render() {

    return (
      <div id="searchDiv">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input" name="searchTerm" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}