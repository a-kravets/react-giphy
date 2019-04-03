import React, { Component } from 'react';
// import SearchBar from 'app.jsx'

class SearchBar extends Component {
    constructor(props) {
      super(props);

    this.state = {
      focused: false
    };
  }

  handleUpdate = (event) => {
  // console.log(event.target.value);
  this.props.search(event.target.value)
  }

  handleFocus = () => {
  console.log('sas');
  this.setState({focused: !this.state.focused})
  }

  render() {
    return (
      <input type="text" className={this.state.focused ? 'form-search form-control focused' : 'form-search form-control'} onChange={this.handleUpdate} onMouseEnter={this.handleFocus}/>
    );
  }
}

export default SearchBar;
