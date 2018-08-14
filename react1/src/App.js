import React, { Component } from 'react';
import MovieList from './MovieList'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
          <MovieList />
        </header>
        <p>
        </p>
      </div>
    );
  }
}

export default App;
