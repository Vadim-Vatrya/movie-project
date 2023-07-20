import React from 'react';
import './App.css';

import { MovieState } from './Context/MovieContext';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
};

export default App;
