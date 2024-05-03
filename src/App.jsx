import "./App.css";

import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyled, darkTheme, lightTheme } from "./common/Global.styled.js";
import { AppRoutes } from "./AppRoutes.jsx";

function App() {
  const [themeColor, setThemeColor] = useState(true);

  return (
    <>
      <ThemeProvider theme={themeColor ? lightTheme : darkTheme}>
        <GlobalStyled />
        <AppRoutes setThemeColor={setThemeColor} themeColor={themeColor} />
      </ThemeProvider>
    </>
  );
}

export default App;
