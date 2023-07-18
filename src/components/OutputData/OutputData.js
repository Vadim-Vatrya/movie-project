import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../ReusableComponents/Container';
import Popular from '../Popular/Popular';
import Movies from '../Movies/Movies';

const OutputData = () => {
  const { activeLink } = useContext(MovieContext);

  return (
    <div className="outputdata">
      {activeLink === 'Popular' && (
        <Container>
          <Popular />
        </Container>
      )}
      {activeLink === 'All Movies' && (
        <Container>
          <Movies />
        </Container>
      )}
    </div>
  );
};

export default OutputData;
