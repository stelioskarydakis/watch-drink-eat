import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CocktailCard = ({ id, name, info, image, glass }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3}>
        <img src={image} alt={name} className="image" />
        <Box paddingX={2} paddingBottom={2}>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          <Box>{glass}</Box>
          <Box>
            <Typography variant="body2" component="p">
              {info}
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            component={Link}
            to={`/cocktail/${id}`}
            sx={{ marginY: "10px" }}
          >
            View Details
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default CocktailCard;
