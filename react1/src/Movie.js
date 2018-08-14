import React, { Component } from 'react';
// const key = {}

class Movie extends Component {
  render() {
    return (
      <li className="movie">
      <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.props.poster_path} alt='Indy'/>
        <h2>{this.props.name}</h2>
      <p>{this.props.overview}</p>
      </li>
    )
  }
}


export default Movie
