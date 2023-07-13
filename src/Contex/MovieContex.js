import { useState, createContext, useEffect, popularMovies } from 'react';

export const MovieContex = createContext();

export const MovieState = ({ children }) => {
  const API_KEY = '0d4e8a72aec64d2db9275b816bb7cbd6';

  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState('Popular');
  const [popularMovies, setPopularMpvies] = useState([]);

  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key = ${API_KEY}&language=en-US&page=1`,
    );
    const popularMoviesData = await Response.json();
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
