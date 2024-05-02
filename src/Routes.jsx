import { Routes, Route } from "react-router-dom";
import { paths } from "./data";
import { MainPage } from "./pages/MainPage.jsx";
import { CardPage } from "./pages/CardPage.jsx";
import { ExitPage } from "./pages/ExitPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { NewCardPage } from "./pages/NewCardPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.EXIT} element={<ExitPage />} />
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.NEWCARD} element={<NewCardPage />} />
        </Route>
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
        <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
