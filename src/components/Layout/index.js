import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import "./global.css";
import "@fontsource/poppins";
import "@fontsource/source-code-pro";
import "@fontsource/playfair-display";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const theme = responsiveFontSizes(darkTheme);

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          height: "100%",
          position: "relative",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
