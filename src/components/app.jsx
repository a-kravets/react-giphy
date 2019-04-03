import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    const API_KEY = process.env.GIPHY_API;

    this.state = {
      gifs: [],
      selectedGifId: "1dMPcTP8TdZ1mMO48C"
    }
    // this.search('pamela')
  }

  search = (query) => {
    giphy('yj5WedHgKD3uSBYLkbUCn2j6N0AAChm2').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
       this.setState({
        gifs: result.data
       });
    });
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
          <GifList gifs={this.state.gifs} />
        </div>
    </div>
    );
  }
}

export default App;
