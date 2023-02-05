import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
const urlnotfound =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const MovieCard = ({ id, image, title }) => {
  const newId = id.split("/")[2];
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
            {title}
          </Typography>
          {image?.url ? (
            <img src={image?.url} alt={title} className="image" />
          ) : (
            <img src={urlnotfound} alt={title} className="image" />
          )}

          <Button
            endIcon={<ArrowForwardIcon />}
            variant="contained"
            component={Link}
            to={`/movie/${newId}`}
            sx={{ marginY: "10px" }}
          >
            View Details
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default MovieCard;
