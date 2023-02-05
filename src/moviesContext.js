import { useState, useEffect, createContext, useContext } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=}`;

const MoviesContext = createContext();

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_XRAPIDAPI_KEY}`,
    "X-RapidAPI-Host": `${process.env.REACT_APP_XRAPIDAPI_HOST}`,
  },
};

export const BASE_URL = "https://online-movie-database.p.rapidapi.com/title";

const MoviesProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.results.length > 0) {
        setMovies(data.results);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No movies found" });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${BASE_URL}/v2/find?title=${query}`);
  }, [query]);

  return (
    <MoviesContext.Provider
      value={{ isLoading, error, movies, query, setQuery }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  return useContext(MoviesContext);
};
export { MoviesContext, MoviesProvider };
