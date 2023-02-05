import { Box } from "@mui/material";
import { useMoviesContext } from "../../moviesContext";

const SearchMoviesForm = () => {
  const { query, setQuery, error } = useMoviesContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box
      component="form"
      className="search-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search a movie"
        id="name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <p>{error.msg}</p>}
    </Box>
  );
};

export default SearchMoviesForm;
