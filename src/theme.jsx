import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "h1",
          },
          style: {
            fontSize: 40,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 20,
          },
        },
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});
