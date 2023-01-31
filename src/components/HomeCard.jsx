import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { homeSections } from "../utils";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
const HomeCard = () => {
  return (
    <>
      {homeSections.map(({ id, title, image, text, btnText, btnUrl }) => {
        return (
          <Box key={id} paddingBottom="40px">
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box>
                <img src={image} alt={title} className="image-home" />
              </Box>
              <Box>
                <Typography variant="h3" component="h3">
                  {title}
                </Typography>
                <Typography variant="body1" component="p">
                  {text}
                </Typography>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant="contained"
                  component={Link}
                  to={btnUrl}
                  sx={{ marginTop: "20px" }}
                >
                  {btnText}
                </Button>
              </Box>
            </Stack>
          </Box>
        );
      })}
    </>
  );
};

export default HomeCard;
