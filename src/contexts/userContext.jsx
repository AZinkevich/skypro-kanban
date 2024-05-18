import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../data.js";

export const UserContext = createContext(null);

function getUserLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    return null;
  }
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserLocalStorage());
  const navigate = useNavigate();

  const loginContext = (res) => {
    setUser(res.user);
    localStorage.setItem("user", JSON.stringify(res.user));
    navigate(paths.MAIN);
  };

  const logoutContext = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate(paths.LOGIN);
  };

  return (
    <UserContext.Provider value={{ loginContext, user, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};
