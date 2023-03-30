import React, { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import Logo from './assets/logo.png'
import LogoSmall from './assets/logosmall.png'

import "./App.css";
import SearchIcon from "./assets/search.svg";

const API_URL = "http://www.omdbapi.com?apikey=67c111ad";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Get input value
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <img src={Logo} alt="Logo" />

      <div className="search">
        <input
          placeholder="Lookup Films, Series and Games!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Films Found, Search Above</h2>
          <img className="logo-small" src={LogoSmall} alt="Logo" />

        </div>
      )}
    </div>
  );
};

export default App;
