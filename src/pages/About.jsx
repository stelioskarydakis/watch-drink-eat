import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <HeroSection
        title="About"
        text="Lorem ipsum dolor, consecteelit. Vestibulum ac sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
      />
      <Box paddingTop={2}>
        <a
          href="https://github.com/stelioskarydakis/watch-drink-eat"
          target="_blank"
          underline="none"
          rel="noreferrer noopener"
        >
          <IconButton aria-label="github">
            <GitHub />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/stylianos-karydakis/"
          target="_blank"
          underline="none"
          rel="noreferrer noopener"
        >
          <IconButton aria-label="linkedin">
            <LinkedIn />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
};

export default About;
