import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <li className="movie">
      <h2>{this.props.title}</h2>
      <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg" alt='Indy'/>
      <p>When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his fathers footsteps and stop the Nazis from recovering the power of eternal life.</p>
      </li>
    )
  }
}


export default Movie
