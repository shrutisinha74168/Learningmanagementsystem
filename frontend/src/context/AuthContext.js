import React, { createContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data?.token) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    }
    return data;
  };

  const register = async (name, email, password) => {
    const data = await registerUser(name, email, password);
    if (data?.token) {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    }
    return data;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
