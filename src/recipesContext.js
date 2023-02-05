import { useContext, useState, useEffect, createContext } from "react";
export const BASE_URL = "https://tasty.p.rapidapi.com/recipes";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "55b6c30d6cmsh1857caa2fd5e566p194dcajsna7bc7bc21d23",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const RecipesContext = createContext();

const RecipeProvider = ({ children }) => {
  const [query, setQuery] = useState("chicken");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      if (data.results.length > 0) {
        setRecipes(data.results);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No recipes found" });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes(`${BASE_URL}/list?from=0&size=20&q=${query}`);
  }, [query]);
  return (
    <RecipesContext.Provider
      value={{ recipes, isLoading, error, query, setQuery }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipesContext);
};

export { RecipeProvider, RecipesContext };
