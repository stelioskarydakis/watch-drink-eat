import { Stack } from "@mui/material";
import React from "react";
import { useMoviesContext } from "../../moviesContext";
import Loading from "../Loading";
import NothingFound from "../NothingFound";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const { movies, isLoading, query, error } = useMoviesContext();
  if (query.length < 1)
    return <NothingFound title="Please type something in the box above" />;
  if (isLoading) return <Loading />;
  if (movies.length < 1) return <NothingFound title={error.msg} />;

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: "10px" }}
    >
      {movies.map((item) => {
        return <MovieCard key={item.id} {...item} />;
      })}
    </Stack>
  );
};

export default MoviesList;
