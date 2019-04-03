import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const API_KEY = process.env.GIPHY_API_KEY;

    this.state = {
      gifs: [],
      selectedGifId: "1dMPcTP8TdZ1mMO48C"
    }
    this.search('mtv') // Predefined query for search results
  }

  // Calling Giphy API
  search = (query) => {
    giphy(this.API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
       this.setState({
        gifs: result.data
       });
    });
    }

  // Selecting gif by clicking on it and iinserting to the main placeholder
  selectGif = (id) => {
    this.setState({ selectedGifId: id })
  }

  render() {
    // const gifs = [
    //   { id: "cJuJHFw9ZECRo9AbTR" },
    //   { id: "2aRKm3ZfEFVjxHpafc" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
    </div>
    );
  }
}

export default App;
