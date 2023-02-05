import RecipesList from "../components/recipes/RecipesList";
import SearchRecipesForm from "../components/recipes/SearchRecipesForm";
import { RecipeProvider } from "../recipesContext";
import HeroSection from "../components/HeroSection";

const Recipes = () => {
  return (
    <>
      <HeroSection
        title="Recipes"
        text="Are you hungry? Make something to eat! 🌮 "
      />
      <RecipeProvider>
        <SearchRecipesForm />
        <RecipesList />
      </RecipeProvider>
    </>
  );
};

export default Recipes;
