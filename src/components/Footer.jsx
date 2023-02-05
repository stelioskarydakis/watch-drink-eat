import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "#1976D2",
        padding: "20px",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" component="p">
          &copy; {new Date().getFullYear()} - WatchDrinkEat
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
