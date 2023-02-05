import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useCocktailContext } from "../../cocktailContext";

const SearchCocktailsForm = () => {
  const { setSearchTerm } = useCocktailContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => e.preventDefault();

  return (
    <Box
      component="form"
      className="search-form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Search a cocktail"
        id="name"
        ref={searchValue}
        onChange={searchCocktail}
      />
    </Box>
  );
};

export default SearchCocktailsForm;
