import './App.css';
import './index.css';
import { MovieState } from './Contex/MovieContex';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <MovieState>
      <Hero />
    </MovieState>
  );
};

export default App;
