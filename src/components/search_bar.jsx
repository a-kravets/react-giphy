import React, { Component } from 'react';
// import SearchBar from 'app.jsx'

class SearchBar extends Component {
  handleUpdate = (event) => {
  // console.log(event.target.value);
  this.props.search(event.target.value)
  }


  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;