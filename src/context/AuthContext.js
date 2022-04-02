import React, { useReducer, useEffect, createContext, useContext } from "react";
import { AuthReducer } from "../reducer/";

const AuthContext = createContext({
  authState: {},
  authDispatch: () => {},
});

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    user: null,
    token: null,
  });

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");
      authDispatch({
        type: "INITIAL_CHECK",
        payload: { user, token },
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };