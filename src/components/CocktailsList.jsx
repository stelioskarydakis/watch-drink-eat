import { useCocktailContext } from "../cocktailContext";
import Loading from "./Loading";
import CocktailCard from "./CocktailCard";
import NothingFound from "./NothingFound";
import { Stack } from "@mui/material";

const CocktailsList = () => {
  const { cocktails, loading } = useCocktailContext();

  if (loading) return <Loading />;
  if (cocktails.length < 1) return <NothingFound />;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: "10px" }}
    >
      {cocktails.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Stack>
  );
};

export default CocktailsList;
