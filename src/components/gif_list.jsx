import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  // handleClick = (event) => {
  //   // this.setState({selectedGifId: gif.id})
  //   console.log('dkjnd')
  // }

  render() {
    return (
      <div className="gif-list">
      {this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
    })}
      </div>
    );
  }
}

export default GifList;
