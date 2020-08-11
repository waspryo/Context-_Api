import React from 'react';

const MovieList = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </div>
  );
}

export default MovieList
