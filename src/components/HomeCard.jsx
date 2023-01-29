import { Box, Grid, Paper, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const HomeCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
          className="image"
        />
        <Box paddingX={2} paddingBottom={2}>
          <Typography variant="h4" component="h2">
            Cocktail 1
          </Typography>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <LocalBarIcon />
            <Typography variant="body2" component="p" paddingLeft={2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              doloribus optio ipsam, consequuntur voluptatum ad at fuga nulla
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default HomeCard;
