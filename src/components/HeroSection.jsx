import { Box, Typography } from "@mui/material";
import React from "react";

const HeroSection = ({ title, text }) => {
  return (
    <Box textAlign="center">
      <Typography variant="h1" component="h2">
        {title}
      </Typography>
      <Typography variant="body1" component="p">
        {text}
      </Typography>
    </Box>
  );
};

export default HeroSection;
