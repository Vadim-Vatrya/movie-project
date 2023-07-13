import React from 'react';
import { useContext } from 'react';
import { MovieContex } from '../../Contex/MovieContex';
import styled from 'styled-components';
import Container from '../ReusableComponents/Container';
import HeroNavLogo from './HeroNavLogo';
import HeroNavMenu from './HeroNavMenu';
import HeroNavSearch from './HeroNavSearch';

const HeroNav = () => {
  const { hiddenMenu, setHiddenMenu } = useContext(MovieContex);

  return (
    <Nav>
      <Container>
        <div className="wrapper">
          <HeroNavLogo />
          <HeroNavMenu />
          <HeroNavSearch />
          <i
            onClick={() => setHiddenMenu(!hiddenMenu)}
            id="burgerMenu"
            className={hiddenMenu ? 'fas fa-bars' : 'fas fa-times'}
          ></i>
        </div>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: #212229;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #fff;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }

  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;
export default HeroNav;
