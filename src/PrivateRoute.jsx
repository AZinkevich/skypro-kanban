import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./contexts/userContext.jsx";

export const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
