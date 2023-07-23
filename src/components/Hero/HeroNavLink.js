import React from 'react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import styled from 'styled-components';

const HeroNavLink = ({ btnText }) => {
  const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContext);
  return (
    <Button
      style={{ color: activeLink === btnText ? '#f9a5ff' : '#fff' }}
      onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
      }}
    >
      {btnText}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  @media (max-width: 860px) {
    font-size: 40px;
  }
`;

export default HeroNavLink;
