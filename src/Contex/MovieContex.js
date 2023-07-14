import { useState, createContext, useEffect } from 'react';

export const MovieContex = createContext();

export const MovieState = ({ children }) => {
  const API_KEY = '0d4e8a72aec64d2db9275b816bb7cbd6';

  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState('Popular');
  const [popularMovies, setPopularMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`,
    );
    const popularMoviesData = await popularMoviesResponse.json();
    setPopularMovies(popularMoviesData);
  };

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`,
    );
    const data = await response.json();

    if (search.trim() === '') {
      setMovies(data);
    }
  };

  const handleSearch = async e => {
    e.PreventDefault();
    if (search.trim === '') {
      return;
    }

    const searchResponse = await fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage},
    `);

    const searchData = await searchResponse.json();
    setMovies(searchData);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [search, currentPage]);

  return (
    <MovieContex.Provider
      value={{
        hiddenMenu,
        setHiddenMenu,
        activeLink,
        setActiveLink,
        popularMovies,
        search,
        setSearch,
        movies,
        setMovies,
      }}
    >
      {children}
    </MovieContex.Provider>
  );
};
