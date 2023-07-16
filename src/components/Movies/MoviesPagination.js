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
            <button
              style={{
                cursor: currentPage !== 1 ? 'pointer' : 'not-allowed',
                background: currentPage !== 1 ? '#32de57' : '#303847',
              }}
              onClick={() => newPage('previous')}
            >
              PrevPage
            </button>
            <button onClick={() => newPage('next')}>NextPage</button>
          </React.Fragment>
        </Container>
      )}
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
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
