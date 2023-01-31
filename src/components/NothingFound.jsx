import { Typography } from "@mui/material";
import React from "react";

const NothingFound = () => {
  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
    >
      Nothing match your search, please try again.
    </Typography>
  );
};

export default NothingFound;
