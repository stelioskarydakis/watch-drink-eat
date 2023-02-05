import { ArrowBack } from "@mui/icons-material";
import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import LoadingSingle from "../components/LoadingSingle";
import { BASE_URL, options } from "../recipesContext";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  const fetchSinglerecipe = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (data) {
        setRecipe(data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "No recipe found" });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSinglerecipe(`${BASE_URL}/get-more-info?id=${id}`);
  }, [id]);

  if (isLoading) return <LoadingSingle />;
  if (error.show) {
    return (
      <HeroSection
        title="Opps! Something went wrong!"
        text="There is no Recipe to display"
      />
    );
  }
  if (recipe) {
    const { name, yields, instructions, sections, tags, thumbnail_url } =
      recipe;
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
            <img src={thumbnail_url} alt={name} className="image" />
          </Box>
          <Box>
            <Typography component="h1" variant="h1">
              {name}
            </Typography>
            <Typography component="p" variant="body1">
              {yields}
            </Typography>

            <Box>
              <Typography component="h3" variant="h3">
                Ingredients:
              </Typography>
              <List
                aria-labelledby="basic-list"
                sx={{
                  listStyleType: "disc",
                  pl: 2,
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                {sections[0].components.map((item) => {
                  return item ? (
                    <ListItem key={item.id}>
                      <Typography component="p" variant="body1">
                        {item.raw_text}
                      </Typography>
                    </ListItem>
                  ) : null;
                })}
              </List>
            </Box>
            <Box>
              <Typography component="h3" variant="h3">
                Instructions:
              </Typography>
              <List
                aria-labelledby="basic-list"
                sx={{
                  listStyleType: "disc",
                  pl: 2,
                  "& .MuiListItem-root": {
                    display: "list-item",
                  },
                }}
              >
                {instructions.map((item) => {
                  return item ? (
                    <ListItem key={item.id}>
                      <Typography component="p" variant="body1">
                        {item.display_text}
                      </Typography>
                    </ListItem>
                  ) : null;
                })}
              </List>
            </Box>
          </Box>
        </Stack>
        <Stack direction="row" flexWrap="wrap">
          {tags.map((tag, idx) => {
            return (
              <Typography
                component="p"
                variant="body2"
                key={idx}
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                {tag.display_name}
              </Typography>
            );
          })}
        </Stack>
      </>
    );
  }
};

export default SingleRecipe;
