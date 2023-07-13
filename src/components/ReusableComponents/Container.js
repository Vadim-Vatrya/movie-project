import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Main className="container">{children}</Main>;
};

const Main = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

export default Container;
