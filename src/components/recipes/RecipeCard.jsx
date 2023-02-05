import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { Link } from "react-router-dom";
const urlnotfound =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const RecipeCard = ({
  id,
  name,
  total_time_minutes,
  cook_time_minutes,
  thumbnail_url,
}) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ maxWidth: "340px", height: "100%", width: "fit-content" }}
    >
      <Paper elevation={3}>
        <Box paddingX={2} paddingBottom={2}>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          {thumbnail_url ? (
            <img src={thumbnail_url} alt={name} className="image" />
          ) : (
            <img src={urlnotfound} alt="not found" className="image" />
          )}

          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            component={Link}
            to={`/recipe/${id}`}
            sx={{ marginY: "10px" }}
          >
            View Details
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default RecipeCard;
