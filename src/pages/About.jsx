import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <Box>
      <HeroSection
        title="About"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
      />
    </Box>
  );
};

export default About;
