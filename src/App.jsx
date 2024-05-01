import "./App.css";

//import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyled, darkTheme, lightTheme } from "./common/Global.styled.js";
import { AppRoutes } from "./Routes.jsx";

function App({ themeColor, setThemeColor }) {
  //const [themeColor, setThemeColor] = useState(true);

  return (
    <>
      <ThemeProvider theme={themeColor ? darkTheme : lightTheme}>
        <GlobalStyled />
        <AppRoutes setTheme={setThemeColor} theme={themeColor} />
      </ThemeProvider>
    </>
  );
}

export default App;
