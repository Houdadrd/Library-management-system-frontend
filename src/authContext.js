import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));

  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const login = (token, id) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", id); 
    setAuthToken(token);
    setUserId(id);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId"); 
    setAuthToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
