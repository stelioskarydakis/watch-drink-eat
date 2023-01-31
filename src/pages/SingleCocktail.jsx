import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import LoadingSingle from "../components/LoadingSingle";
import CategoryIcon from "@mui/icons-material/Category";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import InfoIcon from "@mui/icons-material/Info";
import SegmentIcon from "@mui/icons-material/Segment";

const SingleCocktail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getCocktail();
  }, [id]);

  if (loading) return <LoadingSingle />;
  if (!cocktail) {
    return (
      <HeroSection
        title="Opps! Something went wrong!"
        text="There is no Cocktail to display"
      />
    );
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <>
        <Button
          size="small"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBack />}
          color="primary"
          variant="contained"
          sx={{ maxWidth: "160px", marginBottom: "20px" }}
        >
          go back
        </Button>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box>
            <img src={image} alt={name} className="image" />
          </Box>
          <Box>
            <Typography component="h1" variant="h1">
              {name}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary={`Category: ${category}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <LocalBarIcon />
                </ListItemIcon>
                <ListItemText primary={`Glass: ${glass}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={`Info: ${info}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <SegmentIcon />
                </ListItemIcon>
                <ListItemText primary={`Instructions: ${instructions}`} />
              </ListItem>
            </List>

            <Box>
              <Typography component="h3" variant="h3">
                Ingredients:
              </Typography>
              {ingredients.map((item, i) => {
                return item ? (
                  <Typography key={i} component="p" variant="body1">
                    {item}
                  </Typography>
                ) : null;
              })}
            </Box>
          </Box>
        </Stack>
      </>
    );
  }
};

export default SingleCocktail;
