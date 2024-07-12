import React, { createContext, useContext, useState } from 'react';
import { login as apiLogin, signup as apiSignup } from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const data = await apiLogin(email, password);
    setUser(data);
  };

  const signup = async (userData) => {
    const data = await apiSignup(userData);
    setUser(data);
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
