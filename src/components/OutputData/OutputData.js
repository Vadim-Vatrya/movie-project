import React from 'react';
import { useContext } from 'react';
import { MovieContex } from '../../Contex/MovieContex';
import Container from '../ReusableComponents/Container';
import Popular from '../Popular/Popular';

const OutputData = () => {
  const { activeLink } = useContext(MovieContex);
  return (
    <div className="outputdata">
      {activeLink === 'Popular'}&&(
      <Container>
        <Popular />
      </Container>
      )
    </div>
  );
};

export default OutputData;
