import React from "react";
import HeroSection from "../components/HeroSection";
import MoviesList from "../components/movies/MoviesList";
import SearchMoviesForm from "../components/movies/SearchMoviesForm";
import { MoviesProvider } from "../moviesContext";

const Movies = () => {
  return (
    <>
      <HeroSection title="Movies" text="Sit, relax and... Choose a movie. 📽" />
      <MoviesProvider>
        <SearchMoviesForm />
        <MoviesList />
      </MoviesProvider>
    </>
  );
};

export default Movies;
