import './App.css';
import './index.css';
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
