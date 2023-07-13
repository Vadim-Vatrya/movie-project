import React from 'react';
import styled from 'styled-components';

import HeroNav from './HeroNav';
import OutputData from '../OutputData/OutputData';

const Hero = () => {
  return (
    <Section className="hero">
      <HeroNav />
      <OutputData />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #1b1c22;
`;

export default Hero;
