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
            fontWeight: 700,
          },
        },
        {
          props: {
            variant: "h2",
          },
          style: {
            fontSize: 32,
            fontWeight: 700,
          },
        },
        {
          props: {
            variant: "h3",
          },
          style: {
            fontSize: 28,
            fontWeight: 700,
          },
        },
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 18,
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
