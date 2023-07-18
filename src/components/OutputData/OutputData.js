import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../ReusableComponents/Container';
import Popular from '../Popular/Popular';
import Movies from '../Movies/Movies';
import MoviesPagination from '../Movies/MoviesPagination';
import PopularFilms from '../Popular/Popular';

const OutputData = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <div className="outputdata">
      {activeLink === 'All Movies' && (
        <Container>
          <React.Fragment>
            <Movies />
            <MoviesPagination />
          </React.Fragment>
        </Container>
      )}
      {activeLink === 'Popular' && (
        <Container>
          <Popular />
        </Container>
      )}
    </div>
  );
};

export default OutputData;
