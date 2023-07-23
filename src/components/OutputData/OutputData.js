import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import styled from 'styled-components';

import Container from '../ReusableComponents/Container';
import Movies from '../Movies/Movies';
import MoviesPagination from '../Movies/MoviesPagination';
import PopularFilms from '../Popular/Popular';

const OutputData = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <Div className="outputdata">
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
          <PopularFilms />
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

export default OutputData;
