import { useState, useEffect, createContext, useContext } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=}`;

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  return <MoviesContext.Provider value="hd">{children}</MoviesContext.Provider>;
};

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};
export { MoviesContext, MoviesProvider };
