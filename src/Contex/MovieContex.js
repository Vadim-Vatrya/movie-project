import { useState, createContext, useEffect, popularMovies } from 'react';

export const MovieContex = createContext();

export const MovieState = ({ children }) => {
  const API_KEY = '9d4fbae6d45a1f406cc115a66a4de03d';

  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState('Popular');
  const [popularMovies, setPopularMpvies] = useState([]);

  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=3`,
    );
    const popularMoviesData = await popularMoviesResponse.json();
    setPopularMpvies(popularMoviesData);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <MovieContex.Provider
      value={{
        hiddenMenu,
        setHiddenMenu,
        activeLink,
        setActiveLink,
        popularMovies,
      }}
    >
      {children}
    </MovieContex.Provider>
  );
};
