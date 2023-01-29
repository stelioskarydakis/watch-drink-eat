import { Button } from "@mui/material";
import HeroSection from "../components/HeroSection";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <HeroSection
        title="Opps! Something went wrong!"
        text="How did you get here? 🙂"
      />

      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          maxWidth: "250px",
          padding: "15px",
          margin: "20px auto 0",
          width: "100%",
        }}
        startIcon={<ArrowBackIcon />}
      >
        Go home
      </Button>
    </Box>
  );
};

export default Error;
