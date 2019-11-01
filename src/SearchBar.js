import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
const searchTerm = ('#searchBar').val().toLowerCase();


function handleClick(e) {
  e.preventDefault();
  console.log("Clicked!!!");
}
return (
<div className="row main-search">
  <div className="column">
    <form action="">
        <fieldset>
          <label htmlFor="search">
            <input type="text" placeholder="Start typing..." id="search-box" />
          </label>
        </fieldset>
      </form>
  </div>
  <div className="column">
    <div className="float-right"><button className="add-new" onClick={handleClick}>Add New</button></div>
  </div>
</div>
  )
 }
}

export default SearchBar;