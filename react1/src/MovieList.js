import React, { Component } from 'react';
import Movie from './Movie'
import movies from './movies.json'

class MovieList extends Component {
  render() {
    console.log(movies)
    return (
      <div className="MovieList">
      <ul>
      {movies.results.map((movie, idx) => {
      return  <Movie name={movie.title} poster_path={movie.poster_path} overview={movie.overview}></Movie>
      })}
      </ul>
      </div>
    )
  }
}


export default MovieList
