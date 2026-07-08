import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";

const theme = createTheme({
  palette,
  typography,
  shadows,

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #2A2A2A",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;