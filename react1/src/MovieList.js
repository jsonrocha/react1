import React, { Component } from 'react';
import Movie from './Movie'
import results from './movies.json'

class MovieList extends Component {
  render() {
    console.log(results)
    return (
      <div className="MovieList">
      <ul>
      {movies.map((movie, idx) => {
        <Movie name={movie.title}></Movie>
      })}
      </ul>
      </div>
    )
  }


export default MovieList
