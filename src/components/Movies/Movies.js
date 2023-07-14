import React from 'react';
import { useContext } from 'react';
import { MovieContex } from '../../Contex/MovieContex';

import Loader from '../ReusableComponents/Loader';
import Container from 'react-dom';

const Movies = () => {
  const { movies, isLoading } = useContext(MovieContex);
  return (
    <div className="movies">
      <Container>
        {movies.results && movies.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          movies.results &&
          movies.results.map((movieItem, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
            />
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

export default Movies;
