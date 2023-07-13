import React from 'react';
import { useContext } from 'react';
import { MovieContex } from '../../Contex/MovieContex';
import styled from 'styled-components';

const HeroNavLink = ({ btnText }) => {
  const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContex);
  return (
    <Button
      onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
      }}
      style={{ color: activeLink === btnText ? '#f9a5ff' : '#fff' }}
    >
      {btnText}
    </Button>
  );
};

const Button = styled.button`
  outline: none;
  background: transparent;
  font-size: 22px;
  margin-right: 24px;
  font-weight: 700;
  cursor: pointer;
  user-select: none;
  border: none;

  @media (max-width: 860px) {
    font-size: 40px;
  }
`;

export default HeroNavLink;
