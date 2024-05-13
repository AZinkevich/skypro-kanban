import { Routes, Route } from "react-router-dom";
import { paths } from "./data.js";
import { MainPage } from "./pages/MainPage.jsx";
import { CardPage } from "./pages/CardPage.jsx";
import { ExitPage } from "./pages/ExitPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { NewCardPage } from "./pages/NewCardPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { useState } from "react";

function getLocalStorage() {
  let user = '';
  try {
    user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (err) {
    ("");
  }
}

export const AppRoutes = ({ themeColor, setThemeColor }) => {
  const [isAuth, setIsAuth] = useState(getLocalStorage());
  console.log(isAuth);
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path={paths.MAIN}
          element={
            <MainPage isAuth={isAuth} setThemeColor={setThemeColor} themeColor={themeColor} />
          }
        />
        <Route path={paths.EXIT} element={<ExitPage setIsAuth={setIsAuth} />} />
        <Route path={paths.CARD} element={<CardPage />} />
        <Route path={paths.NEWCARD} element={<NewCardPage />} />
      </Route>

      <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path={paths.REGISTER} element={<RegisterPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
