import { Stack } from "@mui/material";
import { useRecipeContext } from "../../recipesContext";
import Loading from "../Loading";
import NothingFound from "../NothingFound";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const { recipes, isLoading, query, error } = useRecipeContext();
  if (query.length < 1)
    return <NothingFound title="Please type something in the box above" />;
  if (isLoading) return <Loading />;
  if (recipes.length < 1) return <NothingFound title={error.msg} />;

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: "10px" }}
    >
      {recipes.map((item) => {
        return <RecipeCard key={item.id} {...item} />;
      })}
    </Stack>
  );
};

export default RecipesList;
