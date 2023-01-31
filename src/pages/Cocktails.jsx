import { CocktailProvider } from "../cocktailContext";
import CocktailsList from "../components/CocktailsList";
import HeroSection from "../components/HeroSection";
import SearchCocktailsForm from "../components/SearchCocktailsForm";

const Cocktails = () => {
  return (
    <>
      <HeroSection
        title="Cocktails"
        text="You can search your favorite one! Cheers!!!🍸"
      />
      <CocktailProvider>
        <SearchCocktailsForm />
        <CocktailsList />
      </CocktailProvider>
    </>
  );
};

export default Cocktails;
