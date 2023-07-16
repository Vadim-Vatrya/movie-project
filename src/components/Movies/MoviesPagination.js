import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import styled from 'styled-components';

import Container from '../ReusableComponents/Container';

const MoviesPagination = () => {
  const { newPage, showPagination, currentPage } = useContext(MovieContext);
  return (
    <Div className="moviesPagination">
      {showPagination && (
        <Container>
          <React.Fragment>
            <button onClick={() => newPage('previous')}>PrevPage</button>
            <button onClick={() => newPage('next')}>NextPage</button>
          </React.Fragment>
        </Container>
      )}
    </Div>
  );
};

const Div = styled.div`
  idth: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 1365px) {
    > .container {
      max-width: 90%;
    }
  }
`;

export default MoviesPagination;
