import { Typography } from "@mui/material";
import React from "react";

const NothingFound = ({ title }) => {
  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
    >
      {title}
    </Typography>
  );
};

export default NothingFound;
