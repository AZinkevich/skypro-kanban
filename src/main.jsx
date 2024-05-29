import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/userContext.jsx";
import { CardProvider } from "./contexts/cardContext.jsx";
//import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
