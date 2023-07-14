import React from 'react';
import { useContext } from 'react';
import { MovieContex } from '../../Contex/MovieContex';
import Container from 'react-dom';

const Movies = () => {
  const { movies } = useContext(MovieContex);
  return (
    <div className="movies">
      <Container>
        {movies.results && movies.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
      </Container>
    </div>
  );
};

export default Movies;
