import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23124
    },
    {
      name: 'Game of thrones',
      price: '$10',
      id: 2566124
    },
    {
      name: 'Inception',
      price: '$10',
      id: 23524
    }
  ]);
  return (
    <div className="App">
      {movies.map((movie, index) => (
        <Movie key={index} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
}

export default MovieList
