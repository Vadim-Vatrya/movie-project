import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';

import Container from '../ReusableComponents/Container';

const MoviesPagination = () => {
  const { newPage, showPagination } = useContext(MovieContext);
  return (
    <div className="moviesPagination">
      {showPagination && (
        <Container>
          <React.Fragment>
            <button onClick={() => newPage('previous')}>PrevPage</button>
            <button onClick={() => newPage('next')}>NextPage</button>
          </React.Fragment>
        </Container>
      )}
    </div>
  );
};
export default MoviesPagination;
