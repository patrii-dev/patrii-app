// global theme
import React from "react";
import { ThemeProvider } from "styled-components";

// Main routes
import { Home } from "./src/screens/Home";

import theme from "./src/global/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
